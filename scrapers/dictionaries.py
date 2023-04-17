from random_user_agent.user_agent import UserAgent
from random_user_agent.params import SoftwareName, OperatingSystem

from pypasser import reCaptchaV3

import ssl

import aiohttp
import certifi
import asyncio
import requests

import uuid
from itertools import chain

from tqdm import tqdm

async def make_request(url):
    # Setting random user agent
    software_names = [SoftwareName.CHROME.value]
    operating_systems = [OperatingSystem.WINDOWS.value, OperatingSystem.LINUX.value]
    user_agent_rotator = UserAgent(software_names=software_names, operating_systems=operating_systems, limit=10)
    user_agent = user_agent_rotator.get_random_user_agent()

    # Setting up headers that will be passed with async request
    headers = {
    'authority': 'competition-api.laczynaspilka.pl',
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7',
    # reCaptchaV3 bypassing using xHossein repo: https://github.com/xHossein/PyPasser
    'customvalidation': reCaptchaV3('https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Le308YkAAAAAAm1iLONHT8BUz6e9fNgmQ3kxh8f&co=aHR0cHM6Ly93d3cubGFjenluYXNwaWxrYS5wbDo0NDM.&hl=en&v=6MY32oPwFCn9SUKWt8czDsDw&size=invisible&cb=1ofcxe9yr7vo'),
    'origin': 'https://www.laczynaspilka.pl',
    'referer': 'https://www.laczynaspilka.pl/',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': user_agent,
    }

    # Retrying for 3 times before abandoning
    for i in range(3):
        try:
            sslcontext = ssl.create_default_context(cafile=certifi.where())
            timeout = aiohttp.ClientTimeout(total=10, connect=None, sock_connect=None, sock_read=None)
            async with aiohttp.ClientSession(trust_env=True, timeout=timeout) as session:
                async with session.get(url, proxy="http://Hasamba:jrdy6mtgMbVDEobe4R@pr.oxylabs.io:7777", ssl=sslcontext, headers= headers) as response:
                    if not response.ok:
                        return
                    return response

        except Exception as e:
            print(f'[!] Problem with accessing the given request {url}')
            print(f'[!] Error: {e}')
            continue
    return

async def scrape_urls(urls, batch_size=50, save_path=None):
    random_id = uuid.uuid1()


    iterator = 1
    for i in tqdm(range(0, len(urls), batch_size)):
        batch = urls[i : i + batch_size]
        tasks = [make_request(url) for url in batch]
        batch_results = await asyncio.gather(*tasks)
        batch_results = list(chain(*batch_results))

        print(f'[*] Scraped {len(batch_results)} pagaes in batch #{iterator} / out of #{len(range(0, len(urls), batch_size))}')
        
        if len(batch_results) == 0:
            continue
          
        if save_path is None:
            batch_results_df.repartition(1000).write.mode('append').format("parquet").save(f's3://activefence-user/jakubs/pinterest/boards-{random_id}')
        else: 
            batch_results_df.repartition(1000).write.mode('append').format("parquet").save(save_path)

    return

response = await pzpn_request('https://competition-api.laczynaspilka.pl/api/bus/competition/v1/plays/5496933e-acb4-4d89-8be1-77ca6d201ad5/matches')