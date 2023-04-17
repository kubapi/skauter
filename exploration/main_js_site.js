(self.webpackChunkcompetitions = self.webpackChunkcompetitions || []).push([
    [841], {
        8258: (y, T, a) => {
            a.d(T, {
                $: () => r
            });
            var t = a(7367);
            const r = {
                LOG_ERROR: `${t.N.appConfig.urls.apiCompetition}log-error`,
                GET_SEASONS: `${t.N.appConfig.urls.apiCompetition}seasons/dictionaries`,
                GET_VOIVODESHIPS: `${t.N.appConfig.urls.apiCompetition}zpns/voivodeship-dictionaries`,
                GET_VOIVODESHIPS_BY_LEAGUE: (d, O) => `${t.N.appConfig.urls.apiCompetition}seasons/${d}/league-group/${O}/voivodeship-dictionaries`,
                GET_VOIVODESHIPS_BY_LEAGUE_AND_SEX: (d, O, p) => `${t.N.appConfig.urls.apiCompetition}seasons/${d}/league-group/${O}/sexes/${p}/voivodeship-dictionaries`,
                GET_ORGANIZATIONS: `${t.N.appConfig.urls.apiCompetition}zpns/organizators-with-pzpn-dictionaries`,
                GET_CUP_LEAGUES: `${t.N.appConfig.urls.apiCompetition}seasons/{seasonName}/ZPNs/{zpnId}/championship-dictionaries`,
                GET_CUP_MATCHES: `${t.N.appConfig.urls.apiCompetition}plays/{playId}/championship-matches`,
                GET_STAGES: `${t.N.appConfig.urls.apiCompetition}plays/{leagueId}/stages`,
                GET_ROUNDS: `${t.N.appConfig.urls.apiCompetition}seasons/{seasonName}/rounds`,
                GET_LEAGUES: `${t.N.appConfig.urls.apiCompetition}leagues/seasons/{seasonName}/sexes/{sex}/league-groups`,
                GET_GROUPS: `${t.N.appConfig.urls.apiCompetition}leagues/{leagueId}/seasons/{seasonName}/play-dictionaries`,
                GET_GROUPS_BY_ZPN: `${t.N.appConfig.urls.apiCompetition}leagues/{leagueId}/seasons/{seasonName}/ZPNs/{zpnId}/play-dictionaries`,
                GET_GROUPS_BY_ZPN_AND_SEX: (d, O, p, f) => `${t.N.appConfig.urls.apiCompetition}seasons/${O}/league-groups/${d}/sexes/${p}/ZPNs/${f}/league-dictionaries`,
                GET_QUEUES: `${t.N.appConfig.urls.apiCompetition}leagues/{leagueId}/seasons/{seasonName}/queues`,
                GET_QUEUES_PLAY_ID: `${t.N.appConfig.urls.apiCompetition}plays/{playId}/queues`,
                GET_COMPETITIONS: `${t.N.appConfig.urls.apiCompetition}leagues/{leagueId}/seasons/{seasonName}/tables`,
                GET_COMPETITIONS_GROUPS: `${t.N.appConfig.urls.apiCompetition}plays/{playId}/tables`,
                GET_COMPETITIONS_ADVANCED: `${t.N.appConfig.urls.apiCompetition}leagues/{leagueId}/seasons/{seasonName}/advanced-tables`,
                GET_COMPETITIONS_ADVANCED_GROUPS: `${t.N.appConfig.urls.apiCompetition}plays/{playId}/advanced-tables  `,
                GET_SCHEDULER: `${t.N.appConfig.urls.apiCompetition}leagues/{leagueId}/seasons/{seasonName}/matches`,
                GET_SCHEDULER_GROUPS: `${t.N.appConfig.urls.apiCompetition}plays/{playId}/matches`,
                GET_CUP_MATCHES_COMPETITION: `${t.N.appConfig.urls.apiCompetition}leagues/{leagueId}/seasons/{seasonName}/sexes/{sex}/pzpn-championship-play-dictionaries`
            }
        },
        4175: (y, T, a) => {
            a.d(T, {
                K: () => t
            });
            var t = (() => {
                return (d = t || (t = {})).competitionMain = "rozgrywki", d.club = "klub", d.player = "zawodnik", d.team = "druzyna", d.match = "mecz", t;
                var d
            })()
        },
        4900: (y, T, a) => {
            a.d(T, {
                T: () => t
            });
            var t = (() => {
                return (d = t || (t = {})).representationMain = "kadra", d.bio = "bio", d.squad = "reprezentacja", d.player = "zawodnik", d.match = "mecz", t;
                var d
            })()
        },
        270: (y, T, a) => {
            a.d(T, {
                F: () => r
            });
            var t = a(7367);
            const r = {
                LOG_ERROR: `${t.N.appConfig.urls.api}log-error`,
                GET_LEAGUE: `${t.N.appConfig.urls.api}leagues/dictionaries`,
                GET_SEASONS: `${t.N.appConfig.urls.api}seasons/dictionaries`,
                GET_VOIVODESHIPS: `${t.N.appConfig.urls.api}ZPNs/voivodeship-dictionaries`,
                GET_MATCHES: `${t.N.appConfig.urls.api}matches`,
                GET_TEAMS: `${t.N.appConfig.urls.api}teams`,
                GET_TEAMS_PLAYERS: `${t.N.appConfig.urls.api}teams/{teamId}/points`,
                GET_TEAM: `${t.N.appConfig.urls.apiCompetition}teams/{teamId}`,
                GET_TEAM_MATCHES_PLAYED: `${t.N.appConfig.urls.apiCompetition}teams/{teamId}/plays/{playId}/played-matches`,
                GET_TEAM_MATCHES_FEATURED: `${t.N.appConfig.urls.apiCompetition}teams/{teamId}/plays/{playId}/not-played-matches`,
                GET_TEAM_PLAYERS: `${t.N.appConfig.urls.apiCompetition}teams/{teamId}/players`,
                GET_TEAM_TABLES: `${t.N.appConfig.urls.apiCompetition}teams/{teamId}/plays/{playId}/tables`,
                GET_TEAM_PLAY_DICTIONARY: `${t.N.appConfig.urls.apiCompetition}teams/{teamId}/play-dictionaries`,
                GET_PLAYER_DATA: `${t.N.appConfig.urls.apiCompetition}players/{playerId}`,
                GET_PLAYER_STATS: `${t.N.appConfig.urls.apiCompetition}players/{playerId}/seasons/{seasonName}/leagues/{leagueId}/stats`,
                GET_PLAYER_LAST_MATCH: `${t.N.appConfig.urls.apiCompetition}players/{playerId}/last-match`,
                GET_PLAYER_MATCHES: `${t.N.appConfig.urls.apiCompetition}players/{playerId}/seasons/{seasonName}/leagues/{leagueId}/matches`,
                GET_PLAYER_CLUBS: `${t.N.appConfig.urls.apiCompetition}players/{playerId}/clubs`,
                GET_PLAYER_TEAMS: `${t.N.appConfig.urls.apiCompetition}players/{playerId}/teams`,
                GET_PLAYER_CLUBS_AMATEURE: `${t.N.appConfig.urls.apiCompetition}players/{playerId}/amateur-clubs`,
                GET_PLAYER_TEAMS_AMATEURE: `${t.N.appConfig.urls.apiCompetition}players/{playerId}/amateur-teams`,
                GET_PLAYER_SEASONS: `${t.N.appConfig.urls.apiCompetition}players/{playerId}/seasons`,
                GET_PLAYER_LEAGUES: `${t.N.appConfig.urls.apiCompetition}players/{playerId}/seasons/{seasonName}/league-dictionaries`,
                GET_PLAYERS: `${t.N.appConfig.urls.api}players/{playerId}/teams/{teamId}/points`,
                GET_CLUB_DATA: `${t.N.appConfig.urls.apiCompetition}clubs/{clubId}`,
                GET_CLUB_SEASONS: `${t.N.appConfig.urls.apiCompetition}clubs/{clubId}/seasons`,
                GET_CLUB_TEAMS: `${t.N.appConfig.urls.apiCompetition}clubs/{clubId}/seasons/{seasonName}/teams`,
                GET_CLUB_BPP: `${t.N.appConfig.urls.apiCompetition}clubs/{clubId}/bpp`,
                GET_PARENT_PLAY_DICT: `${t.N.appConfig.urls.api}leagues/{leagueId}/seasons/{season}/play-dictionaries`,
                GET_PJS_TEAM_DICT: `${t.N.appConfig.urls.api}leagues/{leagueId}/seasons/{season}/points`,
                GET_PJS_PLAY_TEAM_DICT: `${t.N.appConfig.urls.api}plays/{playId}/points`,
                GET_PJS_ZPN_TEAM_DICT: `${t.N.appConfig.urls.api}leagues/{leagueId}/seasons/{season}/ZPNs/{zpnId}/points`,
                GET_MATCH_DATA: `${t.N.appConfig.urls.apiCompetition}matches/{matchId}`,
                GET_MATCH_EVENTS: `${t.N.appConfig.urls.apiCompetition}matches/{matchId}/events`,
                GET_ALL_VOIVODESHIPS: `${t.N.appConfig.urls.api}voivodeship-dictionaries`
            }
        },
        3680: (y, T, a) => {
            a.d(T, {
                n: () => t
            });
            const t = {
                components: {},
                shared: {
                    mainLogoUrl: "assets/gfx/pzpn_bordo.png",
                    defaultLogo: "assets/gfx/pzpn-logo.png",
                    defaultLogoClub: "assets/icons/crest_default.svg",
                    defaultLogoLeague: "assets/icons/liga_placeholder.svg",
                    defaultTShirt: "assets/icons/koszulka.svg",
                    defaultTShirtRepresentation: "assets/icons/koszulka_A_krotki.svg",
                    defaultTShirtRepresentationKeeper: "assets/icons/koszulka_A_dlugi.svg",
                    defaultPerson: "assets/icons/avatar-person.svg",
                    defaultLogoRepresentation: "assets/images/representation-default.png",
                    autoCompleteDebounceTime: 20,
                    defaultLocale: "pl-PL",
                    dateFormats: {
                        dayOfWeek: "EEEE",
                        baseDateFormat: "dd.MM.yyyy",
                        day: "EEEE, d MMMM",
                        dayAndYear: "EEEE, d MMMM yyyy",
                        year: "yyyy",
                        hourMinutes: "HH:mm",
                        bppDay: "dd.MM.yyyy",
                        bppFullDate: "E, dd MMMM y"
                    },
                    numberOfElementsInList: 20,
                    topBarHost: "https://top-bar-test.laczynaspilka.pl/ng-14"
                },
                rules: ["Zawodnik musi rozegra\u0107 co najmniej 270 minut oraz pi\u0119\u0107 mecz\xf3w w rozgrywkach ligowych, aby sp\u0119dzony przez niego czas na boisku zosta\u0142 uwzgl\u0119dniony w punktacji ko\u0144cowej (te dwa warunki musz\u0105 zosta\u0107 spe\u0142nione \u0142\u0105cznie)", "Kluby zdegradowane nie s\u0105 uwzgl\u0119dniane w podziale nagr\xf3d finansowych przyznawanych w ramach programu", "Do klasyfikacji nie s\u0105 wliczane mecze bara\u017cowe", "Do ko\u0144cowej klasyfikacji s\u0105 wliczane wy\u0142\u0105cznie oficjalne mecze reprezentacji:", "Reprezentacja A \u2013 wszystkie mecze oficjalne", "Reprezentacja U21 \u2013 mecze o punkty", "Reprezentacje m\u0142odzie\u017cowe \u2013 mecze na turniejach fina\u0142owych", "Poza gr\u0105 w rozgrywkach ligowych premiowane s\u0105 te\u017c wyst\u0119py w kadrach m\u0142odzie\u017cowych."],
                notSupportedBrowser: [{
                    name: "IE",
                    version: "null"
                }]
            }
        },
        6322: (y, T, a) => {
            a.d(T, {
                f: () => p
            });
            var t = a(5440),
                r = a(8125),
                O = a(577);
            let p = (() => {
                class f {
                    constructor() {
                        this.svgEnum = t.r
                    }
                    ngOnInit() {}
                }
                return f.\u0275fac = function(A) {
                    return new(A || f)
                }, f.\u0275cmp = r.\u0275\ u0275defineComponent({
                    type: f,
                    selectors: [
                        ["app-error-page"]
                    ],
                    decls: 2,
                    vars: 1,
                    consts: [
                        [1, "container"],
                        [1, "d-flex", 3, "name"]
                    ],
                    template: function(A, M) {
                        1 & A && (r.\u0275\ u0275elementStart(0, "div", 0), r.\u0275\ u0275element(1, "svg-icon", 1), r.\u0275\ u0275elementEnd()), 2 & A && (r.\u0275\ u0275advance(1), r.\u0275\ u0275property("name", M.svgEnum.errorPage))
                    },
                    dependencies: [O.bk]
                }), f
            })()
        },
        7726: (y, T, a) => {
            a.d(T, {
                i: () => ce
            });
            var t = a(8125);
            var d = a(9206),
                O = a(3512);
            const p = ["linkOne"],
                f = ["linkTwo"];

            function v(ve, Oe) {
                1 & ve && t.\u0275\ u0275projection(0)
            }

            function A(ve, Oe) {
                1 & ve && t.\u0275\ u0275elementContainer(0)
            }

            function M(ve, Oe) {
                if (1 & ve && (t.\u0275\ u0275elementContainerStart(0), t.\u0275\ u0275template(1, A, 1, 0, "ng-container", 4), t.\u0275\ u0275elementContainerEnd()), 2 & ve) {
                    t.\u0275\ u0275nextContext();
                    const oe = t.\u0275\ u0275reference(1);
                    t.\u0275\ u0275advance(1), t.\u0275\ u0275property("ngTemplateOutlet", oe)
                }
            }

            function I(ve, Oe) {
                1 & ve && t.\u0275\ u0275elementContainer(0)
            }

            function z(ve, Oe) {
                if (1 & ve) {
                    const oe = t.\u0275\ u0275getCurrentView();
                    t.\u0275\ u0275elementStart(0, "a", 5, 6), t.\u0275\ u0275listener("mousedown", function(Ne) {
                        t.\u0275\ u0275restoreView(oe);
                        const pe = t.\u0275\ u0275nextContext();
                        return t.\u0275\ u0275resetView(pe.mousedown(Ne))
                    })("mouseenter", function() {
                        t.\u0275\ u0275restoreView(oe);
                        const Ne = t.\u0275\ u0275nextContext();
                        return t.\u0275\ u0275resetView(Ne.preloadElement())
                    })("click", function(Ne) {
                        return Ne.preventDefault()
                    }), t.\u0275\ u0275template(2, I, 1, 0, "ng-container", 4), t.\u0275\ u0275elementEnd()
                }
                if (2 & ve) {
                    const oe = t.\u0275\ u0275nextContext(),
                        Me = t.\u0275\ u0275reference(1);
                    t.\u0275\ u0275property("ngClass", oe.getClass())("routerLink", oe.href)("queryParams", null == oe.linkConfig ? null : oe.linkConfig.options), t.\u0275\ u0275advance(2), t.\u0275\ u0275property("ngTemplateOutlet", Me)
                }
            }

            function V(ve, Oe) {
                1 & ve && t.\u0275\ u0275elementContainer(0)
            }

            function J(ve, Oe) {
                if (1 & ve && (t.\u0275\ u0275elementStart(0, "a", 7, 8), t.\u0275\ u0275template(2, V, 1, 0, "ng-container", 4), t.\u0275\ u0275elementEnd()), 2 & ve) {
                    const oe = t.\u0275\ u0275nextContext(),
                        Me = t.\u0275\ u0275reference(1);
                    t.\u0275\ u0275property("href", oe.href, t.\u0275\ u0275sanitizeUrl)("ngClass", oe.getClass()), t.\u0275\ u0275advance(2), t.\u0275\ u0275property("ngTemplateOutlet", Me)
                }
            }
            const ie = ["*"];
            let ce = (() => {
                class ve {
                    constructor(oe, Me) {
                        this.el = oe, this.router = Me, this.hoverUnderline = !0, this.linkClasses = "true"
                    }
                    ngOnInit() {
                        this.linkConfig ? (this.el.nativeElement.alt = this.linkConfig.title, this.el.nativeElement.target = "_self", this.el.nativeElement.classList.add("isLink"), this.href = decodeURIComponent(this.linkConfig ? .url), this.isExternal() && (this.el.nativeElement.target = "_blank", this.el.nativeElement.href = this.href)) : this.linkExtUrl && (this.href = this.linkExtUrl)
                    }
                    ngAfterViewInit() {
                        this.linkAttrs && Object.keys(this.linkAttrs).forEach(oe => {
                            this.linkOne && this.linkOne.nativeElement.setAttribute(oe, this.linkAttrs[oe]), this.linkTwo && this.linkTwo.nativeElement.setAttribute(oe, this.linkAttrs[oe])
                        })
                    }
                    mousedown(oe) {
                        this.mouseDownXPos = oe.clientX
                    }
                    mouseup(oe) {
                        Math.abs(this.mouseDownXPos - oe.clientX) < 30 && (1 === oe.button || 2 !== oe.button && this.router.navigate(this.getRouterLink())), oe.preventDefault()
                    }
                    preloadElement() {}
                    getClass() {
                        return this.hoverUnderline ? `isLink ${this.linkClasses}` : `isLink isLink--no-decoration ${this.linkClasses}`
                    }
                    getRouterLink() {
                        return this.linkConfig ? "IndexPage" === this.linkConfig.targetItemType && this.linkCategory ? [this.getLinkRoute(), {
                            category: this.linkCategory.name
                        }] : [this.getLinkRoute(), this.getLinkParams()] : ["./"]
                    }
                    isExternal() {
                        return void 0 !== this.linkExtUrl || this.linkConfig && ("External" === this.linkConfig.targetItemType || "_blank" === this.linkConfig ? .options ? .target)
                    }
                    getLinkRoute() {
                        return this.href.split(";")[0]
                    }
                    getLinkParams() {
                        const oe = this.href.split(";");
                        let Me = {};
                        for (let Ne = 1; Ne < oe.length; Ne++) Me[oe[Ne].split("=")[0]] = decodeURIComponent(oe[Ne].split("=")[1]);
                        return Me
                    }
                }
                return ve.\u0275fac = function(oe) {
                    return new(oe || ve)(t.\u0275\ u0275directiveInject(t.ElementRef), t.\u0275\ u0275directiveInject(d.Router))
                }, ve.\u0275cmp = t.\u0275\ u0275defineComponent({
                    type: ve,
                    selectors: [
                        ["app-link"]
                    ],
                    viewQuery: function(oe, Me) {
                        if (1 & oe && (t.\u0275\ u0275viewQuery(p, 5), t.\u0275\ u0275viewQuery(f, 5)), 2 & oe) {
                            let Ne;
                            t.\u0275\ u0275queryRefresh(Ne = t.\u0275\ u0275loadQuery()) && (Me.linkOne = Ne.first), t.\u0275\ u0275queryRefresh(Ne = t.\u0275\ u0275loadQuery()) && (Me.linkTwo = Ne.first)
                        }
                    },
                    inputs: {
                        linkExtUrl: ["appLinkExtUrl", "linkExtUrl"],
                        linkConfig: ["appLinkConfig", "linkConfig"],
                        linkAttrs: ["appLinkAttrs", "linkAttrs"],
                        linkCategory: ["appLinkCategory", "linkCategory"],
                        hoverUnderline: ["appLinkHoverUnderline", "hoverUnderline"],
                        linkClasses: ["appLinkClasses", "linkClasses"]
                    },
                    ngContentSelectors: ie,
                    decls: 5,
                    vars: 3,
                    consts: [
                        ["content", ""],
                        [4, "ngIf"],
                        [3, "ngClass", "routerLink", "queryParams", "mousedown", "mouseenter", "click", 4, "ngIf"],
                        ["target", "_blank", 3, "href", "ngClass", 4, "ngIf"],
                        [4, "ngTemplateOutlet"],
                        [3, "ngClass", "routerLink", "queryParams", "mousedown", "mouseenter", "click"],
                        ["linkOne", ""],
                        ["target", "_blank", 3, "href", "ngClass"],
                        ["linkTwo", ""]
                    ],
                    template: function(oe, Me) {
                        1 & oe && (t.\u0275\ u0275projectionDef(), t.\u0275\ u0275template(0, v, 1, 0, "ng-template", null, 0, t.\u0275\ u0275templateRefExtractor), t.\u0275\ u0275template(2, M, 2, 1, "ng-container", 1), t.\u0275\ u0275template(3, z, 3, 4, "a", 2), t.\u0275\ u0275template(4, J, 3, 3, "a", 3)), 2 & oe && (t.\u0275\ u0275advance(2), t.\u0275\ u0275property("ngIf", !(null != Me.linkConfig && Me.linkConfig.url || Me.linkExtUrl)), t.\u0275\ u0275advance(1), t.\u0275\ u0275property("ngIf", (null == Me.linkConfig ? null : Me.linkConfig.url) && !Me.isExternal()), t.\u0275\ u0275advance(1), t.\u0275\ u0275property("ngIf", Me.isExternal()))
                    },
                    dependencies: [O.NgClass, O.NgIf, O.NgTemplateOutlet, d.RouterLinkWithHref],
                    styles: [".isLink[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none!important;background-color:transparent!important}.isLink--no-decoration[_ngcontent-%COMP%]:hover{text-decoration:none}.isLink--as-button[_ngcontent-%COMP%]{background-color:#2c2efa!important;padding:15px;color:#fff;width:100%;display:block;text-align:center}.isLink--as-button[_ngcontent-%COMP%]:hover{text-decoration:none;color:#fff}"]
                }), ve
            })()
        },
        2239: (y, T, a) => {
            a.d(T, {
                q: () => p
            });
            var t = a(7367),
                r = a(1623),
                d = a(8125);
            let p = (() => {
                class f {
                    static getBaseHref() {
                        return "locale" !== t.N.appConfig.env ? r.m.baseHref : ""
                    }
                }
                return f.\u0275fac = function(A) {
                    return new(A || f)
                }, f.\u0275prov = d.\u0275\ u0275defineInjectable({
                    token: f,
                    factory: f.\u0275fac,
                    providedIn: "root"
                }), f
            })()
        },
        8166: (y, T, a) => {
            a.d(T, {
                B: () => z
            });
            var t = a(5861),
                d = (a(8741), a(2076)),
                O = a(6805),
                f = a(8125),
                v = a(930),
                M = a(4700);
            let I = (() => {
                    class V {
                        constructor(ie) {
                            this.recaptchaV3Service = ie
                        }
                        verifyCaptcha() {
                            return function A(V, J) {
                                const ie = "object" == typeof J;
                                return new Promise((ce, ve) => {
                                    const Oe = new v.Hp({
                                        next: oe => {
                                            ce(oe), Oe.unsubscribe()
                                        },
                                        error: ve,
                                        complete: () => {
                                            ie ? ce(J.defaultValue) : ve(new O.K)
                                        }
                                    });
                                    V.subscribe(Oe)
                                })
                            }(this.recaptchaV3Service.execute("importantAction"))
                        }
                    }
                    return V.\u0275fac = function(ie) {
                        return new(ie || V)(f.\u0275\ u0275inject(M.YC))
                    }, V.\u0275prov = f.\u0275\ u0275defineInjectable({
                        token: V,
                        factory: V.\u0275fac,
                        providedIn: "root"
                    }), V
                })(),
                z = (() => {
                    class V {
                        constructor(ie) {
                            this.recaptchaService = ie
                        }
                        intercept(ie, ce) {
                            return (0, d.D)(this.addCaptchaAuth(ie, ce))
                        }
                        addCaptchaAuth(ie, ce) {
                            var ve = this;
                            return (0, t.Z)(function*() {
                                return yield function p(V, J) {
                                    const ie = "object" == typeof J;
                                    return new Promise((ce, ve) => {
                                        let oe, Oe = !1;
                                        V.subscribe({
                                            next: Me => {
                                                oe = Me, Oe = !0
                                            },
                                            error: ve,
                                            complete: () => {
                                                Oe ? ce(oe) : ie ? ce(J.defaultValue) : ve(new O.K)
                                            }
                                        })
                                    })
                                }(ce.handle(ie.clone({
                                    headers: ie.headers.set("CustomValidation", yield ve.recaptchaService.verifyCaptcha())
                                })))
                            })()
                        }
                    }
                    return V.\u0275fac = function(ie) {
                        return new(ie || V)(f.\u0275\ u0275inject(I))
                    }, V.\u0275prov = f.\u0275\ u0275defineInjectable({
                        token: V,
                        factory: V.\u0275fac
                    }), V
                })()
        },
        1909: (y, T, a) => {
            a.d(T, {
                l: () => I
            }), a(8741);
            var d = a(4707),
                O = a(2843),
                p = a(4004),
                f = a(262),
                v = a(7461),
                A = a(8125);
            let I = (() => {
                class z {
                    constructor() {
                        this.pendingRequests = 0, this.pendingRequestsStatus = new d.t(1)
                    }
                    getPendingRequestsStatus() {
                        return this.pendingRequestsStatus.asObservable()
                    }
                    intercept(J, ie) {
                        return this.pendingRequests++, 1 === this.pendingRequests && this.pendingRequestsStatus.next(!0), ie.handle(J).pipe((0, p.U)(ce => ce), (0, f.K)(ce => (0, O._)(ce)), (0, v.x)(() => {
                            this.pendingRequests--, 0 === this.pendingRequests && this.pendingRequestsStatus.next(!1)
                        }))
                    }
                }
                return z.\u0275fac = function(J) {
                    return new(J || z)
                }, z.\u0275prov = A.\u0275\ u0275defineInjectable({
                    token: z,
                    factory: z.\u0275fac,
                    providedIn: "root"
                }), z
            })()
        },
        4936: (y, T, a) => {
            a.d(T, {
                u: () => v
            });
            var t = a(270),
                r = a(8258),
                d = a(8125),
                p = a(8741);
            let v = (() => {
                class A {
                    constructor(I) {
                        this.httpClient = I
                    }
                    getLeague() {
                        return this.httpClient.get(t.F.GET_LEAGUE)
                    }
                    getSeasonsObject() {
                        return this.httpClient.get(r.$.GET_SEASONS)
                    }
                    getVoivodeships() {
                        return this.httpClient.get(t.F.GET_VOIVODESHIPS)
                    }
                    getParentGroup(I, z) {
                        const V = t.F.GET_PARENT_PLAY_DICT.replace("{leagueId}", I).replace("{season}", encodeURIComponent(z));
                        return this.httpClient.get(V)
                    }
                    getSeasons() {
                        return this.httpClient.get(t.F.GET_SEASONS)
                    }
                    getMatches(I, z) {
                        const V = t.F.GET_PLAYERS.replace("{teamId}", I).replace("{playerId}", z);
                        return this.httpClient.get(V)
                    }
                }
                return A.\u0275fac = function(I) {
                    return new(I || A)(d.\u0275\ u0275inject(p.HttpClient))
                }, A.\u0275prov = d.\u0275\ u0275defineInjectable({
                    token: A,
                    factory: A.\u0275fac
                }), A
            })()
        },
        5440: (y, T, a) => {
            a.d(T, {
                r: () => f,
                t: () => p
            });
            var t = a(2239),
                r = a(8125),
                O = a(577);
            let p = (() => {
                class v {
                    constructor(M) {
                        this._registry = M
                    }
                    register() {
                        this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/football.svg`, f.ball).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/football-contrast.svg`, f.ballContrast).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/caret-up.svg`, f.caretUp).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/caret-down.svg`, f.caretDown).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/ball-minus.svg`, f.ballMinus).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/ball-plus.svg`, f.ballPlus).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/in.svg`, f.in).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/out.svg`, f.out).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/out.svg`, f.out).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/red-card.svg`, f.redCard).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/yellow-card.svg`, f.yellowCard).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/yellow-card.svg`, f.doubleYellowCard).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/koszulka.svg`, f.tShirt).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/koszulka_keeper.svg`, f.tShirtKeeper).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/up-arrow.svg`, f.arrowUp).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/down-arrow.svg`, f.arrowDown).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/crest_default.svg`, f.crestDefault).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/images/error.svg`, f.errorPage).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/lnp-logo.svg`, f.lnpLogo).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/koszulka_A_krotki.svg`, f.tShirtRep).subscribe(), this._registry.loadSvg(`${t.q.getBaseHref()}/assets/icons/koszulka_A_dlugi.svg`, f.tShirtKeeperRep).subscribe()
                    }
                }
                return v.\u0275fac = function(M) {
                    return new(M || v)(r.\u0275\ u0275inject(O.M6))
                }, v.\u0275prov = r.\u0275\ u0275defineInjectable({
                    token: v,
                    factory: v.\u0275fac,
                    providedIn: "root"
                }), v
            })();
            var f = (() => {
                return (v = f || (f = {})).caretUp = "caret-up", v.lnpLogo = "lnpLogo", v.caretDown = "caret-down", v.ball = "ball", v.ballContrast = "ball-contrast", v.ballPlus = "ball-plus", v.ballMinus = "ball-minus", v.in = "in", v.out = "out", v.redCard = "red-card", v.yellowCard = "yellow-card", v.doubleYellowCard = "double-yellow-card", v.tShirt = "t-shirt", v.tShirtKeeper = "t-shirt-keeper", v.tShirtRep = "t-shirt-rep", v.tShirtKeeperRep = "t-shirt-keeper-rep", v.arrowUp = "up-arrow", v.arrowDown = "down-arrow", v.crestDefault = "crestDefault", v.errorPage = "errorPage", f;
                var v
            })()
        },
        4466: (y, T, a) => {
            a.d(T, {
                m: () => oe
            });
            var t = a(3512),
                d = a(9549),
                O = a(7510),
                p = a(8018),
                v = a(7392),
                A = a(4936),
                M = a(4568),
                I = a(577),
                z = a(455),
                V = a(4918),
                J = a(9206),
                ce = a(7296),
                ve = a(8125);
            let oe = (() => {
                class Me {}
                return Me.\u0275fac = function(pe) {
                    return new(pe || Me)
                }, Me.\u0275mod = ve.\u0275\ u0275defineNgModule({
                    type: Me
                }), Me.\u0275inj = ve.\u0275\ u0275defineInjector({
                    providers: [A.u, t.DatePipe],
                    imports: [t.CommonModule, p.FormsModule, p.ReactiveFormsModule, J.RouterModule.forChild([]), d.lN, O.LD, v.Ps, V.IJ, M.Uq, I._J, z.rP, ce.Rq, p.FormsModule, p.ReactiveFormsModule, d.lN, O.LD, v.Ps, I._J]
                }), Me
            })()
        },
        4841: (y, T, a) => {
            a.r(T);
            var t = a(3788),
                r = a(8125),
                d = a(3894),
                O = a(6252),
                p = a(9206),
                f = a(1623),
                v = a(6322),
                A = a(4175),
                M = a(4900),
                I = (() => ((I || (I = {})).polishCupMain = "puchar-polski", I))();
            const V = [{
                path: "",
                pathMatch: "full",
                data: {
                    breadcrumb: "STRONA G\u0141\xd3WNA"
                },
                redirectTo: "/"
            }, {
                path: "pro-junior-system",
                data: {
                    breadcrumb: "PRO JUNIOR SYSTEM"
                },
                loadChildren: () => ie().then(F => F[f.m.moduleName])
            }, {
                path: A.K.competitionMain,
                data: {
                    breadcrumb: "Rozgrywki"
                },
                loadChildren: () => ie().then(F => F[f.m.moduleName])
            }, {
                path: "test",
                data: {
                    breadcrumb: "TEST"
                },
                loadChildren: () => ie().then(F => F[f.m.moduleName])
            }, {
                path: M.T.representationMain,
                data: {
                    breadcrumb: "REPREZENTACJE",
                    preload: !0
                },
                loadChildren: () => ie().then(F => F[f.m.moduleName])
            }, {
                path: I.polishCupMain,
                data: {
                    breadcrumb: "Puchar Polski",
                    preload: !0
                },
                loadChildren: () => ie().then(F => F[f.m.moduleName])
            }, {
                path: "404",
                component: v.f
            }, {
                path: "**",
                pathMatch: "full",
                redirectTo: "/"
            }];
            let J = (() => {
                class F {}
                return F.\u0275fac = function(ee) {
                    return new(ee || F)
                }, F.\u0275mod = r.\u0275\ u0275defineNgModule({
                    type: F
                }), F.\u0275inj = r.\u0275\ u0275defineInjector({
                    imports: [p.RouterModule.forRoot(V, {
                        scrollPositionRestoration: "enabled"
                    }), p.RouterModule]
                }), F
            })();

            function ie() {
                switch (f.m.moduleName) {
                    case "TestModule":
                        return a.e(903).then(a.bind(a, 5903));
                    case "PjsModule":
                        return a.e(254).then(a.bind(a, 254));
                    case "CompetitionsModule":
                        return a.e(631).then(a.bind(a, 6631));
                    case "RepresentationModule":
                        return a.e(497).then(a.bind(a, 2497));
                    case "PolishCupModule":
                        return a.e(933).then(a.bind(a, 8933))
                }
            }
            var ce = a(7367),
                ve = a(1135),
                Oe = a(5861);
            let oe = {};
            const Me = {},
                Ne = {};
            let pe = !1;

            function k(F, ye) {
                return _.apply(this, arguments)
            }

            function _() {
                return (_ = (0, Oe.Z)(function*(F, ye) {
                    return (yield Me[F].get(ye))()
                })).apply(this, arguments)
            }

            function N(F, ye) {
                return Y.apply(this, arguments)
            }

            function Y() {
                return (Y = (0, Oe.Z)(function*(F, ye) {
                    return Ne[ye] || (pe || (yield a.I("default"), pe = !0), yield F.init(a.S.default), Ne[ye] = !0), F
                })).apply(this, arguments)
            }

            function te(F, ye) {
                return Pe.apply(this, arguments)
            }

            function Pe() {
                return (Pe = (0, Oe.Z)(function*(F, ye) {
                    if ("string" == typeof F) return yield be(F, ye);
                    if ("script" === F.type) {
                        const ee = F;
                        return yield be(ee.remoteEntry, ee.remoteName)
                    }
                    "module" === F.type && (yield Z(F.remoteEntry))
                })).apply(this, arguments)
            }

            function Z(F) {
                return ge.apply(this, arguments)
            }

            function ge() {
                return (ge = (0, Oe.Z)(function*(F) {
                    return Me[F] ? Promise.resolve() : yield
                    import (F).then(ye => {
                        N(ye, F), Me[F] = ye
                    })
                })).apply(this, arguments)
            }

            function be(F, ye) {
                return Ee.apply(this, arguments)
            }

            function Ee() {
                return (Ee = (0, Oe.Z)(function*(F, ye) {
                    return new Promise((ee, Fe) => {
                        if (Me[ye]) return void ee();
                        const Qe = document.createElement("script");
                        Qe.src = F, Qe.onerror = Fe, Qe.onload = () => {
                            const st = window[ye];
                            N(st, ye), Me[ye] = st, ee()
                        }, document.body.appendChild(Qe)
                    })
                })).apply(this, arguments)
            }

            function et() {
                return (et = (0, Oe.Z)(function*(F) {
                    let ye, ee, Fe;
                    if (F.type || (F.type = "script"), "manifest" === F.type) {
                        const Qe = oe[F.remoteName];
                        if (!Qe) throw new Error("Manifest does not contain " + F.remoteName);
                        F = {
                            type: Qe.type,
                            exposedModule: F.exposedModule,
                            remoteEntry: Qe.remoteEntry,
                            remoteName: "script" === Qe.type ? F.remoteName : void 0
                        }, Fe = Qe.remoteEntry
                    } else Fe = F.remoteEntry;
                    return "script" === F.type ? (ye = {
                        type: "script",
                        remoteEntry: F.remoteEntry,
                        remoteName: F.remoteName
                    }, ee = F.remoteName) : "module" === F.type && (ye = {
                        type: "module",
                        remoteEntry: F.remoteEntry
                    }, ee = F.remoteEntry), Fe && (yield te(ye)), yield k(ee, F.exposedModule)
                })).apply(this, arguments)
            }
            var q = a(327),
                E = a(9751),
                B = a(172);
            class H {
                init() {
                    const ye = {
                        flow: "standard",
                        onLoad: "check-sso"
                    };
                    return new Promise((ee, Fe) => {
                        H.keycloakInstance.init(ye).success(() => {
                            H.keycloakInitialised = !0, ee(!0)
                        }).error(() => Fe())
                    })
                }
                authenticated() {
                    return !!H.keycloakInitialised && H.keycloakInstance.authenticated
                }
                createLoginUrl() {
                    if (H.keycloakInitialised) return H.keycloakInstance.createLoginUrl()
                }
                createLogoutUrl() {
                    return H.keycloakInstance.createLogoutUrl()
                }
                getToken() {
                    return new Promise((ye, ee) => {
                        H.keycloakInstance.authenticated ? ye(H.keycloakInstance.token ? ? "") : ee("Not authenticated yet")
                    })
                }
                loadUserInfo() {
                    return new E.y(ye => {
                        H.keycloakInitialised ? H.keycloakInstance.loadUserInfo().success(ee => {
                            ye.next(ee), ye.complete()
                        }).error(() => ye.error()) : ye.error("Keycloak wasn't initialised")
                    })
                }
                loadUserProfile() {
                    return new E.y(ye => {
                        H.keycloakInitialised ? H.keycloakInstance.loadUserProfile().success(ee => {
                            ye.next(ee), ye.complete()
                        }).error(() => ye.error()) : ye.error("Keycloak wasn't initialised")
                    })
                }
            }
            H.appConfig = ce.N.appConfig, H.keycloakInstance = B(H.appConfig.services.keycloak.config), H.keycloakInitialised = !1, H.\u0275fac = function(ye) {
                return new(ye || H)
            }, H.\u0275prov = r.\u0275\ u0275defineInjectable({
                token: H,
                factory: H.\u0275fac
            });
            var Q = a(4004),
                me = a(4707),
                _e = a(3099),
                ke = a(8741);
            let je = (() => {
                class F {
                    constructor(ee) {
                        this.http = ee
                    }
                    init() {
                        this.footerData$ = this.getFooterData().pipe((0, Q.U)(ee => ({
                            headerLocalMenu: [],
                            addOns: [],
                            ...ee
                        })), function Le(F, ye, ee) {
                            let Fe, Qe = !1;
                            return F && "object" == typeof F ? ({
                                bufferSize: Fe = 1 / 0,
                                windowTime: ye = 1 / 0,
                                refCount: Qe = !1,
                                scheduler: ee
                            } = F) : Fe = F ? ? 1 / 0, (0, _e.B)({
                                connector: () => new me.t(Fe, ye, ee),
                                resetOnError: !0,
                                resetOnComplete: !1,
                                resetOnRefCountZero: Qe
                            })
                        }(1))
                    }
                    getTopBarSettings() {
                        return this.getFooterData().pipe((0, Q.U)(ee => ({
                            homePageUrl: ee.item.homePageUrl,
                            lowerMenu: ee.item.headerLocalMenu.map(Fe => ({
                                text: Fe.title,
                                type: "External" === Fe.targetItemType ? "external" : "internal",
                                url: Fe.url
                            }))
                        })))
                    }
                    getFooterData() {
                        return this.http.get("https://bus20-api-lnp2.laczynaspilka.pl/api/lnp/v1/domain-settings")
                    }
                }
                return F.\u0275fac = function(ee) {
                    return new(ee || F)(r.\u0275\ u0275inject(ke.HttpClient))
                }, F.\u0275prov = r.\u0275\ u0275defineInjectable({
                    token: F,
                    factory: F.\u0275fac,
                    providedIn: "any"
                }), F
            })();
            var ct = a(5440),
                xt = a(7392),
                Ve = a(2239),
                ue = a(4568);
            let xe = (() => {
                class F {
                    constructor() {
                        this.locale = new r.EventEmitter, this.config = {
                            environment: this.getEnviroment(),
                            sourceSystem: "2",
                            headlineDefaultImageUrl: Ve.q.getBaseHref() + "assets/pzpn-newsletter/lewy.png",
                            buttonText: "Zapisz mnie",
                            headlineText: "Zapisz si\u0119 do newslettera PZPN i b\u0105d\u017a na bie\u017c\u0105co!"
                        }
                    }
                    ngOnInit() {
                        this.config = { ...this.config,
                            buttonText: this.newsletterConfig ? .buttonText ? ? this.config.buttonText,
                            headlineText: this.newsletterConfig ? .headline ? .text ? ? this.config.headlineText,
                            consentText: this.newsletterConfig ? .tacText ? ? this.config.consentText
                        }, this.newsletterConfig ? .image && -1 === this.newsletterConfig.image.url.indexOf("/mocks/") && (this.config.headlineImage = this.newsletterConfig.image)
                    }
                    getEnviroment() {
                        return "test" === ce.N.appConfig.env ? "stage" : ce.N.appConfig.env
                    }
                }
                return F.\u0275fac = function(ee) {
                    return new(ee || F)
                }, F.\u0275cmp = r.\u0275\ u0275defineComponent({
                    type: F,
                    selectors: [
                        ["app-section-newsletter"]
                    ],
                    inputs: {
                        newsletterConfig: "newsletterConfig"
                    },
                    decls: 3,
                    vars: 2,
                    consts: [
                        [1, "container-lg", "mt-md-5", "mb-4", "newsletter-container"],
                        [1, "newsletter-wrapper"],
                        [3, "locale", "config"]
                    ],
                    template: function(ee, Fe) {
                        1 & ee && (r.\u0275\ u0275elementStart(0, "div", 0)(1, "div", 1), r.\u0275\ u0275element(2, "pzpn-newsletter", 2), r.\u0275\ u0275elementEnd()()), 2 & ee && (r.\u0275\ u0275advance(2), r.\u0275\ u0275property("locale", Fe.locale)("config", Fe.config))
                    },
                    dependencies: [ue.rv],
                    styles: ['@media only screen and (max-width: 750px){.newsletter-container[_ngcontent-%COMP%]{padding-left:0;padding-right:0}}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]{position:relative}@media only screen and (min-width: 750px){.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]:after, .newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]:before{content:"";position:absolute;background-repeat:no-repeat}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]:before{z-index:70;top:50%;left:-66px;transform:translateY(-50%);width:calc(100% + 132px);height:100%;background:url(/rozgrywki/assets/images/overlay_newsletter.svg)}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]:after{z-index:120;top:-26px;right:-66px;width:132px;height:132px;background:url(/rozgrywki/assets/images/overlay_square.svg)}}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]   pzpn-newsletter[_ngcontent-%COMP%]{position:inherit;z-index:100}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter{background:linear-gradient(to bottom,#f1f2f9 0%,#f7f8fc 100%);border-bottom:none;font-family:Teko;position:inherit;z-index:100}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter:after{display:none}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter .headline{font-size:48px;line-height:1.1;max-width:480px;font-family:Teko;font-weight:500;text-transform:none;color:#0a0a0b}@media only screen and (max-width: 576px){.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter .headline{font-size:32px;max-width:unset}}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-container{padding-bottom:25px}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-image{border-bottom:none}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-image:after{display:none}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-image img.desktop{width:300px}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-image img.mobile{width:50%}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-image pzpn-newsletter-image img{object-fit:contain}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-form .row{margin-left:0;margin-right:0}@media only screen and (min-width: 576px){.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-form .row{max-width:480px}}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-form input[type=text]{position:relative;z-index:1;outline:none;background-color:inherit;color:#afb6ca;width:100%;font-family:Lato,sans-serif;font-style:normal;font-weight:700;line-height:24px;font-size:14px;letter-spacing:.2px;height:56px;border:none;border-bottom:2px solid;border-radius:0}@media only screen and (min-width: 576px){.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-form input[type=text]{width:calc(100% - 24px)}}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-form input[type=submit]{font-family:IBM Plex Sans;letter-spacing:.2px;background-color:#2c2efa!important;color:#fff;font-size:17px;text-decoration:none;text-transform:none;padding:10px 20px;cursor:pointer;width:165px;height:56px;border:none;border-radius:0}@media only screen and (max-width: 576px){.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-form input[type=submit]{width:100%}}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-form input[type=submit]:disabled{cursor:not-allowed}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-form input[type=checkbox]:checked+span:before{background-color:#0a0a0b!important;border-color:#0a0a0b!important}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-form input[type=checkbox]+span{font-size:14px;color:#6a6f7e!important;margin-left:4px;font-weight:300;letter-spacing:.5px;text-transform:none}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-form input[type=checkbox]+span:before{background-color:#fff;border-radius:0}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-form input[type=checkbox]+span:before, .newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-form input[type=checkbox]+span:after{height:1.25rem;width:1.25rem;top:0}.newsletter-container[_ngcontent-%COMP%]   .newsletter-wrapper[_ngcontent-%COMP%]     .pzpn-newsletter-form input[type=checkbox]+span a{display:inline-block;color:inherit;font-weight:500}']
                }), F
            })();
            var D, ae = a(655),
                Te = a(2805),
                se = a(4482),
                we = a(5032),
                Ye = a(5403),
                Ze = a(8421),
                mt = a(9010),
                L = a(1909),
                Re = a(3512);
            const he = function(F) {
                return {
                    hidden: F
                }
            };
            let De = D = class {
                constructor(ye) {
                    this.pendingRequestInterceptorService = ye, this.isVisible = !1
                }
                static handleDebounce(ye) {
                    return (0, Te.H)(ye ? 500 : 200)
                }
                ngOnInit() {
                    this.pendingRequestInterceptorService.getPendingRequestsStatus().pipe(function dt(F) {
                        return (0, se.e)((ye, ee) => {
                            let Fe = !1,
                                Qe = null,
                                st = null;
                            const zt = () => {
                                if (st ? .unsubscribe(), st = null, Fe) {
                                    Fe = !1;
                                    const Gt = Qe;
                                    Qe = null, ee.next(Gt)
                                }
                            };
                            ye.subscribe((0, Ye.x)(ee, Gt => {
                                st ? .unsubscribe(), Fe = !0, Qe = Gt, st = (0, Ye.x)(ee, zt, we.Z), (0, Ze.Xf)(F(Gt)).subscribe(st)
                            }, () => {
                                zt(), ee.complete()
                            }, void 0, () => {
                                Qe = st = null
                            }))
                        })
                    }(ye => D.handleDebounce(ye))).subscribe(ye => this.isVisible = ye)
                }
                ngOnDestroy() {}
            };
            De.\u0275fac = function(ye) {
                return new(ye || De)(r.\u0275\ u0275directiveInject(L.l))
            }, De.\u0275cmp = r.\u0275\ u0275defineComponent({
                type: De,
                selectors: [
                    ["app-global-loading-indicator"]
                ],
                decls: 8,
                vars: 3,
                consts: [
                    [1, "loader", 3, "ngClass"],
                    [1, "dots"],
                    [1, "dot1"],
                    [1, "dot2"],
                    [1, "dot3"],
                    [1, "text"]
                ],
                template: function(ye, ee) {
                    1 & ye && (r.\u0275\ u0275elementStart(0, "div", 0)(1, "div")(2, "div", 1), r.\u0275\ u0275element(3, "div", 2)(4, "div", 3)(5, "div", 4), r.\u0275\ u0275elementEnd(), r.\u0275\ u0275elementStart(6, "div", 5), r.\u0275\ u0275text(7, "\u0141aduj\u0119 zawarto\u015b\u0107"), r.\u0275\ u0275elementEnd()()()), 2 & ye && r.\u0275\ u0275property("ngClass", r.\u0275\ u0275pureFunction1(1, he, !ee.isVisible))
                },
                dependencies: [Re.NgClass],
                styles: ['[_ngcontent-%COMP%]:root{--bs-blue: #0d6efd;--bs-indigo: #6610f2;--bs-purple: #6f42c1;--bs-pink: #d63384;--bs-red: #dc3545;--bs-orange: #fd7e14;--bs-yellow: #ffc107;--bs-green: #198754;--bs-teal: #20c997;--bs-cyan: #0dcaf0;--bs-white: #fff;--bs-gray: #6c757d;--bs-gray-dark: #343a40;--bs-gray-100: #f8f9fa;--bs-gray-200: #e9ecef;--bs-gray-300: #dee2e6;--bs-gray-400: #ced4da;--bs-gray-500: #adb5bd;--bs-gray-600: #6c757d;--bs-gray-700: #495057;--bs-gray-800: #343a40;--bs-gray-900: #212529;--bs-primary: #0d6efd;--bs-secondary: #6c757d;--bs-success: #198754;--bs-info: #0dcaf0;--bs-warning: #ffc107;--bs-danger: #dc3545;--bs-light: #f8f9fa;--bs-dark: #212529;--bs-primary-rgb: 13, 110, 253;--bs-secondary-rgb: 108, 117, 125;--bs-success-rgb: 25, 135, 84;--bs-info-rgb: 13, 202, 240;--bs-warning-rgb: 255, 193, 7;--bs-danger-rgb: 220, 53, 69;--bs-light-rgb: 248, 249, 250;--bs-dark-rgb: 33, 37, 41;--bs-white-rgb: 255, 255, 255;--bs-black-rgb: 0, 0, 0;--bs-body-color-rgb: 33, 37, 41;--bs-body-bg-rgb: 255, 255, 255;--bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0));--bs-body-font-family: var(--bs-font-sans-serif);--bs-body-font-size: 1rem;--bs-body-font-weight: 400;--bs-body-line-height: 1.5;--bs-body-color: #212529;--bs-body-bg: #fff}.container[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%], .container-xxl[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%]{width:100%;padding-right:var(--bs-gutter-x, .75rem);padding-left:var(--bs-gutter-x, .75rem);margin-right:auto;margin-left:auto}@media (min-width: 576px){.container-sm[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{max-width:540px}}@media (min-width: 768px){.container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{max-width:720px}}@media (min-width: 992px){.container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{max-width:960px}}@media (min-width: 1200px){.container-xl[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{max-width:1140px}}@media (min-width: 1400px){.container-xxl[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{max-width:1320px}}.row[_ngcontent-%COMP%]{--bs-gutter-x: 1.5rem;--bs-gutter-y: 0;display:flex;flex-wrap:wrap;margin-top:calc(-1 * var(--bs-gutter-y));margin-right:calc(-.5 * var(--bs-gutter-x));margin-left:calc(-.5 * var(--bs-gutter-x))}.row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{box-sizing:border-box;flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-top:var(--bs-gutter-y)}.col[_ngcontent-%COMP%]{flex:1 0 0%}.row-cols-auto[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.row-cols-1[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.row-cols-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.row-cols-3[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:33.3333333333%}.row-cols-4[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.row-cols-5[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:20%}.row-cols-6[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:16.6666666667%}.col-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.col-1[_ngcontent-%COMP%]{flex:0 0 auto;width:8.33333333%}.col-2[_ngcontent-%COMP%]{flex:0 0 auto;width:16.66666667%}.col-3[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.col-4[_ngcontent-%COMP%]{flex:0 0 auto;width:33.33333333%}.col-5[_ngcontent-%COMP%]{flex:0 0 auto;width:41.66666667%}.col-6[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.col-7[_ngcontent-%COMP%]{flex:0 0 auto;width:58.33333333%}.col-8[_ngcontent-%COMP%]{flex:0 0 auto;width:66.66666667%}.col-9[_ngcontent-%COMP%]{flex:0 0 auto;width:75%}.col-10[_ngcontent-%COMP%]{flex:0 0 auto;width:83.33333333%}.col-11[_ngcontent-%COMP%]{flex:0 0 auto;width:91.66666667%}.col-12[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.offset-1[_ngcontent-%COMP%]{margin-left:8.33333333%}.offset-2[_ngcontent-%COMP%]{margin-left:16.66666667%}.offset-3[_ngcontent-%COMP%]{margin-left:25%}.offset-4[_ngcontent-%COMP%]{margin-left:33.33333333%}.offset-5[_ngcontent-%COMP%]{margin-left:41.66666667%}.offset-6[_ngcontent-%COMP%]{margin-left:50%}.offset-7[_ngcontent-%COMP%]{margin-left:58.33333333%}.offset-8[_ngcontent-%COMP%]{margin-left:66.66666667%}.offset-9[_ngcontent-%COMP%]{margin-left:75%}.offset-10[_ngcontent-%COMP%]{margin-left:83.33333333%}.offset-11[_ngcontent-%COMP%]{margin-left:91.66666667%}.g-0[_ngcontent-%COMP%], .gx-0[_ngcontent-%COMP%]{--bs-gutter-x: 0}.g-0[_ngcontent-%COMP%], .gy-0[_ngcontent-%COMP%]{--bs-gutter-y: 0}.g-1[_ngcontent-%COMP%], .gx-1[_ngcontent-%COMP%]{--bs-gutter-x: .25rem}.g-1[_ngcontent-%COMP%], .gy-1[_ngcontent-%COMP%]{--bs-gutter-y: .25rem}.g-2[_ngcontent-%COMP%], .gx-2[_ngcontent-%COMP%]{--bs-gutter-x: .5rem}.g-2[_ngcontent-%COMP%], .gy-2[_ngcontent-%COMP%]{--bs-gutter-y: .5rem}.g-3[_ngcontent-%COMP%], .gx-3[_ngcontent-%COMP%]{--bs-gutter-x: 1rem}.g-3[_ngcontent-%COMP%], .gy-3[_ngcontent-%COMP%]{--bs-gutter-y: 1rem}.g-4[_ngcontent-%COMP%], .gx-4[_ngcontent-%COMP%]{--bs-gutter-x: 1.5rem}.g-4[_ngcontent-%COMP%], .gy-4[_ngcontent-%COMP%]{--bs-gutter-y: 1.5rem}.g-5[_ngcontent-%COMP%], .gx-5[_ngcontent-%COMP%]{--bs-gutter-x: 3rem}.g-5[_ngcontent-%COMP%], .gy-5[_ngcontent-%COMP%]{--bs-gutter-y: 3rem}@media (min-width: 576px){.col-sm[_ngcontent-%COMP%]{flex:1 0 0%}.row-cols-sm-auto[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.row-cols-sm-1[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.row-cols-sm-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.row-cols-sm-3[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.row-cols-sm-5[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:20%}.row-cols-sm-6[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:16.6666666667%}.col-sm-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.col-sm-1[_ngcontent-%COMP%]{flex:0 0 auto;width:8.33333333%}.col-sm-2[_ngcontent-%COMP%]{flex:0 0 auto;width:16.66666667%}.col-sm-3[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.col-sm-4[_ngcontent-%COMP%]{flex:0 0 auto;width:33.33333333%}.col-sm-5[_ngcontent-%COMP%]{flex:0 0 auto;width:41.66666667%}.col-sm-6[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.col-sm-7[_ngcontent-%COMP%]{flex:0 0 auto;width:58.33333333%}.col-sm-8[_ngcontent-%COMP%]{flex:0 0 auto;width:66.66666667%}.col-sm-9[_ngcontent-%COMP%]{flex:0 0 auto;width:75%}.col-sm-10[_ngcontent-%COMP%]{flex:0 0 auto;width:83.33333333%}.col-sm-11[_ngcontent-%COMP%]{flex:0 0 auto;width:91.66666667%}.col-sm-12[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.offset-sm-0[_ngcontent-%COMP%]{margin-left:0}.offset-sm-1[_ngcontent-%COMP%]{margin-left:8.33333333%}.offset-sm-2[_ngcontent-%COMP%]{margin-left:16.66666667%}.offset-sm-3[_ngcontent-%COMP%]{margin-left:25%}.offset-sm-4[_ngcontent-%COMP%]{margin-left:33.33333333%}.offset-sm-5[_ngcontent-%COMP%]{margin-left:41.66666667%}.offset-sm-6[_ngcontent-%COMP%]{margin-left:50%}.offset-sm-7[_ngcontent-%COMP%]{margin-left:58.33333333%}.offset-sm-8[_ngcontent-%COMP%]{margin-left:66.66666667%}.offset-sm-9[_ngcontent-%COMP%]{margin-left:75%}.offset-sm-10[_ngcontent-%COMP%]{margin-left:83.33333333%}.offset-sm-11[_ngcontent-%COMP%]{margin-left:91.66666667%}.g-sm-0[_ngcontent-%COMP%], .gx-sm-0[_ngcontent-%COMP%]{--bs-gutter-x: 0}.g-sm-0[_ngcontent-%COMP%], .gy-sm-0[_ngcontent-%COMP%]{--bs-gutter-y: 0}.g-sm-1[_ngcontent-%COMP%], .gx-sm-1[_ngcontent-%COMP%]{--bs-gutter-x: .25rem}.g-sm-1[_ngcontent-%COMP%], .gy-sm-1[_ngcontent-%COMP%]{--bs-gutter-y: .25rem}.g-sm-2[_ngcontent-%COMP%], .gx-sm-2[_ngcontent-%COMP%]{--bs-gutter-x: .5rem}.g-sm-2[_ngcontent-%COMP%], .gy-sm-2[_ngcontent-%COMP%]{--bs-gutter-y: .5rem}.g-sm-3[_ngcontent-%COMP%], .gx-sm-3[_ngcontent-%COMP%]{--bs-gutter-x: 1rem}.g-sm-3[_ngcontent-%COMP%], .gy-sm-3[_ngcontent-%COMP%]{--bs-gutter-y: 1rem}.g-sm-4[_ngcontent-%COMP%], .gx-sm-4[_ngcontent-%COMP%]{--bs-gutter-x: 1.5rem}.g-sm-4[_ngcontent-%COMP%], .gy-sm-4[_ngcontent-%COMP%]{--bs-gutter-y: 1.5rem}.g-sm-5[_ngcontent-%COMP%], .gx-sm-5[_ngcontent-%COMP%]{--bs-gutter-x: 3rem}.g-sm-5[_ngcontent-%COMP%], .gy-sm-5[_ngcontent-%COMP%]{--bs-gutter-y: 3rem}}@media (min-width: 768px){.col-md[_ngcontent-%COMP%]{flex:1 0 0%}.row-cols-md-auto[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.row-cols-md-1[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.row-cols-md-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.row-cols-md-3[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.row-cols-md-5[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:20%}.row-cols-md-6[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:16.6666666667%}.col-md-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.col-md-1[_ngcontent-%COMP%]{flex:0 0 auto;width:8.33333333%}.col-md-2[_ngcontent-%COMP%]{flex:0 0 auto;width:16.66666667%}.col-md-3[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.col-md-4[_ngcontent-%COMP%]{flex:0 0 auto;width:33.33333333%}.col-md-5[_ngcontent-%COMP%]{flex:0 0 auto;width:41.66666667%}.col-md-6[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.col-md-7[_ngcontent-%COMP%]{flex:0 0 auto;width:58.33333333%}.col-md-8[_ngcontent-%COMP%]{flex:0 0 auto;width:66.66666667%}.col-md-9[_ngcontent-%COMP%]{flex:0 0 auto;width:75%}.col-md-10[_ngcontent-%COMP%]{flex:0 0 auto;width:83.33333333%}.col-md-11[_ngcontent-%COMP%]{flex:0 0 auto;width:91.66666667%}.col-md-12[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.offset-md-0[_ngcontent-%COMP%]{margin-left:0}.offset-md-1[_ngcontent-%COMP%]{margin-left:8.33333333%}.offset-md-2[_ngcontent-%COMP%]{margin-left:16.66666667%}.offset-md-3[_ngcontent-%COMP%]{margin-left:25%}.offset-md-4[_ngcontent-%COMP%]{margin-left:33.33333333%}.offset-md-5[_ngcontent-%COMP%]{margin-left:41.66666667%}.offset-md-6[_ngcontent-%COMP%]{margin-left:50%}.offset-md-7[_ngcontent-%COMP%]{margin-left:58.33333333%}.offset-md-8[_ngcontent-%COMP%]{margin-left:66.66666667%}.offset-md-9[_ngcontent-%COMP%]{margin-left:75%}.offset-md-10[_ngcontent-%COMP%]{margin-left:83.33333333%}.offset-md-11[_ngcontent-%COMP%]{margin-left:91.66666667%}.g-md-0[_ngcontent-%COMP%], .gx-md-0[_ngcontent-%COMP%]{--bs-gutter-x: 0}.g-md-0[_ngcontent-%COMP%], .gy-md-0[_ngcontent-%COMP%]{--bs-gutter-y: 0}.g-md-1[_ngcontent-%COMP%], .gx-md-1[_ngcontent-%COMP%]{--bs-gutter-x: .25rem}.g-md-1[_ngcontent-%COMP%], .gy-md-1[_ngcontent-%COMP%]{--bs-gutter-y: .25rem}.g-md-2[_ngcontent-%COMP%], .gx-md-2[_ngcontent-%COMP%]{--bs-gutter-x: .5rem}.g-md-2[_ngcontent-%COMP%], .gy-md-2[_ngcontent-%COMP%]{--bs-gutter-y: .5rem}.g-md-3[_ngcontent-%COMP%], .gx-md-3[_ngcontent-%COMP%]{--bs-gutter-x: 1rem}.g-md-3[_ngcontent-%COMP%], .gy-md-3[_ngcontent-%COMP%]{--bs-gutter-y: 1rem}.g-md-4[_ngcontent-%COMP%], .gx-md-4[_ngcontent-%COMP%]{--bs-gutter-x: 1.5rem}.g-md-4[_ngcontent-%COMP%], .gy-md-4[_ngcontent-%COMP%]{--bs-gutter-y: 1.5rem}.g-md-5[_ngcontent-%COMP%], .gx-md-5[_ngcontent-%COMP%]{--bs-gutter-x: 3rem}.g-md-5[_ngcontent-%COMP%], .gy-md-5[_ngcontent-%COMP%]{--bs-gutter-y: 3rem}}@media (min-width: 992px){.col-lg[_ngcontent-%COMP%]{flex:1 0 0%}.row-cols-lg-auto[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.row-cols-lg-1[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.row-cols-lg-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.row-cols-lg-3[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.row-cols-lg-5[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:20%}.row-cols-lg-6[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:16.6666666667%}.col-lg-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.col-lg-1[_ngcontent-%COMP%]{flex:0 0 auto;width:8.33333333%}.col-lg-2[_ngcontent-%COMP%]{flex:0 0 auto;width:16.66666667%}.col-lg-3[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.col-lg-4[_ngcontent-%COMP%]{flex:0 0 auto;width:33.33333333%}.col-lg-5[_ngcontent-%COMP%]{flex:0 0 auto;width:41.66666667%}.col-lg-6[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.col-lg-7[_ngcontent-%COMP%]{flex:0 0 auto;width:58.33333333%}.col-lg-8[_ngcontent-%COMP%]{flex:0 0 auto;width:66.66666667%}.col-lg-9[_ngcontent-%COMP%]{flex:0 0 auto;width:75%}.col-lg-10[_ngcontent-%COMP%]{flex:0 0 auto;width:83.33333333%}.col-lg-11[_ngcontent-%COMP%]{flex:0 0 auto;width:91.66666667%}.col-lg-12[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.offset-lg-0[_ngcontent-%COMP%]{margin-left:0}.offset-lg-1[_ngcontent-%COMP%]{margin-left:8.33333333%}.offset-lg-2[_ngcontent-%COMP%]{margin-left:16.66666667%}.offset-lg-3[_ngcontent-%COMP%]{margin-left:25%}.offset-lg-4[_ngcontent-%COMP%]{margin-left:33.33333333%}.offset-lg-5[_ngcontent-%COMP%]{margin-left:41.66666667%}.offset-lg-6[_ngcontent-%COMP%]{margin-left:50%}.offset-lg-7[_ngcontent-%COMP%]{margin-left:58.33333333%}.offset-lg-8[_ngcontent-%COMP%]{margin-left:66.66666667%}.offset-lg-9[_ngcontent-%COMP%]{margin-left:75%}.offset-lg-10[_ngcontent-%COMP%]{margin-left:83.33333333%}.offset-lg-11[_ngcontent-%COMP%]{margin-left:91.66666667%}.g-lg-0[_ngcontent-%COMP%], .gx-lg-0[_ngcontent-%COMP%]{--bs-gutter-x: 0}.g-lg-0[_ngcontent-%COMP%], .gy-lg-0[_ngcontent-%COMP%]{--bs-gutter-y: 0}.g-lg-1[_ngcontent-%COMP%], .gx-lg-1[_ngcontent-%COMP%]{--bs-gutter-x: .25rem}.g-lg-1[_ngcontent-%COMP%], .gy-lg-1[_ngcontent-%COMP%]{--bs-gutter-y: .25rem}.g-lg-2[_ngcontent-%COMP%], .gx-lg-2[_ngcontent-%COMP%]{--bs-gutter-x: .5rem}.g-lg-2[_ngcontent-%COMP%], .gy-lg-2[_ngcontent-%COMP%]{--bs-gutter-y: .5rem}.g-lg-3[_ngcontent-%COMP%], .gx-lg-3[_ngcontent-%COMP%]{--bs-gutter-x: 1rem}.g-lg-3[_ngcontent-%COMP%], .gy-lg-3[_ngcontent-%COMP%]{--bs-gutter-y: 1rem}.g-lg-4[_ngcontent-%COMP%], .gx-lg-4[_ngcontent-%COMP%]{--bs-gutter-x: 1.5rem}.g-lg-4[_ngcontent-%COMP%], .gy-lg-4[_ngcontent-%COMP%]{--bs-gutter-y: 1.5rem}.g-lg-5[_ngcontent-%COMP%], .gx-lg-5[_ngcontent-%COMP%]{--bs-gutter-x: 3rem}.g-lg-5[_ngcontent-%COMP%], .gy-lg-5[_ngcontent-%COMP%]{--bs-gutter-y: 3rem}}@media (min-width: 1200px){.col-xl[_ngcontent-%COMP%]{flex:1 0 0%}.row-cols-xl-auto[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.row-cols-xl-1[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.row-cols-xl-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.row-cols-xl-3[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.row-cols-xl-5[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:20%}.row-cols-xl-6[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:16.6666666667%}.col-xl-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.col-xl-1[_ngcontent-%COMP%]{flex:0 0 auto;width:8.33333333%}.col-xl-2[_ngcontent-%COMP%]{flex:0 0 auto;width:16.66666667%}.col-xl-3[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.col-xl-4[_ngcontent-%COMP%]{flex:0 0 auto;width:33.33333333%}.col-xl-5[_ngcontent-%COMP%]{flex:0 0 auto;width:41.66666667%}.col-xl-6[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.col-xl-7[_ngcontent-%COMP%]{flex:0 0 auto;width:58.33333333%}.col-xl-8[_ngcontent-%COMP%]{flex:0 0 auto;width:66.66666667%}.col-xl-9[_ngcontent-%COMP%]{flex:0 0 auto;width:75%}.col-xl-10[_ngcontent-%COMP%]{flex:0 0 auto;width:83.33333333%}.col-xl-11[_ngcontent-%COMP%]{flex:0 0 auto;width:91.66666667%}.col-xl-12[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.offset-xl-0[_ngcontent-%COMP%]{margin-left:0}.offset-xl-1[_ngcontent-%COMP%]{margin-left:8.33333333%}.offset-xl-2[_ngcontent-%COMP%]{margin-left:16.66666667%}.offset-xl-3[_ngcontent-%COMP%]{margin-left:25%}.offset-xl-4[_ngcontent-%COMP%]{margin-left:33.33333333%}.offset-xl-5[_ngcontent-%COMP%]{margin-left:41.66666667%}.offset-xl-6[_ngcontent-%COMP%]{margin-left:50%}.offset-xl-7[_ngcontent-%COMP%]{margin-left:58.33333333%}.offset-xl-8[_ngcontent-%COMP%]{margin-left:66.66666667%}.offset-xl-9[_ngcontent-%COMP%]{margin-left:75%}.offset-xl-10[_ngcontent-%COMP%]{margin-left:83.33333333%}.offset-xl-11[_ngcontent-%COMP%]{margin-left:91.66666667%}.g-xl-0[_ngcontent-%COMP%], .gx-xl-0[_ngcontent-%COMP%]{--bs-gutter-x: 0}.g-xl-0[_ngcontent-%COMP%], .gy-xl-0[_ngcontent-%COMP%]{--bs-gutter-y: 0}.g-xl-1[_ngcontent-%COMP%], .gx-xl-1[_ngcontent-%COMP%]{--bs-gutter-x: .25rem}.g-xl-1[_ngcontent-%COMP%], .gy-xl-1[_ngcontent-%COMP%]{--bs-gutter-y: .25rem}.g-xl-2[_ngcontent-%COMP%], .gx-xl-2[_ngcontent-%COMP%]{--bs-gutter-x: .5rem}.g-xl-2[_ngcontent-%COMP%], .gy-xl-2[_ngcontent-%COMP%]{--bs-gutter-y: .5rem}.g-xl-3[_ngcontent-%COMP%], .gx-xl-3[_ngcontent-%COMP%]{--bs-gutter-x: 1rem}.g-xl-3[_ngcontent-%COMP%], .gy-xl-3[_ngcontent-%COMP%]{--bs-gutter-y: 1rem}.g-xl-4[_ngcontent-%COMP%], .gx-xl-4[_ngcontent-%COMP%]{--bs-gutter-x: 1.5rem}.g-xl-4[_ngcontent-%COMP%], .gy-xl-4[_ngcontent-%COMP%]{--bs-gutter-y: 1.5rem}.g-xl-5[_ngcontent-%COMP%], .gx-xl-5[_ngcontent-%COMP%]{--bs-gutter-x: 3rem}.g-xl-5[_ngcontent-%COMP%], .gy-xl-5[_ngcontent-%COMP%]{--bs-gutter-y: 3rem}}@media (min-width: 1400px){.col-xxl[_ngcontent-%COMP%]{flex:1 0 0%}.row-cols-xxl-auto[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.row-cols-xxl-1[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.row-cols-xxl-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.row-cols-xxl-3[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.row-cols-xxl-5[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:20%}.row-cols-xxl-6[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:16.6666666667%}.col-xxl-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.col-xxl-1[_ngcontent-%COMP%]{flex:0 0 auto;width:8.33333333%}.col-xxl-2[_ngcontent-%COMP%]{flex:0 0 auto;width:16.66666667%}.col-xxl-3[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.col-xxl-4[_ngcontent-%COMP%]{flex:0 0 auto;width:33.33333333%}.col-xxl-5[_ngcontent-%COMP%]{flex:0 0 auto;width:41.66666667%}.col-xxl-6[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.col-xxl-7[_ngcontent-%COMP%]{flex:0 0 auto;width:58.33333333%}.col-xxl-8[_ngcontent-%COMP%]{flex:0 0 auto;width:66.66666667%}.col-xxl-9[_ngcontent-%COMP%]{flex:0 0 auto;width:75%}.col-xxl-10[_ngcontent-%COMP%]{flex:0 0 auto;width:83.33333333%}.col-xxl-11[_ngcontent-%COMP%]{flex:0 0 auto;width:91.66666667%}.col-xxl-12[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.offset-xxl-0[_ngcontent-%COMP%]{margin-left:0}.offset-xxl-1[_ngcontent-%COMP%]{margin-left:8.33333333%}.offset-xxl-2[_ngcontent-%COMP%]{margin-left:16.66666667%}.offset-xxl-3[_ngcontent-%COMP%]{margin-left:25%}.offset-xxl-4[_ngcontent-%COMP%]{margin-left:33.33333333%}.offset-xxl-5[_ngcontent-%COMP%]{margin-left:41.66666667%}.offset-xxl-6[_ngcontent-%COMP%]{margin-left:50%}.offset-xxl-7[_ngcontent-%COMP%]{margin-left:58.33333333%}.offset-xxl-8[_ngcontent-%COMP%]{margin-left:66.66666667%}.offset-xxl-9[_ngcontent-%COMP%]{margin-left:75%}.offset-xxl-10[_ngcontent-%COMP%]{margin-left:83.33333333%}.offset-xxl-11[_ngcontent-%COMP%]{margin-left:91.66666667%}.g-xxl-0[_ngcontent-%COMP%], .gx-xxl-0[_ngcontent-%COMP%]{--bs-gutter-x: 0}.g-xxl-0[_ngcontent-%COMP%], .gy-xxl-0[_ngcontent-%COMP%]{--bs-gutter-y: 0}.g-xxl-1[_ngcontent-%COMP%], .gx-xxl-1[_ngcontent-%COMP%]{--bs-gutter-x: .25rem}.g-xxl-1[_ngcontent-%COMP%], .gy-xxl-1[_ngcontent-%COMP%]{--bs-gutter-y: .25rem}.g-xxl-2[_ngcontent-%COMP%], .gx-xxl-2[_ngcontent-%COMP%]{--bs-gutter-x: .5rem}.g-xxl-2[_ngcontent-%COMP%], .gy-xxl-2[_ngcontent-%COMP%]{--bs-gutter-y: .5rem}.g-xxl-3[_ngcontent-%COMP%], .gx-xxl-3[_ngcontent-%COMP%]{--bs-gutter-x: 1rem}.g-xxl-3[_ngcontent-%COMP%], .gy-xxl-3[_ngcontent-%COMP%]{--bs-gutter-y: 1rem}.g-xxl-4[_ngcontent-%COMP%], .gx-xxl-4[_ngcontent-%COMP%]{--bs-gutter-x: 1.5rem}.g-xxl-4[_ngcontent-%COMP%], .gy-xxl-4[_ngcontent-%COMP%]{--bs-gutter-y: 1.5rem}.g-xxl-5[_ngcontent-%COMP%], .gx-xxl-5[_ngcontent-%COMP%]{--bs-gutter-x: 3rem}.g-xxl-5[_ngcontent-%COMP%], .gy-xxl-5[_ngcontent-%COMP%]{--bs-gutter-y: 3rem}}.d-inline[_ngcontent-%COMP%]{display:inline!important}.d-inline-block[_ngcontent-%COMP%]{display:inline-block!important}.d-block[_ngcontent-%COMP%]{display:block!important}.d-grid[_ngcontent-%COMP%]{display:grid!important}.d-table[_ngcontent-%COMP%]{display:table!important}.d-table-row[_ngcontent-%COMP%]{display:table-row!important}.d-table-cell[_ngcontent-%COMP%]{display:table-cell!important}.d-flex[_ngcontent-%COMP%]{display:flex!important}.d-inline-flex[_ngcontent-%COMP%]{display:inline-flex!important}.d-none[_ngcontent-%COMP%]{display:none!important}.flex-fill[_ngcontent-%COMP%]{flex:1 1 auto!important}.flex-row[_ngcontent-%COMP%]{flex-direction:row!important}.flex-column[_ngcontent-%COMP%]{flex-direction:column!important}.flex-row-reverse[_ngcontent-%COMP%]{flex-direction:row-reverse!important}.flex-column-reverse[_ngcontent-%COMP%]{flex-direction:column-reverse!important}.flex-grow-0[_ngcontent-%COMP%]{flex-grow:0!important}.flex-grow-1[_ngcontent-%COMP%]{flex-grow:1!important}.flex-shrink-0[_ngcontent-%COMP%]{flex-shrink:0!important}.flex-shrink-1[_ngcontent-%COMP%]{flex-shrink:1!important}.flex-wrap[_ngcontent-%COMP%]{flex-wrap:wrap!important}.flex-nowrap[_ngcontent-%COMP%]{flex-wrap:nowrap!important}.flex-wrap-reverse[_ngcontent-%COMP%]{flex-wrap:wrap-reverse!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:flex-start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:flex-end!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-evenly[_ngcontent-%COMP%]{justify-content:space-evenly!important}.align-items-start[_ngcontent-%COMP%]{align-items:flex-start!important}.align-items-end[_ngcontent-%COMP%]{align-items:flex-end!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-stretch[_ngcontent-%COMP%]{align-items:stretch!important}.align-content-start[_ngcontent-%COMP%]{align-content:flex-start!important}.align-content-end[_ngcontent-%COMP%]{align-content:flex-end!important}.align-content-center[_ngcontent-%COMP%]{align-content:center!important}.align-content-between[_ngcontent-%COMP%]{align-content:space-between!important}.align-content-around[_ngcontent-%COMP%]{align-content:space-around!important}.align-content-stretch[_ngcontent-%COMP%]{align-content:stretch!important}.align-self-auto[_ngcontent-%COMP%]{align-self:auto!important}.align-self-start[_ngcontent-%COMP%]{align-self:flex-start!important}.align-self-end[_ngcontent-%COMP%]{align-self:flex-end!important}.align-self-center[_ngcontent-%COMP%]{align-self:center!important}.align-self-baseline[_ngcontent-%COMP%]{align-self:baseline!important}.align-self-stretch[_ngcontent-%COMP%]{align-self:stretch!important}.order-first[_ngcontent-%COMP%]{order:-1!important}.order-0[_ngcontent-%COMP%]{order:0!important}.order-1[_ngcontent-%COMP%]{order:1!important}.order-2[_ngcontent-%COMP%]{order:2!important}.order-3[_ngcontent-%COMP%]{order:3!important}.order-4[_ngcontent-%COMP%]{order:4!important}.order-5[_ngcontent-%COMP%]{order:5!important}.order-last[_ngcontent-%COMP%]{order:6!important}.m-0[_ngcontent-%COMP%]{margin:0!important}.m-1[_ngcontent-%COMP%]{margin:.25rem!important}.m-2[_ngcontent-%COMP%]{margin:.5rem!important}.m-3[_ngcontent-%COMP%]{margin:1rem!important}.m-4[_ngcontent-%COMP%]{margin:1.5rem!important}.m-5[_ngcontent-%COMP%]{margin:3rem!important}.m-auto[_ngcontent-%COMP%]{margin:auto!important}.mx-0[_ngcontent-%COMP%]{margin-right:0!important;margin-left:0!important}.mx-1[_ngcontent-%COMP%]{margin-right:.25rem!important;margin-left:.25rem!important}.mx-2[_ngcontent-%COMP%]{margin-right:.5rem!important;margin-left:.5rem!important}.mx-3[_ngcontent-%COMP%]{margin-right:1rem!important;margin-left:1rem!important}.mx-4[_ngcontent-%COMP%]{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-5[_ngcontent-%COMP%]{margin-right:3rem!important;margin-left:3rem!important}.mx-auto[_ngcontent-%COMP%]{margin-right:auto!important;margin-left:auto!important}.my-0[_ngcontent-%COMP%]{margin-top:0!important;margin-bottom:0!important}.my-1[_ngcontent-%COMP%]{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-2[_ngcontent-%COMP%]{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-3[_ngcontent-%COMP%]{margin-top:1rem!important;margin-bottom:1rem!important}.my-4[_ngcontent-%COMP%]{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-5[_ngcontent-%COMP%]{margin-top:3rem!important;margin-bottom:3rem!important}.my-auto[_ngcontent-%COMP%]{margin-top:auto!important;margin-bottom:auto!important}.mt-0[_ngcontent-%COMP%]{margin-top:0!important}.mt-1[_ngcontent-%COMP%]{margin-top:.25rem!important}.mt-2[_ngcontent-%COMP%]{margin-top:.5rem!important}.mt-3[_ngcontent-%COMP%]{margin-top:1rem!important}.mt-4[_ngcontent-%COMP%]{margin-top:1.5rem!important}.mt-5[_ngcontent-%COMP%]{margin-top:3rem!important}.mt-auto[_ngcontent-%COMP%]{margin-top:auto!important}.me-0[_ngcontent-%COMP%]{margin-right:0!important}.me-1[_ngcontent-%COMP%]{margin-right:.25rem!important}.me-2[_ngcontent-%COMP%]{margin-right:.5rem!important}.me-3[_ngcontent-%COMP%]{margin-right:1rem!important}.me-4[_ngcontent-%COMP%]{margin-right:1.5rem!important}.me-5[_ngcontent-%COMP%]{margin-right:3rem!important}.me-auto[_ngcontent-%COMP%]{margin-right:auto!important}.mb-0[_ngcontent-%COMP%]{margin-bottom:0!important}.mb-1[_ngcontent-%COMP%]{margin-bottom:.25rem!important}.mb-2[_ngcontent-%COMP%]{margin-bottom:.5rem!important}.mb-3[_ngcontent-%COMP%]{margin-bottom:1rem!important}.mb-4[_ngcontent-%COMP%]{margin-bottom:1.5rem!important}.mb-5[_ngcontent-%COMP%]{margin-bottom:3rem!important}.mb-auto[_ngcontent-%COMP%]{margin-bottom:auto!important}.ms-0[_ngcontent-%COMP%]{margin-left:0!important}.ms-1[_ngcontent-%COMP%]{margin-left:.25rem!important}.ms-2[_ngcontent-%COMP%]{margin-left:.5rem!important}.ms-3[_ngcontent-%COMP%]{margin-left:1rem!important}.ms-4[_ngcontent-%COMP%]{margin-left:1.5rem!important}.ms-5[_ngcontent-%COMP%]{margin-left:3rem!important}.ms-auto[_ngcontent-%COMP%]{margin-left:auto!important}.p-0[_ngcontent-%COMP%]{padding:0!important}.p-1[_ngcontent-%COMP%]{padding:.25rem!important}.p-2[_ngcontent-%COMP%]{padding:.5rem!important}.p-3[_ngcontent-%COMP%]{padding:1rem!important}.p-4[_ngcontent-%COMP%]{padding:1.5rem!important}.p-5[_ngcontent-%COMP%]{padding:3rem!important}.px-0[_ngcontent-%COMP%]{padding-right:0!important;padding-left:0!important}.px-1[_ngcontent-%COMP%]{padding-right:.25rem!important;padding-left:.25rem!important}.px-2[_ngcontent-%COMP%]{padding-right:.5rem!important;padding-left:.5rem!important}.px-3[_ngcontent-%COMP%]{padding-right:1rem!important;padding-left:1rem!important}.px-4[_ngcontent-%COMP%]{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-5[_ngcontent-%COMP%]{padding-right:3rem!important;padding-left:3rem!important}.py-0[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}.py-1[_ngcontent-%COMP%]{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-2[_ngcontent-%COMP%]{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-3[_ngcontent-%COMP%]{padding-top:1rem!important;padding-bottom:1rem!important}.py-4[_ngcontent-%COMP%]{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-5[_ngcontent-%COMP%]{padding-top:3rem!important;padding-bottom:3rem!important}.pt-0[_ngcontent-%COMP%]{padding-top:0!important}.pt-1[_ngcontent-%COMP%]{padding-top:.25rem!important}.pt-2[_ngcontent-%COMP%]{padding-top:.5rem!important}.pt-3[_ngcontent-%COMP%]{padding-top:1rem!important}.pt-4[_ngcontent-%COMP%]{padding-top:1.5rem!important}.pt-5[_ngcontent-%COMP%]{padding-top:3rem!important}.pe-0[_ngcontent-%COMP%]{padding-right:0!important}.pe-1[_ngcontent-%COMP%]{padding-right:.25rem!important}.pe-2[_ngcontent-%COMP%]{padding-right:.5rem!important}.pe-3[_ngcontent-%COMP%]{padding-right:1rem!important}.pe-4[_ngcontent-%COMP%]{padding-right:1.5rem!important}.pe-5[_ngcontent-%COMP%]{padding-right:3rem!important}.pb-0[_ngcontent-%COMP%]{padding-bottom:0!important}.pb-1[_ngcontent-%COMP%]{padding-bottom:.25rem!important}.pb-2[_ngcontent-%COMP%]{padding-bottom:.5rem!important}.pb-3[_ngcontent-%COMP%]{padding-bottom:1rem!important}.pb-4[_ngcontent-%COMP%]{padding-bottom:1.5rem!important}.pb-5[_ngcontent-%COMP%]{padding-bottom:3rem!important}.ps-0[_ngcontent-%COMP%]{padding-left:0!important}.ps-1[_ngcontent-%COMP%]{padding-left:.25rem!important}.ps-2[_ngcontent-%COMP%]{padding-left:.5rem!important}.ps-3[_ngcontent-%COMP%]{padding-left:1rem!important}.ps-4[_ngcontent-%COMP%]{padding-left:1.5rem!important}.ps-5[_ngcontent-%COMP%]{padding-left:3rem!important}@media (min-width: 576px){.d-sm-inline[_ngcontent-%COMP%]{display:inline!important}.d-sm-inline-block[_ngcontent-%COMP%]{display:inline-block!important}.d-sm-block[_ngcontent-%COMP%]{display:block!important}.d-sm-grid[_ngcontent-%COMP%]{display:grid!important}.d-sm-table[_ngcontent-%COMP%]{display:table!important}.d-sm-table-row[_ngcontent-%COMP%]{display:table-row!important}.d-sm-table-cell[_ngcontent-%COMP%]{display:table-cell!important}.d-sm-flex[_ngcontent-%COMP%]{display:flex!important}.d-sm-inline-flex[_ngcontent-%COMP%]{display:inline-flex!important}.d-sm-none[_ngcontent-%COMP%]{display:none!important}.flex-sm-fill[_ngcontent-%COMP%]{flex:1 1 auto!important}.flex-sm-row[_ngcontent-%COMP%]{flex-direction:row!important}.flex-sm-column[_ngcontent-%COMP%]{flex-direction:column!important}.flex-sm-row-reverse[_ngcontent-%COMP%]{flex-direction:row-reverse!important}.flex-sm-column-reverse[_ngcontent-%COMP%]{flex-direction:column-reverse!important}.flex-sm-grow-0[_ngcontent-%COMP%]{flex-grow:0!important}.flex-sm-grow-1[_ngcontent-%COMP%]{flex-grow:1!important}.flex-sm-shrink-0[_ngcontent-%COMP%]{flex-shrink:0!important}.flex-sm-shrink-1[_ngcontent-%COMP%]{flex-shrink:1!important}.flex-sm-wrap[_ngcontent-%COMP%]{flex-wrap:wrap!important}.flex-sm-nowrap[_ngcontent-%COMP%]{flex-wrap:nowrap!important}.flex-sm-wrap-reverse[_ngcontent-%COMP%]{flex-wrap:wrap-reverse!important}.justify-content-sm-start[_ngcontent-%COMP%]{justify-content:flex-start!important}.justify-content-sm-end[_ngcontent-%COMP%]{justify-content:flex-end!important}.justify-content-sm-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-sm-between[_ngcontent-%COMP%]{justify-content:space-between!important}.justify-content-sm-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-sm-evenly[_ngcontent-%COMP%]{justify-content:space-evenly!important}.align-items-sm-start[_ngcontent-%COMP%]{align-items:flex-start!important}.align-items-sm-end[_ngcontent-%COMP%]{align-items:flex-end!important}.align-items-sm-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-sm-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-sm-stretch[_ngcontent-%COMP%]{align-items:stretch!important}.align-content-sm-start[_ngcontent-%COMP%]{align-content:flex-start!important}.align-content-sm-end[_ngcontent-%COMP%]{align-content:flex-end!important}.align-content-sm-center[_ngcontent-%COMP%]{align-content:center!important}.align-content-sm-between[_ngcontent-%COMP%]{align-content:space-between!important}.align-content-sm-around[_ngcontent-%COMP%]{align-content:space-around!important}.align-content-sm-stretch[_ngcontent-%COMP%]{align-content:stretch!important}.align-self-sm-auto[_ngcontent-%COMP%]{align-self:auto!important}.align-self-sm-start[_ngcontent-%COMP%]{align-self:flex-start!important}.align-self-sm-end[_ngcontent-%COMP%]{align-self:flex-end!important}.align-self-sm-center[_ngcontent-%COMP%]{align-self:center!important}.align-self-sm-baseline[_ngcontent-%COMP%]{align-self:baseline!important}.align-self-sm-stretch[_ngcontent-%COMP%]{align-self:stretch!important}.order-sm-first[_ngcontent-%COMP%]{order:-1!important}.order-sm-0[_ngcontent-%COMP%]{order:0!important}.order-sm-1[_ngcontent-%COMP%]{order:1!important}.order-sm-2[_ngcontent-%COMP%]{order:2!important}.order-sm-3[_ngcontent-%COMP%]{order:3!important}.order-sm-4[_ngcontent-%COMP%]{order:4!important}.order-sm-5[_ngcontent-%COMP%]{order:5!important}.order-sm-last[_ngcontent-%COMP%]{order:6!important}.m-sm-0[_ngcontent-%COMP%]{margin:0!important}.m-sm-1[_ngcontent-%COMP%]{margin:.25rem!important}.m-sm-2[_ngcontent-%COMP%]{margin:.5rem!important}.m-sm-3[_ngcontent-%COMP%]{margin:1rem!important}.m-sm-4[_ngcontent-%COMP%]{margin:1.5rem!important}.m-sm-5[_ngcontent-%COMP%]{margin:3rem!important}.m-sm-auto[_ngcontent-%COMP%]{margin:auto!important}.mx-sm-0[_ngcontent-%COMP%]{margin-right:0!important;margin-left:0!important}.mx-sm-1[_ngcontent-%COMP%]{margin-right:.25rem!important;margin-left:.25rem!important}.mx-sm-2[_ngcontent-%COMP%]{margin-right:.5rem!important;margin-left:.5rem!important}.mx-sm-3[_ngcontent-%COMP%]{margin-right:1rem!important;margin-left:1rem!important}.mx-sm-4[_ngcontent-%COMP%]{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-sm-5[_ngcontent-%COMP%]{margin-right:3rem!important;margin-left:3rem!important}.mx-sm-auto[_ngcontent-%COMP%]{margin-right:auto!important;margin-left:auto!important}.my-sm-0[_ngcontent-%COMP%]{margin-top:0!important;margin-bottom:0!important}.my-sm-1[_ngcontent-%COMP%]{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-sm-2[_ngcontent-%COMP%]{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-sm-3[_ngcontent-%COMP%]{margin-top:1rem!important;margin-bottom:1rem!important}.my-sm-4[_ngcontent-%COMP%]{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-sm-5[_ngcontent-%COMP%]{margin-top:3rem!important;margin-bottom:3rem!important}.my-sm-auto[_ngcontent-%COMP%]{margin-top:auto!important;margin-bottom:auto!important}.mt-sm-0[_ngcontent-%COMP%]{margin-top:0!important}.mt-sm-1[_ngcontent-%COMP%]{margin-top:.25rem!important}.mt-sm-2[_ngcontent-%COMP%]{margin-top:.5rem!important}.mt-sm-3[_ngcontent-%COMP%]{margin-top:1rem!important}.mt-sm-4[_ngcontent-%COMP%]{margin-top:1.5rem!important}.mt-sm-5[_ngcontent-%COMP%]{margin-top:3rem!important}.mt-sm-auto[_ngcontent-%COMP%]{margin-top:auto!important}.me-sm-0[_ngcontent-%COMP%]{margin-right:0!important}.me-sm-1[_ngcontent-%COMP%]{margin-right:.25rem!important}.me-sm-2[_ngcontent-%COMP%]{margin-right:.5rem!important}.me-sm-3[_ngcontent-%COMP%]{margin-right:1rem!important}.me-sm-4[_ngcontent-%COMP%]{margin-right:1.5rem!important}.me-sm-5[_ngcontent-%COMP%]{margin-right:3rem!important}.me-sm-auto[_ngcontent-%COMP%]{margin-right:auto!important}.mb-sm-0[_ngcontent-%COMP%]{margin-bottom:0!important}.mb-sm-1[_ngcontent-%COMP%]{margin-bottom:.25rem!important}.mb-sm-2[_ngcontent-%COMP%]{margin-bottom:.5rem!important}.mb-sm-3[_ngcontent-%COMP%]{margin-bottom:1rem!important}.mb-sm-4[_ngcontent-%COMP%]{margin-bottom:1.5rem!important}.mb-sm-5[_ngcontent-%COMP%]{margin-bottom:3rem!important}.mb-sm-auto[_ngcontent-%COMP%]{margin-bottom:auto!important}.ms-sm-0[_ngcontent-%COMP%]{margin-left:0!important}.ms-sm-1[_ngcontent-%COMP%]{margin-left:.25rem!important}.ms-sm-2[_ngcontent-%COMP%]{margin-left:.5rem!important}.ms-sm-3[_ngcontent-%COMP%]{margin-left:1rem!important}.ms-sm-4[_ngcontent-%COMP%]{margin-left:1.5rem!important}.ms-sm-5[_ngcontent-%COMP%]{margin-left:3rem!important}.ms-sm-auto[_ngcontent-%COMP%]{margin-left:auto!important}.p-sm-0[_ngcontent-%COMP%]{padding:0!important}.p-sm-1[_ngcontent-%COMP%]{padding:.25rem!important}.p-sm-2[_ngcontent-%COMP%]{padding:.5rem!important}.p-sm-3[_ngcontent-%COMP%]{padding:1rem!important}.p-sm-4[_ngcontent-%COMP%]{padding:1.5rem!important}.p-sm-5[_ngcontent-%COMP%]{padding:3rem!important}.px-sm-0[_ngcontent-%COMP%]{padding-right:0!important;padding-left:0!important}.px-sm-1[_ngcontent-%COMP%]{padding-right:.25rem!important;padding-left:.25rem!important}.px-sm-2[_ngcontent-%COMP%]{padding-right:.5rem!important;padding-left:.5rem!important}.px-sm-3[_ngcontent-%COMP%]{padding-right:1rem!important;padding-left:1rem!important}.px-sm-4[_ngcontent-%COMP%]{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-sm-5[_ngcontent-%COMP%]{padding-right:3rem!important;padding-left:3rem!important}.py-sm-0[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}.py-sm-1[_ngcontent-%COMP%]{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-sm-2[_ngcontent-%COMP%]{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-sm-3[_ngcontent-%COMP%]{padding-top:1rem!important;padding-bottom:1rem!important}.py-sm-4[_ngcontent-%COMP%]{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-sm-5[_ngcontent-%COMP%]{padding-top:3rem!important;padding-bottom:3rem!important}.pt-sm-0[_ngcontent-%COMP%]{padding-top:0!important}.pt-sm-1[_ngcontent-%COMP%]{padding-top:.25rem!important}.pt-sm-2[_ngcontent-%COMP%]{padding-top:.5rem!important}.pt-sm-3[_ngcontent-%COMP%]{padding-top:1rem!important}.pt-sm-4[_ngcontent-%COMP%]{padding-top:1.5rem!important}.pt-sm-5[_ngcontent-%COMP%]{padding-top:3rem!important}.pe-sm-0[_ngcontent-%COMP%]{padding-right:0!important}.pe-sm-1[_ngcontent-%COMP%]{padding-right:.25rem!important}.pe-sm-2[_ngcontent-%COMP%]{padding-right:.5rem!important}.pe-sm-3[_ngcontent-%COMP%]{padding-right:1rem!important}.pe-sm-4[_ngcontent-%COMP%]{padding-right:1.5rem!important}.pe-sm-5[_ngcontent-%COMP%]{padding-right:3rem!important}.pb-sm-0[_ngcontent-%COMP%]{padding-bottom:0!important}.pb-sm-1[_ngcontent-%COMP%]{padding-bottom:.25rem!important}.pb-sm-2[_ngcontent-%COMP%]{padding-bottom:.5rem!important}.pb-sm-3[_ngcontent-%COMP%]{padding-bottom:1rem!important}.pb-sm-4[_ngcontent-%COMP%]{padding-bottom:1.5rem!important}.pb-sm-5[_ngcontent-%COMP%]{padding-bottom:3rem!important}.ps-sm-0[_ngcontent-%COMP%]{padding-left:0!important}.ps-sm-1[_ngcontent-%COMP%]{padding-left:.25rem!important}.ps-sm-2[_ngcontent-%COMP%]{padding-left:.5rem!important}.ps-sm-3[_ngcontent-%COMP%]{padding-left:1rem!important}.ps-sm-4[_ngcontent-%COMP%]{padding-left:1.5rem!important}.ps-sm-5[_ngcontent-%COMP%]{padding-left:3rem!important}}@media (min-width: 768px){.d-md-inline[_ngcontent-%COMP%]{display:inline!important}.d-md-inline-block[_ngcontent-%COMP%]{display:inline-block!important}.d-md-block[_ngcontent-%COMP%]{display:block!important}.d-md-grid[_ngcontent-%COMP%]{display:grid!important}.d-md-table[_ngcontent-%COMP%]{display:table!important}.d-md-table-row[_ngcontent-%COMP%]{display:table-row!important}.d-md-table-cell[_ngcontent-%COMP%]{display:table-cell!important}.d-md-flex[_ngcontent-%COMP%]{display:flex!important}.d-md-inline-flex[_ngcontent-%COMP%]{display:inline-flex!important}.d-md-none[_ngcontent-%COMP%]{display:none!important}.flex-md-fill[_ngcontent-%COMP%]{flex:1 1 auto!important}.flex-md-row[_ngcontent-%COMP%]{flex-direction:row!important}.flex-md-column[_ngcontent-%COMP%]{flex-direction:column!important}.flex-md-row-reverse[_ngcontent-%COMP%]{flex-direction:row-reverse!important}.flex-md-column-reverse[_ngcontent-%COMP%]{flex-direction:column-reverse!important}.flex-md-grow-0[_ngcontent-%COMP%]{flex-grow:0!important}.flex-md-grow-1[_ngcontent-%COMP%]{flex-grow:1!important}.flex-md-shrink-0[_ngcontent-%COMP%]{flex-shrink:0!important}.flex-md-shrink-1[_ngcontent-%COMP%]{flex-shrink:1!important}.flex-md-wrap[_ngcontent-%COMP%]{flex-wrap:wrap!important}.flex-md-nowrap[_ngcontent-%COMP%]{flex-wrap:nowrap!important}.flex-md-wrap-reverse[_ngcontent-%COMP%]{flex-wrap:wrap-reverse!important}.justify-content-md-start[_ngcontent-%COMP%]{justify-content:flex-start!important}.justify-content-md-end[_ngcontent-%COMP%]{justify-content:flex-end!important}.justify-content-md-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-md-between[_ngcontent-%COMP%]{justify-content:space-between!important}.justify-content-md-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-md-evenly[_ngcontent-%COMP%]{justify-content:space-evenly!important}.align-items-md-start[_ngcontent-%COMP%]{align-items:flex-start!important}.align-items-md-end[_ngcontent-%COMP%]{align-items:flex-end!important}.align-items-md-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-md-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-md-stretch[_ngcontent-%COMP%]{align-items:stretch!important}.align-content-md-start[_ngcontent-%COMP%]{align-content:flex-start!important}.align-content-md-end[_ngcontent-%COMP%]{align-content:flex-end!important}.align-content-md-center[_ngcontent-%COMP%]{align-content:center!important}.align-content-md-between[_ngcontent-%COMP%]{align-content:space-between!important}.align-content-md-around[_ngcontent-%COMP%]{align-content:space-around!important}.align-content-md-stretch[_ngcontent-%COMP%]{align-content:stretch!important}.align-self-md-auto[_ngcontent-%COMP%]{align-self:auto!important}.align-self-md-start[_ngcontent-%COMP%]{align-self:flex-start!important}.align-self-md-end[_ngcontent-%COMP%]{align-self:flex-end!important}.align-self-md-center[_ngcontent-%COMP%]{align-self:center!important}.align-self-md-baseline[_ngcontent-%COMP%]{align-self:baseline!important}.align-self-md-stretch[_ngcontent-%COMP%]{align-self:stretch!important}.order-md-first[_ngcontent-%COMP%]{order:-1!important}.order-md-0[_ngcontent-%COMP%]{order:0!important}.order-md-1[_ngcontent-%COMP%]{order:1!important}.order-md-2[_ngcontent-%COMP%]{order:2!important}.order-md-3[_ngcontent-%COMP%]{order:3!important}.order-md-4[_ngcontent-%COMP%]{order:4!important}.order-md-5[_ngcontent-%COMP%]{order:5!important}.order-md-last[_ngcontent-%COMP%]{order:6!important}.m-md-0[_ngcontent-%COMP%]{margin:0!important}.m-md-1[_ngcontent-%COMP%]{margin:.25rem!important}.m-md-2[_ngcontent-%COMP%]{margin:.5rem!important}.m-md-3[_ngcontent-%COMP%]{margin:1rem!important}.m-md-4[_ngcontent-%COMP%]{margin:1.5rem!important}.m-md-5[_ngcontent-%COMP%]{margin:3rem!important}.m-md-auto[_ngcontent-%COMP%]{margin:auto!important}.mx-md-0[_ngcontent-%COMP%]{margin-right:0!important;margin-left:0!important}.mx-md-1[_ngcontent-%COMP%]{margin-right:.25rem!important;margin-left:.25rem!important}.mx-md-2[_ngcontent-%COMP%]{margin-right:.5rem!important;margin-left:.5rem!important}.mx-md-3[_ngcontent-%COMP%]{margin-right:1rem!important;margin-left:1rem!important}.mx-md-4[_ngcontent-%COMP%]{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-md-5[_ngcontent-%COMP%]{margin-right:3rem!important;margin-left:3rem!important}.mx-md-auto[_ngcontent-%COMP%]{margin-right:auto!important;margin-left:auto!important}.my-md-0[_ngcontent-%COMP%]{margin-top:0!important;margin-bottom:0!important}.my-md-1[_ngcontent-%COMP%]{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-md-2[_ngcontent-%COMP%]{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-md-3[_ngcontent-%COMP%]{margin-top:1rem!important;margin-bottom:1rem!important}.my-md-4[_ngcontent-%COMP%]{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-md-5[_ngcontent-%COMP%]{margin-top:3rem!important;margin-bottom:3rem!important}.my-md-auto[_ngcontent-%COMP%]{margin-top:auto!important;margin-bottom:auto!important}.mt-md-0[_ngcontent-%COMP%]{margin-top:0!important}.mt-md-1[_ngcontent-%COMP%]{margin-top:.25rem!important}.mt-md-2[_ngcontent-%COMP%]{margin-top:.5rem!important}.mt-md-3[_ngcontent-%COMP%]{margin-top:1rem!important}.mt-md-4[_ngcontent-%COMP%]{margin-top:1.5rem!important}.mt-md-5[_ngcontent-%COMP%]{margin-top:3rem!important}.mt-md-auto[_ngcontent-%COMP%]{margin-top:auto!important}.me-md-0[_ngcontent-%COMP%]{margin-right:0!important}.me-md-1[_ngcontent-%COMP%]{margin-right:.25rem!important}.me-md-2[_ngcontent-%COMP%]{margin-right:.5rem!important}.me-md-3[_ngcontent-%COMP%]{margin-right:1rem!important}.me-md-4[_ngcontent-%COMP%]{margin-right:1.5rem!important}.me-md-5[_ngcontent-%COMP%]{margin-right:3rem!important}.me-md-auto[_ngcontent-%COMP%]{margin-right:auto!important}.mb-md-0[_ngcontent-%COMP%]{margin-bottom:0!important}.mb-md-1[_ngcontent-%COMP%]{margin-bottom:.25rem!important}.mb-md-2[_ngcontent-%COMP%]{margin-bottom:.5rem!important}.mb-md-3[_ngcontent-%COMP%]{margin-bottom:1rem!important}.mb-md-4[_ngcontent-%COMP%]{margin-bottom:1.5rem!important}.mb-md-5[_ngcontent-%COMP%]{margin-bottom:3rem!important}.mb-md-auto[_ngcontent-%COMP%]{margin-bottom:auto!important}.ms-md-0[_ngcontent-%COMP%]{margin-left:0!important}.ms-md-1[_ngcontent-%COMP%]{margin-left:.25rem!important}.ms-md-2[_ngcontent-%COMP%]{margin-left:.5rem!important}.ms-md-3[_ngcontent-%COMP%]{margin-left:1rem!important}.ms-md-4[_ngcontent-%COMP%]{margin-left:1.5rem!important}.ms-md-5[_ngcontent-%COMP%]{margin-left:3rem!important}.ms-md-auto[_ngcontent-%COMP%]{margin-left:auto!important}.p-md-0[_ngcontent-%COMP%]{padding:0!important}.p-md-1[_ngcontent-%COMP%]{padding:.25rem!important}.p-md-2[_ngcontent-%COMP%]{padding:.5rem!important}.p-md-3[_ngcontent-%COMP%]{padding:1rem!important}.p-md-4[_ngcontent-%COMP%]{padding:1.5rem!important}.p-md-5[_ngcontent-%COMP%]{padding:3rem!important}.px-md-0[_ngcontent-%COMP%]{padding-right:0!important;padding-left:0!important}.px-md-1[_ngcontent-%COMP%]{padding-right:.25rem!important;padding-left:.25rem!important}.px-md-2[_ngcontent-%COMP%]{padding-right:.5rem!important;padding-left:.5rem!important}.px-md-3[_ngcontent-%COMP%]{padding-right:1rem!important;padding-left:1rem!important}.px-md-4[_ngcontent-%COMP%]{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-md-5[_ngcontent-%COMP%]{padding-right:3rem!important;padding-left:3rem!important}.py-md-0[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}.py-md-1[_ngcontent-%COMP%]{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-md-2[_ngcontent-%COMP%]{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-md-3[_ngcontent-%COMP%]{padding-top:1rem!important;padding-bottom:1rem!important}.py-md-4[_ngcontent-%COMP%]{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-md-5[_ngcontent-%COMP%]{padding-top:3rem!important;padding-bottom:3rem!important}.pt-md-0[_ngcontent-%COMP%]{padding-top:0!important}.pt-md-1[_ngcontent-%COMP%]{padding-top:.25rem!important}.pt-md-2[_ngcontent-%COMP%]{padding-top:.5rem!important}.pt-md-3[_ngcontent-%COMP%]{padding-top:1rem!important}.pt-md-4[_ngcontent-%COMP%]{padding-top:1.5rem!important}.pt-md-5[_ngcontent-%COMP%]{padding-top:3rem!important}.pe-md-0[_ngcontent-%COMP%]{padding-right:0!important}.pe-md-1[_ngcontent-%COMP%]{padding-right:.25rem!important}.pe-md-2[_ngcontent-%COMP%]{padding-right:.5rem!important}.pe-md-3[_ngcontent-%COMP%]{padding-right:1rem!important}.pe-md-4[_ngcontent-%COMP%]{padding-right:1.5rem!important}.pe-md-5[_ngcontent-%COMP%]{padding-right:3rem!important}.pb-md-0[_ngcontent-%COMP%]{padding-bottom:0!important}.pb-md-1[_ngcontent-%COMP%]{padding-bottom:.25rem!important}.pb-md-2[_ngcontent-%COMP%]{padding-bottom:.5rem!important}.pb-md-3[_ngcontent-%COMP%]{padding-bottom:1rem!important}.pb-md-4[_ngcontent-%COMP%]{padding-bottom:1.5rem!important}.pb-md-5[_ngcontent-%COMP%]{padding-bottom:3rem!important}.ps-md-0[_ngcontent-%COMP%]{padding-left:0!important}.ps-md-1[_ngcontent-%COMP%]{padding-left:.25rem!important}.ps-md-2[_ngcontent-%COMP%]{padding-left:.5rem!important}.ps-md-3[_ngcontent-%COMP%]{padding-left:1rem!important}.ps-md-4[_ngcontent-%COMP%]{padding-left:1.5rem!important}.ps-md-5[_ngcontent-%COMP%]{padding-left:3rem!important}}@media (min-width: 992px){.d-lg-inline[_ngcontent-%COMP%]{display:inline!important}.d-lg-inline-block[_ngcontent-%COMP%]{display:inline-block!important}.d-lg-block[_ngcontent-%COMP%]{display:block!important}.d-lg-grid[_ngcontent-%COMP%]{display:grid!important}.d-lg-table[_ngcontent-%COMP%]{display:table!important}.d-lg-table-row[_ngcontent-%COMP%]{display:table-row!important}.d-lg-table-cell[_ngcontent-%COMP%]{display:table-cell!important}.d-lg-flex[_ngcontent-%COMP%]{display:flex!important}.d-lg-inline-flex[_ngcontent-%COMP%]{display:inline-flex!important}.d-lg-none[_ngcontent-%COMP%]{display:none!important}.flex-lg-fill[_ngcontent-%COMP%]{flex:1 1 auto!important}.flex-lg-row[_ngcontent-%COMP%]{flex-direction:row!important}.flex-lg-column[_ngcontent-%COMP%]{flex-direction:column!important}.flex-lg-row-reverse[_ngcontent-%COMP%]{flex-direction:row-reverse!important}.flex-lg-column-reverse[_ngcontent-%COMP%]{flex-direction:column-reverse!important}.flex-lg-grow-0[_ngcontent-%COMP%]{flex-grow:0!important}.flex-lg-grow-1[_ngcontent-%COMP%]{flex-grow:1!important}.flex-lg-shrink-0[_ngcontent-%COMP%]{flex-shrink:0!important}.flex-lg-shrink-1[_ngcontent-%COMP%]{flex-shrink:1!important}.flex-lg-wrap[_ngcontent-%COMP%]{flex-wrap:wrap!important}.flex-lg-nowrap[_ngcontent-%COMP%]{flex-wrap:nowrap!important}.flex-lg-wrap-reverse[_ngcontent-%COMP%]{flex-wrap:wrap-reverse!important}.justify-content-lg-start[_ngcontent-%COMP%]{justify-content:flex-start!important}.justify-content-lg-end[_ngcontent-%COMP%]{justify-content:flex-end!important}.justify-content-lg-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-lg-between[_ngcontent-%COMP%]{justify-content:space-between!important}.justify-content-lg-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-lg-evenly[_ngcontent-%COMP%]{justify-content:space-evenly!important}.align-items-lg-start[_ngcontent-%COMP%]{align-items:flex-start!important}.align-items-lg-end[_ngcontent-%COMP%]{align-items:flex-end!important}.align-items-lg-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-lg-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-lg-stretch[_ngcontent-%COMP%]{align-items:stretch!important}.align-content-lg-start[_ngcontent-%COMP%]{align-content:flex-start!important}.align-content-lg-end[_ngcontent-%COMP%]{align-content:flex-end!important}.align-content-lg-center[_ngcontent-%COMP%]{align-content:center!important}.align-content-lg-between[_ngcontent-%COMP%]{align-content:space-between!important}.align-content-lg-around[_ngcontent-%COMP%]{align-content:space-around!important}.align-content-lg-stretch[_ngcontent-%COMP%]{align-content:stretch!important}.align-self-lg-auto[_ngcontent-%COMP%]{align-self:auto!important}.align-self-lg-start[_ngcontent-%COMP%]{align-self:flex-start!important}.align-self-lg-end[_ngcontent-%COMP%]{align-self:flex-end!important}.align-self-lg-center[_ngcontent-%COMP%]{align-self:center!important}.align-self-lg-baseline[_ngcontent-%COMP%]{align-self:baseline!important}.align-self-lg-stretch[_ngcontent-%COMP%]{align-self:stretch!important}.order-lg-first[_ngcontent-%COMP%]{order:-1!important}.order-lg-0[_ngcontent-%COMP%]{order:0!important}.order-lg-1[_ngcontent-%COMP%]{order:1!important}.order-lg-2[_ngcontent-%COMP%]{order:2!important}.order-lg-3[_ngcontent-%COMP%]{order:3!important}.order-lg-4[_ngcontent-%COMP%]{order:4!important}.order-lg-5[_ngcontent-%COMP%]{order:5!important}.order-lg-last[_ngcontent-%COMP%]{order:6!important}.m-lg-0[_ngcontent-%COMP%]{margin:0!important}.m-lg-1[_ngcontent-%COMP%]{margin:.25rem!important}.m-lg-2[_ngcontent-%COMP%]{margin:.5rem!important}.m-lg-3[_ngcontent-%COMP%]{margin:1rem!important}.m-lg-4[_ngcontent-%COMP%]{margin:1.5rem!important}.m-lg-5[_ngcontent-%COMP%]{margin:3rem!important}.m-lg-auto[_ngcontent-%COMP%]{margin:auto!important}.mx-lg-0[_ngcontent-%COMP%]{margin-right:0!important;margin-left:0!important}.mx-lg-1[_ngcontent-%COMP%]{margin-right:.25rem!important;margin-left:.25rem!important}.mx-lg-2[_ngcontent-%COMP%]{margin-right:.5rem!important;margin-left:.5rem!important}.mx-lg-3[_ngcontent-%COMP%]{margin-right:1rem!important;margin-left:1rem!important}.mx-lg-4[_ngcontent-%COMP%]{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-lg-5[_ngcontent-%COMP%]{margin-right:3rem!important;margin-left:3rem!important}.mx-lg-auto[_ngcontent-%COMP%]{margin-right:auto!important;margin-left:auto!important}.my-lg-0[_ngcontent-%COMP%]{margin-top:0!important;margin-bottom:0!important}.my-lg-1[_ngcontent-%COMP%]{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-lg-2[_ngcontent-%COMP%]{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-lg-3[_ngcontent-%COMP%]{margin-top:1rem!important;margin-bottom:1rem!important}.my-lg-4[_ngcontent-%COMP%]{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-lg-5[_ngcontent-%COMP%]{margin-top:3rem!important;margin-bottom:3rem!important}.my-lg-auto[_ngcontent-%COMP%]{margin-top:auto!important;margin-bottom:auto!important}.mt-lg-0[_ngcontent-%COMP%]{margin-top:0!important}.mt-lg-1[_ngcontent-%COMP%]{margin-top:.25rem!important}.mt-lg-2[_ngcontent-%COMP%]{margin-top:.5rem!important}.mt-lg-3[_ngcontent-%COMP%]{margin-top:1rem!important}.mt-lg-4[_ngcontent-%COMP%]{margin-top:1.5rem!important}.mt-lg-5[_ngcontent-%COMP%]{margin-top:3rem!important}.mt-lg-auto[_ngcontent-%COMP%]{margin-top:auto!important}.me-lg-0[_ngcontent-%COMP%]{margin-right:0!important}.me-lg-1[_ngcontent-%COMP%]{margin-right:.25rem!important}.me-lg-2[_ngcontent-%COMP%]{margin-right:.5rem!important}.me-lg-3[_ngcontent-%COMP%]{margin-right:1rem!important}.me-lg-4[_ngcontent-%COMP%]{margin-right:1.5rem!important}.me-lg-5[_ngcontent-%COMP%]{margin-right:3rem!important}.me-lg-auto[_ngcontent-%COMP%]{margin-right:auto!important}.mb-lg-0[_ngcontent-%COMP%]{margin-bottom:0!important}.mb-lg-1[_ngcontent-%COMP%]{margin-bottom:.25rem!important}.mb-lg-2[_ngcontent-%COMP%]{margin-bottom:.5rem!important}.mb-lg-3[_ngcontent-%COMP%]{margin-bottom:1rem!important}.mb-lg-4[_ngcontent-%COMP%]{margin-bottom:1.5rem!important}.mb-lg-5[_ngcontent-%COMP%]{margin-bottom:3rem!important}.mb-lg-auto[_ngcontent-%COMP%]{margin-bottom:auto!important}.ms-lg-0[_ngcontent-%COMP%]{margin-left:0!important}.ms-lg-1[_ngcontent-%COMP%]{margin-left:.25rem!important}.ms-lg-2[_ngcontent-%COMP%]{margin-left:.5rem!important}.ms-lg-3[_ngcontent-%COMP%]{margin-left:1rem!important}.ms-lg-4[_ngcontent-%COMP%]{margin-left:1.5rem!important}.ms-lg-5[_ngcontent-%COMP%]{margin-left:3rem!important}.ms-lg-auto[_ngcontent-%COMP%]{margin-left:auto!important}.p-lg-0[_ngcontent-%COMP%]{padding:0!important}.p-lg-1[_ngcontent-%COMP%]{padding:.25rem!important}.p-lg-2[_ngcontent-%COMP%]{padding:.5rem!important}.p-lg-3[_ngcontent-%COMP%]{padding:1rem!important}.p-lg-4[_ngcontent-%COMP%]{padding:1.5rem!important}.p-lg-5[_ngcontent-%COMP%]{padding:3rem!important}.px-lg-0[_ngcontent-%COMP%]{padding-right:0!important;padding-left:0!important}.px-lg-1[_ngcontent-%COMP%]{padding-right:.25rem!important;padding-left:.25rem!important}.px-lg-2[_ngcontent-%COMP%]{padding-right:.5rem!important;padding-left:.5rem!important}.px-lg-3[_ngcontent-%COMP%]{padding-right:1rem!important;padding-left:1rem!important}.px-lg-4[_ngcontent-%COMP%]{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-lg-5[_ngcontent-%COMP%]{padding-right:3rem!important;padding-left:3rem!important}.py-lg-0[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}.py-lg-1[_ngcontent-%COMP%]{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-lg-2[_ngcontent-%COMP%]{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-lg-3[_ngcontent-%COMP%]{padding-top:1rem!important;padding-bottom:1rem!important}.py-lg-4[_ngcontent-%COMP%]{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-lg-5[_ngcontent-%COMP%]{padding-top:3rem!important;padding-bottom:3rem!important}.pt-lg-0[_ngcontent-%COMP%]{padding-top:0!important}.pt-lg-1[_ngcontent-%COMP%]{padding-top:.25rem!important}.pt-lg-2[_ngcontent-%COMP%]{padding-top:.5rem!important}.pt-lg-3[_ngcontent-%COMP%]{padding-top:1rem!important}.pt-lg-4[_ngcontent-%COMP%]{padding-top:1.5rem!important}.pt-lg-5[_ngcontent-%COMP%]{padding-top:3rem!important}.pe-lg-0[_ngcontent-%COMP%]{padding-right:0!important}.pe-lg-1[_ngcontent-%COMP%]{padding-right:.25rem!important}.pe-lg-2[_ngcontent-%COMP%]{padding-right:.5rem!important}.pe-lg-3[_ngcontent-%COMP%]{padding-right:1rem!important}.pe-lg-4[_ngcontent-%COMP%]{padding-right:1.5rem!important}.pe-lg-5[_ngcontent-%COMP%]{padding-right:3rem!important}.pb-lg-0[_ngcontent-%COMP%]{padding-bottom:0!important}.pb-lg-1[_ngcontent-%COMP%]{padding-bottom:.25rem!important}.pb-lg-2[_ngcontent-%COMP%]{padding-bottom:.5rem!important}.pb-lg-3[_ngcontent-%COMP%]{padding-bottom:1rem!important}.pb-lg-4[_ngcontent-%COMP%]{padding-bottom:1.5rem!important}.pb-lg-5[_ngcontent-%COMP%]{padding-bottom:3rem!important}.ps-lg-0[_ngcontent-%COMP%]{padding-left:0!important}.ps-lg-1[_ngcontent-%COMP%]{padding-left:.25rem!important}.ps-lg-2[_ngcontent-%COMP%]{padding-left:.5rem!important}.ps-lg-3[_ngcontent-%COMP%]{padding-left:1rem!important}.ps-lg-4[_ngcontent-%COMP%]{padding-left:1.5rem!important}.ps-lg-5[_ngcontent-%COMP%]{padding-left:3rem!important}}@media (min-width: 1200px){.d-xl-inline[_ngcontent-%COMP%]{display:inline!important}.d-xl-inline-block[_ngcontent-%COMP%]{display:inline-block!important}.d-xl-block[_ngcontent-%COMP%]{display:block!important}.d-xl-grid[_ngcontent-%COMP%]{display:grid!important}.d-xl-table[_ngcontent-%COMP%]{display:table!important}.d-xl-table-row[_ngcontent-%COMP%]{display:table-row!important}.d-xl-table-cell[_ngcontent-%COMP%]{display:table-cell!important}.d-xl-flex[_ngcontent-%COMP%]{display:flex!important}.d-xl-inline-flex[_ngcontent-%COMP%]{display:inline-flex!important}.d-xl-none[_ngcontent-%COMP%]{display:none!important}.flex-xl-fill[_ngcontent-%COMP%]{flex:1 1 auto!important}.flex-xl-row[_ngcontent-%COMP%]{flex-direction:row!important}.flex-xl-column[_ngcontent-%COMP%]{flex-direction:column!important}.flex-xl-row-reverse[_ngcontent-%COMP%]{flex-direction:row-reverse!important}.flex-xl-column-reverse[_ngcontent-%COMP%]{flex-direction:column-reverse!important}.flex-xl-grow-0[_ngcontent-%COMP%]{flex-grow:0!important}.flex-xl-grow-1[_ngcontent-%COMP%]{flex-grow:1!important}.flex-xl-shrink-0[_ngcontent-%COMP%]{flex-shrink:0!important}.flex-xl-shrink-1[_ngcontent-%COMP%]{flex-shrink:1!important}.flex-xl-wrap[_ngcontent-%COMP%]{flex-wrap:wrap!important}.flex-xl-nowrap[_ngcontent-%COMP%]{flex-wrap:nowrap!important}.flex-xl-wrap-reverse[_ngcontent-%COMP%]{flex-wrap:wrap-reverse!important}.justify-content-xl-start[_ngcontent-%COMP%]{justify-content:flex-start!important}.justify-content-xl-end[_ngcontent-%COMP%]{justify-content:flex-end!important}.justify-content-xl-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-xl-between[_ngcontent-%COMP%]{justify-content:space-between!important}.justify-content-xl-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-xl-evenly[_ngcontent-%COMP%]{justify-content:space-evenly!important}.align-items-xl-start[_ngcontent-%COMP%]{align-items:flex-start!important}.align-items-xl-end[_ngcontent-%COMP%]{align-items:flex-end!important}.align-items-xl-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-xl-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-xl-stretch[_ngcontent-%COMP%]{align-items:stretch!important}.align-content-xl-start[_ngcontent-%COMP%]{align-content:flex-start!important}.align-content-xl-end[_ngcontent-%COMP%]{align-content:flex-end!important}.align-content-xl-center[_ngcontent-%COMP%]{align-content:center!important}.align-content-xl-between[_ngcontent-%COMP%]{align-content:space-between!important}.align-content-xl-around[_ngcontent-%COMP%]{align-content:space-around!important}.align-content-xl-stretch[_ngcontent-%COMP%]{align-content:stretch!important}.align-self-xl-auto[_ngcontent-%COMP%]{align-self:auto!important}.align-self-xl-start[_ngcontent-%COMP%]{align-self:flex-start!important}.align-self-xl-end[_ngcontent-%COMP%]{align-self:flex-end!important}.align-self-xl-center[_ngcontent-%COMP%]{align-self:center!important}.align-self-xl-baseline[_ngcontent-%COMP%]{align-self:baseline!important}.align-self-xl-stretch[_ngcontent-%COMP%]{align-self:stretch!important}.order-xl-first[_ngcontent-%COMP%]{order:-1!important}.order-xl-0[_ngcontent-%COMP%]{order:0!important}.order-xl-1[_ngcontent-%COMP%]{order:1!important}.order-xl-2[_ngcontent-%COMP%]{order:2!important}.order-xl-3[_ngcontent-%COMP%]{order:3!important}.order-xl-4[_ngcontent-%COMP%]{order:4!important}.order-xl-5[_ngcontent-%COMP%]{order:5!important}.order-xl-last[_ngcontent-%COMP%]{order:6!important}.m-xl-0[_ngcontent-%COMP%]{margin:0!important}.m-xl-1[_ngcontent-%COMP%]{margin:.25rem!important}.m-xl-2[_ngcontent-%COMP%]{margin:.5rem!important}.m-xl-3[_ngcontent-%COMP%]{margin:1rem!important}.m-xl-4[_ngcontent-%COMP%]{margin:1.5rem!important}.m-xl-5[_ngcontent-%COMP%]{margin:3rem!important}.m-xl-auto[_ngcontent-%COMP%]{margin:auto!important}.mx-xl-0[_ngcontent-%COMP%]{margin-right:0!important;margin-left:0!important}.mx-xl-1[_ngcontent-%COMP%]{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xl-2[_ngcontent-%COMP%]{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xl-3[_ngcontent-%COMP%]{margin-right:1rem!important;margin-left:1rem!important}.mx-xl-4[_ngcontent-%COMP%]{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xl-5[_ngcontent-%COMP%]{margin-right:3rem!important;margin-left:3rem!important}.mx-xl-auto[_ngcontent-%COMP%]{margin-right:auto!important;margin-left:auto!important}.my-xl-0[_ngcontent-%COMP%]{margin-top:0!important;margin-bottom:0!important}.my-xl-1[_ngcontent-%COMP%]{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xl-2[_ngcontent-%COMP%]{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xl-3[_ngcontent-%COMP%]{margin-top:1rem!important;margin-bottom:1rem!important}.my-xl-4[_ngcontent-%COMP%]{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xl-5[_ngcontent-%COMP%]{margin-top:3rem!important;margin-bottom:3rem!important}.my-xl-auto[_ngcontent-%COMP%]{margin-top:auto!important;margin-bottom:auto!important}.mt-xl-0[_ngcontent-%COMP%]{margin-top:0!important}.mt-xl-1[_ngcontent-%COMP%]{margin-top:.25rem!important}.mt-xl-2[_ngcontent-%COMP%]{margin-top:.5rem!important}.mt-xl-3[_ngcontent-%COMP%]{margin-top:1rem!important}.mt-xl-4[_ngcontent-%COMP%]{margin-top:1.5rem!important}.mt-xl-5[_ngcontent-%COMP%]{margin-top:3rem!important}.mt-xl-auto[_ngcontent-%COMP%]{margin-top:auto!important}.me-xl-0[_ngcontent-%COMP%]{margin-right:0!important}.me-xl-1[_ngcontent-%COMP%]{margin-right:.25rem!important}.me-xl-2[_ngcontent-%COMP%]{margin-right:.5rem!important}.me-xl-3[_ngcontent-%COMP%]{margin-right:1rem!important}.me-xl-4[_ngcontent-%COMP%]{margin-right:1.5rem!important}.me-xl-5[_ngcontent-%COMP%]{margin-right:3rem!important}.me-xl-auto[_ngcontent-%COMP%]{margin-right:auto!important}.mb-xl-0[_ngcontent-%COMP%]{margin-bottom:0!important}.mb-xl-1[_ngcontent-%COMP%]{margin-bottom:.25rem!important}.mb-xl-2[_ngcontent-%COMP%]{margin-bottom:.5rem!important}.mb-xl-3[_ngcontent-%COMP%]{margin-bottom:1rem!important}.mb-xl-4[_ngcontent-%COMP%]{margin-bottom:1.5rem!important}.mb-xl-5[_ngcontent-%COMP%]{margin-bottom:3rem!important}.mb-xl-auto[_ngcontent-%COMP%]{margin-bottom:auto!important}.ms-xl-0[_ngcontent-%COMP%]{margin-left:0!important}.ms-xl-1[_ngcontent-%COMP%]{margin-left:.25rem!important}.ms-xl-2[_ngcontent-%COMP%]{margin-left:.5rem!important}.ms-xl-3[_ngcontent-%COMP%]{margin-left:1rem!important}.ms-xl-4[_ngcontent-%COMP%]{margin-left:1.5rem!important}.ms-xl-5[_ngcontent-%COMP%]{margin-left:3rem!important}.ms-xl-auto[_ngcontent-%COMP%]{margin-left:auto!important}.p-xl-0[_ngcontent-%COMP%]{padding:0!important}.p-xl-1[_ngcontent-%COMP%]{padding:.25rem!important}.p-xl-2[_ngcontent-%COMP%]{padding:.5rem!important}.p-xl-3[_ngcontent-%COMP%]{padding:1rem!important}.p-xl-4[_ngcontent-%COMP%]{padding:1.5rem!important}.p-xl-5[_ngcontent-%COMP%]{padding:3rem!important}.px-xl-0[_ngcontent-%COMP%]{padding-right:0!important;padding-left:0!important}.px-xl-1[_ngcontent-%COMP%]{padding-right:.25rem!important;padding-left:.25rem!important}.px-xl-2[_ngcontent-%COMP%]{padding-right:.5rem!important;padding-left:.5rem!important}.px-xl-3[_ngcontent-%COMP%]{padding-right:1rem!important;padding-left:1rem!important}.px-xl-4[_ngcontent-%COMP%]{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xl-5[_ngcontent-%COMP%]{padding-right:3rem!important;padding-left:3rem!important}.py-xl-0[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}.py-xl-1[_ngcontent-%COMP%]{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xl-2[_ngcontent-%COMP%]{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xl-3[_ngcontent-%COMP%]{padding-top:1rem!important;padding-bottom:1rem!important}.py-xl-4[_ngcontent-%COMP%]{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xl-5[_ngcontent-%COMP%]{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xl-0[_ngcontent-%COMP%]{padding-top:0!important}.pt-xl-1[_ngcontent-%COMP%]{padding-top:.25rem!important}.pt-xl-2[_ngcontent-%COMP%]{padding-top:.5rem!important}.pt-xl-3[_ngcontent-%COMP%]{padding-top:1rem!important}.pt-xl-4[_ngcontent-%COMP%]{padding-top:1.5rem!important}.pt-xl-5[_ngcontent-%COMP%]{padding-top:3rem!important}.pe-xl-0[_ngcontent-%COMP%]{padding-right:0!important}.pe-xl-1[_ngcontent-%COMP%]{padding-right:.25rem!important}.pe-xl-2[_ngcontent-%COMP%]{padding-right:.5rem!important}.pe-xl-3[_ngcontent-%COMP%]{padding-right:1rem!important}.pe-xl-4[_ngcontent-%COMP%]{padding-right:1.5rem!important}.pe-xl-5[_ngcontent-%COMP%]{padding-right:3rem!important}.pb-xl-0[_ngcontent-%COMP%]{padding-bottom:0!important}.pb-xl-1[_ngcontent-%COMP%]{padding-bottom:.25rem!important}.pb-xl-2[_ngcontent-%COMP%]{padding-bottom:.5rem!important}.pb-xl-3[_ngcontent-%COMP%]{padding-bottom:1rem!important}.pb-xl-4[_ngcontent-%COMP%]{padding-bottom:1.5rem!important}.pb-xl-5[_ngcontent-%COMP%]{padding-bottom:3rem!important}.ps-xl-0[_ngcontent-%COMP%]{padding-left:0!important}.ps-xl-1[_ngcontent-%COMP%]{padding-left:.25rem!important}.ps-xl-2[_ngcontent-%COMP%]{padding-left:.5rem!important}.ps-xl-3[_ngcontent-%COMP%]{padding-left:1rem!important}.ps-xl-4[_ngcontent-%COMP%]{padding-left:1.5rem!important}.ps-xl-5[_ngcontent-%COMP%]{padding-left:3rem!important}}@media (min-width: 1400px){.d-xxl-inline[_ngcontent-%COMP%]{display:inline!important}.d-xxl-inline-block[_ngcontent-%COMP%]{display:inline-block!important}.d-xxl-block[_ngcontent-%COMP%]{display:block!important}.d-xxl-grid[_ngcontent-%COMP%]{display:grid!important}.d-xxl-table[_ngcontent-%COMP%]{display:table!important}.d-xxl-table-row[_ngcontent-%COMP%]{display:table-row!important}.d-xxl-table-cell[_ngcontent-%COMP%]{display:table-cell!important}.d-xxl-flex[_ngcontent-%COMP%]{display:flex!important}.d-xxl-inline-flex[_ngcontent-%COMP%]{display:inline-flex!important}.d-xxl-none[_ngcontent-%COMP%]{display:none!important}.flex-xxl-fill[_ngcontent-%COMP%]{flex:1 1 auto!important}.flex-xxl-row[_ngcontent-%COMP%]{flex-direction:row!important}.flex-xxl-column[_ngcontent-%COMP%]{flex-direction:column!important}.flex-xxl-row-reverse[_ngcontent-%COMP%]{flex-direction:row-reverse!important}.flex-xxl-column-reverse[_ngcontent-%COMP%]{flex-direction:column-reverse!important}.flex-xxl-grow-0[_ngcontent-%COMP%]{flex-grow:0!important}.flex-xxl-grow-1[_ngcontent-%COMP%]{flex-grow:1!important}.flex-xxl-shrink-0[_ngcontent-%COMP%]{flex-shrink:0!important}.flex-xxl-shrink-1[_ngcontent-%COMP%]{flex-shrink:1!important}.flex-xxl-wrap[_ngcontent-%COMP%]{flex-wrap:wrap!important}.flex-xxl-nowrap[_ngcontent-%COMP%]{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse[_ngcontent-%COMP%]{flex-wrap:wrap-reverse!important}.justify-content-xxl-start[_ngcontent-%COMP%]{justify-content:flex-start!important}.justify-content-xxl-end[_ngcontent-%COMP%]{justify-content:flex-end!important}.justify-content-xxl-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-xxl-between[_ngcontent-%COMP%]{justify-content:space-between!important}.justify-content-xxl-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-xxl-evenly[_ngcontent-%COMP%]{justify-content:space-evenly!important}.align-items-xxl-start[_ngcontent-%COMP%]{align-items:flex-start!important}.align-items-xxl-end[_ngcontent-%COMP%]{align-items:flex-end!important}.align-items-xxl-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-xxl-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-xxl-stretch[_ngcontent-%COMP%]{align-items:stretch!important}.align-content-xxl-start[_ngcontent-%COMP%]{align-content:flex-start!important}.align-content-xxl-end[_ngcontent-%COMP%]{align-content:flex-end!important}.align-content-xxl-center[_ngcontent-%COMP%]{align-content:center!important}.align-content-xxl-between[_ngcontent-%COMP%]{align-content:space-between!important}.align-content-xxl-around[_ngcontent-%COMP%]{align-content:space-around!important}.align-content-xxl-stretch[_ngcontent-%COMP%]{align-content:stretch!important}.align-self-xxl-auto[_ngcontent-%COMP%]{align-self:auto!important}.align-self-xxl-start[_ngcontent-%COMP%]{align-self:flex-start!important}.align-self-xxl-end[_ngcontent-%COMP%]{align-self:flex-end!important}.align-self-xxl-center[_ngcontent-%COMP%]{align-self:center!important}.align-self-xxl-baseline[_ngcontent-%COMP%]{align-self:baseline!important}.align-self-xxl-stretch[_ngcontent-%COMP%]{align-self:stretch!important}.order-xxl-first[_ngcontent-%COMP%]{order:-1!important}.order-xxl-0[_ngcontent-%COMP%]{order:0!important}.order-xxl-1[_ngcontent-%COMP%]{order:1!important}.order-xxl-2[_ngcontent-%COMP%]{order:2!important}.order-xxl-3[_ngcontent-%COMP%]{order:3!important}.order-xxl-4[_ngcontent-%COMP%]{order:4!important}.order-xxl-5[_ngcontent-%COMP%]{order:5!important}.order-xxl-last[_ngcontent-%COMP%]{order:6!important}.m-xxl-0[_ngcontent-%COMP%]{margin:0!important}.m-xxl-1[_ngcontent-%COMP%]{margin:.25rem!important}.m-xxl-2[_ngcontent-%COMP%]{margin:.5rem!important}.m-xxl-3[_ngcontent-%COMP%]{margin:1rem!important}.m-xxl-4[_ngcontent-%COMP%]{margin:1.5rem!important}.m-xxl-5[_ngcontent-%COMP%]{margin:3rem!important}.m-xxl-auto[_ngcontent-%COMP%]{margin:auto!important}.mx-xxl-0[_ngcontent-%COMP%]{margin-right:0!important;margin-left:0!important}.mx-xxl-1[_ngcontent-%COMP%]{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xxl-2[_ngcontent-%COMP%]{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xxl-3[_ngcontent-%COMP%]{margin-right:1rem!important;margin-left:1rem!important}.mx-xxl-4[_ngcontent-%COMP%]{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xxl-5[_ngcontent-%COMP%]{margin-right:3rem!important;margin-left:3rem!important}.mx-xxl-auto[_ngcontent-%COMP%]{margin-right:auto!important;margin-left:auto!important}.my-xxl-0[_ngcontent-%COMP%]{margin-top:0!important;margin-bottom:0!important}.my-xxl-1[_ngcontent-%COMP%]{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xxl-2[_ngcontent-%COMP%]{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xxl-3[_ngcontent-%COMP%]{margin-top:1rem!important;margin-bottom:1rem!important}.my-xxl-4[_ngcontent-%COMP%]{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xxl-5[_ngcontent-%COMP%]{margin-top:3rem!important;margin-bottom:3rem!important}.my-xxl-auto[_ngcontent-%COMP%]{margin-top:auto!important;margin-bottom:auto!important}.mt-xxl-0[_ngcontent-%COMP%]{margin-top:0!important}.mt-xxl-1[_ngcontent-%COMP%]{margin-top:.25rem!important}.mt-xxl-2[_ngcontent-%COMP%]{margin-top:.5rem!important}.mt-xxl-3[_ngcontent-%COMP%]{margin-top:1rem!important}.mt-xxl-4[_ngcontent-%COMP%]{margin-top:1.5rem!important}.mt-xxl-5[_ngcontent-%COMP%]{margin-top:3rem!important}.mt-xxl-auto[_ngcontent-%COMP%]{margin-top:auto!important}.me-xxl-0[_ngcontent-%COMP%]{margin-right:0!important}.me-xxl-1[_ngcontent-%COMP%]{margin-right:.25rem!important}.me-xxl-2[_ngcontent-%COMP%]{margin-right:.5rem!important}.me-xxl-3[_ngcontent-%COMP%]{margin-right:1rem!important}.me-xxl-4[_ngcontent-%COMP%]{margin-right:1.5rem!important}.me-xxl-5[_ngcontent-%COMP%]{margin-right:3rem!important}.me-xxl-auto[_ngcontent-%COMP%]{margin-right:auto!important}.mb-xxl-0[_ngcontent-%COMP%]{margin-bottom:0!important}.mb-xxl-1[_ngcontent-%COMP%]{margin-bottom:.25rem!important}.mb-xxl-2[_ngcontent-%COMP%]{margin-bottom:.5rem!important}.mb-xxl-3[_ngcontent-%COMP%]{margin-bottom:1rem!important}.mb-xxl-4[_ngcontent-%COMP%]{margin-bottom:1.5rem!important}.mb-xxl-5[_ngcontent-%COMP%]{margin-bottom:3rem!important}.mb-xxl-auto[_ngcontent-%COMP%]{margin-bottom:auto!important}.ms-xxl-0[_ngcontent-%COMP%]{margin-left:0!important}.ms-xxl-1[_ngcontent-%COMP%]{margin-left:.25rem!important}.ms-xxl-2[_ngcontent-%COMP%]{margin-left:.5rem!important}.ms-xxl-3[_ngcontent-%COMP%]{margin-left:1rem!important}.ms-xxl-4[_ngcontent-%COMP%]{margin-left:1.5rem!important}.ms-xxl-5[_ngcontent-%COMP%]{margin-left:3rem!important}.ms-xxl-auto[_ngcontent-%COMP%]{margin-left:auto!important}.p-xxl-0[_ngcontent-%COMP%]{padding:0!important}.p-xxl-1[_ngcontent-%COMP%]{padding:.25rem!important}.p-xxl-2[_ngcontent-%COMP%]{padding:.5rem!important}.p-xxl-3[_ngcontent-%COMP%]{padding:1rem!important}.p-xxl-4[_ngcontent-%COMP%]{padding:1.5rem!important}.p-xxl-5[_ngcontent-%COMP%]{padding:3rem!important}.px-xxl-0[_ngcontent-%COMP%]{padding-right:0!important;padding-left:0!important}.px-xxl-1[_ngcontent-%COMP%]{padding-right:.25rem!important;padding-left:.25rem!important}.px-xxl-2[_ngcontent-%COMP%]{padding-right:.5rem!important;padding-left:.5rem!important}.px-xxl-3[_ngcontent-%COMP%]{padding-right:1rem!important;padding-left:1rem!important}.px-xxl-4[_ngcontent-%COMP%]{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xxl-5[_ngcontent-%COMP%]{padding-right:3rem!important;padding-left:3rem!important}.py-xxl-0[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}.py-xxl-1[_ngcontent-%COMP%]{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xxl-2[_ngcontent-%COMP%]{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xxl-3[_ngcontent-%COMP%]{padding-top:1rem!important;padding-bottom:1rem!important}.py-xxl-4[_ngcontent-%COMP%]{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xxl-5[_ngcontent-%COMP%]{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xxl-0[_ngcontent-%COMP%]{padding-top:0!important}.pt-xxl-1[_ngcontent-%COMP%]{padding-top:.25rem!important}.pt-xxl-2[_ngcontent-%COMP%]{padding-top:.5rem!important}.pt-xxl-3[_ngcontent-%COMP%]{padding-top:1rem!important}.pt-xxl-4[_ngcontent-%COMP%]{padding-top:1.5rem!important}.pt-xxl-5[_ngcontent-%COMP%]{padding-top:3rem!important}.pe-xxl-0[_ngcontent-%COMP%]{padding-right:0!important}.pe-xxl-1[_ngcontent-%COMP%]{padding-right:.25rem!important}.pe-xxl-2[_ngcontent-%COMP%]{padding-right:.5rem!important}.pe-xxl-3[_ngcontent-%COMP%]{padding-right:1rem!important}.pe-xxl-4[_ngcontent-%COMP%]{padding-right:1.5rem!important}.pe-xxl-5[_ngcontent-%COMP%]{padding-right:3rem!important}.pb-xxl-0[_ngcontent-%COMP%]{padding-bottom:0!important}.pb-xxl-1[_ngcontent-%COMP%]{padding-bottom:.25rem!important}.pb-xxl-2[_ngcontent-%COMP%]{padding-bottom:.5rem!important}.pb-xxl-3[_ngcontent-%COMP%]{padding-bottom:1rem!important}.pb-xxl-4[_ngcontent-%COMP%]{padding-bottom:1.5rem!important}.pb-xxl-5[_ngcontent-%COMP%]{padding-bottom:3rem!important}.ps-xxl-0[_ngcontent-%COMP%]{padding-left:0!important}.ps-xxl-1[_ngcontent-%COMP%]{padding-left:.25rem!important}.ps-xxl-2[_ngcontent-%COMP%]{padding-left:.5rem!important}.ps-xxl-3[_ngcontent-%COMP%]{padding-left:1rem!important}.ps-xxl-4[_ngcontent-%COMP%]{padding-left:1.5rem!important}.ps-xxl-5[_ngcontent-%COMP%]{padding-left:3rem!important}}@media print{.d-print-inline[_ngcontent-%COMP%]{display:inline!important}.d-print-inline-block[_ngcontent-%COMP%]{display:inline-block!important}.d-print-block[_ngcontent-%COMP%]{display:block!important}.d-print-grid[_ngcontent-%COMP%]{display:grid!important}.d-print-table[_ngcontent-%COMP%]{display:table!important}.d-print-table-row[_ngcontent-%COMP%]{display:table-row!important}.d-print-table-cell[_ngcontent-%COMP%]{display:table-cell!important}.d-print-flex[_ngcontent-%COMP%]{display:flex!important}.d-print-inline-flex[_ngcontent-%COMP%]{display:inline-flex!important}.d-print-none[_ngcontent-%COMP%]{display:none!important}}.loader[_ngcontent-%COMP%]{display:flex;position:fixed;inset:0;justify-content:center;align-items:center;background-color:#000000b3;z-index:20000;opacity:1;-moz-opacity:1;filter:alpha(opacity=100);transition:all .2s linear}.loader.absolute[_ngcontent-%COMP%]{position:absolute;height:100%;z-index:inherit}.loader.hidden[_ngcontent-%COMP%]{opacity:0;-moz-opacity:0;filter:alpha(opacity=0);visibility:hidden}.loader[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]{margin:0 auto;width:70px;text-align:center}.loader[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:10px;height:10px;margin:0 2px;background-color:#fff;border-radius:100%;display:inline-block;animation:sk-bouncedelay .9s infinite ease-in-out both}.loader[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]   .dot1[_ngcontent-%COMP%]{animation-delay:-.32s}.loader[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]   .dot2[_ngcontent-%COMP%]{animation-delay:-.16s}@keyframes sk-bouncedelay{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}.loader[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-top:2px;color:#fff;font-weight:900;text-transform:uppercase;text-align:center;font-size:11px;font-size:1.1rem}']
            }), De = D = (0, ae.gn)([(0, mt.k)()], De);
            var $ = a(2289);
            let Be = (() => {
                    class F {
                        constructor(ee) {
                            this.breakpointObserver = ee
                        }
                        getImage(ee) {
                            const Fe = this.breakpointObserver.isMatched($.u3.Handset);
                            if (ee) return Fe ? ee.mobile || ee.desktop : ee.desktop || ee.mobile;
                            console.warn("imageSrc not attached")
                        }
                        getImageSrc(ee, Fe = "lnp_thumbnail_huge") {
                            const Qe = this.breakpointObserver.isMatched($.u3.Handset);
                            return "image/svg+xml" === ee.type ? ce.N.appConfig.images.CDN_URL + ee.url : ee.styles && ee.styles[Fe] ? ce.N.appConfig.images.CDN_URL + ee.styles[Fe] : Qe && "lnp_banner" === Fe && ee.styles && ee.styles.lnp_thumbnail_huge ? ce.N.appConfig.images.CDN_URL + ee.styles.lnp_thumbnail_huge : ee.url.indexOf("/mocks/") >= 0 ? ee.url : ce.N.appConfig.images.CDN_URL + ee.url
                        }
                    }
                    return F.\u0275fac = function(ee) {
                        return new(ee || F)(r.\u0275\ u0275inject($.Yg))
                    }, F.\u0275prov = r.\u0275\ u0275defineInjectable({
                        token: F,
                        factory: F.\u0275fac,
                        providedIn: "root"
                    }), F
                })(),
                ne = (() => {
                    class F {
                        constructor(ee, Fe, Qe, st) {
                            this.el = ee, this.imageService = Fe, this.breakpointObserver = Qe, this.renderer = st, this.COPY_ELEMENT_ID = "imageCopyElementId", this.type = "image", this.style = "lnp_thumbnail_huge", this.attachCopy = !1, this.asBackground = !0, this.dynamicHeight = !1, this.onImageLoading = new r.EventEmitter
                        }
                        ngOnChanges(ee) {
                            ee.imageSrc.previousValue && ee.imageSrc.previousVale !== ee.imageSrc.currentValue && this.updateImage()
                        }
                        ngOnInit() {
                            if (this.onImageLoading.emit(!1), this.attachCopy) {
                                const ee = document.createElement("div");
                                ee.className = "copy-container", ee.innerHTML = `<div class="copy" id="${this.COPY_ELEMENT_ID}">\n                fot.\n            </div>`, this.el.nativeElement.parentElement.appendChild(ee)
                            }
                            this.breakpointObserver$ = this.breakpointObserver.observe([$.u3.Handset]).subscribe(ee => {
                                this.updateImage()
                            })
                        }
                        onLoad(ee) {
                            this.onImageLoading.emit(!1), ee ? ee.classList.add("imageLoaded") : this.el.nativeElement.classList.add("imageLoaded")
                        }
                        updateImage() {
                            this.onImageLoading.emit(!0);
                            const ee = this.imageService.getImage(this.imageSrc);
                            if (ee) {
                                const Fe = this.imageService.getImageSrc(ee, this.style);
                                if ("image" === this.type) {
                                    if (this.asBackground) {
                                        if (this.el.nativeElement.classList.add("isImage"), this.handleBackgroundImage(this.el, Fe, ee), this.dynamicHeight) {
                                            const Qe = document.createElement("img");
                                            Qe.src = Fe, Qe.addEventListener("load", st => {
                                                this.onLoad()
                                            }), this.el.nativeElement.classList.add("isDynamicHeight"), this.el.nativeElement.appendChild(Qe)
                                        }
                                    } else this.el.nativeElement.alt = ee.alt, this.lazyLoadImage(this.el, Fe, ee);
                                    if (this.attachCopy) {
                                        const Qe = this.el.nativeElement.parentElement.querySelector(`#${this.COPY_ELEMENT_ID}`);
                                        ee.credits ? (Qe.innerHTML = `fot. ${ee.credits}`, Qe.classList.remove("none")) : Qe.classList.add("none")
                                    }
                                } else this.handleBackgroundImage(this.el, Fe, ee)
                            }
                        }
                        handleBackgroundImage(ee, Fe, Qe) {
                            const st = ee.nativeElement,
                                zt = new IntersectionObserver((Gt, fn) => {
                                    Gt.forEach(en => {
                                        en.isIntersecting && (this.renderer.setStyle(st, "backgroundImage", `url(${Fe})`), Qe.focalPoint && (this.renderer.setStyle(st, "backgroundPositionY", `${Qe.focalPoint.yPercentage}%`), this.renderer.setStyle(st, "backgroundPositionX", `${Qe.focalPoint.xPercentage}%`)), zt.unobserve(st))
                                    })
                                });
                            zt.observe(st)
                        }
                        lazyLoadImage(ee, Fe, Qe) {
                            const st = ee.nativeElement,
                                zt = new IntersectionObserver((Gt, fn) => {
                                    Gt.forEach(en => {
                                        en.isIntersecting && (st.src = Fe, Qe ? .focalPoint && this.renderer.setStyle(st, "objectPosition", `${Qe.focalPoint.xPercentage}% ${Qe.focalPoint.yPercentage}%`), zt.unobserve(st))
                                    })
                                });
                            zt.observe(st)
                        }
                        ngOnDestroy() {
                            this.breakpointObserver$.unsubscribe()
                        }
                    }
                    return F.\u0275fac = function(ee) {
                        return new(ee || F)(r.\u0275\ u0275directiveInject(r.ElementRef), r.\u0275\ u0275directiveInject(Be), r.\u0275\ u0275directiveInject($.Yg), r.\u0275\ u0275directiveInject(r.Renderer2))
                    }, F.\u0275dir = r.\u0275\ u0275defineDirective({
                        type: F,
                        selectors: [
                            ["", "appImageSrc", ""]
                        ],
                        hostBindings: function(ee, Fe) {
                            1 & ee && r.\u0275\ u0275listener("load", function() {
                                return Fe.onLoad()
                            })
                        },
                        inputs: {
                            imageSrc: ["appImageSrc", "imageSrc"],
                            type: ["appImageSrcType", "type"],
                            style: ["appImageStyle", "style"],
                            attachCopy: ["appImageCopy", "attachCopy"],
                            asBackground: ["appImageAsBackground", "asBackground"],
                            dynamicHeight: ["appImageDynamicHeight", "dynamicHeight"]
                        },
                        outputs: {
                            onImageLoading: "onImageLoading"
                        },
                        features: [r.\u0275\ u0275NgOnChangesFeature]
                    }), F
                })();
            var R = a(7726);

            function u(F, ye) {
                if (1 & F && (r.\u0275\ u0275elementStart(0, "app-link", 12), r.\u0275\ u0275element(1, "img", 13), r.\u0275\ u0275elementEnd()), 2 & F) {
                    const ee = ye.$implicit;
                    r.\u0275\ u0275property("appLinkConfig", ee), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("appImageSrc", ee.image)("appImageStyle", "lnp_icon")
                }
            }

            function h(F, ye) {
                if (1 & F && (r.\u0275\ u0275elementStart(0, "div", 9)(1, "div", 10), r.\u0275\ u0275text(2), r.\u0275\ u0275elementEnd(), r.\u0275\ u0275elementStart(3, "div", 11), r.\u0275\ u0275template(4, u, 2, 3, "app-link", 7), r.\u0275\ u0275elementEnd()()), 2 & F) {
                    const ee = r.\u0275\ u0275nextContext();
                    r.\u0275\ u0275advance(2), r.\u0275\ u0275textInterpolate1(" ", null == ee.preFooterPartners || null == ee.preFooterPartners.headline ? null : ee.preFooterPartners.headline.text, " "), r.\u0275\ u0275advance(2), r.\u0275\ u0275property("ngForOf", ee.preFooterPartners.partners)
                }
            }

            function x(F, ye) {
                if (1 & F && (r.\u0275\ u0275elementStart(0, "app-link", 12), r.\u0275\ u0275text(1), r.\u0275\ u0275elementEnd()), 2 & F) {
                    const ee = r.\u0275\ u0275nextContext().$implicit;
                    r.\u0275\ u0275property("appLinkConfig", ee), r.\u0275\ u0275advance(1), r.\u0275\ u0275textInterpolate1(" ", ee.title, " ")
                }
            }

            function X(F, ye) {
                if (1 & F && (r.\u0275\ u0275elementStart(0, "li", 18), r.\u0275\ u0275template(1, x, 2, 2, "app-link", 19), r.\u0275\ u0275elementEnd()), 2 & F) {
                    const ee = ye.$implicit;
                    r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngIf", "/euro2020" !== ee.url)
                }
            }

            function le(F, ye) {
                1 & F && r.\u0275\ u0275element(0, "img", 30)
            }

            function Ue(F, ye) {
                1 & F && r.\u0275\ u0275element(0, "img", 31)
            }

            function Xe(F, ye) {
                1 & F && r.\u0275\ u0275element(0, "img", 32)
            }

            function ot(F, ye) {
                1 & F && r.\u0275\ u0275element(0, "img", 33)
            }

            function pt(F, ye) {
                1 & F && r.\u0275\ u0275element(0, "img", 34)
            }

            function jt(F, ye) {
                1 & F && r.\u0275\ u0275element(0, "img", 35)
            }

            function _t(F, ye) {
                1 & F && r.\u0275\ u0275element(0, "img", 36)
            }

            function Xt(F, ye) {
                1 & F && r.\u0275\ u0275element(0, "img", 37)
            }

            function It(F, ye) {
                if (1 & F && (r.\u0275\ u0275elementStart(0, "app-link", 12)(1, "div"), r.\u0275\ u0275elementContainerStart(2, 21), r.\u0275\ u0275template(3, le, 1, 0, "img", 22), r.\u0275\ u0275template(4, Ue, 1, 0, "img", 23), r.\u0275\ u0275template(5, Xe, 1, 0, "img", 24), r.\u0275\ u0275template(6, ot, 1, 0, "img", 25), r.\u0275\ u0275template(7, pt, 1, 0, "img", 26), r.\u0275\ u0275template(8, jt, 1, 0, "img", 27), r.\u0275\ u0275template(9, _t, 1, 0, "img", 28), r.\u0275\ u0275template(10, Xt, 1, 0, "img", 29), r.\u0275\ u0275elementContainerEnd(), r.\u0275\ u0275elementEnd()()), 2 & F) {
                    const ee = ye.$implicit;
                    r.\u0275\ u0275property("appLinkConfig", ee), r.\u0275\ u0275advance(1), r.\u0275\ u0275classMap("social-icon__square--" + ee.linkType), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngSwitch", ee.linkType), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngSwitchCase", "google"), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngSwitchCase", "Facebook"), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngSwitchCase", "Messenger"), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngSwitchCase", "Twitter"), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngSwitchCase", "Instagram"), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngSwitchCase", "Link"), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngSwitchCase", "YouTube"), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngSwitchCase", "RGol")
                }
            }

            function At(F, ye) {
                if (1 & F && (r.\u0275\ u0275elementStart(0, "li", 20), r.\u0275\ u0275template(1, It, 11, 12, "app-link", 7), r.\u0275\ u0275elementEnd()), 2 & F) {
                    const ee = r.\u0275\ u0275nextContext(2);
                    r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngForOf", ee.getSocialIcons())
                }
            }
            const Qt = function(F) {
                return {
                    opened: F
                }
            };

            function Ut(F, ye) {
                if (1 & F) {
                    const ee = r.\u0275\ u0275getCurrentView();
                    r.\u0275\ u0275elementStart(0, "ul", 14)(1, "li", 15), r.\u0275\ u0275listener("click", function() {
                        const st = r.\u0275\ u0275restoreView(ee).index,
                            zt = r.\u0275\ u0275nextContext();
                        return r.\u0275\ u0275resetView(zt.toggleMenuOpened(st))
                    }), r.\u0275\ u0275text(2), r.\u0275\ u0275elementEnd(), r.\u0275\ u0275template(3, X, 2, 1, "li", 16), r.\u0275\ u0275template(4, At, 2, 1, "li", 17), r.\u0275\ u0275elementEnd()
                }
                if (2 & F) {
                    const ee = ye.$implicit,
                        Fe = ye.index,
                        Qe = ye.last,
                        st = r.\u0275\ u0275nextContext();
                    r.\u0275\ u0275property("ngClass", r.\u0275\ u0275pureFunction1(4, Qt, st.checkMenuOpened(Fe))), r.\u0275\ u0275advance(2), r.\u0275\ u0275textInterpolate1(" ", ee.title, " "), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngForOf", ee.subtree), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngIf", Qe)
                }
            }

            function Et(F, ye) {
                if (1 & F && (r.\u0275\ u0275elementStart(0, "app-link", 12), r.\u0275\ u0275element(1, "img", 38), r.\u0275\ u0275elementEnd()), 2 & F) {
                    const ee = ye.$implicit;
                    r.\u0275\ u0275property("appLinkConfig", ee), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("appImageSrc", ee.image)("appImageStyle", "lnp_icon")("appImageAsBackground", !1)
                }
            }
            let vn = (() => {
                class F {
                    constructor(ee) {
                        this.footerFacadeService = ee, this.menuOpened = []
                    }
                    ngOnInit() {
                        this.footerFacadeService.footerData$.subscribe(ee => {
                            this.footerConfig = ee.item, this.footerConfig.footerMenu && (this.menuOpened = Array(this.footerConfig.footerMenu.length).fill(!1)), this.preFooterPartners = this.getAddOn("ComponentAddOnPartnersPreFooter"), this.postFooterPartners = this.getAddOn("ComponentAddOnPartnersPostFooter"), this.cookieSettings = this.getAddOn("ComponentAddOnSettingsCookies"), this.disclaimer = this.getAddOn("ComponentAddOnText")
                        })
                    }
                    getAddOn(ee) {
                        return this.footerConfig ? .addOns.filter(Fe => Fe.discriminator === ee)[0]
                    }
                    getSocialIcons() {
                        return this.footerConfig ? this.footerConfig.footerSocialLinks : []
                    }
                    toggleMenuOpened(ee) {
                        this.menuOpened[ee] = !this.menuOpened[ee]
                    }
                    checkMenuOpened(ee) {
                        return this.menuOpened[ee]
                    }
                }
                return F.\u0275fac = function(ee) {
                    return new(ee || F)(r.\u0275\ u0275directiveInject(je))
                }, F.\u0275cmp = r.\u0275\ u0275defineComponent({
                    type: F,
                    selectors: [
                        ["app-footer"]
                    ],
                    decls: 12,
                    vars: 5,
                    consts: [
                        ["class", "prefooter-partners__container container", 4, "ngIf"],
                        [1, "footer"],
                        [1, "container"],
                        [1, "footer__nav"],
                        ["class", "footer__menu", 3, "ngClass", 4, "ngFor", "ngForOf"],
                        [1, "footer__partners"],
                        [1, "footer__partners__title"],
                        [3, "appLinkConfig", 4, "ngFor", "ngForOf"],
                        [1, "footer__disclaimer", 3, "innerHTML"],
                        [1, "prefooter-partners__container", "container"],
                        [1, "prefooter-partners__title"],
                        [1, "prefooter-partners__flexbox"],
                        [3, "appLinkConfig"],
                        [1, "prefooter-partners__img", 3, "appImageSrc", "appImageStyle"],
                        [1, "footer__menu", 3, "ngClass"],
                        [1, "footer__title", 3, "click"],
                        ["class", "footer__item", 4, "ngFor", "ngForOf"],
                        ["class", "footer__social", 4, "ngIf"],
                        [1, "footer__item"],
                        [3, "appLinkConfig", 4, "ngIf"],
                        [1, "footer__social"],
                        [3, "ngSwitch"],
                        ["class", "social-icon__square__img", "src", "assets/icons/google-white.png", 4, "ngSwitchCase"],
                        ["class", "social-icon__square__img", "src", "assets/icons/facebook-white.png", 4, "ngSwitchCase"],
                        ["class", "social-icon__square__img", "src", "assets/icons/messager-white.png", 4, "ngSwitchCase"],
                        ["class", "social-icon__square__img", "src", "assets/icons/twitter-white.png", 4, "ngSwitchCase"],
                        ["class", "social-icon__square__img", "src", "assets/icons/instagram-white.png", 4, "ngSwitchCase"],
                        ["class", "social-icon__square__img", "src", "assets/icons/link-white.png", 4, "ngSwitchCase"],
                        ["class", "social-icon__square__img", "src", "assets/icons/youtube-white.png", 4, "ngSwitchCase"],
                        ["class", "social-icon__square__img", "src", "assets/icons/rgol-icon.svg", 4, "ngSwitchCase"],
                        ["src", "assets/icons/google-white.png", 1, "social-icon__square__img"],
                        ["src", "assets/icons/facebook-white.png", 1, "social-icon__square__img"],
                        ["src", "assets/icons/messager-white.png", 1, "social-icon__square__img"],
                        ["src", "assets/icons/twitter-white.png", 1, "social-icon__square__img"],
                        ["src", "assets/icons/instagram-white.png", 1, "social-icon__square__img"],
                        ["src", "assets/icons/link-white.png", 1, "social-icon__square__img"],
                        ["src", "assets/icons/youtube-white.png", 1, "social-icon__square__img"],
                        ["src", "assets/icons/rgol-icon.svg", 1, "social-icon__square__img"],
                        [1, "partner", 3, "appImageSrc", "appImageStyle", "appImageAsBackground"]
                    ],
                    template: function(ee, Fe) {
                        1 & ee && (r.\u0275\ u0275elementStart(0, "footer"), r.\u0275\ u0275template(1, h, 5, 2, "div", 0), r.\u0275\ u0275elementStart(2, "div", 1)(3, "div", 2)(4, "nav", 3), r.\u0275\ u0275template(5, Ut, 5, 6, "ul", 4), r.\u0275\ u0275elementEnd(), r.\u0275\ u0275elementStart(6, "div", 5)(7, "span", 6), r.\u0275\ u0275text(8), r.\u0275\ u0275elementEnd(), r.\u0275\ u0275elementStart(9, "div"), r.\u0275\ u0275template(10, Et, 2, 4, "app-link", 7), r.\u0275\ u0275elementEnd()(), r.\u0275\ u0275element(11, "div", 8), r.\u0275\ u0275elementEnd()()()), 2 & ee && (r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngIf", Fe.preFooterPartners), r.\u0275\ u0275advance(4), r.\u0275\ u0275property("ngForOf", null == Fe.footerConfig ? null : Fe.footerConfig.footerMenu), r.\u0275\ u0275advance(3), r.\u0275\ u0275textInterpolate1(" ", null == Fe.postFooterPartners || null == Fe.postFooterPartners.headline ? null : Fe.postFooterPartners.headline.text, " "), r.\u0275\ u0275advance(2), r.\u0275\ u0275property("ngForOf", null == Fe.postFooterPartners ? null : Fe.postFooterPartners.partners), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("innerHTML", null == Fe.disclaimer ? null : Fe.disclaimer.text, r.\u0275\ u0275sanitizeHtml))
                    },
                    dependencies: [Re.NgClass, Re.NgForOf, Re.NgIf, Re.NgSwitch, Re.NgSwitchCase, ne, R.i],
                    styles: ['[_ngcontent-%COMP%]:root{--bs-blue: #0d6efd;--bs-indigo: #6610f2;--bs-purple: #6f42c1;--bs-pink: #d63384;--bs-red: #dc3545;--bs-orange: #fd7e14;--bs-yellow: #ffc107;--bs-green: #198754;--bs-teal: #20c997;--bs-cyan: #0dcaf0;--bs-white: #fff;--bs-gray: #6c757d;--bs-gray-dark: #343a40;--bs-gray-100: #f8f9fa;--bs-gray-200: #e9ecef;--bs-gray-300: #dee2e6;--bs-gray-400: #ced4da;--bs-gray-500: #adb5bd;--bs-gray-600: #6c757d;--bs-gray-700: #495057;--bs-gray-800: #343a40;--bs-gray-900: #212529;--bs-primary: #0d6efd;--bs-secondary: #6c757d;--bs-success: #198754;--bs-info: #0dcaf0;--bs-warning: #ffc107;--bs-danger: #dc3545;--bs-light: #f8f9fa;--bs-dark: #212529;--bs-primary-rgb: 13, 110, 253;--bs-secondary-rgb: 108, 117, 125;--bs-success-rgb: 25, 135, 84;--bs-info-rgb: 13, 202, 240;--bs-warning-rgb: 255, 193, 7;--bs-danger-rgb: 220, 53, 69;--bs-light-rgb: 248, 249, 250;--bs-dark-rgb: 33, 37, 41;--bs-white-rgb: 255, 255, 255;--bs-black-rgb: 0, 0, 0;--bs-body-color-rgb: 33, 37, 41;--bs-body-bg-rgb: 255, 255, 255;--bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, .15), rgba(255, 255, 255, 0));--bs-body-font-family: var(--bs-font-sans-serif);--bs-body-font-size: 1rem;--bs-body-font-weight: 400;--bs-body-line-height: 1.5;--bs-body-color: #212529;--bs-body-bg: #fff}.container[_ngcontent-%COMP%], .container-fluid[_ngcontent-%COMP%], .container-xxl[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%]{width:100%;padding-right:var(--bs-gutter-x, .75rem);padding-left:var(--bs-gutter-x, .75rem);margin-right:auto;margin-left:auto}@media (min-width: 576px){.container-sm[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{max-width:540px}}@media (min-width: 768px){.container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{max-width:720px}}@media (min-width: 992px){.container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{max-width:960px}}@media (min-width: 1200px){.container-xl[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{max-width:1140px}}@media (min-width: 1400px){.container-xxl[_ngcontent-%COMP%], .container-xl[_ngcontent-%COMP%], .container-lg[_ngcontent-%COMP%], .container-md[_ngcontent-%COMP%], .container-sm[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{max-width:1320px}}.row[_ngcontent-%COMP%]{--bs-gutter-x: 1.5rem;--bs-gutter-y: 0;display:flex;flex-wrap:wrap;margin-top:calc(-1 * var(--bs-gutter-y));margin-right:calc(-.5 * var(--bs-gutter-x));margin-left:calc(-.5 * var(--bs-gutter-x))}.row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{box-sizing:border-box;flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-top:var(--bs-gutter-y)}.col[_ngcontent-%COMP%]{flex:1 0 0%}.row-cols-auto[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.row-cols-1[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.row-cols-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.row-cols-3[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:33.3333333333%}.row-cols-4[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.row-cols-5[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:20%}.row-cols-6[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:16.6666666667%}.col-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.col-1[_ngcontent-%COMP%]{flex:0 0 auto;width:8.33333333%}.col-2[_ngcontent-%COMP%]{flex:0 0 auto;width:16.66666667%}.col-3[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.col-4[_ngcontent-%COMP%]{flex:0 0 auto;width:33.33333333%}.col-5[_ngcontent-%COMP%]{flex:0 0 auto;width:41.66666667%}.col-6[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.col-7[_ngcontent-%COMP%]{flex:0 0 auto;width:58.33333333%}.col-8[_ngcontent-%COMP%]{flex:0 0 auto;width:66.66666667%}.col-9[_ngcontent-%COMP%]{flex:0 0 auto;width:75%}.col-10[_ngcontent-%COMP%]{flex:0 0 auto;width:83.33333333%}.col-11[_ngcontent-%COMP%]{flex:0 0 auto;width:91.66666667%}.col-12[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.offset-1[_ngcontent-%COMP%]{margin-left:8.33333333%}.offset-2[_ngcontent-%COMP%]{margin-left:16.66666667%}.offset-3[_ngcontent-%COMP%]{margin-left:25%}.offset-4[_ngcontent-%COMP%]{margin-left:33.33333333%}.offset-5[_ngcontent-%COMP%]{margin-left:41.66666667%}.offset-6[_ngcontent-%COMP%]{margin-left:50%}.offset-7[_ngcontent-%COMP%]{margin-left:58.33333333%}.offset-8[_ngcontent-%COMP%]{margin-left:66.66666667%}.offset-9[_ngcontent-%COMP%]{margin-left:75%}.offset-10[_ngcontent-%COMP%]{margin-left:83.33333333%}.offset-11[_ngcontent-%COMP%]{margin-left:91.66666667%}.g-0[_ngcontent-%COMP%], .gx-0[_ngcontent-%COMP%]{--bs-gutter-x: 0}.g-0[_ngcontent-%COMP%], .gy-0[_ngcontent-%COMP%]{--bs-gutter-y: 0}.g-1[_ngcontent-%COMP%], .gx-1[_ngcontent-%COMP%]{--bs-gutter-x: .25rem}.g-1[_ngcontent-%COMP%], .gy-1[_ngcontent-%COMP%]{--bs-gutter-y: .25rem}.g-2[_ngcontent-%COMP%], .gx-2[_ngcontent-%COMP%]{--bs-gutter-x: .5rem}.g-2[_ngcontent-%COMP%], .gy-2[_ngcontent-%COMP%]{--bs-gutter-y: .5rem}.g-3[_ngcontent-%COMP%], .gx-3[_ngcontent-%COMP%]{--bs-gutter-x: 1rem}.g-3[_ngcontent-%COMP%], .gy-3[_ngcontent-%COMP%]{--bs-gutter-y: 1rem}.g-4[_ngcontent-%COMP%], .gx-4[_ngcontent-%COMP%]{--bs-gutter-x: 1.5rem}.g-4[_ngcontent-%COMP%], .gy-4[_ngcontent-%COMP%]{--bs-gutter-y: 1.5rem}.g-5[_ngcontent-%COMP%], .gx-5[_ngcontent-%COMP%]{--bs-gutter-x: 3rem}.g-5[_ngcontent-%COMP%], .gy-5[_ngcontent-%COMP%]{--bs-gutter-y: 3rem}@media (min-width: 576px){.col-sm[_ngcontent-%COMP%]{flex:1 0 0%}.row-cols-sm-auto[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.row-cols-sm-1[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.row-cols-sm-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.row-cols-sm-3[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.row-cols-sm-5[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:20%}.row-cols-sm-6[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:16.6666666667%}.col-sm-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.col-sm-1[_ngcontent-%COMP%]{flex:0 0 auto;width:8.33333333%}.col-sm-2[_ngcontent-%COMP%]{flex:0 0 auto;width:16.66666667%}.col-sm-3[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.col-sm-4[_ngcontent-%COMP%]{flex:0 0 auto;width:33.33333333%}.col-sm-5[_ngcontent-%COMP%]{flex:0 0 auto;width:41.66666667%}.col-sm-6[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.col-sm-7[_ngcontent-%COMP%]{flex:0 0 auto;width:58.33333333%}.col-sm-8[_ngcontent-%COMP%]{flex:0 0 auto;width:66.66666667%}.col-sm-9[_ngcontent-%COMP%]{flex:0 0 auto;width:75%}.col-sm-10[_ngcontent-%COMP%]{flex:0 0 auto;width:83.33333333%}.col-sm-11[_ngcontent-%COMP%]{flex:0 0 auto;width:91.66666667%}.col-sm-12[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.offset-sm-0[_ngcontent-%COMP%]{margin-left:0}.offset-sm-1[_ngcontent-%COMP%]{margin-left:8.33333333%}.offset-sm-2[_ngcontent-%COMP%]{margin-left:16.66666667%}.offset-sm-3[_ngcontent-%COMP%]{margin-left:25%}.offset-sm-4[_ngcontent-%COMP%]{margin-left:33.33333333%}.offset-sm-5[_ngcontent-%COMP%]{margin-left:41.66666667%}.offset-sm-6[_ngcontent-%COMP%]{margin-left:50%}.offset-sm-7[_ngcontent-%COMP%]{margin-left:58.33333333%}.offset-sm-8[_ngcontent-%COMP%]{margin-left:66.66666667%}.offset-sm-9[_ngcontent-%COMP%]{margin-left:75%}.offset-sm-10[_ngcontent-%COMP%]{margin-left:83.33333333%}.offset-sm-11[_ngcontent-%COMP%]{margin-left:91.66666667%}.g-sm-0[_ngcontent-%COMP%], .gx-sm-0[_ngcontent-%COMP%]{--bs-gutter-x: 0}.g-sm-0[_ngcontent-%COMP%], .gy-sm-0[_ngcontent-%COMP%]{--bs-gutter-y: 0}.g-sm-1[_ngcontent-%COMP%], .gx-sm-1[_ngcontent-%COMP%]{--bs-gutter-x: .25rem}.g-sm-1[_ngcontent-%COMP%], .gy-sm-1[_ngcontent-%COMP%]{--bs-gutter-y: .25rem}.g-sm-2[_ngcontent-%COMP%], .gx-sm-2[_ngcontent-%COMP%]{--bs-gutter-x: .5rem}.g-sm-2[_ngcontent-%COMP%], .gy-sm-2[_ngcontent-%COMP%]{--bs-gutter-y: .5rem}.g-sm-3[_ngcontent-%COMP%], .gx-sm-3[_ngcontent-%COMP%]{--bs-gutter-x: 1rem}.g-sm-3[_ngcontent-%COMP%], .gy-sm-3[_ngcontent-%COMP%]{--bs-gutter-y: 1rem}.g-sm-4[_ngcontent-%COMP%], .gx-sm-4[_ngcontent-%COMP%]{--bs-gutter-x: 1.5rem}.g-sm-4[_ngcontent-%COMP%], .gy-sm-4[_ngcontent-%COMP%]{--bs-gutter-y: 1.5rem}.g-sm-5[_ngcontent-%COMP%], .gx-sm-5[_ngcontent-%COMP%]{--bs-gutter-x: 3rem}.g-sm-5[_ngcontent-%COMP%], .gy-sm-5[_ngcontent-%COMP%]{--bs-gutter-y: 3rem}}@media (min-width: 768px){.col-md[_ngcontent-%COMP%]{flex:1 0 0%}.row-cols-md-auto[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.row-cols-md-1[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.row-cols-md-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.row-cols-md-3[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.row-cols-md-5[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:20%}.row-cols-md-6[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:16.6666666667%}.col-md-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.col-md-1[_ngcontent-%COMP%]{flex:0 0 auto;width:8.33333333%}.col-md-2[_ngcontent-%COMP%]{flex:0 0 auto;width:16.66666667%}.col-md-3[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.col-md-4[_ngcontent-%COMP%]{flex:0 0 auto;width:33.33333333%}.col-md-5[_ngcontent-%COMP%]{flex:0 0 auto;width:41.66666667%}.col-md-6[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.col-md-7[_ngcontent-%COMP%]{flex:0 0 auto;width:58.33333333%}.col-md-8[_ngcontent-%COMP%]{flex:0 0 auto;width:66.66666667%}.col-md-9[_ngcontent-%COMP%]{flex:0 0 auto;width:75%}.col-md-10[_ngcontent-%COMP%]{flex:0 0 auto;width:83.33333333%}.col-md-11[_ngcontent-%COMP%]{flex:0 0 auto;width:91.66666667%}.col-md-12[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.offset-md-0[_ngcontent-%COMP%]{margin-left:0}.offset-md-1[_ngcontent-%COMP%]{margin-left:8.33333333%}.offset-md-2[_ngcontent-%COMP%]{margin-left:16.66666667%}.offset-md-3[_ngcontent-%COMP%]{margin-left:25%}.offset-md-4[_ngcontent-%COMP%]{margin-left:33.33333333%}.offset-md-5[_ngcontent-%COMP%]{margin-left:41.66666667%}.offset-md-6[_ngcontent-%COMP%]{margin-left:50%}.offset-md-7[_ngcontent-%COMP%]{margin-left:58.33333333%}.offset-md-8[_ngcontent-%COMP%]{margin-left:66.66666667%}.offset-md-9[_ngcontent-%COMP%]{margin-left:75%}.offset-md-10[_ngcontent-%COMP%]{margin-left:83.33333333%}.offset-md-11[_ngcontent-%COMP%]{margin-left:91.66666667%}.g-md-0[_ngcontent-%COMP%], .gx-md-0[_ngcontent-%COMP%]{--bs-gutter-x: 0}.g-md-0[_ngcontent-%COMP%], .gy-md-0[_ngcontent-%COMP%]{--bs-gutter-y: 0}.g-md-1[_ngcontent-%COMP%], .gx-md-1[_ngcontent-%COMP%]{--bs-gutter-x: .25rem}.g-md-1[_ngcontent-%COMP%], .gy-md-1[_ngcontent-%COMP%]{--bs-gutter-y: .25rem}.g-md-2[_ngcontent-%COMP%], .gx-md-2[_ngcontent-%COMP%]{--bs-gutter-x: .5rem}.g-md-2[_ngcontent-%COMP%], .gy-md-2[_ngcontent-%COMP%]{--bs-gutter-y: .5rem}.g-md-3[_ngcontent-%COMP%], .gx-md-3[_ngcontent-%COMP%]{--bs-gutter-x: 1rem}.g-md-3[_ngcontent-%COMP%], .gy-md-3[_ngcontent-%COMP%]{--bs-gutter-y: 1rem}.g-md-4[_ngcontent-%COMP%], .gx-md-4[_ngcontent-%COMP%]{--bs-gutter-x: 1.5rem}.g-md-4[_ngcontent-%COMP%], .gy-md-4[_ngcontent-%COMP%]{--bs-gutter-y: 1.5rem}.g-md-5[_ngcontent-%COMP%], .gx-md-5[_ngcontent-%COMP%]{--bs-gutter-x: 3rem}.g-md-5[_ngcontent-%COMP%], .gy-md-5[_ngcontent-%COMP%]{--bs-gutter-y: 3rem}}@media (min-width: 992px){.col-lg[_ngcontent-%COMP%]{flex:1 0 0%}.row-cols-lg-auto[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.row-cols-lg-1[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.row-cols-lg-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.row-cols-lg-3[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.row-cols-lg-5[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:20%}.row-cols-lg-6[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:16.6666666667%}.col-lg-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.col-lg-1[_ngcontent-%COMP%]{flex:0 0 auto;width:8.33333333%}.col-lg-2[_ngcontent-%COMP%]{flex:0 0 auto;width:16.66666667%}.col-lg-3[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.col-lg-4[_ngcontent-%COMP%]{flex:0 0 auto;width:33.33333333%}.col-lg-5[_ngcontent-%COMP%]{flex:0 0 auto;width:41.66666667%}.col-lg-6[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.col-lg-7[_ngcontent-%COMP%]{flex:0 0 auto;width:58.33333333%}.col-lg-8[_ngcontent-%COMP%]{flex:0 0 auto;width:66.66666667%}.col-lg-9[_ngcontent-%COMP%]{flex:0 0 auto;width:75%}.col-lg-10[_ngcontent-%COMP%]{flex:0 0 auto;width:83.33333333%}.col-lg-11[_ngcontent-%COMP%]{flex:0 0 auto;width:91.66666667%}.col-lg-12[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.offset-lg-0[_ngcontent-%COMP%]{margin-left:0}.offset-lg-1[_ngcontent-%COMP%]{margin-left:8.33333333%}.offset-lg-2[_ngcontent-%COMP%]{margin-left:16.66666667%}.offset-lg-3[_ngcontent-%COMP%]{margin-left:25%}.offset-lg-4[_ngcontent-%COMP%]{margin-left:33.33333333%}.offset-lg-5[_ngcontent-%COMP%]{margin-left:41.66666667%}.offset-lg-6[_ngcontent-%COMP%]{margin-left:50%}.offset-lg-7[_ngcontent-%COMP%]{margin-left:58.33333333%}.offset-lg-8[_ngcontent-%COMP%]{margin-left:66.66666667%}.offset-lg-9[_ngcontent-%COMP%]{margin-left:75%}.offset-lg-10[_ngcontent-%COMP%]{margin-left:83.33333333%}.offset-lg-11[_ngcontent-%COMP%]{margin-left:91.66666667%}.g-lg-0[_ngcontent-%COMP%], .gx-lg-0[_ngcontent-%COMP%]{--bs-gutter-x: 0}.g-lg-0[_ngcontent-%COMP%], .gy-lg-0[_ngcontent-%COMP%]{--bs-gutter-y: 0}.g-lg-1[_ngcontent-%COMP%], .gx-lg-1[_ngcontent-%COMP%]{--bs-gutter-x: .25rem}.g-lg-1[_ngcontent-%COMP%], .gy-lg-1[_ngcontent-%COMP%]{--bs-gutter-y: .25rem}.g-lg-2[_ngcontent-%COMP%], .gx-lg-2[_ngcontent-%COMP%]{--bs-gutter-x: .5rem}.g-lg-2[_ngcontent-%COMP%], .gy-lg-2[_ngcontent-%COMP%]{--bs-gutter-y: .5rem}.g-lg-3[_ngcontent-%COMP%], .gx-lg-3[_ngcontent-%COMP%]{--bs-gutter-x: 1rem}.g-lg-3[_ngcontent-%COMP%], .gy-lg-3[_ngcontent-%COMP%]{--bs-gutter-y: 1rem}.g-lg-4[_ngcontent-%COMP%], .gx-lg-4[_ngcontent-%COMP%]{--bs-gutter-x: 1.5rem}.g-lg-4[_ngcontent-%COMP%], .gy-lg-4[_ngcontent-%COMP%]{--bs-gutter-y: 1.5rem}.g-lg-5[_ngcontent-%COMP%], .gx-lg-5[_ngcontent-%COMP%]{--bs-gutter-x: 3rem}.g-lg-5[_ngcontent-%COMP%], .gy-lg-5[_ngcontent-%COMP%]{--bs-gutter-y: 3rem}}@media (min-width: 1200px){.col-xl[_ngcontent-%COMP%]{flex:1 0 0%}.row-cols-xl-auto[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.row-cols-xl-1[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.row-cols-xl-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.row-cols-xl-3[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.row-cols-xl-5[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:20%}.row-cols-xl-6[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:16.6666666667%}.col-xl-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.col-xl-1[_ngcontent-%COMP%]{flex:0 0 auto;width:8.33333333%}.col-xl-2[_ngcontent-%COMP%]{flex:0 0 auto;width:16.66666667%}.col-xl-3[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.col-xl-4[_ngcontent-%COMP%]{flex:0 0 auto;width:33.33333333%}.col-xl-5[_ngcontent-%COMP%]{flex:0 0 auto;width:41.66666667%}.col-xl-6[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.col-xl-7[_ngcontent-%COMP%]{flex:0 0 auto;width:58.33333333%}.col-xl-8[_ngcontent-%COMP%]{flex:0 0 auto;width:66.66666667%}.col-xl-9[_ngcontent-%COMP%]{flex:0 0 auto;width:75%}.col-xl-10[_ngcontent-%COMP%]{flex:0 0 auto;width:83.33333333%}.col-xl-11[_ngcontent-%COMP%]{flex:0 0 auto;width:91.66666667%}.col-xl-12[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.offset-xl-0[_ngcontent-%COMP%]{margin-left:0}.offset-xl-1[_ngcontent-%COMP%]{margin-left:8.33333333%}.offset-xl-2[_ngcontent-%COMP%]{margin-left:16.66666667%}.offset-xl-3[_ngcontent-%COMP%]{margin-left:25%}.offset-xl-4[_ngcontent-%COMP%]{margin-left:33.33333333%}.offset-xl-5[_ngcontent-%COMP%]{margin-left:41.66666667%}.offset-xl-6[_ngcontent-%COMP%]{margin-left:50%}.offset-xl-7[_ngcontent-%COMP%]{margin-left:58.33333333%}.offset-xl-8[_ngcontent-%COMP%]{margin-left:66.66666667%}.offset-xl-9[_ngcontent-%COMP%]{margin-left:75%}.offset-xl-10[_ngcontent-%COMP%]{margin-left:83.33333333%}.offset-xl-11[_ngcontent-%COMP%]{margin-left:91.66666667%}.g-xl-0[_ngcontent-%COMP%], .gx-xl-0[_ngcontent-%COMP%]{--bs-gutter-x: 0}.g-xl-0[_ngcontent-%COMP%], .gy-xl-0[_ngcontent-%COMP%]{--bs-gutter-y: 0}.g-xl-1[_ngcontent-%COMP%], .gx-xl-1[_ngcontent-%COMP%]{--bs-gutter-x: .25rem}.g-xl-1[_ngcontent-%COMP%], .gy-xl-1[_ngcontent-%COMP%]{--bs-gutter-y: .25rem}.g-xl-2[_ngcontent-%COMP%], .gx-xl-2[_ngcontent-%COMP%]{--bs-gutter-x: .5rem}.g-xl-2[_ngcontent-%COMP%], .gy-xl-2[_ngcontent-%COMP%]{--bs-gutter-y: .5rem}.g-xl-3[_ngcontent-%COMP%], .gx-xl-3[_ngcontent-%COMP%]{--bs-gutter-x: 1rem}.g-xl-3[_ngcontent-%COMP%], .gy-xl-3[_ngcontent-%COMP%]{--bs-gutter-y: 1rem}.g-xl-4[_ngcontent-%COMP%], .gx-xl-4[_ngcontent-%COMP%]{--bs-gutter-x: 1.5rem}.g-xl-4[_ngcontent-%COMP%], .gy-xl-4[_ngcontent-%COMP%]{--bs-gutter-y: 1.5rem}.g-xl-5[_ngcontent-%COMP%], .gx-xl-5[_ngcontent-%COMP%]{--bs-gutter-x: 3rem}.g-xl-5[_ngcontent-%COMP%], .gy-xl-5[_ngcontent-%COMP%]{--bs-gutter-y: 3rem}}@media (min-width: 1400px){.col-xxl[_ngcontent-%COMP%]{flex:1 0 0%}.row-cols-xxl-auto[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.row-cols-xxl-1[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.row-cols-xxl-2[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.row-cols-xxl-3[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.row-cols-xxl-5[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:20%}.row-cols-xxl-6[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto;width:16.6666666667%}.col-xxl-auto[_ngcontent-%COMP%]{flex:0 0 auto;width:auto}.col-xxl-1[_ngcontent-%COMP%]{flex:0 0 auto;width:8.33333333%}.col-xxl-2[_ngcontent-%COMP%]{flex:0 0 auto;width:16.66666667%}.col-xxl-3[_ngcontent-%COMP%]{flex:0 0 auto;width:25%}.col-xxl-4[_ngcontent-%COMP%]{flex:0 0 auto;width:33.33333333%}.col-xxl-5[_ngcontent-%COMP%]{flex:0 0 auto;width:41.66666667%}.col-xxl-6[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.col-xxl-7[_ngcontent-%COMP%]{flex:0 0 auto;width:58.33333333%}.col-xxl-8[_ngcontent-%COMP%]{flex:0 0 auto;width:66.66666667%}.col-xxl-9[_ngcontent-%COMP%]{flex:0 0 auto;width:75%}.col-xxl-10[_ngcontent-%COMP%]{flex:0 0 auto;width:83.33333333%}.col-xxl-11[_ngcontent-%COMP%]{flex:0 0 auto;width:91.66666667%}.col-xxl-12[_ngcontent-%COMP%]{flex:0 0 auto;width:100%}.offset-xxl-0[_ngcontent-%COMP%]{margin-left:0}.offset-xxl-1[_ngcontent-%COMP%]{margin-left:8.33333333%}.offset-xxl-2[_ngcontent-%COMP%]{margin-left:16.66666667%}.offset-xxl-3[_ngcontent-%COMP%]{margin-left:25%}.offset-xxl-4[_ngcontent-%COMP%]{margin-left:33.33333333%}.offset-xxl-5[_ngcontent-%COMP%]{margin-left:41.66666667%}.offset-xxl-6[_ngcontent-%COMP%]{margin-left:50%}.offset-xxl-7[_ngcontent-%COMP%]{margin-left:58.33333333%}.offset-xxl-8[_ngcontent-%COMP%]{margin-left:66.66666667%}.offset-xxl-9[_ngcontent-%COMP%]{margin-left:75%}.offset-xxl-10[_ngcontent-%COMP%]{margin-left:83.33333333%}.offset-xxl-11[_ngcontent-%COMP%]{margin-left:91.66666667%}.g-xxl-0[_ngcontent-%COMP%], .gx-xxl-0[_ngcontent-%COMP%]{--bs-gutter-x: 0}.g-xxl-0[_ngcontent-%COMP%], .gy-xxl-0[_ngcontent-%COMP%]{--bs-gutter-y: 0}.g-xxl-1[_ngcontent-%COMP%], .gx-xxl-1[_ngcontent-%COMP%]{--bs-gutter-x: .25rem}.g-xxl-1[_ngcontent-%COMP%], .gy-xxl-1[_ngcontent-%COMP%]{--bs-gutter-y: .25rem}.g-xxl-2[_ngcontent-%COMP%], .gx-xxl-2[_ngcontent-%COMP%]{--bs-gutter-x: .5rem}.g-xxl-2[_ngcontent-%COMP%], .gy-xxl-2[_ngcontent-%COMP%]{--bs-gutter-y: .5rem}.g-xxl-3[_ngcontent-%COMP%], .gx-xxl-3[_ngcontent-%COMP%]{--bs-gutter-x: 1rem}.g-xxl-3[_ngcontent-%COMP%], .gy-xxl-3[_ngcontent-%COMP%]{--bs-gutter-y: 1rem}.g-xxl-4[_ngcontent-%COMP%], .gx-xxl-4[_ngcontent-%COMP%]{--bs-gutter-x: 1.5rem}.g-xxl-4[_ngcontent-%COMP%], .gy-xxl-4[_ngcontent-%COMP%]{--bs-gutter-y: 1.5rem}.g-xxl-5[_ngcontent-%COMP%], .gx-xxl-5[_ngcontent-%COMP%]{--bs-gutter-x: 3rem}.g-xxl-5[_ngcontent-%COMP%], .gy-xxl-5[_ngcontent-%COMP%]{--bs-gutter-y: 3rem}}.d-inline[_ngcontent-%COMP%]{display:inline!important}.d-inline-block[_ngcontent-%COMP%]{display:inline-block!important}.d-block[_ngcontent-%COMP%]{display:block!important}.d-grid[_ngcontent-%COMP%]{display:grid!important}.d-table[_ngcontent-%COMP%]{display:table!important}.d-table-row[_ngcontent-%COMP%]{display:table-row!important}.d-table-cell[_ngcontent-%COMP%]{display:table-cell!important}.d-flex[_ngcontent-%COMP%]{display:flex!important}.d-inline-flex[_ngcontent-%COMP%]{display:inline-flex!important}.d-none[_ngcontent-%COMP%]{display:none!important}.flex-fill[_ngcontent-%COMP%]{flex:1 1 auto!important}.flex-row[_ngcontent-%COMP%]{flex-direction:row!important}.flex-column[_ngcontent-%COMP%]{flex-direction:column!important}.flex-row-reverse[_ngcontent-%COMP%]{flex-direction:row-reverse!important}.flex-column-reverse[_ngcontent-%COMP%]{flex-direction:column-reverse!important}.flex-grow-0[_ngcontent-%COMP%]{flex-grow:0!important}.flex-grow-1[_ngcontent-%COMP%]{flex-grow:1!important}.flex-shrink-0[_ngcontent-%COMP%]{flex-shrink:0!important}.flex-shrink-1[_ngcontent-%COMP%]{flex-shrink:1!important}.flex-wrap[_ngcontent-%COMP%]{flex-wrap:wrap!important}.flex-nowrap[_ngcontent-%COMP%]{flex-wrap:nowrap!important}.flex-wrap-reverse[_ngcontent-%COMP%]{flex-wrap:wrap-reverse!important}.justify-content-start[_ngcontent-%COMP%]{justify-content:flex-start!important}.justify-content-end[_ngcontent-%COMP%]{justify-content:flex-end!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-between[_ngcontent-%COMP%]{justify-content:space-between!important}.justify-content-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-evenly[_ngcontent-%COMP%]{justify-content:space-evenly!important}.align-items-start[_ngcontent-%COMP%]{align-items:flex-start!important}.align-items-end[_ngcontent-%COMP%]{align-items:flex-end!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-stretch[_ngcontent-%COMP%]{align-items:stretch!important}.align-content-start[_ngcontent-%COMP%]{align-content:flex-start!important}.align-content-end[_ngcontent-%COMP%]{align-content:flex-end!important}.align-content-center[_ngcontent-%COMP%]{align-content:center!important}.align-content-between[_ngcontent-%COMP%]{align-content:space-between!important}.align-content-around[_ngcontent-%COMP%]{align-content:space-around!important}.align-content-stretch[_ngcontent-%COMP%]{align-content:stretch!important}.align-self-auto[_ngcontent-%COMP%]{align-self:auto!important}.align-self-start[_ngcontent-%COMP%]{align-self:flex-start!important}.align-self-end[_ngcontent-%COMP%]{align-self:flex-end!important}.align-self-center[_ngcontent-%COMP%]{align-self:center!important}.align-self-baseline[_ngcontent-%COMP%]{align-self:baseline!important}.align-self-stretch[_ngcontent-%COMP%]{align-self:stretch!important}.order-first[_ngcontent-%COMP%]{order:-1!important}.order-0[_ngcontent-%COMP%]{order:0!important}.order-1[_ngcontent-%COMP%]{order:1!important}.order-2[_ngcontent-%COMP%]{order:2!important}.order-3[_ngcontent-%COMP%]{order:3!important}.order-4[_ngcontent-%COMP%]{order:4!important}.order-5[_ngcontent-%COMP%]{order:5!important}.order-last[_ngcontent-%COMP%]{order:6!important}.m-0[_ngcontent-%COMP%]{margin:0!important}.m-1[_ngcontent-%COMP%]{margin:.25rem!important}.m-2[_ngcontent-%COMP%]{margin:.5rem!important}.m-3[_ngcontent-%COMP%]{margin:1rem!important}.m-4[_ngcontent-%COMP%]{margin:1.5rem!important}.m-5[_ngcontent-%COMP%]{margin:3rem!important}.m-auto[_ngcontent-%COMP%]{margin:auto!important}.mx-0[_ngcontent-%COMP%]{margin-right:0!important;margin-left:0!important}.mx-1[_ngcontent-%COMP%]{margin-right:.25rem!important;margin-left:.25rem!important}.mx-2[_ngcontent-%COMP%]{margin-right:.5rem!important;margin-left:.5rem!important}.mx-3[_ngcontent-%COMP%]{margin-right:1rem!important;margin-left:1rem!important}.mx-4[_ngcontent-%COMP%]{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-5[_ngcontent-%COMP%]{margin-right:3rem!important;margin-left:3rem!important}.mx-auto[_ngcontent-%COMP%]{margin-right:auto!important;margin-left:auto!important}.my-0[_ngcontent-%COMP%]{margin-top:0!important;margin-bottom:0!important}.my-1[_ngcontent-%COMP%]{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-2[_ngcontent-%COMP%]{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-3[_ngcontent-%COMP%]{margin-top:1rem!important;margin-bottom:1rem!important}.my-4[_ngcontent-%COMP%]{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-5[_ngcontent-%COMP%]{margin-top:3rem!important;margin-bottom:3rem!important}.my-auto[_ngcontent-%COMP%]{margin-top:auto!important;margin-bottom:auto!important}.mt-0[_ngcontent-%COMP%]{margin-top:0!important}.mt-1[_ngcontent-%COMP%]{margin-top:.25rem!important}.mt-2[_ngcontent-%COMP%]{margin-top:.5rem!important}.mt-3[_ngcontent-%COMP%]{margin-top:1rem!important}.mt-4[_ngcontent-%COMP%]{margin-top:1.5rem!important}.mt-5[_ngcontent-%COMP%]{margin-top:3rem!important}.mt-auto[_ngcontent-%COMP%]{margin-top:auto!important}.me-0[_ngcontent-%COMP%]{margin-right:0!important}.me-1[_ngcontent-%COMP%]{margin-right:.25rem!important}.me-2[_ngcontent-%COMP%]{margin-right:.5rem!important}.me-3[_ngcontent-%COMP%]{margin-right:1rem!important}.me-4[_ngcontent-%COMP%]{margin-right:1.5rem!important}.me-5[_ngcontent-%COMP%]{margin-right:3rem!important}.me-auto[_ngcontent-%COMP%]{margin-right:auto!important}.mb-0[_ngcontent-%COMP%]{margin-bottom:0!important}.mb-1[_ngcontent-%COMP%]{margin-bottom:.25rem!important}.mb-2[_ngcontent-%COMP%]{margin-bottom:.5rem!important}.mb-3[_ngcontent-%COMP%]{margin-bottom:1rem!important}.mb-4[_ngcontent-%COMP%]{margin-bottom:1.5rem!important}.mb-5[_ngcontent-%COMP%]{margin-bottom:3rem!important}.mb-auto[_ngcontent-%COMP%]{margin-bottom:auto!important}.ms-0[_ngcontent-%COMP%]{margin-left:0!important}.ms-1[_ngcontent-%COMP%]{margin-left:.25rem!important}.ms-2[_ngcontent-%COMP%]{margin-left:.5rem!important}.ms-3[_ngcontent-%COMP%]{margin-left:1rem!important}.ms-4[_ngcontent-%COMP%]{margin-left:1.5rem!important}.ms-5[_ngcontent-%COMP%]{margin-left:3rem!important}.ms-auto[_ngcontent-%COMP%]{margin-left:auto!important}.p-0[_ngcontent-%COMP%]{padding:0!important}.p-1[_ngcontent-%COMP%]{padding:.25rem!important}.p-2[_ngcontent-%COMP%]{padding:.5rem!important}.p-3[_ngcontent-%COMP%]{padding:1rem!important}.p-4[_ngcontent-%COMP%]{padding:1.5rem!important}.p-5[_ngcontent-%COMP%]{padding:3rem!important}.px-0[_ngcontent-%COMP%]{padding-right:0!important;padding-left:0!important}.px-1[_ngcontent-%COMP%]{padding-right:.25rem!important;padding-left:.25rem!important}.px-2[_ngcontent-%COMP%]{padding-right:.5rem!important;padding-left:.5rem!important}.px-3[_ngcontent-%COMP%]{padding-right:1rem!important;padding-left:1rem!important}.px-4[_ngcontent-%COMP%]{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-5[_ngcontent-%COMP%]{padding-right:3rem!important;padding-left:3rem!important}.py-0[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}.py-1[_ngcontent-%COMP%]{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-2[_ngcontent-%COMP%]{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-3[_ngcontent-%COMP%]{padding-top:1rem!important;padding-bottom:1rem!important}.py-4[_ngcontent-%COMP%]{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-5[_ngcontent-%COMP%]{padding-top:3rem!important;padding-bottom:3rem!important}.pt-0[_ngcontent-%COMP%]{padding-top:0!important}.pt-1[_ngcontent-%COMP%]{padding-top:.25rem!important}.pt-2[_ngcontent-%COMP%]{padding-top:.5rem!important}.pt-3[_ngcontent-%COMP%]{padding-top:1rem!important}.pt-4[_ngcontent-%COMP%]{padding-top:1.5rem!important}.pt-5[_ngcontent-%COMP%]{padding-top:3rem!important}.pe-0[_ngcontent-%COMP%]{padding-right:0!important}.pe-1[_ngcontent-%COMP%]{padding-right:.25rem!important}.pe-2[_ngcontent-%COMP%]{padding-right:.5rem!important}.pe-3[_ngcontent-%COMP%]{padding-right:1rem!important}.pe-4[_ngcontent-%COMP%]{padding-right:1.5rem!important}.pe-5[_ngcontent-%COMP%]{padding-right:3rem!important}.pb-0[_ngcontent-%COMP%]{padding-bottom:0!important}.pb-1[_ngcontent-%COMP%]{padding-bottom:.25rem!important}.pb-2[_ngcontent-%COMP%]{padding-bottom:.5rem!important}.pb-3[_ngcontent-%COMP%]{padding-bottom:1rem!important}.pb-4[_ngcontent-%COMP%]{padding-bottom:1.5rem!important}.pb-5[_ngcontent-%COMP%]{padding-bottom:3rem!important}.ps-0[_ngcontent-%COMP%]{padding-left:0!important}.ps-1[_ngcontent-%COMP%]{padding-left:.25rem!important}.ps-2[_ngcontent-%COMP%]{padding-left:.5rem!important}.ps-3[_ngcontent-%COMP%]{padding-left:1rem!important}.ps-4[_ngcontent-%COMP%]{padding-left:1.5rem!important}.ps-5[_ngcontent-%COMP%]{padding-left:3rem!important}@media (min-width: 576px){.d-sm-inline[_ngcontent-%COMP%]{display:inline!important}.d-sm-inline-block[_ngcontent-%COMP%]{display:inline-block!important}.d-sm-block[_ngcontent-%COMP%]{display:block!important}.d-sm-grid[_ngcontent-%COMP%]{display:grid!important}.d-sm-table[_ngcontent-%COMP%]{display:table!important}.d-sm-table-row[_ngcontent-%COMP%]{display:table-row!important}.d-sm-table-cell[_ngcontent-%COMP%]{display:table-cell!important}.d-sm-flex[_ngcontent-%COMP%]{display:flex!important}.d-sm-inline-flex[_ngcontent-%COMP%]{display:inline-flex!important}.d-sm-none[_ngcontent-%COMP%]{display:none!important}.flex-sm-fill[_ngcontent-%COMP%]{flex:1 1 auto!important}.flex-sm-row[_ngcontent-%COMP%]{flex-direction:row!important}.flex-sm-column[_ngcontent-%COMP%]{flex-direction:column!important}.flex-sm-row-reverse[_ngcontent-%COMP%]{flex-direction:row-reverse!important}.flex-sm-column-reverse[_ngcontent-%COMP%]{flex-direction:column-reverse!important}.flex-sm-grow-0[_ngcontent-%COMP%]{flex-grow:0!important}.flex-sm-grow-1[_ngcontent-%COMP%]{flex-grow:1!important}.flex-sm-shrink-0[_ngcontent-%COMP%]{flex-shrink:0!important}.flex-sm-shrink-1[_ngcontent-%COMP%]{flex-shrink:1!important}.flex-sm-wrap[_ngcontent-%COMP%]{flex-wrap:wrap!important}.flex-sm-nowrap[_ngcontent-%COMP%]{flex-wrap:nowrap!important}.flex-sm-wrap-reverse[_ngcontent-%COMP%]{flex-wrap:wrap-reverse!important}.justify-content-sm-start[_ngcontent-%COMP%]{justify-content:flex-start!important}.justify-content-sm-end[_ngcontent-%COMP%]{justify-content:flex-end!important}.justify-content-sm-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-sm-between[_ngcontent-%COMP%]{justify-content:space-between!important}.justify-content-sm-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-sm-evenly[_ngcontent-%COMP%]{justify-content:space-evenly!important}.align-items-sm-start[_ngcontent-%COMP%]{align-items:flex-start!important}.align-items-sm-end[_ngcontent-%COMP%]{align-items:flex-end!important}.align-items-sm-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-sm-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-sm-stretch[_ngcontent-%COMP%]{align-items:stretch!important}.align-content-sm-start[_ngcontent-%COMP%]{align-content:flex-start!important}.align-content-sm-end[_ngcontent-%COMP%]{align-content:flex-end!important}.align-content-sm-center[_ngcontent-%COMP%]{align-content:center!important}.align-content-sm-between[_ngcontent-%COMP%]{align-content:space-between!important}.align-content-sm-around[_ngcontent-%COMP%]{align-content:space-around!important}.align-content-sm-stretch[_ngcontent-%COMP%]{align-content:stretch!important}.align-self-sm-auto[_ngcontent-%COMP%]{align-self:auto!important}.align-self-sm-start[_ngcontent-%COMP%]{align-self:flex-start!important}.align-self-sm-end[_ngcontent-%COMP%]{align-self:flex-end!important}.align-self-sm-center[_ngcontent-%COMP%]{align-self:center!important}.align-self-sm-baseline[_ngcontent-%COMP%]{align-self:baseline!important}.align-self-sm-stretch[_ngcontent-%COMP%]{align-self:stretch!important}.order-sm-first[_ngcontent-%COMP%]{order:-1!important}.order-sm-0[_ngcontent-%COMP%]{order:0!important}.order-sm-1[_ngcontent-%COMP%]{order:1!important}.order-sm-2[_ngcontent-%COMP%]{order:2!important}.order-sm-3[_ngcontent-%COMP%]{order:3!important}.order-sm-4[_ngcontent-%COMP%]{order:4!important}.order-sm-5[_ngcontent-%COMP%]{order:5!important}.order-sm-last[_ngcontent-%COMP%]{order:6!important}.m-sm-0[_ngcontent-%COMP%]{margin:0!important}.m-sm-1[_ngcontent-%COMP%]{margin:.25rem!important}.m-sm-2[_ngcontent-%COMP%]{margin:.5rem!important}.m-sm-3[_ngcontent-%COMP%]{margin:1rem!important}.m-sm-4[_ngcontent-%COMP%]{margin:1.5rem!important}.m-sm-5[_ngcontent-%COMP%]{margin:3rem!important}.m-sm-auto[_ngcontent-%COMP%]{margin:auto!important}.mx-sm-0[_ngcontent-%COMP%]{margin-right:0!important;margin-left:0!important}.mx-sm-1[_ngcontent-%COMP%]{margin-right:.25rem!important;margin-left:.25rem!important}.mx-sm-2[_ngcontent-%COMP%]{margin-right:.5rem!important;margin-left:.5rem!important}.mx-sm-3[_ngcontent-%COMP%]{margin-right:1rem!important;margin-left:1rem!important}.mx-sm-4[_ngcontent-%COMP%]{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-sm-5[_ngcontent-%COMP%]{margin-right:3rem!important;margin-left:3rem!important}.mx-sm-auto[_ngcontent-%COMP%]{margin-right:auto!important;margin-left:auto!important}.my-sm-0[_ngcontent-%COMP%]{margin-top:0!important;margin-bottom:0!important}.my-sm-1[_ngcontent-%COMP%]{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-sm-2[_ngcontent-%COMP%]{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-sm-3[_ngcontent-%COMP%]{margin-top:1rem!important;margin-bottom:1rem!important}.my-sm-4[_ngcontent-%COMP%]{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-sm-5[_ngcontent-%COMP%]{margin-top:3rem!important;margin-bottom:3rem!important}.my-sm-auto[_ngcontent-%COMP%]{margin-top:auto!important;margin-bottom:auto!important}.mt-sm-0[_ngcontent-%COMP%]{margin-top:0!important}.mt-sm-1[_ngcontent-%COMP%]{margin-top:.25rem!important}.mt-sm-2[_ngcontent-%COMP%]{margin-top:.5rem!important}.mt-sm-3[_ngcontent-%COMP%]{margin-top:1rem!important}.mt-sm-4[_ngcontent-%COMP%]{margin-top:1.5rem!important}.mt-sm-5[_ngcontent-%COMP%]{margin-top:3rem!important}.mt-sm-auto[_ngcontent-%COMP%]{margin-top:auto!important}.me-sm-0[_ngcontent-%COMP%]{margin-right:0!important}.me-sm-1[_ngcontent-%COMP%]{margin-right:.25rem!important}.me-sm-2[_ngcontent-%COMP%]{margin-right:.5rem!important}.me-sm-3[_ngcontent-%COMP%]{margin-right:1rem!important}.me-sm-4[_ngcontent-%COMP%]{margin-right:1.5rem!important}.me-sm-5[_ngcontent-%COMP%]{margin-right:3rem!important}.me-sm-auto[_ngcontent-%COMP%]{margin-right:auto!important}.mb-sm-0[_ngcontent-%COMP%]{margin-bottom:0!important}.mb-sm-1[_ngcontent-%COMP%]{margin-bottom:.25rem!important}.mb-sm-2[_ngcontent-%COMP%]{margin-bottom:.5rem!important}.mb-sm-3[_ngcontent-%COMP%]{margin-bottom:1rem!important}.mb-sm-4[_ngcontent-%COMP%]{margin-bottom:1.5rem!important}.mb-sm-5[_ngcontent-%COMP%]{margin-bottom:3rem!important}.mb-sm-auto[_ngcontent-%COMP%]{margin-bottom:auto!important}.ms-sm-0[_ngcontent-%COMP%]{margin-left:0!important}.ms-sm-1[_ngcontent-%COMP%]{margin-left:.25rem!important}.ms-sm-2[_ngcontent-%COMP%]{margin-left:.5rem!important}.ms-sm-3[_ngcontent-%COMP%]{margin-left:1rem!important}.ms-sm-4[_ngcontent-%COMP%]{margin-left:1.5rem!important}.ms-sm-5[_ngcontent-%COMP%]{margin-left:3rem!important}.ms-sm-auto[_ngcontent-%COMP%]{margin-left:auto!important}.p-sm-0[_ngcontent-%COMP%]{padding:0!important}.p-sm-1[_ngcontent-%COMP%]{padding:.25rem!important}.p-sm-2[_ngcontent-%COMP%]{padding:.5rem!important}.p-sm-3[_ngcontent-%COMP%]{padding:1rem!important}.p-sm-4[_ngcontent-%COMP%]{padding:1.5rem!important}.p-sm-5[_ngcontent-%COMP%]{padding:3rem!important}.px-sm-0[_ngcontent-%COMP%]{padding-right:0!important;padding-left:0!important}.px-sm-1[_ngcontent-%COMP%]{padding-right:.25rem!important;padding-left:.25rem!important}.px-sm-2[_ngcontent-%COMP%]{padding-right:.5rem!important;padding-left:.5rem!important}.px-sm-3[_ngcontent-%COMP%]{padding-right:1rem!important;padding-left:1rem!important}.px-sm-4[_ngcontent-%COMP%]{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-sm-5[_ngcontent-%COMP%]{padding-right:3rem!important;padding-left:3rem!important}.py-sm-0[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}.py-sm-1[_ngcontent-%COMP%]{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-sm-2[_ngcontent-%COMP%]{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-sm-3[_ngcontent-%COMP%]{padding-top:1rem!important;padding-bottom:1rem!important}.py-sm-4[_ngcontent-%COMP%]{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-sm-5[_ngcontent-%COMP%]{padding-top:3rem!important;padding-bottom:3rem!important}.pt-sm-0[_ngcontent-%COMP%]{padding-top:0!important}.pt-sm-1[_ngcontent-%COMP%]{padding-top:.25rem!important}.pt-sm-2[_ngcontent-%COMP%]{padding-top:.5rem!important}.pt-sm-3[_ngcontent-%COMP%]{padding-top:1rem!important}.pt-sm-4[_ngcontent-%COMP%]{padding-top:1.5rem!important}.pt-sm-5[_ngcontent-%COMP%]{padding-top:3rem!important}.pe-sm-0[_ngcontent-%COMP%]{padding-right:0!important}.pe-sm-1[_ngcontent-%COMP%]{padding-right:.25rem!important}.pe-sm-2[_ngcontent-%COMP%]{padding-right:.5rem!important}.pe-sm-3[_ngcontent-%COMP%]{padding-right:1rem!important}.pe-sm-4[_ngcontent-%COMP%]{padding-right:1.5rem!important}.pe-sm-5[_ngcontent-%COMP%]{padding-right:3rem!important}.pb-sm-0[_ngcontent-%COMP%]{padding-bottom:0!important}.pb-sm-1[_ngcontent-%COMP%]{padding-bottom:.25rem!important}.pb-sm-2[_ngcontent-%COMP%]{padding-bottom:.5rem!important}.pb-sm-3[_ngcontent-%COMP%]{padding-bottom:1rem!important}.pb-sm-4[_ngcontent-%COMP%]{padding-bottom:1.5rem!important}.pb-sm-5[_ngcontent-%COMP%]{padding-bottom:3rem!important}.ps-sm-0[_ngcontent-%COMP%]{padding-left:0!important}.ps-sm-1[_ngcontent-%COMP%]{padding-left:.25rem!important}.ps-sm-2[_ngcontent-%COMP%]{padding-left:.5rem!important}.ps-sm-3[_ngcontent-%COMP%]{padding-left:1rem!important}.ps-sm-4[_ngcontent-%COMP%]{padding-left:1.5rem!important}.ps-sm-5[_ngcontent-%COMP%]{padding-left:3rem!important}}@media (min-width: 768px){.d-md-inline[_ngcontent-%COMP%]{display:inline!important}.d-md-inline-block[_ngcontent-%COMP%]{display:inline-block!important}.d-md-block[_ngcontent-%COMP%]{display:block!important}.d-md-grid[_ngcontent-%COMP%]{display:grid!important}.d-md-table[_ngcontent-%COMP%]{display:table!important}.d-md-table-row[_ngcontent-%COMP%]{display:table-row!important}.d-md-table-cell[_ngcontent-%COMP%]{display:table-cell!important}.d-md-flex[_ngcontent-%COMP%]{display:flex!important}.d-md-inline-flex[_ngcontent-%COMP%]{display:inline-flex!important}.d-md-none[_ngcontent-%COMP%]{display:none!important}.flex-md-fill[_ngcontent-%COMP%]{flex:1 1 auto!important}.flex-md-row[_ngcontent-%COMP%]{flex-direction:row!important}.flex-md-column[_ngcontent-%COMP%]{flex-direction:column!important}.flex-md-row-reverse[_ngcontent-%COMP%]{flex-direction:row-reverse!important}.flex-md-column-reverse[_ngcontent-%COMP%]{flex-direction:column-reverse!important}.flex-md-grow-0[_ngcontent-%COMP%]{flex-grow:0!important}.flex-md-grow-1[_ngcontent-%COMP%]{flex-grow:1!important}.flex-md-shrink-0[_ngcontent-%COMP%]{flex-shrink:0!important}.flex-md-shrink-1[_ngcontent-%COMP%]{flex-shrink:1!important}.flex-md-wrap[_ngcontent-%COMP%]{flex-wrap:wrap!important}.flex-md-nowrap[_ngcontent-%COMP%]{flex-wrap:nowrap!important}.flex-md-wrap-reverse[_ngcontent-%COMP%]{flex-wrap:wrap-reverse!important}.justify-content-md-start[_ngcontent-%COMP%]{justify-content:flex-start!important}.justify-content-md-end[_ngcontent-%COMP%]{justify-content:flex-end!important}.justify-content-md-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-md-between[_ngcontent-%COMP%]{justify-content:space-between!important}.justify-content-md-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-md-evenly[_ngcontent-%COMP%]{justify-content:space-evenly!important}.align-items-md-start[_ngcontent-%COMP%]{align-items:flex-start!important}.align-items-md-end[_ngcontent-%COMP%]{align-items:flex-end!important}.align-items-md-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-md-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-md-stretch[_ngcontent-%COMP%]{align-items:stretch!important}.align-content-md-start[_ngcontent-%COMP%]{align-content:flex-start!important}.align-content-md-end[_ngcontent-%COMP%]{align-content:flex-end!important}.align-content-md-center[_ngcontent-%COMP%]{align-content:center!important}.align-content-md-between[_ngcontent-%COMP%]{align-content:space-between!important}.align-content-md-around[_ngcontent-%COMP%]{align-content:space-around!important}.align-content-md-stretch[_ngcontent-%COMP%]{align-content:stretch!important}.align-self-md-auto[_ngcontent-%COMP%]{align-self:auto!important}.align-self-md-start[_ngcontent-%COMP%]{align-self:flex-start!important}.align-self-md-end[_ngcontent-%COMP%]{align-self:flex-end!important}.align-self-md-center[_ngcontent-%COMP%]{align-self:center!important}.align-self-md-baseline[_ngcontent-%COMP%]{align-self:baseline!important}.align-self-md-stretch[_ngcontent-%COMP%]{align-self:stretch!important}.order-md-first[_ngcontent-%COMP%]{order:-1!important}.order-md-0[_ngcontent-%COMP%]{order:0!important}.order-md-1[_ngcontent-%COMP%]{order:1!important}.order-md-2[_ngcontent-%COMP%]{order:2!important}.order-md-3[_ngcontent-%COMP%]{order:3!important}.order-md-4[_ngcontent-%COMP%]{order:4!important}.order-md-5[_ngcontent-%COMP%]{order:5!important}.order-md-last[_ngcontent-%COMP%]{order:6!important}.m-md-0[_ngcontent-%COMP%]{margin:0!important}.m-md-1[_ngcontent-%COMP%]{margin:.25rem!important}.m-md-2[_ngcontent-%COMP%]{margin:.5rem!important}.m-md-3[_ngcontent-%COMP%]{margin:1rem!important}.m-md-4[_ngcontent-%COMP%]{margin:1.5rem!important}.m-md-5[_ngcontent-%COMP%]{margin:3rem!important}.m-md-auto[_ngcontent-%COMP%]{margin:auto!important}.mx-md-0[_ngcontent-%COMP%]{margin-right:0!important;margin-left:0!important}.mx-md-1[_ngcontent-%COMP%]{margin-right:.25rem!important;margin-left:.25rem!important}.mx-md-2[_ngcontent-%COMP%]{margin-right:.5rem!important;margin-left:.5rem!important}.mx-md-3[_ngcontent-%COMP%]{margin-right:1rem!important;margin-left:1rem!important}.mx-md-4[_ngcontent-%COMP%]{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-md-5[_ngcontent-%COMP%]{margin-right:3rem!important;margin-left:3rem!important}.mx-md-auto[_ngcontent-%COMP%]{margin-right:auto!important;margin-left:auto!important}.my-md-0[_ngcontent-%COMP%]{margin-top:0!important;margin-bottom:0!important}.my-md-1[_ngcontent-%COMP%]{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-md-2[_ngcontent-%COMP%]{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-md-3[_ngcontent-%COMP%]{margin-top:1rem!important;margin-bottom:1rem!important}.my-md-4[_ngcontent-%COMP%]{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-md-5[_ngcontent-%COMP%]{margin-top:3rem!important;margin-bottom:3rem!important}.my-md-auto[_ngcontent-%COMP%]{margin-top:auto!important;margin-bottom:auto!important}.mt-md-0[_ngcontent-%COMP%]{margin-top:0!important}.mt-md-1[_ngcontent-%COMP%]{margin-top:.25rem!important}.mt-md-2[_ngcontent-%COMP%]{margin-top:.5rem!important}.mt-md-3[_ngcontent-%COMP%]{margin-top:1rem!important}.mt-md-4[_ngcontent-%COMP%]{margin-top:1.5rem!important}.mt-md-5[_ngcontent-%COMP%]{margin-top:3rem!important}.mt-md-auto[_ngcontent-%COMP%]{margin-top:auto!important}.me-md-0[_ngcontent-%COMP%]{margin-right:0!important}.me-md-1[_ngcontent-%COMP%]{margin-right:.25rem!important}.me-md-2[_ngcontent-%COMP%]{margin-right:.5rem!important}.me-md-3[_ngcontent-%COMP%]{margin-right:1rem!important}.me-md-4[_ngcontent-%COMP%]{margin-right:1.5rem!important}.me-md-5[_ngcontent-%COMP%]{margin-right:3rem!important}.me-md-auto[_ngcontent-%COMP%]{margin-right:auto!important}.mb-md-0[_ngcontent-%COMP%]{margin-bottom:0!important}.mb-md-1[_ngcontent-%COMP%]{margin-bottom:.25rem!important}.mb-md-2[_ngcontent-%COMP%]{margin-bottom:.5rem!important}.mb-md-3[_ngcontent-%COMP%]{margin-bottom:1rem!important}.mb-md-4[_ngcontent-%COMP%]{margin-bottom:1.5rem!important}.mb-md-5[_ngcontent-%COMP%]{margin-bottom:3rem!important}.mb-md-auto[_ngcontent-%COMP%]{margin-bottom:auto!important}.ms-md-0[_ngcontent-%COMP%]{margin-left:0!important}.ms-md-1[_ngcontent-%COMP%]{margin-left:.25rem!important}.ms-md-2[_ngcontent-%COMP%]{margin-left:.5rem!important}.ms-md-3[_ngcontent-%COMP%]{margin-left:1rem!important}.ms-md-4[_ngcontent-%COMP%]{margin-left:1.5rem!important}.ms-md-5[_ngcontent-%COMP%]{margin-left:3rem!important}.ms-md-auto[_ngcontent-%COMP%]{margin-left:auto!important}.p-md-0[_ngcontent-%COMP%]{padding:0!important}.p-md-1[_ngcontent-%COMP%]{padding:.25rem!important}.p-md-2[_ngcontent-%COMP%]{padding:.5rem!important}.p-md-3[_ngcontent-%COMP%]{padding:1rem!important}.p-md-4[_ngcontent-%COMP%]{padding:1.5rem!important}.p-md-5[_ngcontent-%COMP%]{padding:3rem!important}.px-md-0[_ngcontent-%COMP%]{padding-right:0!important;padding-left:0!important}.px-md-1[_ngcontent-%COMP%]{padding-right:.25rem!important;padding-left:.25rem!important}.px-md-2[_ngcontent-%COMP%]{padding-right:.5rem!important;padding-left:.5rem!important}.px-md-3[_ngcontent-%COMP%]{padding-right:1rem!important;padding-left:1rem!important}.px-md-4[_ngcontent-%COMP%]{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-md-5[_ngcontent-%COMP%]{padding-right:3rem!important;padding-left:3rem!important}.py-md-0[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}.py-md-1[_ngcontent-%COMP%]{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-md-2[_ngcontent-%COMP%]{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-md-3[_ngcontent-%COMP%]{padding-top:1rem!important;padding-bottom:1rem!important}.py-md-4[_ngcontent-%COMP%]{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-md-5[_ngcontent-%COMP%]{padding-top:3rem!important;padding-bottom:3rem!important}.pt-md-0[_ngcontent-%COMP%]{padding-top:0!important}.pt-md-1[_ngcontent-%COMP%]{padding-top:.25rem!important}.pt-md-2[_ngcontent-%COMP%]{padding-top:.5rem!important}.pt-md-3[_ngcontent-%COMP%]{padding-top:1rem!important}.pt-md-4[_ngcontent-%COMP%]{padding-top:1.5rem!important}.pt-md-5[_ngcontent-%COMP%]{padding-top:3rem!important}.pe-md-0[_ngcontent-%COMP%]{padding-right:0!important}.pe-md-1[_ngcontent-%COMP%]{padding-right:.25rem!important}.pe-md-2[_ngcontent-%COMP%]{padding-right:.5rem!important}.pe-md-3[_ngcontent-%COMP%]{padding-right:1rem!important}.pe-md-4[_ngcontent-%COMP%]{padding-right:1.5rem!important}.pe-md-5[_ngcontent-%COMP%]{padding-right:3rem!important}.pb-md-0[_ngcontent-%COMP%]{padding-bottom:0!important}.pb-md-1[_ngcontent-%COMP%]{padding-bottom:.25rem!important}.pb-md-2[_ngcontent-%COMP%]{padding-bottom:.5rem!important}.pb-md-3[_ngcontent-%COMP%]{padding-bottom:1rem!important}.pb-md-4[_ngcontent-%COMP%]{padding-bottom:1.5rem!important}.pb-md-5[_ngcontent-%COMP%]{padding-bottom:3rem!important}.ps-md-0[_ngcontent-%COMP%]{padding-left:0!important}.ps-md-1[_ngcontent-%COMP%]{padding-left:.25rem!important}.ps-md-2[_ngcontent-%COMP%]{padding-left:.5rem!important}.ps-md-3[_ngcontent-%COMP%]{padding-left:1rem!important}.ps-md-4[_ngcontent-%COMP%]{padding-left:1.5rem!important}.ps-md-5[_ngcontent-%COMP%]{padding-left:3rem!important}}@media (min-width: 992px){.d-lg-inline[_ngcontent-%COMP%]{display:inline!important}.d-lg-inline-block[_ngcontent-%COMP%]{display:inline-block!important}.d-lg-block[_ngcontent-%COMP%]{display:block!important}.d-lg-grid[_ngcontent-%COMP%]{display:grid!important}.d-lg-table[_ngcontent-%COMP%]{display:table!important}.d-lg-table-row[_ngcontent-%COMP%]{display:table-row!important}.d-lg-table-cell[_ngcontent-%COMP%]{display:table-cell!important}.d-lg-flex[_ngcontent-%COMP%]{display:flex!important}.d-lg-inline-flex[_ngcontent-%COMP%]{display:inline-flex!important}.d-lg-none[_ngcontent-%COMP%]{display:none!important}.flex-lg-fill[_ngcontent-%COMP%]{flex:1 1 auto!important}.flex-lg-row[_ngcontent-%COMP%]{flex-direction:row!important}.flex-lg-column[_ngcontent-%COMP%]{flex-direction:column!important}.flex-lg-row-reverse[_ngcontent-%COMP%]{flex-direction:row-reverse!important}.flex-lg-column-reverse[_ngcontent-%COMP%]{flex-direction:column-reverse!important}.flex-lg-grow-0[_ngcontent-%COMP%]{flex-grow:0!important}.flex-lg-grow-1[_ngcontent-%COMP%]{flex-grow:1!important}.flex-lg-shrink-0[_ngcontent-%COMP%]{flex-shrink:0!important}.flex-lg-shrink-1[_ngcontent-%COMP%]{flex-shrink:1!important}.flex-lg-wrap[_ngcontent-%COMP%]{flex-wrap:wrap!important}.flex-lg-nowrap[_ngcontent-%COMP%]{flex-wrap:nowrap!important}.flex-lg-wrap-reverse[_ngcontent-%COMP%]{flex-wrap:wrap-reverse!important}.justify-content-lg-start[_ngcontent-%COMP%]{justify-content:flex-start!important}.justify-content-lg-end[_ngcontent-%COMP%]{justify-content:flex-end!important}.justify-content-lg-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-lg-between[_ngcontent-%COMP%]{justify-content:space-between!important}.justify-content-lg-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-lg-evenly[_ngcontent-%COMP%]{justify-content:space-evenly!important}.align-items-lg-start[_ngcontent-%COMP%]{align-items:flex-start!important}.align-items-lg-end[_ngcontent-%COMP%]{align-items:flex-end!important}.align-items-lg-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-lg-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-lg-stretch[_ngcontent-%COMP%]{align-items:stretch!important}.align-content-lg-start[_ngcontent-%COMP%]{align-content:flex-start!important}.align-content-lg-end[_ngcontent-%COMP%]{align-content:flex-end!important}.align-content-lg-center[_ngcontent-%COMP%]{align-content:center!important}.align-content-lg-between[_ngcontent-%COMP%]{align-content:space-between!important}.align-content-lg-around[_ngcontent-%COMP%]{align-content:space-around!important}.align-content-lg-stretch[_ngcontent-%COMP%]{align-content:stretch!important}.align-self-lg-auto[_ngcontent-%COMP%]{align-self:auto!important}.align-self-lg-start[_ngcontent-%COMP%]{align-self:flex-start!important}.align-self-lg-end[_ngcontent-%COMP%]{align-self:flex-end!important}.align-self-lg-center[_ngcontent-%COMP%]{align-self:center!important}.align-self-lg-baseline[_ngcontent-%COMP%]{align-self:baseline!important}.align-self-lg-stretch[_ngcontent-%COMP%]{align-self:stretch!important}.order-lg-first[_ngcontent-%COMP%]{order:-1!important}.order-lg-0[_ngcontent-%COMP%]{order:0!important}.order-lg-1[_ngcontent-%COMP%]{order:1!important}.order-lg-2[_ngcontent-%COMP%]{order:2!important}.order-lg-3[_ngcontent-%COMP%]{order:3!important}.order-lg-4[_ngcontent-%COMP%]{order:4!important}.order-lg-5[_ngcontent-%COMP%]{order:5!important}.order-lg-last[_ngcontent-%COMP%]{order:6!important}.m-lg-0[_ngcontent-%COMP%]{margin:0!important}.m-lg-1[_ngcontent-%COMP%]{margin:.25rem!important}.m-lg-2[_ngcontent-%COMP%]{margin:.5rem!important}.m-lg-3[_ngcontent-%COMP%]{margin:1rem!important}.m-lg-4[_ngcontent-%COMP%]{margin:1.5rem!important}.m-lg-5[_ngcontent-%COMP%]{margin:3rem!important}.m-lg-auto[_ngcontent-%COMP%]{margin:auto!important}.mx-lg-0[_ngcontent-%COMP%]{margin-right:0!important;margin-left:0!important}.mx-lg-1[_ngcontent-%COMP%]{margin-right:.25rem!important;margin-left:.25rem!important}.mx-lg-2[_ngcontent-%COMP%]{margin-right:.5rem!important;margin-left:.5rem!important}.mx-lg-3[_ngcontent-%COMP%]{margin-right:1rem!important;margin-left:1rem!important}.mx-lg-4[_ngcontent-%COMP%]{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-lg-5[_ngcontent-%COMP%]{margin-right:3rem!important;margin-left:3rem!important}.mx-lg-auto[_ngcontent-%COMP%]{margin-right:auto!important;margin-left:auto!important}.my-lg-0[_ngcontent-%COMP%]{margin-top:0!important;margin-bottom:0!important}.my-lg-1[_ngcontent-%COMP%]{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-lg-2[_ngcontent-%COMP%]{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-lg-3[_ngcontent-%COMP%]{margin-top:1rem!important;margin-bottom:1rem!important}.my-lg-4[_ngcontent-%COMP%]{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-lg-5[_ngcontent-%COMP%]{margin-top:3rem!important;margin-bottom:3rem!important}.my-lg-auto[_ngcontent-%COMP%]{margin-top:auto!important;margin-bottom:auto!important}.mt-lg-0[_ngcontent-%COMP%]{margin-top:0!important}.mt-lg-1[_ngcontent-%COMP%]{margin-top:.25rem!important}.mt-lg-2[_ngcontent-%COMP%]{margin-top:.5rem!important}.mt-lg-3[_ngcontent-%COMP%]{margin-top:1rem!important}.mt-lg-4[_ngcontent-%COMP%]{margin-top:1.5rem!important}.mt-lg-5[_ngcontent-%COMP%]{margin-top:3rem!important}.mt-lg-auto[_ngcontent-%COMP%]{margin-top:auto!important}.me-lg-0[_ngcontent-%COMP%]{margin-right:0!important}.me-lg-1[_ngcontent-%COMP%]{margin-right:.25rem!important}.me-lg-2[_ngcontent-%COMP%]{margin-right:.5rem!important}.me-lg-3[_ngcontent-%COMP%]{margin-right:1rem!important}.me-lg-4[_ngcontent-%COMP%]{margin-right:1.5rem!important}.me-lg-5[_ngcontent-%COMP%]{margin-right:3rem!important}.me-lg-auto[_ngcontent-%COMP%]{margin-right:auto!important}.mb-lg-0[_ngcontent-%COMP%]{margin-bottom:0!important}.mb-lg-1[_ngcontent-%COMP%]{margin-bottom:.25rem!important}.mb-lg-2[_ngcontent-%COMP%]{margin-bottom:.5rem!important}.mb-lg-3[_ngcontent-%COMP%]{margin-bottom:1rem!important}.mb-lg-4[_ngcontent-%COMP%]{margin-bottom:1.5rem!important}.mb-lg-5[_ngcontent-%COMP%]{margin-bottom:3rem!important}.mb-lg-auto[_ngcontent-%COMP%]{margin-bottom:auto!important}.ms-lg-0[_ngcontent-%COMP%]{margin-left:0!important}.ms-lg-1[_ngcontent-%COMP%]{margin-left:.25rem!important}.ms-lg-2[_ngcontent-%COMP%]{margin-left:.5rem!important}.ms-lg-3[_ngcontent-%COMP%]{margin-left:1rem!important}.ms-lg-4[_ngcontent-%COMP%]{margin-left:1.5rem!important}.ms-lg-5[_ngcontent-%COMP%]{margin-left:3rem!important}.ms-lg-auto[_ngcontent-%COMP%]{margin-left:auto!important}.p-lg-0[_ngcontent-%COMP%]{padding:0!important}.p-lg-1[_ngcontent-%COMP%]{padding:.25rem!important}.p-lg-2[_ngcontent-%COMP%]{padding:.5rem!important}.p-lg-3[_ngcontent-%COMP%]{padding:1rem!important}.p-lg-4[_ngcontent-%COMP%]{padding:1.5rem!important}.p-lg-5[_ngcontent-%COMP%]{padding:3rem!important}.px-lg-0[_ngcontent-%COMP%]{padding-right:0!important;padding-left:0!important}.px-lg-1[_ngcontent-%COMP%]{padding-right:.25rem!important;padding-left:.25rem!important}.px-lg-2[_ngcontent-%COMP%]{padding-right:.5rem!important;padding-left:.5rem!important}.px-lg-3[_ngcontent-%COMP%]{padding-right:1rem!important;padding-left:1rem!important}.px-lg-4[_ngcontent-%COMP%]{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-lg-5[_ngcontent-%COMP%]{padding-right:3rem!important;padding-left:3rem!important}.py-lg-0[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}.py-lg-1[_ngcontent-%COMP%]{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-lg-2[_ngcontent-%COMP%]{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-lg-3[_ngcontent-%COMP%]{padding-top:1rem!important;padding-bottom:1rem!important}.py-lg-4[_ngcontent-%COMP%]{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-lg-5[_ngcontent-%COMP%]{padding-top:3rem!important;padding-bottom:3rem!important}.pt-lg-0[_ngcontent-%COMP%]{padding-top:0!important}.pt-lg-1[_ngcontent-%COMP%]{padding-top:.25rem!important}.pt-lg-2[_ngcontent-%COMP%]{padding-top:.5rem!important}.pt-lg-3[_ngcontent-%COMP%]{padding-top:1rem!important}.pt-lg-4[_ngcontent-%COMP%]{padding-top:1.5rem!important}.pt-lg-5[_ngcontent-%COMP%]{padding-top:3rem!important}.pe-lg-0[_ngcontent-%COMP%]{padding-right:0!important}.pe-lg-1[_ngcontent-%COMP%]{padding-right:.25rem!important}.pe-lg-2[_ngcontent-%COMP%]{padding-right:.5rem!important}.pe-lg-3[_ngcontent-%COMP%]{padding-right:1rem!important}.pe-lg-4[_ngcontent-%COMP%]{padding-right:1.5rem!important}.pe-lg-5[_ngcontent-%COMP%]{padding-right:3rem!important}.pb-lg-0[_ngcontent-%COMP%]{padding-bottom:0!important}.pb-lg-1[_ngcontent-%COMP%]{padding-bottom:.25rem!important}.pb-lg-2[_ngcontent-%COMP%]{padding-bottom:.5rem!important}.pb-lg-3[_ngcontent-%COMP%]{padding-bottom:1rem!important}.pb-lg-4[_ngcontent-%COMP%]{padding-bottom:1.5rem!important}.pb-lg-5[_ngcontent-%COMP%]{padding-bottom:3rem!important}.ps-lg-0[_ngcontent-%COMP%]{padding-left:0!important}.ps-lg-1[_ngcontent-%COMP%]{padding-left:.25rem!important}.ps-lg-2[_ngcontent-%COMP%]{padding-left:.5rem!important}.ps-lg-3[_ngcontent-%COMP%]{padding-left:1rem!important}.ps-lg-4[_ngcontent-%COMP%]{padding-left:1.5rem!important}.ps-lg-5[_ngcontent-%COMP%]{padding-left:3rem!important}}@media (min-width: 1200px){.d-xl-inline[_ngcontent-%COMP%]{display:inline!important}.d-xl-inline-block[_ngcontent-%COMP%]{display:inline-block!important}.d-xl-block[_ngcontent-%COMP%]{display:block!important}.d-xl-grid[_ngcontent-%COMP%]{display:grid!important}.d-xl-table[_ngcontent-%COMP%]{display:table!important}.d-xl-table-row[_ngcontent-%COMP%]{display:table-row!important}.d-xl-table-cell[_ngcontent-%COMP%]{display:table-cell!important}.d-xl-flex[_ngcontent-%COMP%]{display:flex!important}.d-xl-inline-flex[_ngcontent-%COMP%]{display:inline-flex!important}.d-xl-none[_ngcontent-%COMP%]{display:none!important}.flex-xl-fill[_ngcontent-%COMP%]{flex:1 1 auto!important}.flex-xl-row[_ngcontent-%COMP%]{flex-direction:row!important}.flex-xl-column[_ngcontent-%COMP%]{flex-direction:column!important}.flex-xl-row-reverse[_ngcontent-%COMP%]{flex-direction:row-reverse!important}.flex-xl-column-reverse[_ngcontent-%COMP%]{flex-direction:column-reverse!important}.flex-xl-grow-0[_ngcontent-%COMP%]{flex-grow:0!important}.flex-xl-grow-1[_ngcontent-%COMP%]{flex-grow:1!important}.flex-xl-shrink-0[_ngcontent-%COMP%]{flex-shrink:0!important}.flex-xl-shrink-1[_ngcontent-%COMP%]{flex-shrink:1!important}.flex-xl-wrap[_ngcontent-%COMP%]{flex-wrap:wrap!important}.flex-xl-nowrap[_ngcontent-%COMP%]{flex-wrap:nowrap!important}.flex-xl-wrap-reverse[_ngcontent-%COMP%]{flex-wrap:wrap-reverse!important}.justify-content-xl-start[_ngcontent-%COMP%]{justify-content:flex-start!important}.justify-content-xl-end[_ngcontent-%COMP%]{justify-content:flex-end!important}.justify-content-xl-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-xl-between[_ngcontent-%COMP%]{justify-content:space-between!important}.justify-content-xl-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-xl-evenly[_ngcontent-%COMP%]{justify-content:space-evenly!important}.align-items-xl-start[_ngcontent-%COMP%]{align-items:flex-start!important}.align-items-xl-end[_ngcontent-%COMP%]{align-items:flex-end!important}.align-items-xl-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-xl-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-xl-stretch[_ngcontent-%COMP%]{align-items:stretch!important}.align-content-xl-start[_ngcontent-%COMP%]{align-content:flex-start!important}.align-content-xl-end[_ngcontent-%COMP%]{align-content:flex-end!important}.align-content-xl-center[_ngcontent-%COMP%]{align-content:center!important}.align-content-xl-between[_ngcontent-%COMP%]{align-content:space-between!important}.align-content-xl-around[_ngcontent-%COMP%]{align-content:space-around!important}.align-content-xl-stretch[_ngcontent-%COMP%]{align-content:stretch!important}.align-self-xl-auto[_ngcontent-%COMP%]{align-self:auto!important}.align-self-xl-start[_ngcontent-%COMP%]{align-self:flex-start!important}.align-self-xl-end[_ngcontent-%COMP%]{align-self:flex-end!important}.align-self-xl-center[_ngcontent-%COMP%]{align-self:center!important}.align-self-xl-baseline[_ngcontent-%COMP%]{align-self:baseline!important}.align-self-xl-stretch[_ngcontent-%COMP%]{align-self:stretch!important}.order-xl-first[_ngcontent-%COMP%]{order:-1!important}.order-xl-0[_ngcontent-%COMP%]{order:0!important}.order-xl-1[_ngcontent-%COMP%]{order:1!important}.order-xl-2[_ngcontent-%COMP%]{order:2!important}.order-xl-3[_ngcontent-%COMP%]{order:3!important}.order-xl-4[_ngcontent-%COMP%]{order:4!important}.order-xl-5[_ngcontent-%COMP%]{order:5!important}.order-xl-last[_ngcontent-%COMP%]{order:6!important}.m-xl-0[_ngcontent-%COMP%]{margin:0!important}.m-xl-1[_ngcontent-%COMP%]{margin:.25rem!important}.m-xl-2[_ngcontent-%COMP%]{margin:.5rem!important}.m-xl-3[_ngcontent-%COMP%]{margin:1rem!important}.m-xl-4[_ngcontent-%COMP%]{margin:1.5rem!important}.m-xl-5[_ngcontent-%COMP%]{margin:3rem!important}.m-xl-auto[_ngcontent-%COMP%]{margin:auto!important}.mx-xl-0[_ngcontent-%COMP%]{margin-right:0!important;margin-left:0!important}.mx-xl-1[_ngcontent-%COMP%]{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xl-2[_ngcontent-%COMP%]{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xl-3[_ngcontent-%COMP%]{margin-right:1rem!important;margin-left:1rem!important}.mx-xl-4[_ngcontent-%COMP%]{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xl-5[_ngcontent-%COMP%]{margin-right:3rem!important;margin-left:3rem!important}.mx-xl-auto[_ngcontent-%COMP%]{margin-right:auto!important;margin-left:auto!important}.my-xl-0[_ngcontent-%COMP%]{margin-top:0!important;margin-bottom:0!important}.my-xl-1[_ngcontent-%COMP%]{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xl-2[_ngcontent-%COMP%]{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xl-3[_ngcontent-%COMP%]{margin-top:1rem!important;margin-bottom:1rem!important}.my-xl-4[_ngcontent-%COMP%]{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xl-5[_ngcontent-%COMP%]{margin-top:3rem!important;margin-bottom:3rem!important}.my-xl-auto[_ngcontent-%COMP%]{margin-top:auto!important;margin-bottom:auto!important}.mt-xl-0[_ngcontent-%COMP%]{margin-top:0!important}.mt-xl-1[_ngcontent-%COMP%]{margin-top:.25rem!important}.mt-xl-2[_ngcontent-%COMP%]{margin-top:.5rem!important}.mt-xl-3[_ngcontent-%COMP%]{margin-top:1rem!important}.mt-xl-4[_ngcontent-%COMP%]{margin-top:1.5rem!important}.mt-xl-5[_ngcontent-%COMP%]{margin-top:3rem!important}.mt-xl-auto[_ngcontent-%COMP%]{margin-top:auto!important}.me-xl-0[_ngcontent-%COMP%]{margin-right:0!important}.me-xl-1[_ngcontent-%COMP%]{margin-right:.25rem!important}.me-xl-2[_ngcontent-%COMP%]{margin-right:.5rem!important}.me-xl-3[_ngcontent-%COMP%]{margin-right:1rem!important}.me-xl-4[_ngcontent-%COMP%]{margin-right:1.5rem!important}.me-xl-5[_ngcontent-%COMP%]{margin-right:3rem!important}.me-xl-auto[_ngcontent-%COMP%]{margin-right:auto!important}.mb-xl-0[_ngcontent-%COMP%]{margin-bottom:0!important}.mb-xl-1[_ngcontent-%COMP%]{margin-bottom:.25rem!important}.mb-xl-2[_ngcontent-%COMP%]{margin-bottom:.5rem!important}.mb-xl-3[_ngcontent-%COMP%]{margin-bottom:1rem!important}.mb-xl-4[_ngcontent-%COMP%]{margin-bottom:1.5rem!important}.mb-xl-5[_ngcontent-%COMP%]{margin-bottom:3rem!important}.mb-xl-auto[_ngcontent-%COMP%]{margin-bottom:auto!important}.ms-xl-0[_ngcontent-%COMP%]{margin-left:0!important}.ms-xl-1[_ngcontent-%COMP%]{margin-left:.25rem!important}.ms-xl-2[_ngcontent-%COMP%]{margin-left:.5rem!important}.ms-xl-3[_ngcontent-%COMP%]{margin-left:1rem!important}.ms-xl-4[_ngcontent-%COMP%]{margin-left:1.5rem!important}.ms-xl-5[_ngcontent-%COMP%]{margin-left:3rem!important}.ms-xl-auto[_ngcontent-%COMP%]{margin-left:auto!important}.p-xl-0[_ngcontent-%COMP%]{padding:0!important}.p-xl-1[_ngcontent-%COMP%]{padding:.25rem!important}.p-xl-2[_ngcontent-%COMP%]{padding:.5rem!important}.p-xl-3[_ngcontent-%COMP%]{padding:1rem!important}.p-xl-4[_ngcontent-%COMP%]{padding:1.5rem!important}.p-xl-5[_ngcontent-%COMP%]{padding:3rem!important}.px-xl-0[_ngcontent-%COMP%]{padding-right:0!important;padding-left:0!important}.px-xl-1[_ngcontent-%COMP%]{padding-right:.25rem!important;padding-left:.25rem!important}.px-xl-2[_ngcontent-%COMP%]{padding-right:.5rem!important;padding-left:.5rem!important}.px-xl-3[_ngcontent-%COMP%]{padding-right:1rem!important;padding-left:1rem!important}.px-xl-4[_ngcontent-%COMP%]{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xl-5[_ngcontent-%COMP%]{padding-right:3rem!important;padding-left:3rem!important}.py-xl-0[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}.py-xl-1[_ngcontent-%COMP%]{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xl-2[_ngcontent-%COMP%]{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xl-3[_ngcontent-%COMP%]{padding-top:1rem!important;padding-bottom:1rem!important}.py-xl-4[_ngcontent-%COMP%]{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xl-5[_ngcontent-%COMP%]{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xl-0[_ngcontent-%COMP%]{padding-top:0!important}.pt-xl-1[_ngcontent-%COMP%]{padding-top:.25rem!important}.pt-xl-2[_ngcontent-%COMP%]{padding-top:.5rem!important}.pt-xl-3[_ngcontent-%COMP%]{padding-top:1rem!important}.pt-xl-4[_ngcontent-%COMP%]{padding-top:1.5rem!important}.pt-xl-5[_ngcontent-%COMP%]{padding-top:3rem!important}.pe-xl-0[_ngcontent-%COMP%]{padding-right:0!important}.pe-xl-1[_ngcontent-%COMP%]{padding-right:.25rem!important}.pe-xl-2[_ngcontent-%COMP%]{padding-right:.5rem!important}.pe-xl-3[_ngcontent-%COMP%]{padding-right:1rem!important}.pe-xl-4[_ngcontent-%COMP%]{padding-right:1.5rem!important}.pe-xl-5[_ngcontent-%COMP%]{padding-right:3rem!important}.pb-xl-0[_ngcontent-%COMP%]{padding-bottom:0!important}.pb-xl-1[_ngcontent-%COMP%]{padding-bottom:.25rem!important}.pb-xl-2[_ngcontent-%COMP%]{padding-bottom:.5rem!important}.pb-xl-3[_ngcontent-%COMP%]{padding-bottom:1rem!important}.pb-xl-4[_ngcontent-%COMP%]{padding-bottom:1.5rem!important}.pb-xl-5[_ngcontent-%COMP%]{padding-bottom:3rem!important}.ps-xl-0[_ngcontent-%COMP%]{padding-left:0!important}.ps-xl-1[_ngcontent-%COMP%]{padding-left:.25rem!important}.ps-xl-2[_ngcontent-%COMP%]{padding-left:.5rem!important}.ps-xl-3[_ngcontent-%COMP%]{padding-left:1rem!important}.ps-xl-4[_ngcontent-%COMP%]{padding-left:1.5rem!important}.ps-xl-5[_ngcontent-%COMP%]{padding-left:3rem!important}}@media (min-width: 1400px){.d-xxl-inline[_ngcontent-%COMP%]{display:inline!important}.d-xxl-inline-block[_ngcontent-%COMP%]{display:inline-block!important}.d-xxl-block[_ngcontent-%COMP%]{display:block!important}.d-xxl-grid[_ngcontent-%COMP%]{display:grid!important}.d-xxl-table[_ngcontent-%COMP%]{display:table!important}.d-xxl-table-row[_ngcontent-%COMP%]{display:table-row!important}.d-xxl-table-cell[_ngcontent-%COMP%]{display:table-cell!important}.d-xxl-flex[_ngcontent-%COMP%]{display:flex!important}.d-xxl-inline-flex[_ngcontent-%COMP%]{display:inline-flex!important}.d-xxl-none[_ngcontent-%COMP%]{display:none!important}.flex-xxl-fill[_ngcontent-%COMP%]{flex:1 1 auto!important}.flex-xxl-row[_ngcontent-%COMP%]{flex-direction:row!important}.flex-xxl-column[_ngcontent-%COMP%]{flex-direction:column!important}.flex-xxl-row-reverse[_ngcontent-%COMP%]{flex-direction:row-reverse!important}.flex-xxl-column-reverse[_ngcontent-%COMP%]{flex-direction:column-reverse!important}.flex-xxl-grow-0[_ngcontent-%COMP%]{flex-grow:0!important}.flex-xxl-grow-1[_ngcontent-%COMP%]{flex-grow:1!important}.flex-xxl-shrink-0[_ngcontent-%COMP%]{flex-shrink:0!important}.flex-xxl-shrink-1[_ngcontent-%COMP%]{flex-shrink:1!important}.flex-xxl-wrap[_ngcontent-%COMP%]{flex-wrap:wrap!important}.flex-xxl-nowrap[_ngcontent-%COMP%]{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse[_ngcontent-%COMP%]{flex-wrap:wrap-reverse!important}.justify-content-xxl-start[_ngcontent-%COMP%]{justify-content:flex-start!important}.justify-content-xxl-end[_ngcontent-%COMP%]{justify-content:flex-end!important}.justify-content-xxl-center[_ngcontent-%COMP%]{justify-content:center!important}.justify-content-xxl-between[_ngcontent-%COMP%]{justify-content:space-between!important}.justify-content-xxl-around[_ngcontent-%COMP%]{justify-content:space-around!important}.justify-content-xxl-evenly[_ngcontent-%COMP%]{justify-content:space-evenly!important}.align-items-xxl-start[_ngcontent-%COMP%]{align-items:flex-start!important}.align-items-xxl-end[_ngcontent-%COMP%]{align-items:flex-end!important}.align-items-xxl-center[_ngcontent-%COMP%]{align-items:center!important}.align-items-xxl-baseline[_ngcontent-%COMP%]{align-items:baseline!important}.align-items-xxl-stretch[_ngcontent-%COMP%]{align-items:stretch!important}.align-content-xxl-start[_ngcontent-%COMP%]{align-content:flex-start!important}.align-content-xxl-end[_ngcontent-%COMP%]{align-content:flex-end!important}.align-content-xxl-center[_ngcontent-%COMP%]{align-content:center!important}.align-content-xxl-between[_ngcontent-%COMP%]{align-content:space-between!important}.align-content-xxl-around[_ngcontent-%COMP%]{align-content:space-around!important}.align-content-xxl-stretch[_ngcontent-%COMP%]{align-content:stretch!important}.align-self-xxl-auto[_ngcontent-%COMP%]{align-self:auto!important}.align-self-xxl-start[_ngcontent-%COMP%]{align-self:flex-start!important}.align-self-xxl-end[_ngcontent-%COMP%]{align-self:flex-end!important}.align-self-xxl-center[_ngcontent-%COMP%]{align-self:center!important}.align-self-xxl-baseline[_ngcontent-%COMP%]{align-self:baseline!important}.align-self-xxl-stretch[_ngcontent-%COMP%]{align-self:stretch!important}.order-xxl-first[_ngcontent-%COMP%]{order:-1!important}.order-xxl-0[_ngcontent-%COMP%]{order:0!important}.order-xxl-1[_ngcontent-%COMP%]{order:1!important}.order-xxl-2[_ngcontent-%COMP%]{order:2!important}.order-xxl-3[_ngcontent-%COMP%]{order:3!important}.order-xxl-4[_ngcontent-%COMP%]{order:4!important}.order-xxl-5[_ngcontent-%COMP%]{order:5!important}.order-xxl-last[_ngcontent-%COMP%]{order:6!important}.m-xxl-0[_ngcontent-%COMP%]{margin:0!important}.m-xxl-1[_ngcontent-%COMP%]{margin:.25rem!important}.m-xxl-2[_ngcontent-%COMP%]{margin:.5rem!important}.m-xxl-3[_ngcontent-%COMP%]{margin:1rem!important}.m-xxl-4[_ngcontent-%COMP%]{margin:1.5rem!important}.m-xxl-5[_ngcontent-%COMP%]{margin:3rem!important}.m-xxl-auto[_ngcontent-%COMP%]{margin:auto!important}.mx-xxl-0[_ngcontent-%COMP%]{margin-right:0!important;margin-left:0!important}.mx-xxl-1[_ngcontent-%COMP%]{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xxl-2[_ngcontent-%COMP%]{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xxl-3[_ngcontent-%COMP%]{margin-right:1rem!important;margin-left:1rem!important}.mx-xxl-4[_ngcontent-%COMP%]{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xxl-5[_ngcontent-%COMP%]{margin-right:3rem!important;margin-left:3rem!important}.mx-xxl-auto[_ngcontent-%COMP%]{margin-right:auto!important;margin-left:auto!important}.my-xxl-0[_ngcontent-%COMP%]{margin-top:0!important;margin-bottom:0!important}.my-xxl-1[_ngcontent-%COMP%]{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xxl-2[_ngcontent-%COMP%]{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xxl-3[_ngcontent-%COMP%]{margin-top:1rem!important;margin-bottom:1rem!important}.my-xxl-4[_ngcontent-%COMP%]{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xxl-5[_ngcontent-%COMP%]{margin-top:3rem!important;margin-bottom:3rem!important}.my-xxl-auto[_ngcontent-%COMP%]{margin-top:auto!important;margin-bottom:auto!important}.mt-xxl-0[_ngcontent-%COMP%]{margin-top:0!important}.mt-xxl-1[_ngcontent-%COMP%]{margin-top:.25rem!important}.mt-xxl-2[_ngcontent-%COMP%]{margin-top:.5rem!important}.mt-xxl-3[_ngcontent-%COMP%]{margin-top:1rem!important}.mt-xxl-4[_ngcontent-%COMP%]{margin-top:1.5rem!important}.mt-xxl-5[_ngcontent-%COMP%]{margin-top:3rem!important}.mt-xxl-auto[_ngcontent-%COMP%]{margin-top:auto!important}.me-xxl-0[_ngcontent-%COMP%]{margin-right:0!important}.me-xxl-1[_ngcontent-%COMP%]{margin-right:.25rem!important}.me-xxl-2[_ngcontent-%COMP%]{margin-right:.5rem!important}.me-xxl-3[_ngcontent-%COMP%]{margin-right:1rem!important}.me-xxl-4[_ngcontent-%COMP%]{margin-right:1.5rem!important}.me-xxl-5[_ngcontent-%COMP%]{margin-right:3rem!important}.me-xxl-auto[_ngcontent-%COMP%]{margin-right:auto!important}.mb-xxl-0[_ngcontent-%COMP%]{margin-bottom:0!important}.mb-xxl-1[_ngcontent-%COMP%]{margin-bottom:.25rem!important}.mb-xxl-2[_ngcontent-%COMP%]{margin-bottom:.5rem!important}.mb-xxl-3[_ngcontent-%COMP%]{margin-bottom:1rem!important}.mb-xxl-4[_ngcontent-%COMP%]{margin-bottom:1.5rem!important}.mb-xxl-5[_ngcontent-%COMP%]{margin-bottom:3rem!important}.mb-xxl-auto[_ngcontent-%COMP%]{margin-bottom:auto!important}.ms-xxl-0[_ngcontent-%COMP%]{margin-left:0!important}.ms-xxl-1[_ngcontent-%COMP%]{margin-left:.25rem!important}.ms-xxl-2[_ngcontent-%COMP%]{margin-left:.5rem!important}.ms-xxl-3[_ngcontent-%COMP%]{margin-left:1rem!important}.ms-xxl-4[_ngcontent-%COMP%]{margin-left:1.5rem!important}.ms-xxl-5[_ngcontent-%COMP%]{margin-left:3rem!important}.ms-xxl-auto[_ngcontent-%COMP%]{margin-left:auto!important}.p-xxl-0[_ngcontent-%COMP%]{padding:0!important}.p-xxl-1[_ngcontent-%COMP%]{padding:.25rem!important}.p-xxl-2[_ngcontent-%COMP%]{padding:.5rem!important}.p-xxl-3[_ngcontent-%COMP%]{padding:1rem!important}.p-xxl-4[_ngcontent-%COMP%]{padding:1.5rem!important}.p-xxl-5[_ngcontent-%COMP%]{padding:3rem!important}.px-xxl-0[_ngcontent-%COMP%]{padding-right:0!important;padding-left:0!important}.px-xxl-1[_ngcontent-%COMP%]{padding-right:.25rem!important;padding-left:.25rem!important}.px-xxl-2[_ngcontent-%COMP%]{padding-right:.5rem!important;padding-left:.5rem!important}.px-xxl-3[_ngcontent-%COMP%]{padding-right:1rem!important;padding-left:1rem!important}.px-xxl-4[_ngcontent-%COMP%]{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xxl-5[_ngcontent-%COMP%]{padding-right:3rem!important;padding-left:3rem!important}.py-xxl-0[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}.py-xxl-1[_ngcontent-%COMP%]{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xxl-2[_ngcontent-%COMP%]{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xxl-3[_ngcontent-%COMP%]{padding-top:1rem!important;padding-bottom:1rem!important}.py-xxl-4[_ngcontent-%COMP%]{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xxl-5[_ngcontent-%COMP%]{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xxl-0[_ngcontent-%COMP%]{padding-top:0!important}.pt-xxl-1[_ngcontent-%COMP%]{padding-top:.25rem!important}.pt-xxl-2[_ngcontent-%COMP%]{padding-top:.5rem!important}.pt-xxl-3[_ngcontent-%COMP%]{padding-top:1rem!important}.pt-xxl-4[_ngcontent-%COMP%]{padding-top:1.5rem!important}.pt-xxl-5[_ngcontent-%COMP%]{padding-top:3rem!important}.pe-xxl-0[_ngcontent-%COMP%]{padding-right:0!important}.pe-xxl-1[_ngcontent-%COMP%]{padding-right:.25rem!important}.pe-xxl-2[_ngcontent-%COMP%]{padding-right:.5rem!important}.pe-xxl-3[_ngcontent-%COMP%]{padding-right:1rem!important}.pe-xxl-4[_ngcontent-%COMP%]{padding-right:1.5rem!important}.pe-xxl-5[_ngcontent-%COMP%]{padding-right:3rem!important}.pb-xxl-0[_ngcontent-%COMP%]{padding-bottom:0!important}.pb-xxl-1[_ngcontent-%COMP%]{padding-bottom:.25rem!important}.pb-xxl-2[_ngcontent-%COMP%]{padding-bottom:.5rem!important}.pb-xxl-3[_ngcontent-%COMP%]{padding-bottom:1rem!important}.pb-xxl-4[_ngcontent-%COMP%]{padding-bottom:1.5rem!important}.pb-xxl-5[_ngcontent-%COMP%]{padding-bottom:3rem!important}.ps-xxl-0[_ngcontent-%COMP%]{padding-left:0!important}.ps-xxl-1[_ngcontent-%COMP%]{padding-left:.25rem!important}.ps-xxl-2[_ngcontent-%COMP%]{padding-left:.5rem!important}.ps-xxl-3[_ngcontent-%COMP%]{padding-left:1rem!important}.ps-xxl-4[_ngcontent-%COMP%]{padding-left:1.5rem!important}.ps-xxl-5[_ngcontent-%COMP%]{padding-left:3rem!important}}@media print{.d-print-inline[_ngcontent-%COMP%]{display:inline!important}.d-print-inline-block[_ngcontent-%COMP%]{display:inline-block!important}.d-print-block[_ngcontent-%COMP%]{display:block!important}.d-print-grid[_ngcontent-%COMP%]{display:grid!important}.d-print-table[_ngcontent-%COMP%]{display:table!important}.d-print-table-row[_ngcontent-%COMP%]{display:table-row!important}.d-print-table-cell[_ngcontent-%COMP%]{display:table-cell!important}.d-print-flex[_ngcontent-%COMP%]{display:flex!important}.d-print-inline-flex[_ngcontent-%COMP%]{display:inline-flex!important}.d-print-none[_ngcontent-%COMP%]{display:none!important}}.prefooter-partners__container[_ngcontent-%COMP%]{padding:1px;margin-top:39px;margin-bottom:71px}@media (max-width: 575.98px){.prefooter-partners__container[_ngcontent-%COMP%]{margin-top:21px;margin-bottom:45px}}.prefooter-partners__container[_ngcontent-%COMP%]   .prefooter-partners__title[_ngcontent-%COMP%]{text-align:center;height:18px;line-height:18px;font-family:Teko;font-weight:400;font-size:18px;color:#3e414a;padding:1px}.prefooter-partners__container[_ngcontent-%COMP%]   .prefooter-partners__flexbox[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:space-around;flex-wrap:nowrap;padding:1px;margin-top:36px}@media (max-width: 575.98px){.prefooter-partners__container[_ngcontent-%COMP%]   .prefooter-partners__flexbox[_ngcontent-%COMP%]{width:320px;flex-wrap:wrap;margin-top:12px;margin-right:auto;margin-left:auto}}.prefooter-partners__container[_ngcontent-%COMP%]   .prefooter-partners__flexbox[_ngcontent-%COMP%]   .prefooter-partners__img[_ngcontent-%COMP%]{height:54px}@media (max-width: 767.98px){.prefooter-partners__container[_ngcontent-%COMP%]   .prefooter-partners__flexbox[_ngcontent-%COMP%]   .prefooter-partners__img[_ngcontent-%COMP%]{height:34px;margin-top:14px}}.footer[_ngcontent-%COMP%]{font-family:IBM Plex Sans;background-color:#0a0a0b;padding:2rem 0 3.5rem}@media (min-width: 992px){.footer[_ngcontent-%COMP%]{padding:4rem 0 3.5rem}}.footer[_ngcontent-%COMP%]   .footer__nav[_ngcontent-%COMP%]{display:flex}@media (max-width: 767.98px){.footer[_ngcontent-%COMP%]   .footer__nav[_ngcontent-%COMP%]{flex-direction:column}}.footer[_ngcontent-%COMP%]   .footer__nav[_ngcontent-%COMP%]   .footer__social[_ngcontent-%COMP%]{margin-top:32px;margin-left:-34px}@media (max-width: 767.98px){.footer[_ngcontent-%COMP%]   .footer__nav[_ngcontent-%COMP%]   .footer__social[_ngcontent-%COMP%]{margin-left:0;margin-bottom:12px}}.footer[_ngcontent-%COMP%]   .footer__menu[_ngcontent-%COMP%]{list-style:none;flex-grow:10;padding-left:0}@media (max-width: 767.98px){.footer[_ngcontent-%COMP%]   .footer__menu.opened[_ngcontent-%COMP%]   .footer__title[_ngcontent-%COMP%]:after{transform:rotate(-45deg);top:6px}.footer[_ngcontent-%COMP%]   .footer__menu.opened[_ngcontent-%COMP%]   .footer__item[_ngcontent-%COMP%]{display:block;padding-left:20px}}.footer[_ngcontent-%COMP%]   .footer__title[_ngcontent-%COMP%]{color:#f1f2f9;font-size:13px;font-weight:700;position:relative;display:inline}@media (min-width: 992px){.footer[_ngcontent-%COMP%]   .footer__title[_ngcontent-%COMP%]{padding-bottom:2rem;display:block}}@media (max-width: 767.98px){.footer[_ngcontent-%COMP%]   .footer__title[_ngcontent-%COMP%]:after{color:#df0021;border-style:solid;border-width:1px 1px 0 0;content:"";display:inline-block;height:6px;width:6px;position:absolute;vertical-align:top;top:3px;right:-20px;transform:rotate(135deg)}}.footer[_ngcontent-%COMP%]   .footer__item[_ngcontent-%COMP%]{color:#d8d8d8;font-size:12px;line-height:32px}@media (max-width: 767.98px){.footer[_ngcontent-%COMP%]   .footer__item[_ngcontent-%COMP%]{display:none}}.footer[_ngcontent-%COMP%]   .footer__item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit}.footer[_ngcontent-%COMP%]   .footer__partners[_ngcontent-%COMP%]{display:flex;margin:50px 0 30px}.footer[_ngcontent-%COMP%]   .footer__partners[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-around}.footer[_ngcontent-%COMP%]   .footer__partners[_ngcontent-%COMP%]   .footer__partners__title[_ngcontent-%COMP%]{color:#f1f2f9;font-size:13px;margin-right:30px;margin-top:20px;flex-shrink:0}.footer[_ngcontent-%COMP%]   .footer__partners[_ngcontent-%COMP%]   .partner[_ngcontent-%COMP%]{height:40px;margin:10px 30px 10px 0}.footer[_ngcontent-%COMP%]   .footer__disclaimer[_ngcontent-%COMP%]{border-top:1px solid #808080;padding-top:18px;color:gray;font-size:10px}']
                }), F
            })();
            var ln = a(8909);
            const Mn = ["federatedComponent"];

            function Jt(F, ye) {}

            function On(F, ye) {
                1 & F && (r.\u0275\ u0275elementStart(0, "mat-icon"), r.\u0275\ u0275text(1, "chevron_right"), r.\u0275\ u0275elementEnd())
            }
            let Vt = (() => {
                    class F {
                        constructor(ee, Fe, Qe, st, zt, Gt) {
                            this.keycloakService = ee, this.router = Fe, this.injector = Qe, this.footer = st, this.svgIconsService = zt, this.topBarStateService = Gt, this.version = ce.N.version, this.topBarReady$ = new ve.X(!1), this.svgIconsService.register(), this.router.events.subscribe(fn => {
                                fn instanceof p.NavigationStart && "/" === fn.url && (document.location.href = ce.N.appConfig.urls.lnp)
                            }), this.footer.footerData$.subscribe(fn => {
                                this.topBarStateService.setNewConfig({
                                    lowerMenu: fn.item.headerLocalMenu.map(en => ({
                                        text: en.title,
                                        type: "External" === en.targetItemType ? "external" : "internal",
                                        url: en.url
                                    }))
                                }), this.topBarReady$.next(!0)
                            })
                        }
                        ngOnInit() {
                            (function He(F) {
                                return et.apply(this, arguments)
                            })((0, q.moduleFederationConfig)(ce.N.appConfig.shared.topBarHost)).then(ee => {
                                this.federatedComponent.createComponent(ee[q.moduleFederationModuleName].exports[0], {
                                    injector: (0, r.\u0275createInjector)(ee[q.moduleFederationModuleName], this.injector)
                                })
                            }).catch(ee => {
                                console.error(ee)
                            })
                        }
                    }
                    return F.\u0275fac = function(ee) {
                        return new(ee || F)(r.\u0275\ u0275directiveInject(H), r.\u0275\ u0275directiveInject(p.Router), r.\u0275\ u0275directiveInject(r.Injector), r.\u0275\ u0275directiveInject(je), r.\u0275\ u0275directiveInject(ct.t), r.\u0275\ u0275directiveInject(q.TopBarStateService))
                    }, F.\u0275cmp = r.\u0275\ u0275defineComponent({
                        type: F,
                        selectors: [
                            ["app-root"]
                        ],
                        viewQuery: function(ee, Fe) {
                            if (1 & ee && r.\u0275\ u0275viewQuery(Mn, 5, r.ViewContainerRef), 2 & ee) {
                                let Qe;
                                r.\u0275\ u0275queryRefresh(Qe = r.\u0275\ u0275loadQuery()) && (Fe.federatedComponent = Qe.first)
                            }
                        },
                        decls: 12,
                        vars: 2,
                        consts: [
                            ["federatedComponent", ""],
                            [2, "display", "none"],
                            [1, "container"],
                            [3, "separator"],
                            ["iconTemplate", ""]
                        ],
                        template: function(ee, Fe) {
                            if (1 & ee && (r.\u0275\ u0275template(0, Jt, 0, 0, "ng-template", null, 0, r.\u0275\ u0275templateRefExtractor), r.\u0275\ u0275elementStart(2, "div", 1), r.\u0275\ u0275text(3), r.\u0275\ u0275elementEnd(), r.\u0275\ u0275elementStart(4, "div", 2), r.\u0275\ u0275element(5, "xng-breadcrumb", 3)(6, "router-outlet"), r.\u0275\ u0275elementEnd(), r.\u0275\ u0275element(7, "app-global-loading-indicator")(8, "app-section-newsletter")(9, "app-footer"), r.\u0275\ u0275template(10, On, 2, 0, "ng-template", null, 4, r.\u0275\ u0275templateRefExtractor)), 2 & ee) {
                                const Qe = r.\u0275\ u0275reference(11);
                                r.\u0275\ u0275advance(3), r.\u0275\ u0275textInterpolate1("appVersion: ", Fe.version, ""), r.\u0275\ u0275advance(2), r.\u0275\ u0275property("separator", Qe)
                            }
                        },
                        dependencies: [p.RouterOutlet, xt.Hw, xe, De, vn, ln.LI]
                    }), F
                })(),
                bn = (() => {
                    class F {
                        constructor(ee, Fe) {
                            this.router = ee, this.ngZone = Fe
                        }
                        handleError(ee) {
                            switch (ee.status) {
                                case Ht.BadRequest:
                                case Ht.Unauthorized:
                                    break;
                                case Ht.NotFound:
                                    this.ngZone.run(() => {
                                        this.router.navigate([`${f.m.baseHref}/404`])
                                    });
                                    break;
                                case Ht.TimeOut:
                                case Ht.InternalServerError:
                                case Ht.Forbidden:
                                    this.router.navigate([`${f.m.baseHref}/404`])
                            }
                        }
                    }
                    return F.\u0275fac = function(ee) {
                        return new(ee || F)(r.\u0275\ u0275inject(p.Router), r.\u0275\ u0275inject(r.NgZone))
                    }, F.\u0275prov = r.\u0275\ u0275defineInjectable({
                        token: F,
                        factory: F.\u0275fac,
                        providedIn: "root"
                    }), F
                })(),
                Ht = (() => {
                    class F {}
                    return F.BadRequest = 400, F.Unauthorized = 401, F.Forbidden = 403, F.NotFound = 404, F.TimeOut = 408, F.Conflict = 409, F.InternalServerError = 500, F
                })();
            var yn = a(8166);

            function xn(F, ye) {
                return () => new Promise(function() {
                    var ee = (0, Oe.Z)(function*(Fe, Qe) {
                        try {
                            yield F.init(), yield ye.init(), Fe()
                        } catch (st) {
                            throw new Error(st.toString())
                        }
                    });
                    return function(Fe, Qe) {
                        return ee.apply(this, arguments)
                    }
                }())
            }(0, Re.registerLocaleData)(d.Z);
            let on = (() => {
                class F {
                    constructor(ee) {
                        if (ee) throw new Error("AppProviders already loaded. Import it in the AppModule only")
                    }
                }
                return F.\u0275fac = function(ee) {
                    return new(ee || F)(r.\u0275\ u0275inject(F, 12))
                }, F.\u0275mod = r.\u0275\ u0275defineNgModule({
                    type: F
                }), F.\u0275inj = r.\u0275\ u0275defineInjector({
                    providers: [H, yn.B, {
                        provide: r.APP_INITIALIZER,
                        useFactory: xn,
                        multi: !0,
                        deps: [H, je]
                    }, {
                        provide: q.DYNAMIC_TOP_BAR_KEYCLOAK_SERVICE,
                        useExisting: H,
                        multi: !1
                    }, {
                        provide: q.DYNAMIC_TOP_BAR_CONFIG_INJECTION_TOKEN,
                        multi: !1,
                        useValue: {
                            environment: "locale" !== ce.N.appConfig.env ? ce.N.appConfig.env : "dev",
                            isProfileApplication: !1,
                            mainLogoUrl: Ve.q.getBaseHref() + "assets/icons/logo-lnp.png",
                            homePageUrl: "/",
                            showLanguageButton: !1,
                            showTicketingCart: !1,
                            showSearchButton: !1,
                            lowerMenu: []
                        }
                    }, {
                        provide: r.ErrorHandler,
                        useClass: bn
                    }, {
                        provide: ke.HTTP_INTERCEPTORS,
                        useExisting: L.l,
                        multi: !0
                    }]
                }), F
            })();
            var qt = a(4466),
                In = a(5682);
            let Hn = (() => {
                class F {}
                return F.\u0275fac = function(ee) {
                    return new(ee || F)
                }, F.\u0275mod = r.\u0275\ u0275defineNgModule({
                    type: F
                }), F.\u0275inj = r.\u0275\ u0275defineInjector({
                    providers: [je],
                    imports: [Re.CommonModule, qt.m]
                }), F
            })();
            var Nn = a(577),
                Rn = a(4700);
            (0, Re.registerLocaleData)(d.Z, "pl-PL", O.Z);
            let kn = (() => {
                class F {}
                return F.\u0275fac = function(ee) {
                    return new(ee || F)
                }, F.\u0275mod = r.\u0275\ u0275defineNgModule({
                    type: F,
                    bootstrap: [Vt]
                }), F.\u0275inj = r.\u0275\ u0275defineInjector({
                    providers: [ln.pm, {
                        provide: r.LOCALE_ID,
                        useValue: "pl-PL"
                    }, {
                        provide: Rn.We,
                        useValue: ce.N.appConfig.services.reCaptcha.key
                    }],
                    imports: [t.BrowserModule, J, ke.HttpClientModule, t.HammerModule, on, qt.m, Hn, ue.Uq.forRoot({
                        config: {
                            provide: ue.rP,
                            useClass: ce.N.pzpnNewsletterEnvConfig
                        }
                    }), In.BrowserAnimationsModule, ln.wH, Rn.dw, Nn._J.forRoot()]
                }), F
            })();
            ce.N.production && (0, r.enableProdMode)(), t.platformBrowser().bootstrapModule(kn).catch(F => console.error(F))
        },
        7367: (y, T, a) => {
            a.d(T, {
                N: () => v
            });
            var t = a(4568),
                r = a(8125);
            let d = (() => {
                class A extends t.rP {
                    get urls() {
                        return {
                            apiUrl: "https://nl-api.laczynaspilka.pl/",
                            imageUrl: {
                                fromCms: "https://cdn.laczynaspilka.pl/cms2/prod/"
                            }
                        }
                    }
                }
                return A.\u0275fac = function() {
                    let M;
                    return function(z) {
                        return (M || (M = r.\u0275\ u0275getInheritedFactory(A)))(z || A)
                    }
                }(), A.\u0275prov = r.\u0275\ u0275defineInjectable({
                    token: A,
                    factory: A.\u0275fac,
                    providedIn: "root"
                }), A
            })();
            var p = a(3680);
            const v = {
                production: !0,
                appConfig: { ...p.n,
                    env: "prod",
                    images: {
                        CDN_URL: "https://cdn.laczynaspilka.pl/cms2/prod",
                        CDN_RGOL_URL: "https://rgol-media.laczynaspilka.pl"
                    },
                    shared: { ...p.n.shared,
                        topBarHost: "https://top-bar.laczynaspilka.pl/ng-14"
                    },
                    services: {
                        keycloak: {
                            config: {
                                url: "https://login.laczynaspilka.pl/auth",
                                realm: "PZPN",
                                clientId: "PJS",
                                "ssl-required": "external",
                                "public-client": !0
                            },
                            minTokenValidity: 120
                        },
                        user: {
                            current: {
                                userDataChangedEmitterTimeout: 5e3
                            },
                            notifications: {
                                defaultLimit: 20,
                                fetchNotificationTimeout: 5e3
                            }
                        },
                        // info
                        reCaptcha: {
                            key: "6Le308YkAAAAAAm1iLONHT8BUz6e9fNgmQ3kxh8f"
                        }
                    },
                    urls: {
                        api: "https://pjs-api.laczynaspilka.pl/api/bus/pro-junior-system/v1/",
                        apiCompetition: "https://competition-api.laczynaspilka.pl/api/bus/competition/v1/",
                        apiRepresentation: "https://representations-api.laczynaspilka.pl/api/bus/representation/v1/",
                        lnp: "https://www.laczynaspilka.pl/strona-glowna",
                        rGol: "https://www.r-gol.com/api/v1/ProductsFrame"
                    },
                    notSupportedBrowser: [{
                        name: "IE",
                        version: "null"
                    }]
                },
                pzpnNewsletterEnvConfig: d,
                version: "0.9.82"
            }
        },
        1623: (y, T, a) => {
            a.d(T, {
                m: () => r
            });
            var t = (() => {
                return (d = t || (t = {})).competitionMain = "rozgrywki", d.club = "klub", d.player = "zawodnik", d.team = "druzyna", d.match = "mecz", t;
                var d
            })();
            const r = {
                baseHref: `/${t.competitionMain}/`,
                modulePath: "projects/competitions/src/app/competitions.module",
                moduleName: "CompetitionsModule"
            }
        },
        8707: (y, T, a) => {
            var t = a(5203),
                r = a(5834),
                d = t("%TypeError%"),
                O = a(2228),
                p = a(5906),
                f = a(8111),
                v = a(8109),
                A = a(8241),
                M = a(353),
                I = a(5814),
                z = a(4322),
                V = r("String.prototype.split"),
                J = Object("a"),
                ie = "a" !== J[0] || !(0 in J);
            y.exports = function(ve) {
                var Ne, Oe = M(this),
                    oe = ie && z(this) ? V(this, "") : Oe,
                    Me = A(oe);
                if (!v(ve)) throw new d("Array.prototype.forEach callback must be a function");
                arguments.length > 1 && (Ne = arguments[1]);
                for (var pe = 0; pe < Me;) {
                    var k = I(pe),
                        _ = f(oe, k);
                    if (_) {
                        var N = p(oe, k);
                        O(ve, Ne, [N, pe, oe])
                    }
                    pe += 1
                }
            }
        },
        8495: (y, T, a) => {
            var t = a(2358),
                r = a(5685),
                d = a(5834),
                O = a(8188),
                p = a(8707),
                f = a(1738),
                v = f(),
                A = a(5939),
                M = d("Array.prototype.slice"),
                I = r.apply(v),
                z = function(J, ie) {
                    return O(J), I(J, M(arguments, 1))
                };
            t(z, {
                getPolyfill: f,
                implementation: p,
                shim: A
            }), y.exports = z
        },
        1738: (y, T, a) => {
            var t = a(5825),
                r = a(8707);
            y.exports = function() {
                var O = Array.prototype.forEach;
                return t(O) ? O : r
            }
        },
        5939: (y, T, a) => {
            var t = a(2358),
                r = a(1738);
            y.exports = function() {
                var O = r();
                return t(Array.prototype, {
                    forEach: O
                }, {
                    forEach: function() {
                        return Array.prototype.forEach !== O
                    }
                }), O
            }
        },
        5343: (y, T) => {
            T.byteLength = function v(J) {
                var ie = f(J),
                    ve = ie[1];
                return 3 * (ie[0] + ve) / 4 - ve
            }, T.toByteArray = function M(J) {
                var ie, pe, ce = f(J),
                    ve = ce[0],
                    Oe = ce[1],
                    oe = new r(function A(J, ie, ce) {
                        return 3 * (ie + ce) / 4 - ce
                    }(0, ve, Oe)),
                    Me = 0,
                    Ne = Oe > 0 ? ve - 4 : ve;
                for (pe = 0; pe < Ne; pe += 4) ie = t[J.charCodeAt(pe)] << 18 | t[J.charCodeAt(pe + 1)] << 12 | t[J.charCodeAt(pe + 2)] << 6 | t[J.charCodeAt(pe + 3)], oe[Me++] = ie >> 16 & 255, oe[Me++] = ie >> 8 & 255, oe[Me++] = 255 & ie;
                return 2 === Oe && (ie = t[J.charCodeAt(pe)] << 2 | t[J.charCodeAt(pe + 1)] >> 4, oe[Me++] = 255 & ie), 1 === Oe && (ie = t[J.charCodeAt(pe)] << 10 | t[J.charCodeAt(pe + 1)] << 4 | t[J.charCodeAt(pe + 2)] >> 2, oe[Me++] = ie >> 8 & 255, oe[Me++] = 255 & ie), oe
            }, T.fromByteArray = function V(J) {
                for (var ie, ce = J.length, ve = ce % 3, Oe = [], Me = 0, Ne = ce - ve; Me < Ne; Me += 16383) Oe.push(z(J, Me, Me + 16383 > Ne ? Ne : Me + 16383));
                return 1 === ve ? Oe.push(a[(ie = J[ce - 1]) >> 2] + a[ie << 4 & 63] + "==") : 2 === ve && Oe.push(a[(ie = (J[ce - 2] << 8) + J[ce - 1]) >> 10] + a[ie >> 4 & 63] + a[ie << 2 & 63] + "="), Oe.join("")
            };
            for (var a = [], t = [], r = typeof Uint8Array < "u" ? Uint8Array : Array, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", O = 0, p = d.length; O < p; ++O) a[O] = d[O], t[d.charCodeAt(O)] = O;

            function f(J) {
                var ie = J.length;
                if (ie % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var ce = J.indexOf("=");
                return -1 === ce && (ce = ie), [ce, ce === ie ? 0 : 4 - ce % 4]
            }

            function I(J) {
                return a[J >> 18 & 63] + a[J >> 12 & 63] + a[J >> 6 & 63] + a[63 & J]
            }

            function z(J, ie, ce) {
                for (var Oe = [], oe = ie; oe < ce; oe += 3) Oe.push(I((J[oe] << 16 & 16711680) + (J[oe + 1] << 8 & 65280) + (255 & J[oe + 2])));
                return Oe.join("")
            }
            t["-".charCodeAt(0)] = 62, t["_".charCodeAt(0)] = 63
        },
        5834: (y, T, a) => {
            var t = a(5203),
                r = a(5685),
                d = r(t("String.prototype.indexOf"));
            y.exports = function(p, f) {
                var v = t(p, !!f);
                return "function" == typeof v && d(p, ".prototype.") > -1 ? r(v) : v
            }
        },
        5685: (y, T, a) => {
            var t = a(4444),
                r = a(5203),
                d = r("%Function.prototype.apply%"),
                O = r("%Function.prototype.call%"),
                p = r("%Reflect.apply%", !0) || t.call(O, d),
                f = r("%Object.getOwnPropertyDescriptor%", !0),
                v = r("%Object.defineProperty%", !0),
                A = r("%Math.max%");
            if (v) try {
                v({}, "a", {
                    value: 1
                })
            } catch {
                v = null
            }
            y.exports = function(z) {
                var V = p(t, O, arguments);
                if (f && v) {
                    var J = f(V, "length");
                    J.configurable && v(V, "length", {
                        value: 1 + A(0, z.length - (arguments.length - 1))
                    })
                }
                return V
            };
            var M = function() {
                return p(t, d, arguments)
            };
            v ? v(y.exports, "apply", {
                value: M
            }) : y.exports.apply = M
        },
        2358: (y, T, a) => {
            var t = a(1356),
                r = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
                d = Object.prototype.toString,
                O = Array.prototype.concat,
                p = Object.defineProperty,
                v = a(7027)(),
                A = p && v,
                M = function(z, V, J, ie) {
                    if (V in z)
                        if (!0 === ie) {
                            if (z[V] === J) return
                        } else if (! function(z) {
                            return "function" == typeof z && "[object Function]" === d.call(z)
                        }(ie) || !ie()) return;
                    A ? p(z, V, {
                        configurable: !0,
                        enumerable: !1,
                        value: J,
                        writable: !0
                    }) : z[V] = J
                },
                I = function(z, V) {
                    var J = arguments.length > 2 ? arguments[2] : {},
                        ie = t(V);
                    r && (ie = O.call(ie, Object.getOwnPropertySymbols(V)));
                    for (var ce = 0; ce < ie.length; ce += 1) M(z, ie[ce], V[ie[ce]], J[ie[ce]])
                };
            I.supportsDescriptors = !!A, y.exports = I
        },
        5825: y => {
            y.exports = function(a) {
                var t = !0,
                    r = !0,
                    d = !1;
                if ("function" == typeof a) {
                    try {
                        a.call("f", function(O, p, f) {
                            "object" != typeof f && (t = !1)
                        }), a.call([null], function() {
                            "use strict";
                            r = "string" == typeof this
                        }, "x")
                    } catch {
                        d = !0
                    }
                    return !d && t && r
                }
                return !1
            }
        },
        3858: (y, T, a) => {
            var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
                r = a(1138),
                d = a(7566),
                O = a(2374),
                p = a(9227),
                f = function(M, I) {
                    if (typeof M > "u" || null === M) throw new TypeError("Cannot call method on " + M);
                    if ("string" != typeof I || "number" !== I && "string" !== I) throw new TypeError('hint must be "string" or "number"');
                    var V, J, ie, z = "string" === I ? ["toString", "valueOf"] : ["valueOf", "toString"];
                    for (ie = 0; ie < z.length; ++ie)
                        if (d(V = M[z[ie]]) && (J = V.call(M), r(J))) return J;
                    throw new TypeError("No default value")
                },
                v = function(M, I) {
                    var z = M[I];
                    if (null !== z && typeof z < "u") {
                        if (!d(z)) throw new TypeError(z + " returned for property " + I + " of object " + M + " is not a function");
                        return z
                    }
                };
            y.exports = function(M) {
                if (r(M)) return M;
                var z, I = "default";
                if (arguments.length > 1 && (arguments[1] === String ? I = "string" : arguments[1] === Number && (I = "number")), t && (Symbol.toPrimitive ? z = v(M, Symbol.toPrimitive) : p(M) && (z = Symbol.prototype.valueOf)), typeof z < "u") {
                    var V = z.call(M, I);
                    if (r(V)) return V;
                    throw new TypeError("unable to convert exotic object to primitive")
                }
                return "default" === I && (O(M) || p(M)) && (I = "string"), f(M, "default" === I ? "number" : I)
            }
        },
        1138: y => {
            y.exports = function(a) {
                return null === a || "function" != typeof a && "object" != typeof a
            }
        },
        3457: y => {
            var T = "Function.prototype.bind called on incompatible ",
                a = Array.prototype.slice,
                t = Object.prototype.toString,
                r = "[object Function]";
            y.exports = function(O) {
                var p = this;
                if ("function" != typeof p || t.call(p) !== r) throw new TypeError(T + p);
                for (var v, f = a.call(arguments, 1), A = function() {
                        if (this instanceof v) {
                            var J = p.apply(this, f.concat(a.call(arguments)));
                            return Object(J) === J ? J : this
                        }
                        return p.apply(O, f.concat(a.call(arguments)))
                    }, M = Math.max(0, p.length - f.length), I = [], z = 0; z < M; z++) I.push("$" + z);
                if (v = Function("binder", "return function (" + I.join(",") + "){ return binder.apply(this,arguments); }")(A), p.prototype) {
                    var V = function() {};
                    V.prototype = p.prototype, v.prototype = new V, V.prototype = null
                }
                return v
            }
        },
        4444: (y, T, a) => {
            var t = a(3457);
            y.exports = Function.prototype.bind || t
        },
        5203: (y, T, a) => {
            var t, r = SyntaxError,
                d = Function,
                O = TypeError,
                p = function(Z) {
                    try {
                        return d('"use strict"; return (' + Z + ").constructor;")()
                    } catch {}
                },
                f = Object.getOwnPropertyDescriptor;
            if (f) try {
                f({}, "")
            } catch {
                f = null
            }
            var v = function() {
                    throw new O
                },
                A = f ? function() {
                    try {
                        return v
                    } catch {
                        try {
                            return f(arguments, "callee").get
                        } catch {
                            return v
                        }
                    }
                }() : v,
                M = a(2969)(),
                I = Object.getPrototypeOf || function(Z) {
                    return Z.__proto__
                },
                z = {},
                V = typeof Uint8Array > "u" ? t : I(Uint8Array),
                J = {
                    "%AggregateError%": typeof AggregateError > "u" ? t : AggregateError,
                    "%Array%": Array,
                    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? t : ArrayBuffer,
                    "%ArrayIteratorPrototype%": M ? I([][Symbol.iterator]()) : t,
                    "%AsyncFromSyncIteratorPrototype%": t,
                    "%AsyncFunction%": z,
                    "%AsyncGenerator%": z,
                    "%AsyncGeneratorFunction%": z,
                    "%AsyncIteratorPrototype%": z,
                    "%Atomics%": typeof Atomics > "u" ? t : Atomics,
                    "%BigInt%": typeof BigInt > "u" ? t : BigInt,
                    "%BigInt64Array%": typeof BigInt64Array > "u" ? t : BigInt64Array,
                    "%BigUint64Array%": typeof BigUint64Array > "u" ? t : BigUint64Array,
                    "%Boolean%": Boolean,
                    "%DataView%": typeof DataView > "u" ? t : DataView,
                    "%Date%": Date,
                    "%decodeURI%": decodeURI,
                    "%decodeURIComponent%": decodeURIComponent,
                    "%encodeURI%": encodeURI,
                    "%encodeURIComponent%": encodeURIComponent,
                    "%Error%": Error,
                    "%eval%": eval,
                    "%EvalError%": EvalError,
                    "%Float32Array%": typeof Float32Array > "u" ? t : Float32Array,
                    "%Float64Array%": typeof Float64Array > "u" ? t : Float64Array,
                    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? t : FinalizationRegistry,
                    "%Function%": d,
                    "%GeneratorFunction%": z,
                    "%Int8Array%": typeof Int8Array > "u" ? t : Int8Array,
                    "%Int16Array%": typeof Int16Array > "u" ? t : Int16Array,
                    "%Int32Array%": typeof Int32Array > "u" ? t : Int32Array,
                    "%isFinite%": isFinite,
                    "%isNaN%": isNaN,
                    "%IteratorPrototype%": M ? I(I([][Symbol.iterator]())) : t,
                    "%JSON%": "object" == typeof JSON ? JSON : t,
                    "%Map%": typeof Map > "u" ? t : Map,
                    "%MapIteratorPrototype%": typeof Map > "u" || !M ? t : I((new Map)[Symbol.iterator]()),
                    "%Math%": Math,
                    "%Number%": Number,
                    "%Object%": Object,
                    "%parseFloat%": parseFloat,
                    "%parseInt%": parseInt,
                    "%Promise%": typeof Promise > "u" ? t : Promise,
                    "%Proxy%": typeof Proxy > "u" ? t : Proxy,
                    "%RangeError%": RangeError,
                    "%ReferenceError%": ReferenceError,
                    "%Reflect%": typeof Reflect > "u" ? t : Reflect,
                    "%RegExp%": RegExp,
                    "%Set%": typeof Set > "u" ? t : Set,
                    "%SetIteratorPrototype%": typeof Set > "u" || !M ? t : I((new Set)[Symbol.iterator]()),
                    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? t : SharedArrayBuffer,
                    "%String%": String,
                    "%StringIteratorPrototype%": M ? I("" [Symbol.iterator]()) : t,
                    "%Symbol%": M ? Symbol : t,
                    "%SyntaxError%": r,
                    "%ThrowTypeError%": A,
                    "%TypedArray%": V,
                    "%TypeError%": O,
                    "%Uint8Array%": typeof Uint8Array > "u" ? t : Uint8Array,
                    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? t : Uint8ClampedArray,
                    "%Uint16Array%": typeof Uint16Array > "u" ? t : Uint16Array,
                    "%Uint32Array%": typeof Uint32Array > "u" ? t : Uint32Array,
                    "%URIError%": URIError,
                    "%WeakMap%": typeof WeakMap > "u" ? t : WeakMap,
                    "%WeakRef%": typeof WeakRef > "u" ? t : WeakRef,
                    "%WeakSet%": typeof WeakSet > "u" ? t : WeakSet
                };
            try {
                null.error
            } catch (Z) {
                var ie = I(I(Z));
                J["%Error.prototype%"] = ie
            }
            var ce = function Z(ge) {
                    var be;
                    if ("%AsyncFunction%" === ge) be = p("async function () {}");
                    else if ("%GeneratorFunction%" === ge) be = p("function* () {}");
                    else if ("%AsyncGeneratorFunction%" === ge) be = p("async function* () {}");
                    else if ("%AsyncGenerator%" === ge) {
                        var Ee = Z("%AsyncGeneratorFunction%");
                        Ee && (be = Ee.prototype)
                    } else if ("%AsyncIteratorPrototype%" === ge) {
                        var He = Z("%AsyncGenerator%");
                        He && (be = I(He.prototype))
                    }
                    return J[ge] = be, be
                },
                ve = {
                    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                    "%ArrayPrototype%": ["Array", "prototype"],
                    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                    "%ArrayProto_values%": ["Array", "prototype", "values"],
                    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                    "%BooleanPrototype%": ["Boolean", "prototype"],
                    "%DataViewPrototype%": ["DataView", "prototype"],
                    "%DatePrototype%": ["Date", "prototype"],
                    "%ErrorPrototype%": ["Error", "prototype"],
                    "%EvalErrorPrototype%": ["EvalError", "prototype"],
                    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                    "%FunctionPrototype%": ["Function", "prototype"],
                    "%Generator%": ["GeneratorFunction", "prototype"],
                    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                    "%JSONParse%": ["JSON", "parse"],
                    "%JSONStringify%": ["JSON", "stringify"],
                    "%MapPrototype%": ["Map", "prototype"],
                    "%NumberPrototype%": ["Number", "prototype"],
                    "%ObjectPrototype%": ["Object", "prototype"],
                    "%ObjProto_toString%": ["Object", "prototype", "toString"],
                    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                    "%PromisePrototype%": ["Promise", "prototype"],
                    "%PromiseProto_then%": ["Promise", "prototype", "then"],
                    "%Promise_all%": ["Promise", "all"],
                    "%Promise_reject%": ["Promise", "reject"],
                    "%Promise_resolve%": ["Promise", "resolve"],
                    "%RangeErrorPrototype%": ["RangeError", "prototype"],
                    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                    "%RegExpPrototype%": ["RegExp", "prototype"],
                    "%SetPrototype%": ["Set", "prototype"],
                    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                    "%StringPrototype%": ["String", "prototype"],
                    "%SymbolPrototype%": ["Symbol", "prototype"],
                    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                    "%TypeErrorPrototype%": ["TypeError", "prototype"],
                    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                    "%URIErrorPrototype%": ["URIError", "prototype"],
                    "%WeakMapPrototype%": ["WeakMap", "prototype"],
                    "%WeakSetPrototype%": ["WeakSet", "prototype"]
                },
                Oe = a(4444),
                oe = a(3164),
                Me = Oe.call(Function.call, Array.prototype.concat),
                Ne = Oe.call(Function.apply, Array.prototype.splice),
                pe = Oe.call(Function.call, String.prototype.replace),
                k = Oe.call(Function.call, String.prototype.slice),
                _ = Oe.call(Function.call, RegExp.prototype.exec),
                N = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                Y = /\\(\\)?/g,
                te = function(ge) {
                    var be = k(ge, 0, 1),
                        Ee = k(ge, -1);
                    if ("%" === be && "%" !== Ee) throw new r("invalid intrinsic syntax, expected closing `%`");
                    if ("%" === Ee && "%" !== be) throw new r("invalid intrinsic syntax, expected opening `%`");
                    var He = [];
                    return pe(ge, N, function(et, rt, nt, it) {
                        He[He.length] = nt ? pe(it, Y, "$1") : rt || et
                    }), He
                },
                Pe = function(ge, be) {
                    var He, Ee = ge;
                    if (oe(ve, Ee) && (Ee = "%" + (He = ve[Ee])[0] + "%"), oe(J, Ee)) {
                        var et = J[Ee];
                        if (et === z && (et = ce(Ee)), typeof et > "u" && !be) throw new O("intrinsic " + ge + " exists, but is not available. Please file an issue!");
                        return {
                            alias: He,
                            name: Ee,
                            value: et
                        }
                    }
                    throw new r("intrinsic " + ge + " does not exist!")
                };
            y.exports = function(ge, be) {
                if ("string" != typeof ge || 0 === ge.length) throw new O("intrinsic name must be a non-empty string");
                if (arguments.length > 1 && "boolean" != typeof be) throw new O('"allowMissing" argument must be a boolean');
                if (null === _(/^%?[^%]*%?$/, ge)) throw new r("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                var Ee = te(ge),
                    He = Ee.length > 0 ? Ee[0] : "",
                    et = Pe("%" + He + "%", be),
                    rt = et.name,
                    nt = et.value,
                    it = !1,
                    at = et.alias;
                at && (He = at[0], Ne(Ee, Me([0, 1], at)));
                for (var gt = 1, Pt = !0; gt < Ee.length; gt += 1) {
                    var Je = Ee[gt],
                        b = k(Je, 0, 1),
                        q = k(Je, -1);
                    if (('"' === b || "'" === b || "`" === b || '"' === q || "'" === q || "`" === q) && b !== q) throw new r("property names with quotes must have matching quotes");
                    if (("constructor" === Je || !Pt) && (it = !0), oe(J, rt = "%" + (He += "." + Je) + "%")) nt = J[rt];
                    else if (null != nt) {
                        if (!(Je in nt)) {
                            if (!be) throw new O("base intrinsic for " + ge + " exists, but the property is not available.");
                            return
                        }
                        if (f && gt + 1 >= Ee.length) {
                            var E = f(nt, Je);
                            nt = (Pt = !!E) && "get" in E && !("originalValue" in E.get) ? E.get : nt[Je]
                        } else Pt = oe(nt, Je), nt = nt[Je];
                        Pt && !it && (J[rt] = nt)
                    }
                }
                return nt
            }
        },
        7027: (y, T, a) => {
            var r = a(5203)("%Object.defineProperty%", !0),
                d = function() {
                    if (r) try {
                        return r({}, "a", {
                            value: 1
                        }), !0
                    } catch {
                        return !1
                    }
                    return !1
                };
            d.hasArrayLengthDefineBug = function() {
                if (!d()) return null;
                try {
                    return 1 !== r([], "length", {
                        value: 1
                    }).length
                } catch {
                    return !0
                }
            }, y.exports = d
        },
        2969: (y, T, a) => {
            var t = typeof Symbol < "u" && Symbol,
                r = a(1983);
            y.exports = function() {
                return "function" == typeof t && "function" == typeof Symbol && "symbol" == typeof t("foo") && "symbol" == typeof Symbol("bar") && r()
            }
        },
        1983: y => {
            y.exports = function() {
                if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                if ("symbol" == typeof Symbol.iterator) return !0;
                var a = {},
                    t = Symbol("test"),
                    r = Object(t);
                if ("string" == typeof t || "[object Symbol]" !== Object.prototype.toString.call(t) || "[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
                for (t in a[t] = 42, a) return !1;
                if ("function" == typeof Object.keys && 0 !== Object.keys(a).length || "function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(a).length) return !1;
                var O = Object.getOwnPropertySymbols(a);
                if (1 !== O.length || O[0] !== t || !Object.prototype.propertyIsEnumerable.call(a, t)) return !1;
                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                    var p = Object.getOwnPropertyDescriptor(a, t);
                    if (42 !== p.value || !0 !== p.enumerable) return !1
                }
                return !0
            }
        },
        6259: (y, T, a) => {
            var t = a(1983);
            y.exports = function() {
                return t() && !!Symbol.toStringTag
            }
        },
        3164: (y, T, a) => {
            var t = a(4444);
            y.exports = t.call(Function.call, Object.prototype.hasOwnProperty)
        },
        7566: y => {
            var t, r, T = Function.prototype.toString,
                a = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
            if ("function" == typeof a && "function" == typeof Object.defineProperty) try {
                t = Object.defineProperty({}, "length", {
                    get: function() {
                        throw r
                    }
                }), r = {}, a(function() {
                    throw 42
                }, null, t)
            } catch (Oe) {
                Oe !== r && (a = null)
            } else a = null;
            var d = /^\s*class\b/,
                O = function(oe) {
                    try {
                        var Me = T.call(oe);
                        return d.test(Me)
                    } catch {
                        return !1
                    }
                },
                p = function(oe) {
                    try {
                        return !O(oe) && (T.call(oe), !0)
                    } catch {
                        return !1
                    }
                },
                f = Object.prototype.toString,
                J = "function" == typeof Symbol && !!Symbol.toStringTag,
                ie = !(0 in [, ]),
                ce = function() {
                    return !1
                };
            if ("object" == typeof document) {
                var ve = document.all;
                f.call(ve) === f.call(document.all) && (ce = function(oe) {
                    if ((ie || !oe) && (typeof oe > "u" || "object" == typeof oe)) try {
                        var Me = f.call(oe);
                        return ("[object HTMLAllCollection]" === Me || "[object HTML document.all class]" === Me || "[object HTMLCollection]" === Me || "[object Object]" === Me) && null == oe("")
                    } catch {}
                    return !1
                })
            }
            y.exports = a ? function(oe) {
                if (ce(oe)) return !0;
                if (!oe || "function" != typeof oe && "object" != typeof oe) return !1;
                try {
                    a(oe, null, t)
                } catch (Me) {
                    if (Me !== r) return !1
                }
                return !O(oe) && p(oe)
            } : function(oe) {
                if (ce(oe)) return !0;
                if (!oe || "function" != typeof oe && "object" != typeof oe) return !1;
                if (J) return p(oe);
                if (O(oe)) return !1;
                var Me = f.call(oe);
                return !("[object Function]" !== Me && "[object GeneratorFunction]" !== Me && !/^\[object HTML/.test(Me)) && p(oe)
            }
        },
        2374: (y, T, a) => {
            var t = Date.prototype.getDay,
                d = Object.prototype.toString,
                p = a(6259)();
            y.exports = function(v) {
                return "object" == typeof v && null !== v && (p ? function(v) {
                    try {
                        return t.call(v), !0
                    } catch {
                        return !1
                    }
                }(v) : "[object Date]" === d.call(v))
            }
        },
        2342: (y, T, a) => {
            var d, O, p, f, t = a(5834),
                r = a(6259)();
            if (r) {
                d = t("Object.prototype.hasOwnProperty"), O = t("RegExp.prototype.exec"), p = {};
                var v = function() {
                    throw p
                };
                f = {
                    toString: v,
                    valueOf: v
                }, "symbol" == typeof Symbol.toPrimitive && (f[Symbol.toPrimitive] = v)
            }
            var A = t("Object.prototype.toString"),
                M = Object.getOwnPropertyDescriptor;
            y.exports = r ? function(V) {
                if (!V || "object" != typeof V) return !1;
                var J = M(V, "lastIndex");
                if (!J || !d(J, "value")) return !1;
                try {
                    O(V, f)
                } catch (ce) {
                    return ce === p
                }
            } : function(V) {
                return !(!V || "object" != typeof V && "function" != typeof V) && "[object RegExp]" === A(V)
            }
        },
        4322: (y, T, a) => {
            var t = String.prototype.valueOf,
                d = Object.prototype.toString,
                p = a(6259)();
            y.exports = function(v) {
                return "string" == typeof v || "object" == typeof v && (p ? function(v) {
                    try {
                        return t.call(v), !0
                    } catch {
                        return !1
                    }
                }(v) : "[object String]" === d.call(v))
            }
        },
        9227: (y, T, a) => {
            var t = Object.prototype.toString;
            if (a(2969)()) {
                var d = Symbol.prototype.toString,
                    O = /^Symbol\(.*\)$/;
                y.exports = function(v) {
                    if ("symbol" == typeof v) return !0;
                    if ("[object Symbol]" !== t.call(v)) return !1;
                    try {
                        return function(v) {
                            return "symbol" == typeof v.valueOf() && O.test(d.call(v))
                        }(v)
                    } catch {
                        return !1
                    }
                }
            } else y.exports = function(v) {
                return !1
            }
        },
        1520: (module, exports, __webpack_require__) => {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            (function() {
                "use strict";
                var ERROR = "input is invalid type",
                    WINDOW = "object" == typeof window,
                    root = WINDOW ? window : {};
                root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
                var WEB_WORKER = !WINDOW && "object" == typeof self,
                    NODE_JS = !root.JS_SHA256_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
                NODE_JS ? root = global : WEB_WORKER && (root = self);
                var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && module.exports,
                    AMD = __webpack_require__.amdO,
                    ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u",
                    HEX_CHARS = "0123456789abcdef".split(""),
                    EXTRA = [-2147483648, 8388608, 32768, 128],
                    SHIFT = [24, 16, 8, 0],
                    K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                    OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
                    blocks = [];
                (root.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(y) {
                    return "[object Array]" === Object.prototype.toString.call(y)
                }), ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(y) {
                    return "object" == typeof y && y.buffer && y.buffer.constructor === ArrayBuffer
                });
                var createOutputMethod = function(y, T) {
                        return function(a) {
                            return new Sha256(T, !0).update(a)[y]()
                        }
                    },
                    createMethod = function(y) {
                        var T = createOutputMethod("hex", y);
                        NODE_JS && (T = nodeWrap(T, y)), T.create = function() {
                            return new Sha256(y)
                        }, T.update = function(r) {
                            return T.create().update(r)
                        };
                        for (var a = 0; a < OUTPUT_TYPES.length; ++a) {
                            var t = OUTPUT_TYPES[a];
                            T[t] = createOutputMethod(t, y)
                        }
                        return T
                    },
                    nodeWrap = function(method, is224) {
                        var crypto = eval("require('crypto')"),
                            Buffer = eval("require('buffer').Buffer"),
                            algorithm = is224 ? "sha224" : "sha256",
                            nodeMethod = function(y) {
                                if ("string" == typeof y) return crypto.createHash(algorithm).update(y, "utf8").digest("hex");
                                if (null == y) throw new Error(ERROR);
                                return y.constructor === ArrayBuffer && (y = new Uint8Array(y)), Array.isArray(y) || ArrayBuffer.isView(y) || y.constructor === Buffer ? crypto.createHash(algorithm).update(new Buffer(y)).digest("hex") : method(y)
                            };
                        return nodeMethod
                    },
                    createHmacOutputMethod = function(y, T) {
                        return function(a, t) {
                            return new HmacSha256(a, T, !0).update(t)[y]()
                        }
                    },
                    createHmacMethod = function(y) {
                        var T = createHmacOutputMethod("hex", y);
                        T.create = function(r) {
                            return new HmacSha256(r, y)
                        }, T.update = function(r, d) {
                            return T.create(r).update(d)
                        };
                        for (var a = 0; a < OUTPUT_TYPES.length; ++a) {
                            var t = OUTPUT_TYPES[a];
                            T[t] = createHmacOutputMethod(t, y)
                        }
                        return T
                    };

                function Sha256(y, T) {
                    T ? (blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], y ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = y
                }

                function HmacSha256(y, T, a) {
                    var t, r = typeof y;
                    if ("string" === r) {
                        var f, d = [],
                            O = y.length,
                            p = 0;
                        for (t = 0; t < O; ++t)(f = y.charCodeAt(t)) < 128 ? d[p++] = f : f < 2048 ? (d[p++] = 192 | f >> 6, d[p++] = 128 | 63 & f) : f < 55296 || f >= 57344 ? (d[p++] = 224 | f >> 12, d[p++] = 128 | f >> 6 & 63, d[p++] = 128 | 63 & f) : (f = 65536 + ((1023 & f) << 10 | 1023 & y.charCodeAt(++t)), d[p++] = 240 | f >> 18, d[p++] = 128 | f >> 12 & 63, d[p++] = 128 | f >> 6 & 63, d[p++] = 128 | 63 & f);
                        y = d
                    } else {
                        if ("object" !== r) throw new Error(ERROR);
                        if (null === y) throw new Error(ERROR);
                        if (ARRAY_BUFFER && y.constructor === ArrayBuffer) y = new Uint8Array(y);
                        else if (!(Array.isArray(y) || ARRAY_BUFFER && ArrayBuffer.isView(y))) throw new Error(ERROR)
                    }
                    y.length > 64 && (y = new Sha256(T, !0).update(y).array());
                    var v = [],
                        A = [];
                    for (t = 0; t < 64; ++t) {
                        var M = y[t] || 0;
                        v[t] = 92 ^ M, A[t] = 54 ^ M
                    }
                    Sha256.call(this, T, a), this.update(A), this.oKeyPad = v, this.inner = !0, this.sharedMemory = a
                }
                Sha256.prototype.update = function(y) {
                    if (!this.finalized) {
                        var T, a = typeof y;
                        if ("string" !== a) {
                            if ("object" !== a) throw new Error(ERROR);
                            if (null === y) throw new Error(ERROR);
                            if (ARRAY_BUFFER && y.constructor === ArrayBuffer) y = new Uint8Array(y);
                            else if (!(Array.isArray(y) || ARRAY_BUFFER && ArrayBuffer.isView(y))) throw new Error(ERROR);
                            T = !0
                        }
                        for (var t, d, r = 0, O = y.length, p = this.blocks; r < O;) {
                            if (this.hashed && (this.hashed = !1, p[0] = this.block, p[16] = p[1] = p[2] = p[3] = p[4] = p[5] = p[6] = p[7] = p[8] = p[9] = p[10] = p[11] = p[12] = p[13] = p[14] = p[15] = 0), T)
                                for (d = this.start; r < O && d < 64; ++r) p[d >> 2] |= y[r] << SHIFT[3 & d++];
                            else
                                for (d = this.start; r < O && d < 64; ++r)(t = y.charCodeAt(r)) < 128 ? p[d >> 2] |= t << SHIFT[3 & d++] : t < 2048 ? (p[d >> 2] |= (192 | t >> 6) << SHIFT[3 & d++], p[d >> 2] |= (128 | 63 & t) << SHIFT[3 & d++]) : t < 55296 || t >= 57344 ? (p[d >> 2] |= (224 | t >> 12) << SHIFT[3 & d++], p[d >> 2] |= (128 | t >> 6 & 63) << SHIFT[3 & d++], p[d >> 2] |= (128 | 63 & t) << SHIFT[3 & d++]) : (t = 65536 + ((1023 & t) << 10 | 1023 & y.charCodeAt(++r)), p[d >> 2] |= (240 | t >> 18) << SHIFT[3 & d++], p[d >> 2] |= (128 | t >> 12 & 63) << SHIFT[3 & d++], p[d >> 2] |= (128 | t >> 6 & 63) << SHIFT[3 & d++], p[d >> 2] |= (128 | 63 & t) << SHIFT[3 & d++]);
                            this.lastByteIndex = d, this.bytes += d - this.start, d >= 64 ? (this.block = p[16], this.start = d - 64, this.hash(), this.hashed = !0) : this.start = d
                        }
                        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                    }
                }, Sha256.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var y = this.blocks,
                            T = this.lastByteIndex;
                        y[16] = this.block, y[T >> 2] |= EXTRA[3 & T], this.block = y[16], T >= 56 && (this.hashed || this.hash(), y[0] = this.block, y[16] = y[1] = y[2] = y[3] = y[4] = y[5] = y[6] = y[7] = y[8] = y[9] = y[10] = y[11] = y[12] = y[13] = y[14] = y[15] = 0), y[14] = this.hBytes << 3 | this.bytes >>> 29, y[15] = this.bytes << 3, this.hash()
                    }
                }, Sha256.prototype.hash = function() {
                    var v, z, ie, ce, ve, Oe, y = this.h0,
                        T = this.h1,
                        a = this.h2,
                        t = this.h3,
                        r = this.h4,
                        d = this.h5,
                        O = this.h6,
                        p = this.h7,
                        f = this.blocks;
                    for (v = 16; v < 64; ++v) f[v] = f[v - 16] + (((z = f[v - 15]) >>> 7 | z << 25) ^ (z >>> 18 | z << 14) ^ z >>> 3) + f[v - 7] + (((z = f[v - 2]) >>> 17 | z << 15) ^ (z >>> 19 | z << 13) ^ z >>> 10) << 0;
                    for (Oe = T & a, v = 0; v < 64; v += 4) this.first ? (this.is224 ? (ie = 300032, p = (z = f[0] - 1413257819) - 150054599 << 0, t = z + 24177077 << 0) : (ie = 704751109, p = (z = f[0] - 210244248) - 1521486534 << 0, t = z + 143694565 << 0), this.first = !1) : (p = t + (z = p + ((r >>> 6 | r << 26) ^ (r >>> 11 | r << 21) ^ (r >>> 25 | r << 7)) + (r & d ^ ~r & O) + K[v] + f[v]) << 0, t = z + (((y >>> 2 | y << 30) ^ (y >>> 13 | y << 19) ^ (y >>> 22 | y << 10)) + ((ie = y & T) ^ y & a ^ Oe)) << 0), O = a + (z = O + ((p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) + (p & r ^ ~p & d) + K[v + 1] + f[v + 1]) << 0, a = z + (((t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10)) + ((ce = t & y) ^ t & T ^ ie)) << 0, d = T + (z = d + ((O >>> 6 | O << 26) ^ (O >>> 11 | O << 21) ^ (O >>> 25 | O << 7)) + (O & p ^ ~O & r) + K[v + 2] + f[v + 2]) << 0, T = z + (((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + ((ve = a & t) ^ a & y ^ ce)) << 0, r = y + (z = r + ((d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7)) + (d & O ^ ~d & p) + K[v + 3] + f[v + 3]) << 0, y = z + (((T >>> 2 | T << 30) ^ (T >>> 13 | T << 19) ^ (T >>> 22 | T << 10)) + ((Oe = T & a) ^ T & t ^ ve)) << 0;
                    this.h0 = this.h0 + y << 0, this.h1 = this.h1 + T << 0, this.h2 = this.h2 + a << 0, this.h3 = this.h3 + t << 0, this.h4 = this.h4 + r << 0, this.h5 = this.h5 + d << 0, this.h6 = this.h6 + O << 0, this.h7 = this.h7 + p << 0
                }, Sha256.prototype.hex = function() {
                    this.finalize();
                    var y = this.h0,
                        T = this.h1,
                        a = this.h2,
                        t = this.h3,
                        r = this.h4,
                        d = this.h5,
                        O = this.h6,
                        p = this.h7,
                        f = HEX_CHARS[y >> 28 & 15] + HEX_CHARS[y >> 24 & 15] + HEX_CHARS[y >> 20 & 15] + HEX_CHARS[y >> 16 & 15] + HEX_CHARS[y >> 12 & 15] + HEX_CHARS[y >> 8 & 15] + HEX_CHARS[y >> 4 & 15] + HEX_CHARS[15 & y] + HEX_CHARS[T >> 28 & 15] + HEX_CHARS[T >> 24 & 15] + HEX_CHARS[T >> 20 & 15] + HEX_CHARS[T >> 16 & 15] + HEX_CHARS[T >> 12 & 15] + HEX_CHARS[T >> 8 & 15] + HEX_CHARS[T >> 4 & 15] + HEX_CHARS[15 & T] + HEX_CHARS[a >> 28 & 15] + HEX_CHARS[a >> 24 & 15] + HEX_CHARS[a >> 20 & 15] + HEX_CHARS[a >> 16 & 15] + HEX_CHARS[a >> 12 & 15] + HEX_CHARS[a >> 8 & 15] + HEX_CHARS[a >> 4 & 15] + HEX_CHARS[15 & a] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[d >> 28 & 15] + HEX_CHARS[d >> 24 & 15] + HEX_CHARS[d >> 20 & 15] + HEX_CHARS[d >> 16 & 15] + HEX_CHARS[d >> 12 & 15] + HEX_CHARS[d >> 8 & 15] + HEX_CHARS[d >> 4 & 15] + HEX_CHARS[15 & d] + HEX_CHARS[O >> 28 & 15] + HEX_CHARS[O >> 24 & 15] + HEX_CHARS[O >> 20 & 15] + HEX_CHARS[O >> 16 & 15] + HEX_CHARS[O >> 12 & 15] + HEX_CHARS[O >> 8 & 15] + HEX_CHARS[O >> 4 & 15] + HEX_CHARS[15 & O];
                    return this.is224 || (f += HEX_CHARS[p >> 28 & 15] + HEX_CHARS[p >> 24 & 15] + HEX_CHARS[p >> 20 & 15] + HEX_CHARS[p >> 16 & 15] + HEX_CHARS[p >> 12 & 15] + HEX_CHARS[p >> 8 & 15] + HEX_CHARS[p >> 4 & 15] + HEX_CHARS[15 & p]), f
                }, Sha256.prototype.toString = Sha256.prototype.hex, Sha256.prototype.digest = function() {
                    this.finalize();
                    var y = this.h0,
                        T = this.h1,
                        a = this.h2,
                        t = this.h3,
                        r = this.h4,
                        d = this.h5,
                        O = this.h6,
                        p = this.h7,
                        f = [y >> 24 & 255, y >> 16 & 255, y >> 8 & 255, 255 & y, T >> 24 & 255, T >> 16 & 255, T >> 8 & 255, 255 & T, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, 255 & d, O >> 24 & 255, O >> 16 & 255, O >> 8 & 255, 255 & O];
                    return this.is224 || f.push(p >> 24 & 255, p >> 16 & 255, p >> 8 & 255, 255 & p), f
                }, Sha256.prototype.array = Sha256.prototype.digest, Sha256.prototype.arrayBuffer = function() {
                    this.finalize();
                    var y = new ArrayBuffer(this.is224 ? 28 : 32),
                        T = new DataView(y);
                    return T.setUint32(0, this.h0), T.setUint32(4, this.h1), T.setUint32(8, this.h2), T.setUint32(12, this.h3), T.setUint32(16, this.h4), T.setUint32(20, this.h5), T.setUint32(24, this.h6), this.is224 || T.setUint32(28, this.h7), y
                }, HmacSha256.prototype = new Sha256, HmacSha256.prototype.finalize = function() {
                    if (Sha256.prototype.finalize.call(this), this.inner) {
                        this.inner = !1;
                        var y = this.array();
                        Sha256.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(y), Sha256.prototype.finalize.call(this)
                    }
                };
                var exports = createMethod();
                exports.sha256 = exports, exports.sha224 = createMethod(!0), exports.sha256.hmac = createHmacMethod(), exports.sha224.hmac = createHmacMethod(!0), COMMON_JS ? module.exports = exports : (root.sha256 = exports.sha256, root.sha224 = exports.sha224, AMD && (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return exports
                }.call(exports, __webpack_require__, exports, module), void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
            })()
        },
        172: (y, T, a) => {
            var t, r;
            window, y.exports = (t = a(1520), r = a(5343), function d(O) {
                if (!(this instanceof d)) return new d(O);
                for (var f, A, p = this, v = [], M = {
                        enable: !0,
                        callbackList: [],
                        interval: 5
                    }, I = document.getElementsByTagName("script"), z = 0; z < I.length; z++)(-1 !== I[z].src.indexOf("keycloak.js") || -1 !== I[z].src.indexOf("keycloak.min.js")) && -1 !== I[z].src.indexOf("version=") && (p.iframeVersion = I[z].src.substring(I[z].src.indexOf("version=") + 8).split("&")[0]);
                var V = !0,
                    J = Je(console.info),
                    ie = Je(console.warn);

                function Oe(b, q) {
                    for (var E = function ce(b) {
                            var q = null,
                                E = window.crypto || window.msCrypto;
                            if (E && E.getRandomValues && window.Uint8Array) return q = new Uint8Array(b), E.getRandomValues(q), q;
                            q = new Array(b);
                            for (var B = 0; B < q.length; B++) q[B] = Math.floor(256 * Math.random());
                            return q
                        }(b), B = new Array(b), H = 0; H < b; H++) B[H] = q.charCodeAt(E[H] % q.length);
                    return String.fromCharCode.apply(null, B)
                }

                function Me() {
                    if (typeof p.authServerUrl < "u") return "/" == p.authServerUrl.charAt(p.authServerUrl.length - 1) ? p.authServerUrl + "realms/" + encodeURIComponent(p.realm) : p.authServerUrl + "/realms/" + encodeURIComponent(p.realm)
                }

                function pe(b, q) {
                    var E = b.code,
                        B = b.error,
                        H = b.prompt,
                        Q = (new Date).getTime();
                    if (B)
                        if ("none" != H) {
                            var me = {
                                error: B,
                                error_description: b.error_description
                            };
                            p.onAuthError && p.onAuthError(me), q && q.setError(me)
                        } else q && q.setSuccess();
                    else if ("standard" != p.flow && (b.access_token || b.id_token) && je(b.access_token, null, b.id_token, !0), "implicit" != p.flow && E) {
                        var _e = "code=" + E + "&grant_type=authorization_code",
                            Le = p.endpoints.token(),
                            ke = new XMLHttpRequest;
                        ke.open("POST", Le, !0), ke.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), _e += "&client_id=" + encodeURIComponent(p.clientId), _e += "&redirect_uri=" + b.redirectUri, b.pkceCodeVerifier && (_e += "&code_verifier=" + b.pkceCodeVerifier), ke.withCredentials = !0, ke.onreadystatechange = function() {
                            if (4 == ke.readyState)
                                if (200 == ke.status) {
                                    var ct = JSON.parse(ke.responseText);
                                    je(ct.access_token, ct.refresh_token, ct.id_token, "standard" === p.flow), rt()
                                } else p.onAuthError && p.onAuthError(), q && q.setError()
                        }, ke.send(_e)
                    }

                    function je(ct, xt, Ve, ue) {
                        N(ct, xt, Ve, Q = (Q + (new Date).getTime()) / 2), V && (p.tokenParsed && p.tokenParsed.nonce != b.storedNonce || p.refreshTokenParsed && p.refreshTokenParsed.nonce != b.storedNonce || p.idTokenParsed && p.idTokenParsed.nonce != b.storedNonce) ? (J("[KEYCLOAK] Invalid nonce, clearing token"), p.clearToken(), q && q.setError()) : ue && (p.onAuthSuccess && p.onAuthSuccess(), q && q.setSuccess())
                    }
                }

                function _(b) {
                    return 0 == b.status && b.responseText && b.responseURL.startsWith("file:")
                }

                function N(b, q, E, B) {
                    if (p.tokenTimeoutHandle && (clearTimeout(p.tokenTimeoutHandle), p.tokenTimeoutHandle = null), q ? (p.refreshToken = q, p.refreshTokenParsed = Y(q)) : (delete p.refreshToken, delete p.refreshTokenParsed), E ? (p.idToken = E, p.idTokenParsed = Y(E)) : (delete p.idToken, delete p.idTokenParsed), b) {
                        if (p.token = b, p.tokenParsed = Y(b), p.sessionId = p.tokenParsed.session_state, p.authenticated = !0, p.subject = p.tokenParsed.sub, p.realmAccess = p.tokenParsed.realm_access, p.resourceAccess = p.tokenParsed.resource_access, B && (p.timeSkew = Math.floor(B / 1e3) - p.tokenParsed.iat), null != p.timeSkew && (J("[KEYCLOAK] Estimated time difference between browser and server is " + p.timeSkew + " seconds"), p.onTokenExpired)) {
                            var H = 1e3 * (p.tokenParsed.exp - (new Date).getTime() / 1e3 + p.timeSkew);
                            J("[KEYCLOAK] Token expires in " + Math.round(H / 1e3) + " s"), H <= 0 ? p.onTokenExpired() : p.tokenTimeoutHandle = setTimeout(p.onTokenExpired, H)
                        }
                    } else delete p.token, delete p.tokenParsed, delete p.subject, delete p.realmAccess, delete p.resourceAccess, p.authenticated = !1
                }

                function Y(b) {
                    switch ((b = (b = (b = b.split(".")[1]).replace("/-/g", "+")).replace("/_/g", "/")).length % 4) {
                        case 0:
                            break;
                        case 2:
                            b += "==";
                            break;
                        case 3:
                            b += "=";
                            break;
                        default:
                            throw "Invalid token"
                    }
                    return b = (b = (b + "===").slice(0, b.length + b.length % 4)).replace(/-/g, "+").replace(/_/g, "/"), b = decodeURIComponent(escape(atob(b))), JSON.parse(b)
                }

                function te() {
                    var b = "0123456789abcdef",
                        q = Oe(36, b).split("");
                    return q[14] = "4", q[19] = b.substr(3 & q[19] | 8, 1), q[8] = q[13] = q[18] = q[23] = "-", q.join("")
                }

                function Pe(b) {
                    var q = function Z(b) {
                        var q;
                        switch (p.flow) {
                            case "standard":
                                q = ["code", "state", "session_state"];
                                break;
                            case "implicit":
                                q = ["access_token", "token_type", "id_token", "state", "session_state", "expires_in"];
                                break;
                            case "hybrid":
                                q = ["access_token", "id_token", "code", "state", "session_state"]
                        }
                        q.push("error"), q.push("error_description"), q.push("error_uri");
                        var H, Q, E = b.indexOf("?"),
                            B = b.indexOf("#");
                        if ("query" === p.responseMode && -1 !== E ? (H = b.substring(0, E), "" !== (Q = ge(b.substring(E + 1, -1 !== B ? B : b.length), q)).paramsString && (H += "?" + Q.paramsString), -1 !== B && (H += b.substring(B))) : "fragment" === p.responseMode && -1 !== B && (H = b.substring(0, B), "" !== (Q = ge(b.substring(B + 1), q)).paramsString && (H += "#" + Q.paramsString)), Q && Q.oauthParams)
                            if ("standard" === p.flow || "hybrid" === p.flow) {
                                if ((Q.oauthParams.code || Q.oauthParams.error) && Q.oauthParams.state) return Q.oauthParams.newUrl = H, Q.oauthParams
                            } else if ("implicit" === p.flow && (Q.oauthParams.access_token || Q.oauthParams.error) && Q.oauthParams.state) return Q.oauthParams.newUrl = H, Q.oauthParams
                    }(b);
                    if (q) {
                        var E = A.get(q.state);
                        return E && (q.valid = !0, q.redirectUri = E.redirectUri, q.storedNonce = E.nonce, q.prompt = E.prompt, q.pkceCodeVerifier = E.pkceCodeVerifier), q
                    }
                }

                function ge(b, q) {
                    for (var E = b.split("&"), B = {
                            paramsString: "",
                            oauthParams: {}
                        }, H = 0; H < E.length; H++) {
                        var Q = E[H].split("="); - 1 !== q.indexOf(Q[0]) ? B.oauthParams[Q[0]] = Q[1] : ("" !== B.paramsString && (B.paramsString += "&"), B.paramsString += E[H])
                    }
                    return B
                }

                function be(b) {
                    return !b && p.useNativePromise ? function Ee() {
                        var b = {
                            setSuccess: function(q) {
                                b.resolve(q)
                            },
                            setError: function(q) {
                                b.reject(q)
                            }
                        };
                        return b.promise = new Promise(function(q, E) {
                            b.resolve = q, b.reject = E
                        }), b
                    }() : function He() {
                        var b = {
                            setSuccess: function(q) {
                                b.success = !0, b.result = q, b.successCallback && b.successCallback(q)
                            },
                            setError: function(q) {
                                b.error = !0, b.result = q, b.errorCallback && b.errorCallback(q)
                            },
                            promise: {
                                success: function(q) {
                                    return b.success ? q(b.result) : b.error || (b.successCallback = q), b.promise
                                },
                                error: function(q) {
                                    return b.error ? q(b.result) : b.success || (b.errorCallback = q), b.promise
                                }
                            }
                        };
                        return b
                    }()
                }

                function et() {
                    var b = be(!0);
                    if (!M.enable || M.iframe) return b.setSuccess(), b.promise;
                    var q = document.createElement("iframe");
                    M.iframe = q, q.onload = function() {
                        var H = p.endpoints.authorize();
                        M.iframeOrigin = "/" === H.charAt(0) ? function Ne() {
                            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
                        }() : H.substring(0, H.indexOf("/", 8)), b.setSuccess()
                    };
                    var E = p.endpoints.checkSessionIframe();
                    return q.setAttribute("src", E), q.setAttribute("title", "keycloak-session-iframe"), q.style.display = "none", document.body.appendChild(q), window.addEventListener("message", function(H) {
                        if (H.origin === M.iframeOrigin && M.iframe.contentWindow === H.source && ("unchanged" == H.data || "changed" == H.data || "error" == H.data)) {
                            "unchanged" != H.data && p.clearToken();
                            for (var Q = M.callbackList.splice(0, M.callbackList.length), me = Q.length - 1; me >= 0; --me) {
                                var _e = Q[me];
                                "error" == H.data ? _e.setError() : _e.setSuccess("unchanged" == H.data)
                            }
                        }
                    }, !1), b.promise
                }

                function rt() {
                    M.enable && p.token && setTimeout(function() {
                        nt().success(function(b) {
                            b && rt()
                        })
                    }, 1e3 * M.interval)
                }

                function nt() {
                    var b = be(!0);
                    if (M.iframe && M.iframeOrigin) {
                        var q = p.clientId + " " + (p.sessionId ? p.sessionId : "");
                        M.callbackList.push(b), 1 == M.callbackList.length && M.iframe.contentWindow.postMessage(q, M.iframeOrigin)
                    } else b.setSuccess();
                    return b.promise
                }

                function it(b) {
                    if (!b || "default" == b) return {
                        login: function(Q) {
                            return window.location.replace(p.createLoginUrl(Q)), be(!1).promise
                        },
                        logout: function(Q) {
                            return window.location.replace(p.createLogoutUrl(Q)), be(!1).promise
                        },
                        register: function(Q) {
                            return window.location.replace(p.createRegisterUrl(Q)), be(!1).promise
                        },
                        accountManagement: function() {
                            var Q = p.createAccountUrl();
                            if (!(typeof Q < "u")) throw "Not supported by the OIDC server";
                            return window.location.href = Q, be(!1).promise
                        },
                        redirectUri: function(Q, me) {
                            return 1 == arguments.length && (me = !0), Q && Q.redirectUri ? Q.redirectUri : p.redirectUri ? p.redirectUri : location.href
                        }
                    };
                    if ("cordova" == b) {
                        M.enable = !1;
                        var q = function(Q, me, _e) {
                                return window.cordova && window.cordova.InAppBrowser ? window.cordova.InAppBrowser.open(Q, me, _e) : window.open(Q, me, _e)
                            },
                            H = function(Q) {
                                var me = function(Q) {
                                    return Q && Q.cordovaOptions ? Object.keys(Q.cordovaOptions).reduce(function(me, _e) {
                                        return me[_e] = Q.cordovaOptions[_e], me
                                    }, {}) : {}
                                }(Q);
                                return me.location = "no", Q && "none" == Q.prompt && (me.hidden = "yes"),
                                    function(Q) {
                                        return Object.keys(Q).reduce(function(me, _e) {
                                            return me.push(_e + "=" + Q[_e]), me
                                        }, []).join(",")
                                    }(me)
                            };
                        return {
                            login: function(Q) {
                                var me = be(!1),
                                    _e = H(Q),
                                    Le = p.createLoginUrl(Q),
                                    ke = q(Le, "_blank", _e),
                                    je = !1,
                                    ct = !1,
                                    xt = function() {
                                        ct = !0, ke.close()
                                    };
                                return ke.addEventListener("loadstart", function(Ve) {
                                    0 == Ve.url.indexOf("http://localhost") && (pe(Pe(Ve.url), me), xt(), je = !0)
                                }), ke.addEventListener("loaderror", function(Ve) {
                                    je || (0 == Ve.url.indexOf("http://localhost") ? (pe(Pe(Ve.url), me), xt(), je = !0) : (me.setError(), xt()))
                                }), ke.addEventListener("exit", function(Ve) {
                                    ct || me.setError({
                                        reason: "closed_by_user"
                                    })
                                }), me.promise
                            },
                            logout: function(Q) {
                                var ke, me = be(!1),
                                    _e = p.createLogoutUrl(Q),
                                    Le = q(_e, "_blank", "location=no,hidden=yes");
                                return Le.addEventListener("loadstart", function(je) {
                                    0 == je.url.indexOf("http://localhost") && Le.close()
                                }), Le.addEventListener("loaderror", function(je) {
                                    0 == je.url.indexOf("http://localhost") || (ke = !0), Le.close()
                                }), Le.addEventListener("exit", function(je) {
                                    ke ? me.setError() : (p.clearToken(), me.setSuccess())
                                }), me.promise
                            },
                            register: function(Q) {
                                var me = be(!1),
                                    _e = p.createRegisterUrl(),
                                    Le = H(Q),
                                    ke = q(_e, "_blank", Le);
                                return ke.addEventListener("loadstart", function(je) {
                                    0 == je.url.indexOf("http://localhost") && (ke.close(), pe(Pe(je.url), me))
                                }), me.promise
                            },
                            accountManagement: function() {
                                var Q = p.createAccountUrl();
                                if (!(typeof Q < "u")) throw "Not supported by the OIDC server";
                                var me = q(Q, "_blank", "location=no");
                                me.addEventListener("loadstart", function(_e) {
                                    0 == _e.url.indexOf("http://localhost") && me.close()
                                })
                            },
                            redirectUri: function(Q) {
                                return "http://localhost"
                            }
                        }
                    }
                    if ("cordova-native" == b) return M.enable = !1, {
                        login: function(Q) {
                            var me = be(!1),
                                _e = p.createLoginUrl(Q);
                            return universalLinks.subscribe("keycloak", function(Le) {
                                universalLinks.unsubscribe("keycloak"), window.cordova.plugins.browsertab.close(), pe(Pe(Le.url), me)
                            }), window.cordova.plugins.browsertab.openUrl(_e), me.promise
                        },
                        logout: function(Q) {
                            var me = be(!1),
                                _e = p.createLogoutUrl(Q);
                            return universalLinks.subscribe("keycloak", function(Le) {
                                universalLinks.unsubscribe("keycloak"), window.cordova.plugins.browsertab.close(), p.clearToken(), me.setSuccess()
                            }), window.cordova.plugins.browsertab.openUrl(_e), me.promise
                        },
                        register: function(Q) {
                            var me = be(!1),
                                _e = p.createRegisterUrl(Q);
                            return universalLinks.subscribe("keycloak", function(Le) {
                                universalLinks.unsubscribe("keycloak"), window.cordova.plugins.browsertab.close(), pe(Pe(Le.url), me)
                            }), window.cordova.plugins.browsertab.openUrl(_e), me.promise
                        },
                        accountManagement: function() {
                            var Q = p.createAccountUrl();
                            if (!(typeof Q < "u")) throw "Not supported by the OIDC server";
                            window.cordova.plugins.browsertab.openUrl(Q)
                        },
                        redirectUri: function(Q) {
                            return Q && Q.redirectUri ? Q.redirectUri : p.redirectUri ? p.redirectUri : "http://localhost"
                        }
                    };
                    throw "invalid adapter type: " + b
                }
                p.init = function(b) {
                    if (p.authenticated = !1, A = function Pt() {
                            try {
                                return new at
                            } catch {}
                            return new gt
                        }(), f = b && ["default", "cordova", "cordova-native"].indexOf(b.adapter) > -1 ? it(b.adapter) : b && "object" == typeof b.adapter ? b.adapter : window.Cordova || window.cordova ? it("cordova") : it(), b) {
                        if (typeof b.useNonce < "u" && (V = b.useNonce), typeof b.checkLoginIframe < "u" && (M.enable = b.checkLoginIframe), b.checkLoginIframeInterval && (M.interval = b.checkLoginIframeInterval), "native" === b.promiseType ? p.useNativePromise = !0 : (console.warn("[KEYCLOAK] Using legacy promises is deprecated and will be removed in future versions. You can opt in to using native promises by setting `promiseType` to 'native' when initializing Keycloak."), p.useNativePromise = !1), "login-required" === b.onLoad && (p.loginRequired = !0), b.responseMode) {
                            if ("query" !== b.responseMode && "fragment" !== b.responseMode) throw "Invalid value for responseMode";
                            p.responseMode = b.responseMode
                        }
                        if (b.flow) {
                            switch (b.flow) {
                                case "standard":
                                    p.responseType = "code";
                                    break;
                                case "implicit":
                                    p.responseType = "id_token token";
                                    break;
                                case "hybrid":
                                    p.responseType = "code id_token token";
                                    break;
                                default:
                                    throw "Invalid value for flow"
                            }
                            p.flow = b.flow
                        }
                        if (null != b.timeSkew && (p.timeSkew = b.timeSkew), b.redirectUri && (p.redirectUri = b.redirectUri), b.silentCheckSsoRedirectUri && (p.silentCheckSsoRedirectUri = b.silentCheckSsoRedirectUri), b.pkceMethod) {
                            if ("S256" !== b.pkceMethod) throw "Invalid value for pkceMethod";
                            p.pkceMethod = b.pkceMethod
                        }
                        p.enableLogging = "boolean" == typeof b.enableLogging && b.enableLogging
                    }
                    p.responseMode || (p.responseMode = "fragment"), p.responseType || (p.responseType = "code", p.flow = "standard");
                    var E = be(!1),
                        B = be(!0);
                    B.promise.success(function() {
                        p.onReady && p.onReady(p.authenticated), E.setSuccess(p.authenticated)
                    }).error(function(_e) {
                        E.setError(_e)
                    });
                    var H = function k(b) {
                        var E, q = be(!0);

                        function B(ke) {
                            p.endpoints = ke ? {
                                authorize: function() {
                                    return ke.authorization_endpoint
                                },
                                token: function() {
                                    return ke.token_endpoint
                                },
                                logout: function() {
                                    if (!ke.end_session_endpoint) throw "Not supported by the OIDC server";
                                    return ke.end_session_endpoint
                                },
                                checkSessionIframe: function() {
                                    if (!ke.check_session_iframe) throw "Not supported by the OIDC server";
                                    return ke.check_session_iframe
                                },
                                register: function() {
                                    throw 'Redirection to "Register user" page not supported in standard OIDC mode'
                                },
                                userinfo: function() {
                                    if (!ke.userinfo_endpoint) throw "Not supported by the OIDC server";
                                    return ke.userinfo_endpoint
                                }
                            } : {
                                authorize: function() {
                                    return Me() + "/protocol/openid-connect/auth"
                                },
                                token: function() {
                                    return Me() + "/protocol/openid-connect/token"
                                },
                                logout: function() {
                                    return Me() + "/protocol/openid-connect/logout"
                                },
                                checkSessionIframe: function() {
                                    var je = Me() + "/protocol/openid-connect/login-status-iframe.html";
                                    return p.iframeVersion && (je = je + "?version=" + p.iframeVersion), je
                                },
                                register: function() {
                                    return Me() + "/protocol/openid-connect/registrations"
                                },
                                userinfo: function() {
                                    return Me() + "/protocol/openid-connect/userinfo"
                                }
                            }
                        }
                        if (O ? "string" == typeof O && (E = O) : E = "keycloak.json", E)(H = new XMLHttpRequest).open("GET", E, !0), H.setRequestHeader("Accept", "application/json"), H.onreadystatechange = function() {
                            if (4 == H.readyState)
                                if (200 == H.status || _(H)) {
                                    var ke = JSON.parse(H.responseText);
                                    p.authServerUrl = ke["auth-server-url"], p.realm = ke.realm, p.clientId = ke.resource, B(null), q.setSuccess()
                                } else q.setError()
                        }, H.send();
                        else {
                            if (!O.clientId) throw "clientId missing";
                            p.clientId = O.clientId;
                            var Q = O.oidcProvider;
                            if (Q)
                                if ("string" == typeof Q) {
                                    var Le, H;
                                    Le = "/" == Q.charAt(Q.length - 1) ? Q + ".well-known/openid-configuration" : Q + "/.well-known/openid-configuration", (H = new XMLHttpRequest).open("GET", Le, !0), H.setRequestHeader("Accept", "application/json"), H.onreadystatechange = function() {
                                        4 == H.readyState && (200 == H.status || _(H) ? (B(JSON.parse(H.responseText)), q.setSuccess()) : q.setError())
                                    }, H.send()
                                } else B(Q), q.setSuccess();
                            else {
                                if (!O.url)
                                    for (var me = document.getElementsByTagName("script"), _e = 0; _e < me.length; _e++)
                                        if (me[_e].src.match(/.*keycloak\.js/)) {
                                            O.url = me[_e].src.substr(0, me[_e].src.indexOf("/js/keycloak.js"));
                                            break
                                        }
                                if (!O.realm) throw "realm missing";
                                p.authServerUrl = O.url, p.realm = O.realm, B(null), q.setSuccess()
                            }
                        }
                        return q.promise
                    }();

                    function Q() {
                        var _e = function(je) {
                                je || (ke.prompt = "none"), p.useNativePromise ? p.login(ke).then(function() {
                                    B.setSuccess()
                                }).catch(function() {
                                    B.setError()
                                }) : p.login(ke).success(function() {
                                    B.setSuccess()
                                }).error(function() {
                                    B.setError()
                                })
                            },
                            Le = function() {
                                var je = document.createElement("iframe"),
                                    ct = p.createLoginUrl({
                                        prompt: "none",
                                        redirectUri: p.silentCheckSsoRedirectUri
                                    });
                                je.setAttribute("src", ct), je.setAttribute("title", "keycloak-silent-check-sso"), je.style.display = "none", document.body.appendChild(je);
                                var xt = function(Ve) {
                                    Ve.origin === window.location.origin && je.contentWindow === Ve.source && (pe(Pe(Ve.data), B), document.body.removeChild(je), window.removeEventListener("message", xt))
                                };
                                window.addEventListener("message", xt)
                            },
                            ke = {};
                        switch (b.onLoad) {
                            case "check-sso":
                                M.enable ? et().success(function() {
                                    nt().success(function(je) {
                                        je ? B.setSuccess() : p.silentCheckSsoRedirectUri ? Le() : _e(!1)
                                    }).error(function() {
                                        B.setError()
                                    })
                                }) : p.silentCheckSsoRedirectUri ? Le() : _e(!1);
                                break;
                            case "login-required":
                                _e(!0);
                                break;
                            default:
                                throw "Invalid value for onLoad"
                        }
                    }
                    return H.success(function me() {
                        var _e = Pe(window.location.href);
                        if (_e && window.history.replaceState(window.history.state, null, _e.newUrl), _e && _e.valid) return et().success(function() {
                            pe(_e, B)
                        }).error(function(Le) {
                            B.setError()
                        });
                        b ? b.token && b.refreshToken ? (N(b.token, b.refreshToken, b.idToken), M.enable ? et().success(function() {
                            nt().success(function(Le) {
                                Le ? (p.onAuthSuccess && p.onAuthSuccess(), B.setSuccess(), rt()) : B.setSuccess()
                            }).error(function() {
                                B.setError()
                            })
                        }) : p.updateToken(-1).success(function() {
                            p.onAuthSuccess && p.onAuthSuccess(), B.setSuccess()
                        }).error(function() {
                            p.onAuthError && p.onAuthError(), b.onLoad ? Q() : B.setError()
                        })) : b.onLoad ? Q() : B.setSuccess() : B.setSuccess()
                    }), H.error(function() {
                        E.setError()
                    }), E.promise
                }, p.login = function(b) {
                    return f.login(b)
                }, p.createLoginUrl = function(b) {
                    var Q, me, q = te(),
                        E = te(),
                        B = f.redirectUri(b),
                        H = {
                            state: q,
                            nonce: E,
                            redirectUri: encodeURIComponent(B)
                        };
                    b && b.prompt && (H.prompt = b.prompt), Q = b && "register" == b.action ? p.endpoints.register() : p.endpoints.authorize(), me = b && b.scope ? -1 != b.scope.indexOf("openid") ? b.scope : "openid " + b.scope : "openid";
                    var _e = Q + "?client_id=" + encodeURIComponent(p.clientId) + "&redirect_uri=" + encodeURIComponent(B) + "&state=" + encodeURIComponent(q) + "&response_mode=" + encodeURIComponent(p.responseMode) + "&response_type=" + encodeURIComponent(p.responseType) + "&scope=" + encodeURIComponent(me);
                    if (V && (_e = _e + "&nonce=" + encodeURIComponent(E)), b && b.prompt && (_e += "&prompt=" + encodeURIComponent(b.prompt)), b && b.maxAge && (_e += "&max_age=" + encodeURIComponent(b.maxAge)), b && b.loginHint && (_e += "&login_hint=" + encodeURIComponent(b.loginHint)), b && b.idpHint && (_e += "&kc_idp_hint=" + encodeURIComponent(b.idpHint)), b && b.locale && (_e += "&ui_locales=" + encodeURIComponent(b.locale)), b && b.kcLocale && (_e += "&kc_locale=" + encodeURIComponent(b.kcLocale)), p.pkceMethod) {
                        var Le = function ve(b) {
                            return Oe(b, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")
                        }(96);
                        H.pkceCodeVerifier = Le, _e += "&code_challenge=" + function oe(b, q) {
                            if ("S256" === b) {
                                var E = new Uint8Array(t.arrayBuffer(q));
                                return r.fromByteArray(E).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "")
                            }
                            throw "Invalid value for pkceMethod"
                        }(p.pkceMethod, Le), _e += "&code_challenge_method=" + p.pkceMethod
                    }
                    return A.add(H), _e
                }, p.logout = function(b) {
                    return f.logout(b)
                }, p.createLogoutUrl = function(b) {
                    return p.endpoints.logout() + "?redirect_uri=" + encodeURIComponent(f.redirectUri(b, !1))
                }, p.register = function(b) {
                    return f.register(b)
                }, p.createRegisterUrl = function(b) {
                    return b || (b = {}), b.action = "register", p.createLoginUrl(b)
                }, p.createAccountUrl = function(b) {
                    var q = Me(),
                        E = void 0;
                    return typeof q < "u" && (E = q + "/account?referrer=" + encodeURIComponent(p.clientId) + "&referrer_uri=" + encodeURIComponent(f.redirectUri(b))), E
                }, p.accountManagement = function() {
                    return f.accountManagement()
                }, p.hasRealmRole = function(b) {
                    var q = p.realmAccess;
                    return !!q && q.roles.indexOf(b) >= 0
                }, p.hasResourceRole = function(b, q) {
                    if (!p.resourceAccess) return !1;
                    var E = p.resourceAccess[q || p.clientId];
                    return !!E && E.roles.indexOf(b) >= 0
                }, p.loadUserProfile = function() {
                    var b = Me() + "/account",
                        q = new XMLHttpRequest;
                    q.open("GET", b, !0), q.setRequestHeader("Accept", "application/json"), q.setRequestHeader("Authorization", "bearer " + p.token);
                    var E = be(!1);
                    return q.onreadystatechange = function() {
                        4 == q.readyState && (200 == q.status ? (p.profile = JSON.parse(q.responseText), E.setSuccess(p.profile)) : E.setError())
                    }, q.send(), E.promise
                }, p.loadUserInfo = function() {
                    var b = p.endpoints.userinfo(),
                        q = new XMLHttpRequest;
                    q.open("GET", b, !0), q.setRequestHeader("Accept", "application/json"), q.setRequestHeader("Authorization", "bearer " + p.token);
                    var E = be(!1);
                    return q.onreadystatechange = function() {
                        4 == q.readyState && (200 == q.status ? (p.userInfo = JSON.parse(q.responseText), E.setSuccess(p.userInfo)) : E.setError())
                    }, q.send(), E.promise
                }, p.isTokenExpired = function(b) {
                    if (!p.tokenParsed || !p.refreshToken && "implicit" != p.flow) throw "Not authenticated";
                    if (null == p.timeSkew) return J("[KEYCLOAK] Unable to determine if token is expired as timeskew is not set"), !0;
                    var q = p.tokenParsed.exp - Math.ceil((new Date).getTime() / 1e3) + p.timeSkew;
                    if (b) {
                        if (isNaN(b)) throw "Invalid minValidity";
                        q -= b
                    }
                    return q < 0
                }, p.updateToken = function(b) {
                    var q = be(!1);
                    if (!p.refreshToken) return q.setError(), q.promise;
                    b = b || 5;
                    var E = function() {
                        var H = !1;
                        if (-1 == b ? (H = !0, J("[KEYCLOAK] Refreshing token: forced refresh")) : (!p.tokenParsed || p.isTokenExpired(b)) && (H = !0, J("[KEYCLOAK] Refreshing token: token expired")), H) {
                            var Q = "grant_type=refresh_token&refresh_token=" + p.refreshToken,
                                me = p.endpoints.token();
                            if (v.push(q), 1 == v.length) {
                                var _e = new XMLHttpRequest;
                                _e.open("POST", me, !0), _e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), _e.withCredentials = !0, Q += "&client_id=" + encodeURIComponent(p.clientId);
                                var Le = (new Date).getTime();
                                _e.onreadystatechange = function() {
                                    if (4 == _e.readyState)
                                        if (200 == _e.status) {
                                            J("[KEYCLOAK] Token refreshed"), Le = (Le + (new Date).getTime()) / 2;
                                            var ke = JSON.parse(_e.responseText);
                                            N(ke.access_token, ke.refresh_token, ke.id_token, Le), p.onAuthRefreshSuccess && p.onAuthRefreshSuccess();
                                            for (var je = v.pop(); null != je; je = v.pop()) je.setSuccess(!0)
                                        } else
                                            for (ie("[KEYCLOAK] Failed to refresh token"), 400 == _e.status && p.clearToken(), p.onAuthRefreshError && p.onAuthRefreshError(), je = v.pop(); null != je; je = v.pop()) je.setError(!0)
                                }, _e.send(Q)
                            }
                        } else q.setSuccess(!1)
                    };
                    return M.enable ? nt().success(function() {
                        E()
                    }).error(function() {
                        q.setError()
                    }) : E(), q.promise
                }, p.clearToken = function() {
                    p.token && (N(null, null, null), p.onAuthLogout && p.onAuthLogout(), p.loginRequired && p.login())
                };
                var at = function() {
                        if (!(this instanceof at)) return new at;

                        function q() {
                            for (var E = (new Date).getTime(), B = 0; B < localStorage.length; B++) {
                                var H = localStorage.key(B);
                                if (H && 0 == H.indexOf("kc-callback-")) {
                                    var Q = localStorage.getItem(H);
                                    if (Q) try {
                                        var me = JSON.parse(Q).expires;
                                        (!me || me < E) && localStorage.removeItem(H)
                                    } catch {
                                        localStorage.removeItem(H)
                                    }
                                }
                            }
                        }
                        localStorage.setItem("kc-test", "test"), localStorage.removeItem("kc-test"), this.get = function(E) {
                            if (E) {
                                var B = "kc-callback-" + E,
                                    H = localStorage.getItem(B);
                                return H && (localStorage.removeItem(B), H = JSON.parse(H)), q(), H
                            }
                        }, this.add = function(E) {
                            q();
                            var B = "kc-callback-" + E.state;
                            E.expires = (new Date).getTime() + 36e5, localStorage.setItem(B, JSON.stringify(E))
                        }
                    },
                    gt = function() {
                        if (!(this instanceof gt)) return new gt;
                        var b = this;
                        b.get = function(H) {
                            if (H) {
                                var Q = E("kc-callback-" + H);
                                if (B("kc-callback-" + H, "", q(-100)), Q) return JSON.parse(Q)
                            }
                        }, b.add = function(H) {
                            B("kc-callback-" + H.state, JSON.stringify(H), q(60))
                        }, b.removeItem = function(H) {
                            B(H, "", q(-100))
                        };
                        var q = function(H) {
                                var Q = new Date;
                                return Q.setTime(Q.getTime() + 60 * H * 1e3), Q
                            },
                            E = function(H) {
                                for (var Q = H + "=", me = document.cookie.split(";"), _e = 0; _e < me.length; _e++) {
                                    for (var Le = me[_e];
                                        " " == Le.charAt(0);) Le = Le.substring(1);
                                    if (0 == Le.indexOf(Q)) return Le.substring(Q.length, Le.length)
                                }
                                return ""
                            },
                            B = function(H, Q, me) {
                                var _e = H + "=" + Q + "; expires=" + me.toUTCString() + "; ";
                                document.cookie = _e
                            }
                    };

                function Je(b) {
                    return function() {
                        p.enableLogging && b.apply(console, Array.prototype.slice.call(arguments))
                    }
                }
            })
        },
        8222: (y, T, a) => {
            y = a.nmd(y);
            var r = "__lodash_hash_undefined__",
                p = 9007199254740991,
                f = "[object Arguments]",
                v = "[object Array]",
                M = "[object Boolean]",
                I = "[object Date]",
                z = "[object Error]",
                V = "[object Function]",
                ie = "[object Map]",
                ce = "[object Number]",
                Oe = "[object Object]",
                oe = "[object Promise]",
                Ne = "[object RegExp]",
                pe = "[object Set]",
                k = "[object String]",
                Y = "[object WeakMap]",
                te = "[object ArrayBuffer]",
                Pe = "[object DataView]",
                gt = /^\[object .+?Constructor\]$/,
                Pt = /^(?:0|[1-9]\d*)$/,
                Je = {};
            Je["[object Float32Array]"] = Je["[object Float64Array]"] = Je["[object Int8Array]"] = Je["[object Int16Array]"] = Je["[object Int32Array]"] = Je["[object Uint8Array]"] = Je["[object Uint8ClampedArray]"] = Je["[object Uint16Array]"] = Je["[object Uint32Array]"] = !0, Je[f] = Je[v] = Je[te] = Je[M] = Je[Pe] = Je[I] = Je[z] = Je[V] = Je[ie] = Je[ce] = Je[Oe] = Je[Ne] = Je[pe] = Je[k] = Je[Y] = !1;
            var b = "object" == typeof global && global && global.Object === Object && global,
                q = "object" == typeof self && self && self.Object === Object && self,
                E = b || q || Function("return this")(),
                B = T && !T.nodeType && T,
                H = B && y && !y.nodeType && y,
                Q = H && H.exports === B,
                me = Q && b.process,
                _e = function() {
                    try {
                        return me && me.binding && me.binding("util")
                    } catch {}
                }(),
                Le = _e && _e.isTypedArray;

            function ct(P, re) {
                for (var Se = -1, ze = null == P ? 0 : P.length; ++Se < ze;)
                    if (re(P[Se], Se, P)) return !0;
                return !1
            }

            function ue(P, re) {
                return P.has(re)
            }

            function ae(P) {
                var re = -1,
                    Se = Array(P.size);
                return P.forEach(function(ze, Ct) {
                    Se[++re] = [Ct, ze]
                }), Se
            }

            function se(P) {
                var re = -1,
                    Se = Array(P.size);
                return P.forEach(function(ze) {
                    Se[++re] = ze
                }), Se
            }
            var P, we = Array.prototype,
                Ze = Object.prototype,
                dt = E["__core-js_shared__"],
                mt = Function.prototype.toString,
                L = Ze.hasOwnProperty,
                Re = (P = /[^.]+$/.exec(dt && dt.keys && dt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + P : "",
                D = Ze.toString,
                he = RegExp("^" + mt.call(L).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                De = Q ? E.Buffer : void 0,
                $ = E.Symbol,
                G = E.Uint8Array,
                Be = Ze.propertyIsEnumerable,
                ne = we.splice,
                R = $ ? $.toStringTag : void 0,
                u = Object.getOwnPropertySymbols,
                h = De ? De.isBuffer : void 0,
                x = function Te(P, re) {
                    return function(Se) {
                        return P(re(Se))
                    }
                }(Object.keys, Object),
                X = Ln(E, "DataView"),
                le = Ln(E, "Map"),
                Ue = Ln(E, "Promise"),
                Xe = Ln(E, "Set"),
                ot = Ln(E, "WeakMap"),
                pt = Ln(Object, "create"),
                jt = Cn(X),
                _t = Cn(le),
                Xt = Cn(Ue),
                It = Cn(Xe),
                At = Cn(ot),
                Qt = $ ? $.prototype : void 0,
                Ut = Qt ? Qt.valueOf : void 0;

            function Et(P) {
                var re = -1,
                    Se = null == P ? 0 : P.length;
                for (this.clear(); ++re < Se;) {
                    var ze = P[re];
                    this.set(ze[0], ze[1])
                }
            }

            function Vt(P) {
                var re = -1,
                    Se = null == P ? 0 : P.length;
                for (this.clear(); ++re < Se;) {
                    var ze = P[re];
                    this.set(ze[0], ze[1])
                }
            }

            function qt(P) {
                var re = -1,
                    Se = null == P ? 0 : P.length;
                for (this.clear(); ++re < Se;) {
                    var ze = P[re];
                    this.set(ze[0], ze[1])
                }
            }

            function F(P) {
                var re = -1,
                    Se = null == P ? 0 : P.length;
                for (this.__data__ = new qt; ++re < Se;) this.add(P[re])
            }

            function Fe(P) {
                var re = this.__data__ = new Vt(P);
                this.size = re.size
            }

            function An(P, re) {
                for (var Se = P.length; Se--;)
                    if (Qn(P[Se][0], re)) return Se;
                return -1
            }

            function an(P) {
                return null == P ? void 0 === P ? "[object Undefined]" : "[object Null]" : R && R in Object(P) ? function Oi(P) {
                    var re = L.call(P, R),
                        Se = P[R];
                    try {
                        P[R] = void 0;
                        var ze = !0
                    } catch {}
                    var Ct = D.call(P);
                    return ze && (re ? P[R] = Se : delete P[R]), Ct
                }(P) : function pi(P) {
                    return D.call(P)
                }(P)
            }

            function Fn(P) {
                return Un(P) && an(P) == f
            }

            function Gn(P, re, Se, ze, Ct) {
                return P === re || (null == P || null == re || !Un(P) && !Un(re) ? P != P && re != re : function Ci(P, re, Se, ze, Ct, lt) {
                    var St = Ft(P),
                        Lt = Ft(re),
                        Rt = St ? v : Bn(P),
                        wt = Lt ? v : Bn(re),
                        tn = (Rt = Rt == f ? Oe : Rt) == Oe,
                        cn = (wt = wt == f ? Oe : wt) == Oe,
                        Wt = Rt == wt;
                    if (Wt && Jn(P)) {
                        if (!Jn(re)) return !1;
                        St = !0, tn = !1
                    }
                    if (Wt && !tn) return lt || (lt = new Fe), St || fi(P) ? $n(P, re, Se, ze, Ct, lt) : function ci(P, re, Se, ze, Ct, lt, St) {
                        switch (Se) {
                            case Pe:
                                if (P.byteLength != re.byteLength || P.byteOffset != re.byteOffset) return !1;
                                P = P.buffer, re = re.buffer;
                            case te:
                                return !(P.byteLength != re.byteLength || !lt(new G(P), new G(re)));
                            case M:
                            case I:
                            case ce:
                                return Qn(+P, +re);
                            case z:
                                return P.name == re.name && P.message == re.message;
                            case Ne:
                            case k:
                                return P == re + "";
                            case ie:
                                var Lt = ae;
                            case pe:
                                if (Lt || (Lt = se), P.size != re.size && !(1 & ze)) return !1;
                                var wt = St.get(P);
                                if (wt) return wt == re;
                                ze |= 2, St.set(P, re);
                                var tn = $n(Lt(P), Lt(re), ze, Ct, lt, St);
                                return St.delete(P), tn;
                            case "[object Symbol]":
                                if (Ut) return Ut.call(P) == Ut.call(re)
                        }
                        return !1
                    }(P, re, Rt, Se, ze, Ct, lt);
                    if (!(1 & Se)) {
                        var dn = tn && L.call(P, "__wrapped__"),
                            pn = cn && L.call(re, "__wrapped__");
                        if (dn || pn) {
                            var Pn = dn ? P.value() : P,
                                wn = pn ? re.value() : re;
                            return lt || (lt = new Fe), Ct(Pn, wn, Se, ze, lt)
                        }
                    }
                    return !!Wt && (lt || (lt = new Fe), function ji(P, re, Se, ze, Ct, lt) {
                        var St = 1 & Se,
                            Lt = Hi(P),
                            Rt = Lt.length;
                        if (Rt != Hi(re).length && !St) return !1;
                        for (var cn = Rt; cn--;) {
                            var Wt = Lt[cn];
                            if (!(St ? Wt in re : L.call(re, Wt))) return !1
                        }
                        var dn = lt.get(P);
                        if (dn && lt.get(re)) return dn == re;
                        var pn = !0;
                        lt.set(P, re), lt.set(re, P);
                        for (var Pn = St; ++cn < Rt;) {
                            var wn = P[Wt = Lt[cn]],
                                Dn = re[Wt];
                            if (ze) var _i = St ? ze(Dn, wn, Wt, re, P, lt) : ze(wn, Dn, Wt, P, re, lt);
                            if (!(void 0 === _i ? wn === Dn || Ct(wn, Dn, Se, ze, lt) : _i)) {
                                pn = !1;
                                break
                            }
                            Pn || (Pn = "constructor" == Wt)
                        }
                        if (pn && !Pn) {
                            var Kn = P.constructor,
                                S = re.constructor;
                            Kn != S && "constructor" in P && "constructor" in re && !("function" == typeof Kn && Kn instanceof Kn && "function" == typeof S && S instanceof S) && (pn = !1)
                        }
                        return lt.delete(P), lt.delete(re), pn
                    }(P, re, Se, ze, Ct, lt))
                }(P, re, Se, ze, Gn, Ct))
            }

            function $n(P, re, Se, ze, Ct, lt) {
                var St = 1 & Se,
                    Lt = P.length,
                    Rt = re.length;
                if (Lt != Rt && !(St && Rt > Lt)) return !1;
                var wt = lt.get(P);
                if (wt && lt.get(re)) return wt == re;
                var tn = -1,
                    cn = !0,
                    Wt = 2 & Se ? new F : void 0;
                for (lt.set(P, re), lt.set(re, P); ++tn < Lt;) {
                    var dn = P[tn],
                        pn = re[tn];
                    if (ze) var Pn = St ? ze(pn, dn, tn, re, P, lt) : ze(dn, pn, tn, P, re, lt);
                    if (void 0 !== Pn) {
                        if (Pn) continue;
                        cn = !1;
                        break
                    }
                    if (Wt) {
                        if (!ct(re, function(wn, Dn) {
                                if (!ue(Wt, Dn) && (dn === wn || Ct(dn, wn, Se, ze, lt))) return Wt.push(Dn)
                            })) {
                            cn = !1;
                            break
                        }
                    } else if (dn !== pn && !Ct(dn, pn, Se, ze, lt)) {
                        cn = !1;
                        break
                    }
                }
                return lt.delete(P), lt.delete(re), cn
            }

            function Hi(P) {
                return function zn(P, re, Se) {
                    var ze = re(P);
                    return Ft(P) ? ze : function je(P, re) {
                        for (var Se = -1, ze = re.length, Ct = P.length; ++Se < ze;) P[Ct + Se] = re[Se];
                        return P
                    }(ze, Se(P))
                }(P, Si, xi)
            }

            function di(P, re) {
                var Se = P.__data__;
                return function Ui(P) {
                    var re = typeof P;
                    return "string" == re || "number" == re || "symbol" == re || "boolean" == re ? "__proto__" !== P : null === P
                }(re) ? Se["string" == typeof re ? "string" : "hash"] : Se.map
            }

            function Ln(P, re) {
                var Se = function xe(P, re) {
                    return P ? .[re]
                }(P, re);
                return function Mi(P) {
                    return !(!ui(P) || function Wn(P) {
                        return !!Re && Re in P
                    }(P)) && (Ei(P) ? he : gt).test(Cn(P))
                }(Se) ? Se : void 0
            }
            Et.prototype.clear = function vn() {
                this.__data__ = pt ? pt(null) : {}, this.size = 0
            }, Et.prototype.delete = function ln(P) {
                var re = this.has(P) && delete this.__data__[P];
                return this.size -= re ? 1 : 0, re
            }, Et.prototype.get = function Mn(P) {
                var re = this.__data__;
                if (pt) {
                    var Se = re[P];
                    return Se === r ? void 0 : Se
                }
                return L.call(re, P) ? re[P] : void 0
            }, Et.prototype.has = function Jt(P) {
                var re = this.__data__;
                return pt ? void 0 !== re[P] : L.call(re, P)
            }, Et.prototype.set = function On(P, re) {
                var Se = this.__data__;
                return this.size += this.has(P) ? 0 : 1, Se[P] = pt && void 0 === re ? r : re, this
            }, Vt.prototype.clear = function bn() {
                this.__data__ = [], this.size = 0
            }, Vt.prototype.delete = function Ht(P) {
                var re = this.__data__,
                    Se = An(re, P);
                return !(Se < 0 || (Se == re.length - 1 ? re.pop() : ne.call(re, Se, 1), --this.size, 0))
            }, Vt.prototype.get = function yn(P) {
                var re = this.__data__,
                    Se = An(re, P);
                return Se < 0 ? void 0 : re[Se][1]
            }, Vt.prototype.has = function xn(P) {
                return An(this.__data__, P) > -1
            }, Vt.prototype.set = function on(P, re) {
                var Se = this.__data__,
                    ze = An(Se, P);
                return ze < 0 ? (++this.size, Se.push([P, re])) : Se[ze][1] = re, this
            }, qt.prototype.clear = function In() {
                this.size = 0, this.__data__ = {
                    hash: new Et,
                    map: new(le || Vt),
                    string: new Et
                }
            }, qt.prototype.delete = function Hn(P) {
                var re = di(this, P).delete(P);
                return this.size -= re ? 1 : 0, re
            }, qt.prototype.get = function Nn(P) {
                return di(this, P).get(P)
            }, qt.prototype.has = function Rn(P) {
                return di(this, P).has(P)
            }, qt.prototype.set = function kn(P, re) {
                var Se = di(this, P),
                    ze = Se.size;
                return Se.set(P, re), this.size += Se.size == ze ? 0 : 1, this
            }, F.prototype.add = F.prototype.push = function ye(P) {
                return this.__data__.set(P, r), this
            }, F.prototype.has = function ee(P) {
                return this.__data__.has(P)
            }, Fe.prototype.clear = function Qe() {
                this.__data__ = new Vt, this.size = 0
            }, Fe.prototype.delete = function st(P) {
                var re = this.__data__,
                    Se = re.delete(P);
                return this.size = re.size, Se
            }, Fe.prototype.get = function zt(P) {
                return this.__data__.get(P)
            }, Fe.prototype.has = function Gt(P) {
                return this.__data__.has(P)
            }, Fe.prototype.set = function fn(P, re) {
                var Se = this.__data__;
                if (Se instanceof Vt) {
                    var ze = Se.__data__;
                    if (!le || ze.length < 199) return ze.push([P, re]), this.size = ++Se.size, this;
                    Se = this.__data__ = new qt(ze)
                }
                return Se.set(P, re), this.size = Se.size, this
            };
            var xi = u ? function(P) {
                    return null == P ? [] : (P = Object(P), function ke(P, re) {
                        for (var Se = -1, ze = null == P ? 0 : P.length, Ct = 0, lt = []; ++Se < ze;) {
                            var St = P[Se];
                            re(St, Se, P) && (lt[Ct++] = St)
                        }
                        return lt
                    }(u(P), function(re) {
                        return Be.call(P, re)
                    }))
                } : function hi() {
                    return []
                },
                Bn = an;

            function Xn(P, re) {
                return !!(re = re ? ? p) && ("number" == typeof P || Pt.test(P)) && P > -1 && P % 1 == 0 && P < re
            }

            function Cn(P) {
                if (null != P) {
                    try {
                        return mt.call(P)
                    } catch {}
                    try {
                        return P + ""
                    } catch {}
                }
                return ""
            }

            function Qn(P, re) {
                return P === re || P != P && re != re
            }(X && Bn(new X(new ArrayBuffer(1))) != Pe || le && Bn(new le) != ie || Ue && Bn(Ue.resolve()) != oe || Xe && Bn(new Xe) != pe || ot && Bn(new ot) != Y) && (Bn = function(P) {
                var re = an(P),
                    Se = re == Oe ? P.constructor : void 0,
                    ze = Se ? Cn(Se) : "";
                if (ze) switch (ze) {
                    case jt:
                        return Pe;
                    case _t:
                        return ie;
                    case Xt:
                        return oe;
                    case It:
                        return pe;
                    case At:
                        return Y
                }
                return re
            });
            var gi = Fn(function() {
                    return arguments
                }()) ? Fn : function(P) {
                    return Un(P) && L.call(P, "callee") && !Be.call(P, "callee")
                },
                Ft = Array.isArray,
                Jn = h || function Vi() {
                    return !1
                };

            function Ei(P) {
                if (!ui(P)) return !1;
                var re = an(P);
                return re == V || "[object GeneratorFunction]" == re || "[object AsyncFunction]" == re || "[object Proxy]" == re
            }

            function mi(P) {
                return "number" == typeof P && P > -1 && P % 1 == 0 && P <= p
            }

            function ui(P) {
                var re = typeof P;
                return null != P && ("object" == re || "function" == re)
            }

            function Un(P) {
                return null != P && "object" == typeof P
            }
            var fi = Le ? function Ve(P) {
                return function(re) {
                    return P(re)
                }
            }(Le) : function Bi(P) {
                return Un(P) && mi(P.length) && !!Je[an(P)]
            };

            function Si(P) {
                return function wi(P) {
                    return null != P && mi(P.length) && !Ei(P)
                }(P) ? function en(P, re) {
                    var Se = Ft(P),
                        ze = !Se && gi(P),
                        Ct = !Se && !ze && Jn(P),
                        lt = !Se && !ze && !Ct && fi(P),
                        St = Se || ze || Ct || lt,
                        Lt = St ? function xt(P, re) {
                            for (var Se = -1, ze = Array(P); ++Se < P;) ze[Se] = re(Se);
                            return ze
                        }(P.length, String) : [],
                        Rt = Lt.length;
                    for (var wt in P)(re || L.call(P, wt)) && (!St || !("length" == wt || Ct && ("offset" == wt || "parent" == wt) || lt && ("buffer" == wt || "byteLength" == wt || "byteOffset" == wt) || Xn(wt, Rt))) && Lt.push(wt);
                    return Lt
                }(P) : function $t(P) {
                    if (! function Pi(P) {
                            var re = P && P.constructor;
                            return P === ("function" == typeof re && re.prototype || Ze)
                        }(P)) return x(P);
                    var re = [];
                    for (var Se in Object(P)) L.call(P, Se) && "constructor" != Se && re.push(Se);
                    return re
                }(P)
            }
            y.exports = function Di(P, re) {
                return Gn(P, re)
            }
        },
        9010: (y, T, a) => {
            a.d(T, {
                k: () => O
            });
            var t = function(p) {
                    return "function" == typeof p
                },
                r = function(p) {
                    p && t(p.unsubscribe) && p.unsubscribe()
                },
                d = function(p) {
                    Array.isArray(p) && p.forEach(r)
                };

            function O(p) {
                var f = void 0 === p ? {} : p,
                    v = f.blackList,
                    A = void 0 === v ? [] : v,
                    M = f.arrayName,
                    I = void 0 === M ? "" : M,
                    z = f.event,
                    V = void 0 === z ? "ngOnDestroy" : z;
                return function(J) {
                    var ie = J.prototype[V];
                    if (!t(ie)) throw new Error(J.name + " is using @AutoUnsubscribe but does not implement OnDestroy");
                    J.prototype[V] = function() {
                        if (t(ie) && ie.apply(this, arguments), I) d(this[I]);
                        else
                            for (var ce in this)
                                if (!A.includes(ce)) {
                                    var ve = this[ce];
                                    r(ve)
                                }
                    }
                }
            }
        },
        1499: (y, T, a) => {
            var t = a(8495),
                r = a(3061),
                d = a(7961),
                O = a(3164),
                p = a(4012),
                f = function(_) {
                    d(!1, _)
                },
                v = String.prototype.replace,
                A = String.prototype.split,
                M = "||||",
                I = function(k) {
                    var _ = k % 100,
                        N = _ % 10;
                    return 11 !== _ && 1 === N ? 0 : 2 <= N && N <= 4 && !(_ >= 12 && _ <= 14) ? 1 : 2
                },
                z = {
                    pluralTypes: {
                        arabic: function(k) {
                            if (k < 3) return k;
                            var _ = k % 100;
                            return _ >= 3 && _ <= 10 ? 3 : _ >= 11 ? 4 : 5
                        },
                        bosnian_serbian: I,
                        chinese: function() {
                            return 0
                        },
                        croatian: I,
                        french: function(k) {
                            return k >= 2 ? 1 : 0
                        },
                        german: function(k) {
                            return 1 !== k ? 1 : 0
                        },
                        russian: I,
                        lithuanian: function(k) {
                            return k % 10 == 1 && k % 100 != 11 ? 0 : k % 10 >= 2 && k % 10 <= 9 && (k % 100 < 11 || k % 100 > 19) ? 1 : 2
                        },
                        czech: function(k) {
                            return 1 === k ? 0 : k >= 2 && k <= 4 ? 1 : 2
                        },
                        polish: function(k) {
                            if (1 === k) return 0;
                            var _ = k % 10;
                            return 2 <= _ && _ <= 4 && (k % 100 < 10 || k % 100 >= 20) ? 1 : 2
                        },
                        icelandic: function(k) {
                            return k % 10 != 1 || k % 100 == 11 ? 1 : 0
                        },
                        slovenian: function(k) {
                            var _ = k % 100;
                            return 1 === _ ? 0 : 2 === _ ? 1 : 3 === _ || 4 === _ ? 2 : 3
                        },
                        romanian: function(k) {
                            if (1 === k) return 0;
                            var _ = k % 100;
                            return 0 === k || _ >= 2 && _ <= 19 ? 1 : 2
                        }
                    },
                    pluralTypeToLanguages: {
                        arabic: ["ar"],
                        bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
                        chinese: ["id", "id-ID", "ja", "ko", "ko-KR", "lo", "ms", "th", "th-TH", "zh"],
                        croatian: ["hr", "hr-HR"],
                        german: ["fa", "da", "de", "en", "es", "fi", "el", "he", "hi-IN", "hu", "hu-HU", "it", "nl", "no", "pt", "sv", "tr"],
                        french: ["fr", "tl", "pt-br"],
                        russian: ["ru", "ru-RU"],
                        lithuanian: ["lt"],
                        czech: ["cs", "cs-CZ", "sk"],
                        polish: ["pl"],
                        icelandic: ["is", "mk"],
                        slovenian: ["sl-SL"],
                        romanian: ["ro"]
                    }
                };

            function ve(k) {
                return k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }
            var oe = function ce() {
                    var k = {};
                    return function(_, N) {
                        var Y = k[N];
                        return Y && !_.pluralTypes[Y] && (k[N] = Y = null), Y || (Y = function J(k, _) {
                            var N = function V(k) {
                                var _ = {};
                                return t(r(k), function(N) {
                                    var Y = N[0];
                                    t(N[1], function(Pe) {
                                        _[Pe] = Y
                                    })
                                }), _
                            }(k.pluralTypeToLanguages);
                            return N[_] || N[A.call(_, /-/, 1)[0]] || N.en
                        }(_, N)) && (k[N] = Y), Y
                    }
                }(),
                Me = /%\{(.*?)\}/g;

            function Ne(k, _, N, Y, te, Pe) {
                if ("string" != typeof k) throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
                if (null == _) return k;
                var Z = k,
                    ge = Y || Me,
                    be = Pe || v,
                    Ee = "number" == typeof _ ? {
                        smart_count: _
                    } : _;
                if (null != Ee.smart_count && k) {
                    var He = te || z,
                        et = A.call(k, M),
                        it = function ie(k, _, N) {
                            return k.pluralTypes[_](N)
                        }(He, oe(He, N || "en"), Ee.smart_count);
                    Z = p(et[it] || et[0])
                }
                return be.call(Z, ge, function(at, gt) {
                    return O(Ee, gt) && null != Ee[gt] ? Ee[gt] : at
                })
            }

            function pe(k) {
                var _ = k || {};
                this.phrases = {}, this.extend(_.phrases || {}), this.currentLocale = _.locale || "en", this.onMissingKey = "function" == typeof _.onMissingKey ? _.onMissingKey : _.allowMissing ? Ne : null, this.warn = _.warn || f, this.replaceImplementation = _.replace || v, this.tokenRegex = function Oe(k) {
                    var _ = k && k.prefix || "%{",
                        N = k && k.suffix || "}";
                    if (_ === M || N === M) throw new RangeError('"||||" token is reserved for pluralization');
                    return new RegExp(ve(_) + "(.*?)" + ve(N), "g")
                }(_.interpolation), this.pluralRules = _.pluralRules || z
            }
            pe.prototype.locale = function(k) {
                return k && (this.currentLocale = k), this.currentLocale
            }, pe.prototype.extend = function(k, _) {
                t(r(k || {}), function(N) {
                    var Y = N[0],
                        te = N[1],
                        Pe = _ ? _ + "." + Y : Y;
                    "object" == typeof te ? this.extend(te, Pe) : this.phrases[Pe] = te
                }, this)
            }, pe.prototype.unset = function(k, _) {
                "string" == typeof k ? delete this.phrases[k] : t(r(k || {}), function(N) {
                    var Y = N[0],
                        te = N[1],
                        Pe = _ ? _ + "." + Y : Y;
                    "object" == typeof te ? this.unset(te, Pe) : delete this.phrases[Pe]
                }, this)
            }, pe.prototype.clear = function() {
                this.phrases = {}
            }, pe.prototype.replace = function(k) {
                this.clear(), this.extend(k)
            }, pe.prototype.t = function(k, _) {
                var N, Y, te = _ ? ? {};
                return "string" == typeof this.phrases[k] ? N = this.phrases[k] : "string" == typeof te._ ? N = te._ : this.onMissingKey ? Y = (0, this.onMissingKey)(k, te, this.currentLocale, this.tokenRegex, this.pluralRules, this.replaceImplementation) : (this.warn('Missing translation for key: "' + k + '"'), Y = k), "string" == typeof N && (Y = Ne(N, te, this.currentLocale, this.tokenRegex, this.pluralRules, this.replaceImplementation)), Y
            }, pe.prototype.has = function(k) {
                return O(this.phrases, k)
            }, pe.transformPhrase = function(_, N, Y) {
                return Ne(_, N, Y)
            }, y.exports = pe
        },
        7024: (y, T, a) => {
            var t = "function" == typeof Map && Map.prototype,
                r = Object.getOwnPropertyDescriptor && t ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
                d = t && r && "function" == typeof r.get ? r.get : null,
                O = t && Map.prototype.forEach,
                p = "function" == typeof Set && Set.prototype,
                f = Object.getOwnPropertyDescriptor && p ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
                v = p && f && "function" == typeof f.get ? f.get : null,
                A = p && Set.prototype.forEach,
                I = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
                V = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
                ie = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
                ce = Boolean.prototype.valueOf,
                ve = Object.prototype.toString,
                Oe = Function.prototype.toString,
                oe = String.prototype.match,
                Me = String.prototype.slice,
                Ne = String.prototype.replace,
                pe = String.prototype.toUpperCase,
                k = String.prototype.toLowerCase,
                _ = RegExp.prototype.test,
                N = Array.prototype.concat,
                Y = Array.prototype.join,
                te = Array.prototype.slice,
                Pe = Math.floor,
                Z = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
                ge = Object.getOwnPropertySymbols,
                be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
                Ee = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
                He = "function" == typeof Symbol && Symbol.toStringTag && (Symbol, 1) ? Symbol.toStringTag : null,
                et = Object.prototype.propertyIsEnumerable,
                rt = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function($) {
                    return $.__proto__
                } : null);

            function nt($, G) {
                if ($ === 1 / 0 || $ === -1 / 0 || $ != $ || $ && $ > -1e3 && $ < 1e3 || _.call(/e/, G)) return G;
                var Be = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
                if ("number" == typeof $) {
                    var ne = $ < 0 ? -Pe(-$) : Pe($);
                    if (ne !== $) {
                        var R = String(ne),
                            u = Me.call(G, R.length + 1);
                        return Ne.call(R, Be, "$&_") + "." + Ne.call(Ne.call(u, /([0-9]{3})/g, "$&_"), /_$/, "")
                    }
                }
                return Ne.call(G, Be, "$&_")
            }
            var it = a(4654),
                at = it.custom,
                gt = _e(at) ? at : null;

            function Pt($, G, Be) {
                var ne = "double" === (Be.quoteStyle || G) ? '"' : "'";
                return ne + $ + ne
            }

            function Je($) {
                return Ne.call(String($), /"/g, "&quot;")
            }

            function b($) {
                return !("[object Array]" !== ct($) || He && "object" == typeof $ && He in $)
            }

            function E($) {
                return !("[object RegExp]" !== ct($) || He && "object" == typeof $ && He in $)
            }

            function _e($) {
                if (Ee) return $ && "object" == typeof $ && $ instanceof Symbol;
                if ("symbol" == typeof $) return !0;
                if (!$ || "object" != typeof $ || !be) return !1;
                try {
                    return be.call($), !0
                } catch {}
                return !1
            }
            y.exports = function $(G, Be, ne, R) {
                var u = Be || {};
                if (je(u, "quoteStyle") && "single" !== u.quoteStyle && "double" !== u.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
                if (je(u, "maxStringLength") && ("number" == typeof u.maxStringLength ? u.maxStringLength < 0 && u.maxStringLength !== 1 / 0 : null !== u.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
                var h = !je(u, "customInspect") || u.customInspect;
                if ("boolean" != typeof h && "symbol" !== h) throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
                if (je(u, "indent") && null !== u.indent && "\t" !== u.indent && !(parseInt(u.indent, 10) === u.indent && u.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
                if (je(u, "numericSeparator") && "boolean" != typeof u.numericSeparator) throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
                var x = u.numericSeparator;
                if (typeof G > "u") return "undefined";
                if (null === G) return "null";
                if ("boolean" == typeof G) return G ? "true" : "false";
                if ("string" == typeof G) return Ye(G, u);
                if ("number" == typeof G) {
                    if (0 === G) return 1 / 0 / G > 0 ? "0" : "-0";
                    var X = String(G);
                    return x ? nt(G, X) : X
                }
                if ("bigint" == typeof G) {
                    var le = String(G) + "n";
                    return x ? nt(G, le) : le
                }
                var Ue = typeof u.depth > "u" ? 5 : u.depth;
                if (typeof ne > "u" && (ne = 0), ne >= Ue && Ue > 0 && "object" == typeof G) return b(G) ? "[Array]" : "[Object]";
                var Xe = function D($, G) {
                    var Be;
                    if ("\t" === $.indent) Be = "\t";
                    else {
                        if (!("number" == typeof $.indent && $.indent > 0)) return null;
                        Be = Y.call(Array($.indent + 1), " ")
                    }
                    return {
                        base: Be,
                        prev: Y.call(Array(G + 1), Be)
                    }
                }(u, ne);
                if (typeof R > "u") R = [];
                else if (Ve(R, G) >= 0) return "[Circular]";

                function ot(Ht, yn, xn) {
                    if (yn && (R = te.call(R)).push(yn), xn) {
                        var on = {
                            depth: u.depth
                        };
                        return je(u, "quoteStyle") && (on.quoteStyle = u.quoteStyle), $(Ht, on, ne + 1, R)
                    }
                    return $(Ht, u, ne + 1, R)
                }
                if ("function" == typeof G && !E(G)) {
                    var pt = function xt($) {
                            if ($.name) return $.name;
                            var G = oe.call(Oe.call($), /^function\s*([\w$]+)/);
                            return G ? G[1] : null
                        }(G),
                        jt = De(G, ot);
                    return "[Function" + (pt ? ": " + pt : " (anonymous)") + "]" + (jt.length > 0 ? " { " + Y.call(jt, ", ") + " }" : "")
                }
                if (_e(G)) {
                    var _t = Ee ? Ne.call(String(G), /^(Symbol\(.*\))_[^)]*$/, "$1") : be.call(G);
                    return "object" != typeof G || Ee ? _t : dt(_t)
                }
                if (function we($) {
                        return !(!$ || "object" != typeof $) && (typeof HTMLElement < "u" && $ instanceof HTMLElement || "string" == typeof $.nodeName && "function" == typeof $.getAttribute)
                    }(G)) {
                    for (var Xt = "<" + k.call(String(G.nodeName)), It = G.attributes || [], At = 0; At < It.length; At++) Xt += " " + It[At].name + "=" + Pt(Je(It[At].value), "double", u);
                    return Xt += ">", G.childNodes && G.childNodes.length && (Xt += "..."), Xt + "</" + k.call(String(G.nodeName)) + ">"
                }
                if (b(G)) {
                    if (0 === G.length) return "[]";
                    var Qt = De(G, ot);
                    return Xe && ! function Re($) {
                        for (var G = 0; G < $.length; G++)
                            if (Ve($[G], "\n") >= 0) return !1;
                        return !0
                    }(Qt) ? "[" + he(Qt, Xe) + "]" : "[ " + Y.call(Qt, ", ") + " ]"
                }
                if (function B($) {
                        return !("[object Error]" !== ct($) || He && "object" == typeof $ && He in $)
                    }(G)) {
                    var Ut = De(G, ot);
                    return "cause" in Error.prototype || !("cause" in G) || et.call(G, "cause") ? 0 === Ut.length ? "[" + String(G) + "]" : "{ [" + String(G) + "] " + Y.call(Ut, ", ") + " }" : "{ [" + String(G) + "] " + Y.call(N.call("[cause]: " + ot(G.cause), Ut), ", ") + " }"
                }
                if ("object" == typeof G && h) {
                    if (gt && "function" == typeof G[gt] && it) return it(G, {
                        depth: Ue - ne
                    });
                    if ("symbol" !== h && "function" == typeof G.inspect) return G.inspect()
                }
                if (function ue($) {
                        if (!d || !$ || "object" != typeof $) return !1;
                        try {
                            d.call($);
                            try {
                                v.call($)
                            } catch {
                                return !0
                            }
                            return $ instanceof Map
                        } catch {}
                        return !1
                    }(G)) {
                    var Et = [];
                    return O && O.call(G, function(Ht, yn) {
                        Et.push(ot(yn, G, !0) + " => " + ot(Ht, G))
                    }), L("Map", d.call(G), Et, Xe)
                }
                if (function Te($) {
                        if (!v || !$ || "object" != typeof $) return !1;
                        try {
                            v.call($);
                            try {
                                d.call($)
                            } catch {
                                return !0
                            }
                            return $ instanceof Set
                        } catch {}
                        return !1
                    }(G)) {
                    var vn = [];
                    return A && A.call(G, function(Ht) {
                        vn.push(ot(Ht, G))
                    }), L("Set", v.call(G), vn, Xe)
                }
                if (function xe($) {
                        if (!I || !$ || "object" != typeof $) return !1;
                        try {
                            I.call($, I);
                            try {
                                V.call($, V)
                            } catch {
                                return !0
                            }
                            return $ instanceof WeakMap
                        } catch {}
                        return !1
                    }(G)) return mt("WeakMap");
                if (function se($) {
                        if (!V || !$ || "object" != typeof $) return !1;
                        try {
                            V.call($, V);
                            try {
                                I.call($, I)
                            } catch {
                                return !0
                            }
                            return $ instanceof WeakSet
                        } catch {}
                        return !1
                    }(G)) return mt("WeakSet");
                if (function ae($) {
                        if (!ie || !$ || "object" != typeof $) return !1;
                        try {
                            return ie.call($), !0
                        } catch {}
                        return !1
                    }(G)) return mt("WeakRef");
                if (function Q($) {
                        return !("[object Number]" !== ct($) || He && "object" == typeof $ && He in $)
                    }(G)) return dt(ot(Number(G)));
                if (function Le($) {
                        if (!$ || "object" != typeof $ || !Z) return !1;
                        try {
                            return Z.call($), !0
                        } catch {}
                        return !1
                    }(G)) return dt(ot(Z.call(G)));
                if (function me($) {
                        return !("[object Boolean]" !== ct($) || He && "object" == typeof $ && He in $)
                    }(G)) return dt(ce.call(G));
                if (function H($) {
                        return !("[object String]" !== ct($) || He && "object" == typeof $ && He in $)
                    }(G)) return dt(ot(String(G)));
                if (! function q($) {
                        return !("[object Date]" !== ct($) || He && "object" == typeof $ && He in $)
                    }(G) && !E(G)) {
                    var ln = De(G, ot),
                        Mn = rt ? rt(G) === Object.prototype : G instanceof Object || G.constructor === Object,
                        Jt = G instanceof Object ? "" : "null prototype",
                        On = !Mn && He && Object(G) === G && He in G ? Me.call(ct(G), 8, -1) : Jt ? "Object" : "",
                        bn = (Mn || "function" != typeof G.constructor ? "" : G.constructor.name ? G.constructor.name + " " : "") + (On || Jt ? "[" + Y.call(N.call([], On || [], Jt || []), ": ") + "] " : "");
                    return 0 === ln.length ? bn + "{}" : Xe ? bn + "{" + he(ln, Xe) + "}" : bn + "{ " + Y.call(ln, ", ") + " }"
                }
                return String(G)
            };
            var ke = Object.prototype.hasOwnProperty || function($) {
                return $ in this
            };

            function je($, G) {
                return ke.call($, G)
            }

            function ct($) {
                return ve.call($)
            }

            function Ve($, G) {
                if ($.indexOf) return $.indexOf(G);
                for (var Be = 0, ne = $.length; Be < ne; Be++)
                    if ($[Be] === G) return Be;
                return -1
            }

            function Ye($, G) {
                if ($.length > G.maxStringLength) {
                    var Be = $.length - G.maxStringLength,
                        ne = "... " + Be + " more character" + (Be > 1 ? "s" : "");
                    return Ye(Me.call($, 0, G.maxStringLength), G) + ne
                }
                return Pt(Ne.call(Ne.call($, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Ze), "single", G)
            }

            function Ze($) {
                var G = $.charCodeAt(0),
                    Be = {
                        8: "b",
                        9: "t",
                        10: "n",
                        12: "f",
                        13: "r"
                    }[G];
                return Be ? "\\" + Be : "\\x" + (G < 16 ? "0" : "") + pe.call(G.toString(16))
            }

            function dt($) {
                return "Object(" + $ + ")"
            }

            function mt($) {
                return $ + " { ? }"
            }

            function L($, G, Be, ne) {
                return $ + " (" + G + ") {" + (ne ? he(Be, ne) : Y.call(Be, ", ")) + "}"
            }

            function he($, G) {
                if (0 === $.length) return "";
                var Be = "\n" + G.prev + G.base;
                return Be + Y.call($, "," + Be) + "\n" + G.prev
            }

            function De($, G) {
                var Be = b($),
                    ne = [];
                if (Be) {
                    ne.length = $.length;
                    for (var R = 0; R < $.length; R++) ne[R] = je($, R) ? G($[R], $) : ""
                }
                var h, u = "function" == typeof ge ? ge($) : [];
                if (Ee) {
                    h = {};
                    for (var x = 0; x < u.length; x++) h["$" + u[x]] = u[x]
                }
                for (var X in $) !je($, X) || Be && String(Number(X)) === X && X < $.length || Ee && h["$" + X] instanceof Symbol || (_.call(/[^\w$]/, X) ? ne.push(G(X, $) + ": " + G($[X], $)) : ne.push(X + ": " + G($[X], $)));
                if ("function" == typeof ge)
                    for (var le = 0; le < u.length; le++) et.call($, u[le]) && ne.push("[" + G(u[le]) + "]: " + G($[u[le]], $));
                return ne
            }
        },
        2450: (y, T, a) => {
            var t;
            if (!Object.keys) {
                var r = Object.prototype.hasOwnProperty,
                    d = Object.prototype.toString,
                    O = a(9978),
                    p = Object.prototype.propertyIsEnumerable,
                    f = !p.call({
                        toString: null
                    }, "toString"),
                    v = p.call(function() {}, "prototype"),
                    A = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    M = function(J) {
                        var ie = J.constructor;
                        return ie && ie.prototype === J
                    },
                    I = {
                        $applicationCache: !0,
                        $console: !0,
                        $external: !0,
                        $frame: !0,
                        $frameElement: !0,
                        $frames: !0,
                        $innerHeight: !0,
                        $innerWidth: !0,
                        $onmozfullscreenchange: !0,
                        $onmozfullscreenerror: !0,
                        $outerHeight: !0,
                        $outerWidth: !0,
                        $pageXOffset: !0,
                        $pageYOffset: !0,
                        $parent: !0,
                        $scrollLeft: !0,
                        $scrollTop: !0,
                        $scrollX: !0,
                        $scrollY: !0,
                        $self: !0,
                        $webkitIndexedDB: !0,
                        $webkitStorageInfo: !0,
                        $window: !0
                    },
                    z = function() {
                        if (typeof window > "u") return !1;
                        for (var J in window) try {
                            if (!I["$" + J] && r.call(window, J) && null !== window[J] && "object" == typeof window[J]) try {
                                M(window[J])
                            } catch {
                                return !0
                            }
                        } catch {
                            return !0
                        }
                        return !1
                    }();
                t = function(ie) {
                    var ce = null !== ie && "object" == typeof ie,
                        ve = "[object Function]" === d.call(ie),
                        Oe = O(ie),
                        oe = ce && "[object String]" === d.call(ie),
                        Me = [];
                    if (!ce && !ve && !Oe) throw new TypeError("Object.keys called on a non-object");
                    var Ne = v && ve;
                    if (oe && ie.length > 0 && !r.call(ie, 0))
                        for (var pe = 0; pe < ie.length; ++pe) Me.push(String(pe));
                    if (Oe && ie.length > 0)
                        for (var k = 0; k < ie.length; ++k) Me.push(String(k));
                    else
                        for (var _ in ie)(!Ne || "prototype" !== _) && r.call(ie, _) && Me.push(String(_));
                    if (f)
                        for (var N = function(J) {
                                if (typeof window > "u" || !z) return M(J);
                                try {
                                    return M(J)
                                } catch {
                                    return !1
                                }
                            }(ie), Y = 0; Y < A.length; ++Y)(!N || "constructor" !== A[Y]) && r.call(ie, A[Y]) && Me.push(A[Y]);
                    return Me
                }
            }
            y.exports = t
        },
        1356: (y, T, a) => {
            var t = Array.prototype.slice,
                r = a(9978),
                d = Object.keys,
                O = d ? function(v) {
                    return d(v)
                } : a(2450),
                p = Object.keys;
            O.shim = function() {
                if (Object.keys) {
                    var v = function() {
                        var A = Object.keys(arguments);
                        return A && A.length === arguments.length
                    }(1, 2);
                    v || (Object.keys = function(M) {
                        return r(M) ? p(t.call(M)) : p(M)
                    })
                } else Object.keys = O;
                return Object.keys || O
            }, y.exports = O
        },
        9978: y => {
            var T = Object.prototype.toString;
            y.exports = function(t) {
                var r = T.call(t),
                    d = "[object Arguments]" === r;
                return d || (d = "[object Array]" !== r && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === T.call(t.callee)), d
            }
        },
        17: (y, T, a) => {
            var t = a(8188),
                r = a(5834),
                d = r("Object.prototype.propertyIsEnumerable"),
                O = r("Array.prototype.push");
            y.exports = function(f) {
                var v = t(f),
                    A = [];
                for (var M in v) d(v, M) && O(A, [M, v[M]]);
                return A
            }
        },
        3061: (y, T, a) => {
            var t = a(2358),
                r = a(5685),
                d = a(17),
                O = a(7104),
                p = a(1319),
                f = r(O(), Object);
            t(f, {
                getPolyfill: O,
                implementation: d,
                shim: p
            }), y.exports = f
        },
        7104: (y, T, a) => {
            var t = a(17);
            y.exports = function() {
                return "function" == typeof Object.entries ? Object.entries : t
            }
        },
        1319: (y, T, a) => {
            var t = a(7104),
                r = a(2358);
            y.exports = function() {
                var O = t();
                return r(Object, {
                    entries: O
                }, {
                    entries: function() {
                        return Object.entries !== O
                    }
                }), O
            }
        },
        4707: (y, T, a) => {
            a.d(T, {
                t: () => d
            });
            var t = a(7579),
                r = a(6063);
            class d extends t.x {
                constructor(p = 1 / 0, f = 1 / 0, v = r.l) {
                    super(), this._bufferSize = p, this._windowTime = f, this._timestampProvider = v, this._buffer = [], this._infiniteTimeWindow = !0, this._infiniteTimeWindow = f === 1 / 0, this._bufferSize = Math.max(1, p), this._windowTime = Math.max(1, f)
                }
                next(p) {
                    const {
                        isStopped: f,
                        _buffer: v,
                        _infiniteTimeWindow: A,
                        _timestampProvider: M,
                        _windowTime: I
                    } = this;
                    f || (v.push(p), !A && v.push(M.now() + I)), this._trimBuffer(), super.next(p)
                }
                _subscribe(p) {
                    this._throwIfClosed(), this._trimBuffer();
                    const f = this._innerSubscribe(p),
                        {
                            _infiniteTimeWindow: v,
                            _buffer: A
                        } = this,
                        M = A.slice();
                    for (let I = 0; I < M.length && !p.closed; I += v ? 1 : 2) p.next(M[I]);
                    return this._checkFinalizedStatuses(p), f
                }
                _trimBuffer() {
                    const {
                        _bufferSize: p,
                        _timestampProvider: f,
                        _buffer: v,
                        _infiniteTimeWindow: A
                    } = this, M = (A ? 1 : 2) * p;
                    if (p < 1 / 0 && M < v.length && v.splice(0, v.length - M), !A) {
                        const I = f.now();
                        let z = 0;
                        for (let V = 1; V < v.length && v[V] <= I; V += 2) z = V;
                        z && v.splice(0, z + 1)
                    }
                }
            }
        },
        4968: (y, T, a) => {
            a.d(T, {
                R: () => I
            });
            var t = a(8421),
                r = a(9751),
                d = a(5577),
                O = a(1144),
                p = a(576),
                f = a(3268);
            const v = ["addListener", "removeListener"],
                A = ["addEventListener", "removeEventListener"],
                M = ["on", "off"];

            function I(ce, ve, Oe, oe) {
                if ((0, p.m)(Oe) && (oe = Oe, Oe = void 0), oe) return I(ce, ve, Oe).pipe((0, f.Z)(oe));
                const [Me, Ne] = function ie(ce) {
                    return (0, p.m)(ce.addEventListener) && (0, p.m)(ce.removeEventListener)
                }(ce) ? A.map(pe => k => ce[pe](ve, k, Oe)): function V(ce) {
                    return (0, p.m)(ce.addListener) && (0, p.m)(ce.removeListener)
                }(ce) ? v.map(z(ce, ve)) : function J(ce) {
                    return (0, p.m)(ce.on) && (0, p.m)(ce.off)
                }(ce) ? M.map(z(ce, ve)) : [];
                if (!Me && (0, O.z)(ce)) return (0, d.z)(pe => I(pe, ve, Oe))((0, t.Xf)(ce));
                if (!Me) throw new TypeError("Invalid event target");
                return new r.y(pe => {
                    const k = (..._) => pe.next(1 < _.length ? _ : _[0]);
                    return Me(k), () => Ne(k)
                })
            }

            function z(ce, ve) {
                return Oe => oe => ce[Oe](ve, oe)
            }
        },
        2805: (y, T, a) => {
            a.d(T, {
                H: () => p
            });
            var t = a(9751),
                r = a(4986),
                d = a(3532),
                O = a(1165);

            function p(f = 0, v, A = r.P) {
                let M = -1;
                return null != v && ((0, d.K)(v) ? A = v : M = v), new t.y(I => {
                    let z = (0, O.q)(f) ? +f - A.now() : f;
                    z < 0 && (z = 0);
                    let V = 0;
                    return A.schedule(function() {
                        I.closed || (I.next(V++), 0 <= M ? this.schedule(void 0, M) : I.complete())
                    }, z)
                })
            }
        },
        8372: (y, T, a) => {
            a.d(T, {
                b: () => O
            });
            var t = a(4986),
                r = a(4482),
                d = a(5403);

            function O(p, f = t.z) {
                return (0, r.e)((v, A) => {
                    let M = null,
                        I = null,
                        z = null;
                    const V = () => {
                        if (M) {
                            M.unsubscribe(), M = null;
                            const ie = I;
                            I = null, A.next(ie)
                        }
                    };

                    function J() {
                        const ie = z + p,
                            ce = f.now();
                        if (ce < ie) return M = this.schedule(void 0, ie - ce), void A.add(M);
                        V()
                    }
                    v.subscribe((0, d.x)(A, ie => {
                        I = ie, z = f.now(), M || (M = f.schedule(J, p), A.add(M))
                    }, () => {
                        V(), A.complete()
                    }, void 0, () => {
                        I = M = null
                    }))
                })
            }
        },
        1884: (y, T, a) => {
            a.d(T, {
                x: () => O
            });
            var t = a(4671),
                r = a(4482),
                d = a(5403);

            function O(f, v = t.y) {
                return f = f ? ? p, (0, r.e)((A, M) => {
                    let I, z = !0;
                    A.subscribe((0, d.x)(M, V => {
                        const J = v(V);
                        (z || !f(I, J)) && (z = !1, I = J, M.next(V))
                    }))
                })
            }

            function p(f, v) {
                return f === v
            }
        },
        5684: (y, T, a) => {
            a.d(T, {
                T: () => r
            });
            var t = a(9300);

            function r(d) {
                return (0, t.h)((O, p) => d <= p)
            }
        },
        2722: (y, T, a) => {
            a.d(T, {
                R: () => p
            });
            var t = a(4482),
                r = a(5403),
                d = a(8421),
                O = a(5032);

            function p(f) {
                return (0, t.e)((v, A) => {
                    (0, d.Xf)(f).subscribe((0, r.x)(A, () => A.complete(), O.Z)), !A.closed && v.subscribe(A)
                })
            }
        },
        4408: (y, T, a) => {
            a.d(T, {
                o: () => p
            });
            var t = a(727);
            class r extends t.w0 {
                constructor(v, A) {
                    super()
                }
                schedule(v, A = 0) {
                    return this
                }
            }
            const d = {
                setInterval(f, v, ...A) {
                    const {
                        delegate: M
                    } = d;
                    return M ? .setInterval ? M.setInterval(f, v, ...A) : setInterval(f, v, ...A)
                },
                clearInterval(f) {
                    const {
                        delegate: v
                    } = d;
                    return (v ? .clearInterval || clearInterval)(f)
                },
                delegate: void 0
            };
            var O = a(8737);
            class p extends r {
                constructor(v, A) {
                    super(v, A), this.scheduler = v, this.work = A, this.pending = !1
                }
                schedule(v, A = 0) {
                    var M;
                    if (this.closed) return this;
                    this.state = v;
                    const I = this.id,
                        z = this.scheduler;
                    return null != I && (this.id = this.recycleAsyncId(z, I, A)), this.pending = !0, this.delay = A, this.id = null !== (M = this.id) && void 0 !== M ? M : this.requestAsyncId(z, this.id, A), this
                }
                requestAsyncId(v, A, M = 0) {
                    return d.setInterval(v.flush.bind(v, this), M)
                }
                recycleAsyncId(v, A, M = 0) {
                    if (null != M && this.delay === M && !1 === this.pending) return A;
                    null != A && d.clearInterval(A)
                }
                execute(v, A) {
                    if (this.closed) return new Error("executing a cancelled action");
                    this.pending = !1;
                    const M = this._execute(v, A);
                    if (M) return M;
                    !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                }
                _execute(v, A) {
                    let I, M = !1;
                    try {
                        this.work(v)
                    } catch (z) {
                        M = !0, I = z || new Error("Scheduled action threw falsy error")
                    }
                    if (M) return this.unsubscribe(), I
                }
                unsubscribe() {
                    if (!this.closed) {
                        const {
                            id: v,
                            scheduler: A
                        } = this, {
                            actions: M
                        } = A;
                        this.work = this.state = this.scheduler = null, this.pending = !1, (0, O.P)(M, this), null != v && (this.id = this.recycleAsyncId(A, v, null)), this.delay = null, super.unsubscribe()
                    }
                }
            }
        },
        7565: (y, T, a) => {
            a.d(T, {
                v: () => d
            });
            var t = a(6063);
            class r {
                constructor(p, f = r.now) {
                    this.schedulerActionCtor = p, this.now = f
                }
                schedule(p, f = 0, v) {
                    return new this.schedulerActionCtor(this, p).schedule(v, f)
                }
            }
            r.now = t.l.now;
            class d extends r {
                constructor(p, f = r.now) {
                    super(p, f), this.actions = [], this._active = !1
                }
                flush(p) {
                    const {
                        actions: f
                    } = this;
                    if (this._active) return void f.push(p);
                    let v;
                    this._active = !0;
                    do {
                        if (v = p.execute(p.state, p.delay)) break
                    } while (p = f.shift());
                    if (this._active = !1, v) {
                        for (; p = f.shift();) p.unsubscribe();
                        throw v
                    }
                }
            }
        },
        4986: (y, T, a) => {
            a.d(T, {
                P: () => O,
                z: () => d
            });
            var t = a(4408);
            const d = new(a(7565).v)(t.o),
                O = d
        },
        6063: (y, T, a) => {
            a.d(T, {
                l: () => t
            });
            const t = {
                now: () => (t.delegate || Date).now(),
                delegate: void 0
            }
        },
        5797: (y, T, a) => {
            a.d(T, {
                k: () => r
            });
            const {
                isArray: t
            } = Array;

            function r(d) {
                return 1 === d.length && t(d[0]) ? d[0] : d
            }
        },
        1165: (y, T, a) => {
            function t(r) {
                return r instanceof Date && !isNaN(r)
            }
            a.d(T, {
                q: () => t
            })
        },
        1634: (y, T, a) => {
            var t = a(5834),
                r = a(5203),
                d = a(2342),
                O = t("RegExp.prototype.exec"),
                p = r("%TypeError%");
            y.exports = function(v) {
                if (!d(v)) throw new p("`regex` must be a RegExp");
                return function(M) {
                    return null !== O(v, M)
                }
            }
        },
        7393: (y, T, a) => {
            var t = a(8188),
                r = a(5814),
                O = a(5834)("String.prototype.replace"),
                p = /^\s$/.test("\u180e"),
                f = p ? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/ : /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,
                v = p ? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/ : /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
            y.exports = function() {
                var M = r(t(this));
                return O(O(M, f, ""), v, "")
            }
        },
        4012: (y, T, a) => {
            var t = a(5685),
                r = a(2358),
                d = a(8188),
                O = a(7393),
                p = a(5783),
                f = a(1488),
                v = t(p()),
                A = function(I) {
                    return d(I), v(I)
                };
            r(A, {
                getPolyfill: p,
                implementation: O,
                shim: f
            }), y.exports = A
        },
        5783: (y, T, a) => {
            var t = a(7393);
            y.exports = function() {
                return String.prototype.trim && "\u200b" === "\u200b".trim() && "\u180e" === "\u180e".trim() && "_\u180e" === "_\u180e".trim() && "\u180e_" === "\u180e_".trim() ? String.prototype.trim : t
            }
        },
        1488: (y, T, a) => {
            var t = a(2358),
                r = a(5783);
            y.exports = function() {
                var O = r();
                return t(String.prototype, {
                    trim: O
                }, {
                    trim: function() {
                        return String.prototype.trim !== O
                    }
                }), O
            }
        },
        7961: y => {
            y.exports = function() {}
        },
        4654: () => {},
        2228: (y, T, a) => {
            var t = a(5203),
                r = a(5834),
                d = t("%TypeError%"),
                O = a(9324),
                p = t("%Reflect.apply%", !0) || r("Function.prototype.apply");
            y.exports = function(v, A) {
                var M = arguments.length > 2 ? arguments[2] : [];
                if (!O(M)) throw new d("Assertion failed: optional `argumentsList`, if provided, must be a List");
                return p(v, A, M)
            }
        },
        5906: (y, T, a) => {
            var r = a(5203)("%TypeError%"),
                d = a(7024),
                O = a(7471),
                p = a(2128);
            y.exports = function(v, A) {
                if ("Object" !== p(v)) throw new r("Assertion failed: Type(O) is not Object");
                if (!O(A)) throw new r("Assertion failed: IsPropertyKey(P) is not true, got " + d(A));
                return v[A]
            }
        },
        8111: (y, T, a) => {
            var r = a(5203)("%TypeError%"),
                d = a(7471),
                O = a(2128);
            y.exports = function(f, v) {
                if ("Object" !== O(f)) throw new r("Assertion failed: `O` must be an Object");
                if (!d(v)) throw new r("Assertion failed: `P` must be a Property Key");
                return v in f
            }
        },
        9324: (y, T, a) => {
            y.exports = a(647)
        },
        8109: (y, T, a) => {
            y.exports = a(7566)
        },
        7471: y => {
            y.exports = function(a) {
                return "string" == typeof a || "symbol" == typeof a
            }
        },
        8241: (y, T, a) => {
            var r = a(5203)("%TypeError%"),
                d = a(5906),
                O = a(635),
                p = a(2128);
            y.exports = function(v) {
                if ("Object" !== p(v)) throw new r("Assertion failed: `obj` must be an Object");
                return O(d(v, "length"))
            }
        },
        8188: (y, T, a) => {
            y.exports = a(3140)
        },
        2659: (y, T, a) => {
            var t = a(5203),
                r = t("%Number%"),
                d = t("%RegExp%"),
                O = t("%TypeError%"),
                p = t("%parseInt%"),
                f = a(5834),
                v = a(1634),
                A = f("String.prototype.slice"),
                M = v(/^0b[01]+$/i),
                I = v(/^0o[0-7]+$/i),
                z = v(/^[-+]0x[0-9a-f]+$/i),
                ie = v(new d("[" + ["\x85", "\u200b", "\ufffe"].join("") + "]", "g")),
                ce = a(4012),
                ve = a(2128);
            y.exports = function Oe(oe) {
                if ("String" !== ve(oe)) throw new O("Assertion failed: `argument` is not a String");
                if (M(oe)) return r(p(A(oe, 2), 2));
                if (I(oe)) return r(p(A(oe, 2), 8));
                if (ie(oe) || z(oe)) return NaN;
                var Me = ce(oe);
                return Me !== oe ? Oe(Me) : r(oe)
            }
        },
        4070: (y, T, a) => {
            var t = a(699),
                r = a(6599),
                d = a(4357),
                O = a(7711),
                p = a(8054),
                f = a(7270);
            y.exports = function(A) {
                var M = d(A);
                if (O(M) || 0 === M) return 0;
                if (!p(M)) return M;
                var I = r(t(M));
                return 0 === I ? 0 : f(M) * I
            }
        },
        635: (y, T, a) => {
            var t = a(5055),
                r = a(4070);
            y.exports = function(O) {
                var p = r(O);
                return p <= 0 ? 0 : p > t ? t : p
            }
        },
        4357: (y, T, a) => {
            var t = a(5203),
                r = t("%TypeError%"),
                d = t("%Number%"),
                O = a(9020),
                p = a(7118),
                f = a(2659);
            y.exports = function(A) {
                var M = O(A) ? A : p(A, d);
                if ("symbol" == typeof M) throw new r("Cannot convert a Symbol value to a number");
                if ("bigint" == typeof M) throw new r("Conversion from 'BigInt' to 'number' is not allowed.");
                return "string" == typeof M ? f(M) : d(M)
            }
        },
        353: (y, T, a) => {
            var r = a(5203)("%Object%"),
                d = a(8188);
            y.exports = function(p) {
                return d(p), r(p)
            }
        },
        7118: (y, T, a) => {
            var t = a(3858);
            y.exports = function(d) {
                return arguments.length > 1 ? t(d, arguments[1]) : t(d)
            }
        },
        5814: (y, T, a) => {
            var t = a(5203),
                r = t("%String%"),
                d = t("%TypeError%");
            y.exports = function(p) {
                if ("symbol" == typeof p) throw new d("Cannot convert a Symbol value to a string");
                return r(p)
            }
        },
        2128: (y, T, a) => {
            var t = a(7233);
            y.exports = function(d) {
                return "symbol" == typeof d ? "Symbol" : "bigint" == typeof d ? "BigInt" : t(d)
            }
        },
        699: (y, T, a) => {
            var r = a(5203)("%Math.abs%");
            y.exports = function(O) {
                return r(O)
            }
        },
        6599: (y, T, a) => {
            var t = a(2128),
                r = Math.floor;
            y.exports = function(O) {
                return "BigInt" === t(O) ? O : r(O)
            }
        },
        3140: (y, T, a) => {
            var r = a(5203)("%TypeError%");
            y.exports = function(O, p) {
                if (null == O) throw new r(p || "Cannot call method on " + O);
                return O
            }
        },
        7233: y => {
            y.exports = function(a) {
                return null === a ? "Null" : typeof a > "u" ? "Undefined" : "function" == typeof a || "object" == typeof a ? "Object" : "number" == typeof a ? "Number" : "boolean" == typeof a ? "Boolean" : "string" == typeof a ? "String" : void 0
            }
        },
        647: (y, T, a) => {
            var r = a(5203)("%Array%"),
                d = !r.isArray && a(5834)("Object.prototype.toString");
            y.exports = r.isArray || function(p) {
                return "[object Array]" === d(p)
            }
        },
        8054: (y, T, a) => {
            var t = a(7711);
            y.exports = function(r) {
                return ("number" == typeof r || "bigint" == typeof r) && !t(r) && r !== 1 / 0 && r !== -1 / 0
            }
        },
        7711: y => {
            y.exports = Number.isNaN || function(a) {
                return a != a
            }
        },
        9020: y => {
            y.exports = function(a) {
                return null === a || "function" != typeof a && "object" != typeof a
            }
        },
        5055: (y, T, a) => {
            var t = a(5203),
                r = t("%Math%"),
                d = t("%Number%");
            y.exports = d.MAX_SAFE_INTEGER || r.pow(2, 53) - 1
        },
        7270: y => {
            y.exports = function(a) {
                return a >= 0 ? 1 : -1
            }
        },
        2687: (y, T, a) => {
            a.d(T, {
                Kd: () => mt,
                X6: () => Ve,
                qm: () => ne,
                s1: () => be,
                tE: () => he,
                yG: () => ue
            });
            var t = a(3512),
                r = a(8125),
                d = a(3353),
                O = a(7579),
                p = a(727),
                f = a(1135),
                v = a(9646),
                A = a(9521),
                M = a(8505),
                I = a(8372),
                z = a(9300),
                V = a(4004),
                J = a(5684),
                ie = a(1884),
                ce = a(2722),
                ve = a(1281),
                Oe = a(2289);
            class be extends class ge {
                constructor(h) {
                    this._items = h, this._activeItemIndex = -1, this._activeItem = null, this._wrap = !1, this._letterKeyStream = new O.x, this._typeaheadSubscription = p.w0.EMPTY, this._vertical = !0, this._allowedModifierKeys = [], this._homeAndEnd = !1, this._skipPredicateFn = x => x.disabled, this._pressedLetters = [], this.tabOut = new O.x, this.change = new O.x, h instanceof r.QueryList && h.changes.subscribe(x => {
                        if (this._activeItem) {
                            const le = x.toArray().indexOf(this._activeItem);
                            le > -1 && le !== this._activeItemIndex && (this._activeItemIndex = le)
                        }
                    })
                }
                skipPredicate(h) {
                    return this._skipPredicateFn = h, this
                }
                withWrap(h = !0) {
                    return this._wrap = h, this
                }
                withVerticalOrientation(h = !0) {
                    return this._vertical = h, this
                }
                withHorizontalOrientation(h) {
                    return this._horizontal = h, this
                }
                withAllowedModifierKeys(h) {
                    return this._allowedModifierKeys = h, this
                }
                withTypeAhead(h = 200) {
                    return this._typeaheadSubscription.unsubscribe(), this._typeaheadSubscription = this._letterKeyStream.pipe((0, M.b)(x => this._pressedLetters.push(x)), (0, I.b)(h), (0, z.h)(() => this._pressedLetters.length > 0), (0, V.U)(() => this._pressedLetters.join(""))).subscribe(x => {
                        const X = this._getItemsArray();
                        for (let le = 1; le < X.length + 1; le++) {
                            const Ue = (this._activeItemIndex + le) % X.length,
                                Xe = X[Ue];
                            if (!this._skipPredicateFn(Xe) && 0 === Xe.getLabel().toUpperCase().trim().indexOf(x)) {
                                this.setActiveItem(Ue);
                                break
                            }
                        }
                        this._pressedLetters = []
                    }), this
                }
                withHomeAndEnd(h = !0) {
                    return this._homeAndEnd = h, this
                }
                setActiveItem(h) {
                    const x = this._activeItem;
                    this.updateActiveItem(h), this._activeItem !== x && this.change.next(this._activeItemIndex)
                }
                onKeydown(h) {
                    const x = h.keyCode,
                        le = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(Ue => !h[Ue] || this._allowedModifierKeys.indexOf(Ue) > -1);
                    switch (x) {
                        case A.Mf:
                            return void this.tabOut.next();
                        case A.JH:
                            if (this._vertical && le) {
                                this.setNextItemActive();
                                break
                            }
                            return;
                        case A.LH:
                            if (this._vertical && le) {
                                this.setPreviousItemActive();
                                break
                            }
                            return;
                        case A.SV:
                            if (this._horizontal && le) {
                                "rtl" === this._horizontal ? this.setPreviousItemActive() : this.setNextItemActive();
                                break
                            }
                            return;
                        case A.oh:
                            if (this._horizontal && le) {
                                "rtl" === this._horizontal ? this.setNextItemActive() : this.setPreviousItemActive();
                                break
                            }
                            return;
                        case A.Sd:
                            if (this._homeAndEnd && le) {
                                this.setFirstItemActive();
                                break
                            }
                            return;
                        case A.uR:
                            if (this._homeAndEnd && le) {
                                this.setLastItemActive();
                                break
                            }
                            return;
                        default:
                            return void((le || (0, A.Vb)(h, "shiftKey")) && (h.key && 1 === h.key.length ? this._letterKeyStream.next(h.key.toLocaleUpperCase()) : (x >= A.A && x <= A.Z || x >= A.xE && x <= A.aO) && this._letterKeyStream.next(String.fromCharCode(x))))
                    }
                    this._pressedLetters = [], h.preventDefault()
                }
                get activeItemIndex() {
                    return this._activeItemIndex
                }
                get activeItem() {
                    return this._activeItem
                }
                isTyping() {
                    return this._pressedLetters.length > 0
                }
                setFirstItemActive() {
                    this._setActiveItemByIndex(0, 1)
                }
                setLastItemActive() {
                    this._setActiveItemByIndex(this._items.length - 1, -1)
                }
                setNextItemActive() {
                    this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1)
                }
                setPreviousItemActive() {
                    this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1)
                }
                updateActiveItem(h) {
                    const x = this._getItemsArray(),
                        X = "number" == typeof h ? h : x.indexOf(h);
                    this._activeItem = x[X] ? ? null, this._activeItemIndex = X
                }
                _setActiveItemByDelta(h) {
                    this._wrap ? this._setActiveInWrapMode(h) : this._setActiveInDefaultMode(h)
                }
                _setActiveInWrapMode(h) {
                    const x = this._getItemsArray();
                    for (let X = 1; X <= x.length; X++) {
                        const le = (this._activeItemIndex + h * X + x.length) % x.length;
                        if (!this._skipPredicateFn(x[le])) return void this.setActiveItem(le)
                    }
                }
                _setActiveInDefaultMode(h) {
                    this._setActiveItemByIndex(this._activeItemIndex + h, h)
                }
                _setActiveItemByIndex(h, x) {
                    const X = this._getItemsArray();
                    if (X[h]) {
                        for (; this._skipPredicateFn(X[h]);)
                            if (!X[h += x]) return;
                        this.setActiveItem(h)
                    }
                }
                _getItemsArray() {
                    return this._items instanceof r.QueryList ? this._items.toArray() : this._items
                }
            } {
                setActiveItem(h) {
                    this.activeItem && this.activeItem.setInactiveStyles(), super.setActiveItem(h), this.activeItem && this.activeItem.setActiveStyles()
                }
            }

            function Ve(u) {
                return 0 === u.buttons || 0 === u.offsetX && 0 === u.offsetY
            }

            function ue(u) {
                const h = u.touches && u.touches[0] || u.changedTouches && u.changedTouches[0];
                return !(!h || -1 !== h.identifier || null != h.radiusX && 1 !== h.radiusX || null != h.radiusY && 1 !== h.radiusY)
            }
            const xe = new r.InjectionToken("cdk-input-modality-detector-options"),
                ae = {
                    ignoreKeys: [A.zL, A.jx, A.b2, A.MW, A.JU]
                },
                se = (0, d.i$)({
                    passive: !0,
                    capture: !0
                });
            let we = (() => {
                class u {
                    constructor(x, X, le, Ue) {
                        this._platform = x, this._mostRecentTarget = null, this._modality = new f.X(null), this._lastTouchMs = 0, this._onKeydown = Xe => {
                            this._options ? .ignoreKeys ? .some(ot => ot === Xe.keyCode) || (this._modality.next("keyboard"), this._mostRecentTarget = (0, d.sA)(Xe))
                        }, this._onMousedown = Xe => {
                            Date.now() - this._lastTouchMs < 650 || (this._modality.next(Ve(Xe) ? "keyboard" : "mouse"), this._mostRecentTarget = (0, d.sA)(Xe))
                        }, this._onTouchstart = Xe => {
                            ue(Xe) ? this._modality.next("keyboard") : (this._lastTouchMs = Date.now(), this._modality.next("touch"), this._mostRecentTarget = (0, d.sA)(Xe))
                        }, this._options = { ...ae,
                            ...Ue
                        }, this.modalityDetected = this._modality.pipe((0, J.T)(1)), this.modalityChanged = this.modalityDetected.pipe((0, ie.x)()), x.isBrowser && X.runOutsideAngular(() => {
                            le.addEventListener("keydown", this._onKeydown, se), le.addEventListener("mousedown", this._onMousedown, se), le.addEventListener("touchstart", this._onTouchstart, se)
                        })
                    }
                    get mostRecentModality() {
                        return this._modality.value
                    }
                    ngOnDestroy() {
                        this._modality.complete(), this._platform.isBrowser && (document.removeEventListener("keydown", this._onKeydown, se), document.removeEventListener("mousedown", this._onMousedown, se), document.removeEventListener("touchstart", this._onTouchstart, se))
                    }
                }
                return u.\u0275fac = function(x) {
                    return new(x || u)(r.\u0275\ u0275inject(d.t4), r.\u0275\ u0275inject(r.NgZone), r.\u0275\ u0275inject(t.DOCUMENT), r.\u0275\ u0275inject(xe, 8))
                }, u.\u0275prov = r.\u0275\ u0275defineInjectable({
                    token: u,
                    factory: u.\u0275fac,
                    providedIn: "root"
                }), u
            })();
            const Ye = new r.InjectionToken("liveAnnouncerElement", {
                    providedIn: "root",
                    factory: function Ze() {
                        return null
                    }
                }),
                dt = new r.InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
            let mt = (() => {
                class u {
                    constructor(x, X, le, Ue) {
                        this._ngZone = X, this._defaultOptions = Ue, this._document = le, this._liveElement = x || this._createLiveElement()
                    }
                    announce(x, ...X) {
                        const le = this._defaultOptions;
                        let Ue, Xe;
                        return 1 === X.length && "number" == typeof X[0] ? Xe = X[0] : [Ue, Xe] = X, this.clear(), clearTimeout(this._previousTimeout), Ue || (Ue = le && le.politeness ? le.politeness : "polite"), null == Xe && le && (Xe = le.duration), this._liveElement.setAttribute("aria-live", Ue), this._ngZone.runOutsideAngular(() => (this._currentPromise || (this._currentPromise = new Promise(ot => this._currentResolve = ot)), clearTimeout(this._previousTimeout), this._previousTimeout = setTimeout(() => {
                            this._liveElement.textContent = x, "number" == typeof Xe && (this._previousTimeout = setTimeout(() => this.clear(), Xe)), this._currentResolve(), this._currentPromise = this._currentResolve = void 0
                        }, 100), this._currentPromise))
                    }
                    clear() {
                        this._liveElement && (this._liveElement.textContent = "")
                    }
                    ngOnDestroy() {
                        clearTimeout(this._previousTimeout), this._liveElement ? .remove(), this._liveElement = null, this._currentResolve ? .(), this._currentPromise = this._currentResolve = void 0
                    }
                    _createLiveElement() {
                        const x = "cdk-live-announcer-element",
                            X = this._document.getElementsByClassName(x),
                            le = this._document.createElement("div");
                        for (let Ue = 0; Ue < X.length; Ue++) X[Ue].remove();
                        return le.classList.add(x), le.classList.add("cdk-visually-hidden"), le.setAttribute("aria-atomic", "true"), le.setAttribute("aria-live", "polite"), this._document.body.appendChild(le), le
                    }
                }
                return u.\u0275fac = function(x) {
                    return new(x || u)(r.\u0275\ u0275inject(Ye, 8), r.\u0275\ u0275inject(r.NgZone), r.\u0275\ u0275inject(t.DOCUMENT), r.\u0275\ u0275inject(dt, 8))
                }, u.\u0275prov = r.\u0275\ u0275defineInjectable({
                    token: u,
                    factory: u.\u0275fac,
                    providedIn: "root"
                }), u
            })();
            const Re = new r.InjectionToken("cdk-focus-monitor-default-options"),
                D = (0, d.i$)({
                    passive: !0,
                    capture: !0
                });
            let he = (() => {
                class u {
                    constructor(x, X, le, Ue, Xe) {
                        this._ngZone = x, this._platform = X, this._inputModalityDetector = le, this._origin = null, this._windowFocused = !1, this._originFromTouchInteraction = !1, this._elementInfo = new Map, this._monitoredElementCount = 0, this._rootNodeFocusListenerCount = new Map, this._windowFocusListener = () => {
                            this._windowFocused = !0, this._windowFocusTimeoutId = window.setTimeout(() => this._windowFocused = !1)
                        }, this._stopInputModalityDetector = new O.x, this._rootNodeFocusAndBlurListener = ot => {
                            for (let jt = (0, d.sA)(ot); jt; jt = jt.parentElement) "focus" === ot.type ? this._onFocus(ot, jt) : this._onBlur(ot, jt)
                        }, this._document = Ue, this._detectionMode = Xe ? .detectionMode || 0
                    }
                    monitor(x, X = !1) {
                        const le = (0, ve.fI)(x);
                        if (!this._platform.isBrowser || 1 !== le.nodeType) return (0, v.of)(null);
                        const Ue = (0, d.kV)(le) || this._getDocument(),
                            Xe = this._elementInfo.get(le);
                        if (Xe) return X && (Xe.checkChildren = !0), Xe.subject;
                        const ot = {
                            checkChildren: X,
                            subject: new O.x,
                            rootNode: Ue
                        };
                        return this._elementInfo.set(le, ot), this._registerGlobalListeners(ot), ot.subject
                    }
                    stopMonitoring(x) {
                        const X = (0, ve.fI)(x),
                            le = this._elementInfo.get(X);
                        le && (le.subject.complete(), this._setClasses(X), this._elementInfo.delete(X), this._removeGlobalListeners(le))
                    }
                    focusVia(x, X, le) {
                        const Ue = (0, ve.fI)(x);
                        Ue === this._getDocument().activeElement ? this._getClosestElementsInfo(Ue).forEach(([ot, pt]) => this._originChanged(ot, X, pt)) : (this._setOrigin(X), "function" == typeof Ue.focus && Ue.focus(le))
                    }
                    ngOnDestroy() {
                        this._elementInfo.forEach((x, X) => this.stopMonitoring(X))
                    }
                    _getDocument() {
                        return this._document || document
                    }
                    _getWindow() {
                        return this._getDocument().defaultView || window
                    }
                    _getFocusOrigin(x) {
                        return this._origin ? this._originFromTouchInteraction ? this._shouldBeAttributedToTouch(x) ? "touch" : "program" : this._origin : this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : x && this._isLastInteractionFromInputLabel(x) ? "mouse" : "program"
                    }
                    _shouldBeAttributedToTouch(x) {
                        return 1 === this._detectionMode || !!x ? .contains(this._inputModalityDetector._mostRecentTarget)
                    }
                    _setClasses(x, X) {
                        x.classList.toggle("cdk-focused", !!X), x.classList.toggle("cdk-touch-focused", "touch" === X), x.classList.toggle("cdk-keyboard-focused", "keyboard" === X), x.classList.toggle("cdk-mouse-focused", "mouse" === X), x.classList.toggle("cdk-program-focused", "program" === X)
                    }
                    _setOrigin(x, X = !1) {
                        this._ngZone.runOutsideAngular(() => {
                            this._origin = x, this._originFromTouchInteraction = "touch" === x && X, 0 === this._detectionMode && (clearTimeout(this._originTimeoutId), this._originTimeoutId = setTimeout(() => this._origin = null, this._originFromTouchInteraction ? 650 : 1))
                        })
                    }
                    _onFocus(x, X) {
                        const le = this._elementInfo.get(X),
                            Ue = (0, d.sA)(x);
                        !le || !le.checkChildren && X !== Ue || this._originChanged(X, this._getFocusOrigin(Ue), le)
                    }
                    _onBlur(x, X) {
                        const le = this._elementInfo.get(X);
                        !le || le.checkChildren && x.relatedTarget instanceof Node && X.contains(x.relatedTarget) || (this._setClasses(X), this._emitOrigin(le, null))
                    }
                    _emitOrigin(x, X) {
                        x.subject.observers.length && this._ngZone.run(() => x.subject.next(X))
                    }
                    _registerGlobalListeners(x) {
                        if (!this._platform.isBrowser) return;
                        const X = x.rootNode,
                            le = this._rootNodeFocusListenerCount.get(X) || 0;
                        le || this._ngZone.runOutsideAngular(() => {
                            X.addEventListener("focus", this._rootNodeFocusAndBlurListener, D), X.addEventListener("blur", this._rootNodeFocusAndBlurListener, D)
                        }), this._rootNodeFocusListenerCount.set(X, le + 1), 1 == ++this._monitoredElementCount && (this._ngZone.runOutsideAngular(() => {
                            this._getWindow().addEventListener("focus", this._windowFocusListener)
                        }), this._inputModalityDetector.modalityDetected.pipe((0, ce.R)(this._stopInputModalityDetector)).subscribe(Ue => {
                            this._setOrigin(Ue, !0)
                        }))
                    }
                    _removeGlobalListeners(x) {
                        const X = x.rootNode;
                        if (this._rootNodeFocusListenerCount.has(X)) {
                            const le = this._rootNodeFocusListenerCount.get(X);
                            le > 1 ? this._rootNodeFocusListenerCount.set(X, le - 1) : (X.removeEventListener("focus", this._rootNodeFocusAndBlurListener, D), X.removeEventListener("blur", this._rootNodeFocusAndBlurListener, D), this._rootNodeFocusListenerCount.delete(X))
                        }--this._monitoredElementCount || (this._getWindow().removeEventListener("focus", this._windowFocusListener), this._stopInputModalityDetector.next(), clearTimeout(this._windowFocusTimeoutId), clearTimeout(this._originTimeoutId))
                    }
                    _originChanged(x, X, le) {
                        this._setClasses(x, X), this._emitOrigin(le, X), this._lastFocusOrigin = X
                    }
                    _getClosestElementsInfo(x) {
                        const X = [];
                        return this._elementInfo.forEach((le, Ue) => {
                            (Ue === x || le.checkChildren && Ue.contains(x)) && X.push([Ue, le])
                        }), X
                    }
                    _isLastInteractionFromInputLabel(x) {
                        const {
                            _mostRecentTarget: X,
                            mostRecentModality: le
                        } = this._inputModalityDetector;
                        if ("mouse" !== le || !X || X === x || "INPUT" !== x.nodeName && "TEXTAREA" !== x.nodeName || x.disabled) return !1;
                        const Ue = x.labels;
                        if (Ue)
                            for (let Xe = 0; Xe < Ue.length; Xe++)
                                if (Ue[Xe].contains(X)) return !0;
                        return !1
                    }
                }
                return u.\u0275fac = function(x) {
                    return new(x || u)(r.\u0275\ u0275inject(r.NgZone), r.\u0275\ u0275inject(d.t4), r.\u0275\ u0275inject(we), r.\u0275\ u0275inject(t.DOCUMENT, 8), r.\u0275\ u0275inject(Re, 8))
                }, u.\u0275prov = r.\u0275\ u0275defineInjectable({
                    token: u,
                    factory: u.\u0275fac,
                    providedIn: "root"
                }), u
            })();
            const $ = "cdk-high-contrast-black-on-white",
                G = "cdk-high-contrast-white-on-black",
                Be = "cdk-high-contrast-active";
            let ne = (() => {
                class u {
                    constructor(x, X) {
                        this._platform = x, this._document = X, this._breakpointSubscription = (0, r.inject)(Oe.Yg).observe("(forced-colors: active)").subscribe(() => {
                            this._hasCheckedHighContrastMode && (this._hasCheckedHighContrastMode = !1, this._applyBodyHighContrastModeCssClasses())
                        })
                    }
                    getHighContrastMode() {
                        if (!this._platform.isBrowser) return 0;
                        const x = this._document.createElement("div");
                        x.style.backgroundColor = "rgb(1,2,3)", x.style.position = "absolute", this._document.body.appendChild(x);
                        const X = this._document.defaultView || window,
                            le = X && X.getComputedStyle ? X.getComputedStyle(x) : null,
                            Ue = (le && le.backgroundColor || "").replace(/ /g, "");
                        switch (x.remove(), Ue) {
                            case "rgb(0,0,0)":
                            case "rgb(45,50,54)":
                            case "rgb(32,32,32)":
                                return 2;
                            case "rgb(255,255,255)":
                            case "rgb(255,250,239)":
                                return 1
                        }
                        return 0
                    }
                    ngOnDestroy() {
                        this._breakpointSubscription.unsubscribe()
                    }
                    _applyBodyHighContrastModeCssClasses() {
                        if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
                            const x = this._document.body.classList;
                            x.remove(Be, $, G), this._hasCheckedHighContrastMode = !0;
                            const X = this.getHighContrastMode();
                            1 === X ? x.add(Be, $) : 2 === X && x.add(Be, G)
                        }
                    }
                }
                return u.\u0275fac = function(x) {
                    return new(x || u)(r.\u0275\ u0275inject(d.t4), r.\u0275\ u0275inject(t.DOCUMENT))
                }, u.\u0275prov = r.\u0275\ u0275defineInjectable({
                    token: u,
                    factory: u.\u0275fac,
                    providedIn: "root"
                }), u
            })()
        },
        445: (y, T, a) => {
            a.d(T, {
                Is: () => v,
                vT: () => M
            });
            var t = a(8125),
                r = a(3512);
            const d = new t.InjectionToken("cdk-dir-doc", {
                    providedIn: "root",
                    factory: function O() {
                        return (0, t.inject)(r.DOCUMENT)
                    }
                }),
                p = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
            let v = (() => {
                    class I {
                        constructor(V) {
                            if (this.value = "ltr", this.change = new t.EventEmitter, V) {
                                const ie = V.documentElement ? V.documentElement.dir : null;
                                this.value = function f(I) {
                                    const z = I ? .toLowerCase() || "";
                                    return "auto" === z && typeof navigator < "u" && navigator ? .language ? p.test(navigator.language) ? "rtl" : "ltr" : "rtl" === z ? "rtl" : "ltr"
                                }((V.body ? V.body.dir : null) || ie || "ltr")
                            }
                        }
                        ngOnDestroy() {
                            this.change.complete()
                        }
                    }
                    return I.\u0275fac = function(V) {
                        return new(V || I)(t.\u0275\ u0275inject(d, 8))
                    }, I.\u0275prov = t.\u0275\ u0275defineInjectable({
                        token: I,
                        factory: I.\u0275fac,
                        providedIn: "root"
                    }), I
                })(),
                M = (() => {
                    class I {}
                    return I.\u0275fac = function(V) {
                        return new(V || I)
                    }, I.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: I
                    }), I.\u0275inj = t.\u0275\ u0275defineInjector({}), I
                })()
        },
        1281: (y, T, a) => {
            a.d(T, {
                Eq: () => p,
                HM: () => f,
                Ig: () => r,
                fI: () => v,
                su: () => d
            });
            var t = a(8125);

            function r(M) {
                return null != M && "false" != `${M}`
            }

            function d(M, I = 0) {
                return function O(M) {
                    return !isNaN(parseFloat(M)) && !isNaN(Number(M))
                }(M) ? Number(M) : I
            }

            function p(M) {
                return Array.isArray(M) ? M : [M]
            }

            function f(M) {
                return null == M ? "" : "string" == typeof M ? M : `${M}px`
            }

            function v(M) {
                return M instanceof t.ElementRef ? M.nativeElement : M
            }
        },
        9521: (y, T, a) => {
            a.d(T, {
                A: () => Pt,
                JH: () => Ne,
                JU: () => f,
                K5: () => p,
                LH: () => oe,
                L_: () => V,
                MW: () => L,
                Mf: () => d,
                SV: () => Me,
                Sd: () => ve,
                Vb: () => zn,
                Z: () => mt,
                aO: () => rt,
                b2: () => An,
                hY: () => z,
                jx: () => v,
                oh: () => Oe,
                uR: () => ce,
                xE: () => Y,
                zL: () => A
            });
            const d = 9,
                p = 13,
                f = 16,
                v = 17,
                A = 18,
                z = 27,
                V = 32,
                ce = 35,
                ve = 36,
                Oe = 37,
                oe = 38,
                Me = 39,
                Ne = 40,
                Y = 48,
                rt = 57,
                Pt = 65,
                mt = 90,
                L = 91,
                An = 224;

            function zn(an, ...Fn) {
                return Fn.length ? Fn.some(Gn => an[Gn]) : an.altKey || an.shiftKey || an.ctrlKey || an.metaKey
            }
        },
        2289: (y, T, a) => {
            a.d(T, {
                Yg: () => Ne,
                u3: () => k
            });
            var t = a(8125),
                r = a(1281),
                d = a(7579),
                O = a(9841),
                p = a(7272),
                f = a(9751),
                v = a(5698),
                A = a(5684),
                M = a(8372),
                I = a(4004),
                z = a(8675),
                V = a(2722),
                J = a(3353);
            const ce = new Set;
            let ve, Oe = (() => {
                class _ {
                    constructor(Y) {
                        this._platform = Y, this._matchMedia = this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : Me
                    }
                    matchMedia(Y) {
                        return (this._platform.WEBKIT || this._platform.BLINK) && function oe(_) {
                            if (!ce.has(_)) try {
                                ve || (ve = document.createElement("style"), ve.setAttribute("type", "text/css"), document.head.appendChild(ve)), ve.sheet && (ve.sheet.insertRule(`@media ${_} {body{ }}`, 0), ce.add(_))
                            } catch (N) {
                                console.error(N)
                            }
                        }(Y), this._matchMedia(Y)
                    }
                }
                return _.\u0275fac = function(Y) {
                    return new(Y || _)(t.\u0275\ u0275inject(J.t4))
                }, _.\u0275prov = t.\u0275\ u0275defineInjectable({
                    token: _,
                    factory: _.\u0275fac,
                    providedIn: "root"
                }), _
            })();

            function Me(_) {
                return {
                    matches: "all" === _ || "" === _,
                    media: _,
                    addListener: () => {},
                    removeListener: () => {}
                }
            }
            let Ne = (() => {
                class _ {
                    constructor(Y, te) {
                        this._mediaMatcher = Y, this._zone = te, this._queries = new Map, this._destroySubject = new d.x
                    }
                    ngOnDestroy() {
                        this._destroySubject.next(), this._destroySubject.complete()
                    }
                    isMatched(Y) {
                        return pe((0, r.Eq)(Y)).some(Pe => this._registerQuery(Pe).mql.matches)
                    }
                    observe(Y) {
                        const Pe = pe((0, r.Eq)(Y)).map(ge => this._registerQuery(ge).observable);
                        let Z = (0, O.a)(Pe);
                        return Z = (0, p.z)(Z.pipe((0, v.q)(1)), Z.pipe((0, A.T)(1), (0, M.b)(0))), Z.pipe((0, I.U)(ge => {
                            const be = {
                                matches: !1,
                                breakpoints: {}
                            };
                            return ge.forEach(({
                                matches: Ee,
                                query: He
                            }) => {
                                be.matches = be.matches || Ee, be.breakpoints[He] = Ee
                            }), be
                        }))
                    }
                    _registerQuery(Y) {
                        if (this._queries.has(Y)) return this._queries.get(Y);
                        const te = this._mediaMatcher.matchMedia(Y),
                            Z = {
                                observable: new f.y(ge => {
                                    const be = Ee => this._zone.run(() => ge.next(Ee));
                                    return te.addListener(be), () => {
                                        te.removeListener(be)
                                    }
                                }).pipe((0, z.O)(te), (0, I.U)(({
                                    matches: ge
                                }) => ({
                                    query: Y,
                                    matches: ge
                                })), (0, V.R)(this._destroySubject)),
                                mql: te
                            };
                        return this._queries.set(Y, Z), Z
                    }
                }
                return _.\u0275fac = function(Y) {
                    return new(Y || _)(t.\u0275\ u0275inject(Oe), t.\u0275\ u0275inject(t.NgZone))
                }, _.\u0275prov = t.\u0275\ u0275defineInjectable({
                    token: _,
                    factory: _.\u0275fac,
                    providedIn: "root"
                }), _
            })();

            function pe(_) {
                return _.map(N => N.split(",")).reduce((N, Y) => N.concat(Y)).map(N => N.trim())
            }
            const k = {
                XSmall: "(max-width: 599.98px)",
                Small: "(min-width: 600px) and (max-width: 959.98px)",
                Medium: "(min-width: 960px) and (max-width: 1279.98px)",
                Large: "(min-width: 1280px) and (max-width: 1919.98px)",
                XLarge: "(min-width: 1920px)",
                Handset: "(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",
                Tablet: "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
                Web: "(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",
                HandsetPortrait: "(max-width: 599.98px) and (orientation: portrait)",
                TabletPortrait: "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",
                WebPortrait: "(min-width: 840px) and (orientation: portrait)",
                HandsetLandscape: "(max-width: 959.98px) and (orientation: landscape)",
                TabletLandscape: "(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
                WebLandscape: "(min-width: 1280px) and (orientation: landscape)"
            }
        },
        9643: (y, T, a) => {
            a.d(T, {
                Q8: () => M,
                wD: () => A
            });
            var t = a(1281),
                r = a(8125),
                d = a(9751),
                O = a(7579),
                p = a(8372);
            let f = (() => {
                    class I {
                        create(V) {
                            return typeof MutationObserver > "u" ? null : new MutationObserver(V)
                        }
                    }
                    return I.\u0275fac = function(V) {
                        return new(V || I)
                    }, I.\u0275prov = r.\u0275\ u0275defineInjectable({
                        token: I,
                        factory: I.\u0275fac,
                        providedIn: "root"
                    }), I
                })(),
                v = (() => {
                    class I {
                        constructor(V) {
                            this._mutationObserverFactory = V, this._observedElements = new Map
                        }
                        ngOnDestroy() {
                            this._observedElements.forEach((V, J) => this._cleanupObserver(J))
                        }
                        observe(V) {
                            const J = (0, t.fI)(V);
                            return new d.y(ie => {
                                const ve = this._observeElement(J).subscribe(ie);
                                return () => {
                                    ve.unsubscribe(), this._unobserveElement(J)
                                }
                            })
                        }
                        _observeElement(V) {
                            if (this._observedElements.has(V)) this._observedElements.get(V).count++;
                            else {
                                const J = new O.x,
                                    ie = this._mutationObserverFactory.create(ce => J.next(ce));
                                ie && ie.observe(V, {
                                    characterData: !0,
                                    childList: !0,
                                    subtree: !0
                                }), this._observedElements.set(V, {
                                    observer: ie,
                                    stream: J,
                                    count: 1
                                })
                            }
                            return this._observedElements.get(V).stream
                        }
                        _unobserveElement(V) {
                            this._observedElements.has(V) && (this._observedElements.get(V).count--, this._observedElements.get(V).count || this._cleanupObserver(V))
                        }
                        _cleanupObserver(V) {
                            if (this._observedElements.has(V)) {
                                const {
                                    observer: J,
                                    stream: ie
                                } = this._observedElements.get(V);
                                J && J.disconnect(), ie.complete(), this._observedElements.delete(V)
                            }
                        }
                    }
                    return I.\u0275fac = function(V) {
                        return new(V || I)(r.\u0275\ u0275inject(f))
                    }, I.\u0275prov = r.\u0275\ u0275defineInjectable({
                        token: I,
                        factory: I.\u0275fac,
                        providedIn: "root"
                    }), I
                })(),
                A = (() => {
                    class I {
                        constructor(V, J, ie) {
                            this._contentObserver = V, this._elementRef = J, this._ngZone = ie, this.event = new r.EventEmitter, this._disabled = !1, this._currentSubscription = null
                        }
                        get disabled() {
                            return this._disabled
                        }
                        set disabled(V) {
                            this._disabled = (0, t.Ig)(V), this._disabled ? this._unsubscribe() : this._subscribe()
                        }
                        get debounce() {
                            return this._debounce
                        }
                        set debounce(V) {
                            this._debounce = (0, t.su)(V), this._subscribe()
                        }
                        ngAfterContentInit() {
                            !this._currentSubscription && !this.disabled && this._subscribe()
                        }
                        ngOnDestroy() {
                            this._unsubscribe()
                        }
                        _subscribe() {
                            this._unsubscribe();
                            const V = this._contentObserver.observe(this._elementRef);
                            this._ngZone.runOutsideAngular(() => {
                                this._currentSubscription = (this.debounce ? V.pipe((0, p.b)(this.debounce)) : V).subscribe(this.event)
                            })
                        }
                        _unsubscribe() {
                            this._currentSubscription ? .unsubscribe()
                        }
                    }
                    return I.\u0275fac = function(V) {
                        return new(V || I)(r.\u0275\ u0275directiveInject(v), r.\u0275\ u0275directiveInject(r.ElementRef), r.\u0275\ u0275directiveInject(r.NgZone))
                    }, I.\u0275dir = r.\u0275\ u0275defineDirective({
                        type: I,
                        selectors: [
                            ["", "cdkObserveContent", ""]
                        ],
                        inputs: {
                            disabled: ["cdkObserveContentDisabled", "disabled"],
                            debounce: "debounce"
                        },
                        outputs: {
                            event: "cdkObserveContent"
                        },
                        exportAs: ["cdkObserveContent"]
                    }), I
                })(),
                M = (() => {
                    class I {}
                    return I.\u0275fac = function(V) {
                        return new(V || I)
                    }, I.\u0275mod = r.\u0275\ u0275defineNgModule({
                        type: I
                    }), I.\u0275inj = r.\u0275\ u0275defineInjector({
                        providers: [f]
                    }), I
                })()
        },
        3353: (y, T, a) => {
            a.d(T, {
                Mq: () => ie,
                Oy: () => pe,
                i$: () => z,
                kV: () => oe,
                sA: () => Ne,
                t4: () => O
            });
            var t = a(8125),
                r = a(3512);
            let d;
            try {
                d = typeof Intl < "u" && Intl.v8BreakIterator
            } catch {
                d = !1
            }
            let M, J, ve, O = (() => {
                class k {
                    constructor(N) {
                        this._platformId = N, this.isBrowser = this._platformId ? (0, r.isPlatformBrowser)(this._platformId) : "object" == typeof document && !!document, this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent), this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent), this.BLINK = this.isBrowser && !(!window.chrome && !d) && typeof CSS < "u" && !this.EDGE && !this.TRIDENT, this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT, this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window), this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent), this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT, this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT
                    }
                }
                return k.\u0275fac = function(N) {
                    return new(N || k)(t.\u0275\ u0275inject(t.PLATFORM_ID))
                }, k.\u0275prov = t.\u0275\ u0275defineInjectable({
                    token: k,
                    factory: k.\u0275fac,
                    providedIn: "root"
                }), k
            })();

            function z(k) {
                return function I() {
                    if (null == M && typeof window < "u") try {
                        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                            get: () => M = !0
                        }))
                    } finally {
                        M = M || !1
                    }
                    return M
                }() ? k : !!k.capture
            }

            function ie() {
                if (null == J) {
                    if ("object" != typeof document || !document || "function" != typeof Element || !Element) return J = !1, J;
                    if ("scrollBehavior" in document.documentElement.style) J = !0;
                    else {
                        const k = Element.prototype.scrollTo;
                        J = !!k && !/\{\s*\[native code\]\s*\}/.test(k.toString())
                    }
                }
                return J
            }

            function oe(k) {
                if (function Oe() {
                        if (null == ve) {
                            const k = typeof document < "u" ? document.head : null;
                            ve = !(!k || !k.createShadowRoot && !k.attachShadow)
                        }
                        return ve
                    }()) {
                    const _ = k.getRootNode ? k.getRootNode() : null;
                    if (typeof ShadowRoot < "u" && ShadowRoot && _ instanceof ShadowRoot) return _
                }
                return null
            }

            function Ne(k) {
                return k.composedPath ? k.composedPath()[0] : k.target
            }

            function pe() {
                return typeof __karma__ < "u" && !!__karma__ || typeof jasmine < "u" && !!jasmine || typeof jest < "u" && !!jest || typeof Mocha < "u" && !!Mocha
            }
        },
        6252: (y, T, a) => {
            a.d(T, {
                Z: () => r
            });
            const t = void 0,
                r = [
                    [
                        ["o p\xf3\u0142n.", "w po\u0142.", "rano", "przed po\u0142.", "po po\u0142.", "wiecz.", "w nocy"],
                        ["o p\xf3\u0142nocy", "w po\u0142udnie", "rano", "przed po\u0142udniem", "po po\u0142udniu", "wieczorem", "w nocy"], t
                    ],
                    [
                        ["p\xf3\u0142n.", "po\u0142.", "rano", "przedpo\u0142.", "popo\u0142.", "wiecz.", "noc"],
                        ["p\xf3\u0142noc", "po\u0142udnie", "rano", "przedpo\u0142udnie", "popo\u0142udnie", "wiecz\xf3r", "noc"], t
                    ],
                    ["00:00", "12:00", ["06:00", "10:00"],
                        ["10:00", "12:00"],
                        ["12:00", "18:00"],
                        ["18:00", "21:00"],
                        ["21:00", "06:00"]
                    ]
                ]
        },
        3894: (y, T, a) => {
            a.d(T, {
                Z: () => d
            });
            const t = void 0,
                d = ["pl", [
                        ["a", "p"],
                        ["AM", "PM"], t
                    ], t, [
                        ["n", "p", "w", "\u015b", "c", "p", "s"],
                        ["niedz.", "pon.", "wt.", "\u015br.", "czw.", "pt.", "sob."],
                        ["niedziela", "poniedzia\u0142ek", "wtorek", "\u015broda", "czwartek", "pi\u0105tek", "sobota"],
                        ["nie", "pon", "wto", "\u015bro", "czw", "pi\u0105", "sob"]
                    ],
                    [
                        ["N", "P", "W", "\u015a", "C", "P", "S"],
                        ["niedz.", "pon.", "wt.", "\u015br.", "czw.", "pt.", "sob."],
                        ["niedziela", "poniedzia\u0142ek", "wtorek", "\u015broda", "czwartek", "pi\u0105tek", "sobota"],
                        ["nie", "pon", "wto", "\u015bro", "czw", "pi\u0105", "sob"]
                    ],
                    [
                        ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"],
                        ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "pa\u017a", "lis", "gru"],
                        ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "wrze\u015bnia", "pa\u017adziernika", "listopada", "grudnia"]
                    ],
                    [
                        ["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"],
                        ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "pa\u017a", "lis", "gru"],
                        ["stycze\u0144", "luty", "marzec", "kwiecie\u0144", "maj", "czerwiec", "lipiec", "sierpie\u0144", "wrzesie\u0144", "pa\u017adziernik", "listopad", "grudzie\u0144"]
                    ],
                    [
                        ["p.n.e.", "n.e."], t, ["przed nasz\u0105 er\u0105", "naszej ery"]
                    ], 1, [6, 0],
                    ["d.MM.y", "d MMM y", "d MMMM y", "EEEE, d MMMM y"],
                    ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"],
                    ["{1}, {0}", t, "{1} {0}", t],
                    [",", "\xa0", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                    ["#,##0.###", "#,##0%", "#,##0.00\xa0\xa4", "#E0"], "PLN", "z\u0142", "z\u0142oty polski", {
                        AUD: [t, "$"],
                        CAD: [t, "$"],
                        CNY: [t, "\xa5"],
                        GBP: [t, "\xa3"],
                        HKD: [t, "$"],
                        ILS: [t, "\u20aa"],
                        INR: [t, "\u20b9"],
                        JPY: [t, "\xa5"],
                        KRW: [t, "\u20a9"],
                        MXN: [t, "$"],
                        NZD: [t, "$"],
                        PHP: [t, "\u20b1"],
                        PLN: ["z\u0142"],
                        RON: [t, "lej"],
                        TWD: [t, "NT$"],
                        USD: [t, "$"],
                        VND: [t, "\u20ab"]
                    }, "ltr",
                    function r(O) {
                        const f = Math.floor(Math.abs(O)),
                            v = O.toString().replace(/^[^.]*\.?/, "").length;
                        return 1 === f && 0 === v ? 1 : 0 === v && f % 10 === Math.floor(f % 10) && f % 10 >= 2 && f % 10 <= 4 && !(f % 100 >= 12 && f % 100 <= 14) ? 3 : 0 === v && 1 !== f && f % 10 === Math.floor(f % 10) && f % 10 >= 0 && f % 10 <= 1 || 0 === v && f % 10 === Math.floor(f % 10) && f % 10 >= 5 && f % 10 <= 9 || 0 === v && f % 100 === Math.floor(f % 100) && f % 100 >= 12 && f % 100 <= 14 ? 4 : 5
                    }
                ]
        },
        3238: (y, T, a) => {
            a.d(T, {
                rD: () => q,
                K7: () => mt,
                HF: () => we,
                BQ: () => pe,
                ey: () => De,
                Ng: () => Be,
                wG: () => xe,
                si: () => ae,
                CB: () => $,
                jH: () => G,
                pj: () => te,
                Kr: () => Pe,
                Id: () => Y,
                FD: () => ge,
                sb: () => Z
            });
            var t = a(8125),
                r = a(2687),
                d = a(445),
                p = a(3512),
                f = a(3353),
                v = a(1281),
                A = a(7579),
                M = a(5682),
                I = a(9521);

            function J(ne, R) {
                if (1 & ne && t.\u0275\ u0275element(0, "mat-pseudo-checkbox", 4), 2 & ne) {
                    const u = t.\u0275\ u0275nextContext();
                    t.\u0275\ u0275property("state", u.selected ? "checked" : "unchecked")("disabled", u.disabled)
                }
            }

            function ie(ne, R) {
                if (1 & ne && (t.\u0275\ u0275elementStart(0, "span", 5), t.\u0275\ u0275text(1), t.\u0275\ u0275elementEnd()), 2 & ne) {
                    const u = t.\u0275\ u0275nextContext();
                    t.\u0275\ u0275advance(1), t.\u0275\ u0275textInterpolate1("(", u.group.label, ")")
                }
            }
            const ce = ["*"],
                Ne = new t.InjectionToken("mat-sanity-checks", {
                    providedIn: "root",
                    factory: function Me() {
                        return !0
                    }
                });
            let pe = (() => {
                class ne {
                    constructor(u, h, x) {
                        this._sanityChecks = h, this._document = x, this._hasDoneGlobalChecks = !1, u._applyBodyHighContrastModeCssClasses(), this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0)
                    }
                    _checkIsEnabled(u) {
                        return !(0, f.Oy)() && ("boolean" == typeof this._sanityChecks ? this._sanityChecks : !!this._sanityChecks[u])
                    }
                }
                return ne.\u0275fac = function(u) {
                    return new(u || ne)(t.\u0275\ u0275inject(r.qm), t.\u0275\ u0275inject(Ne, 8), t.\u0275\ u0275inject(p.DOCUMENT))
                }, ne.\u0275mod = t.\u0275\ u0275defineNgModule({
                    type: ne
                }), ne.\u0275inj = t.\u0275\ u0275defineInjector({
                    imports: [d.vT, d.vT]
                }), ne
            })();

            function Y(ne) {
                return class extends ne {
                    constructor(...R) {
                        super(...R), this._disabled = !1
                    }
                    get disabled() {
                        return this._disabled
                    }
                    set disabled(R) {
                        this._disabled = (0, v.Ig)(R)
                    }
                }
            }

            function te(ne, R) {
                return class extends ne {
                    constructor(...u) {
                        super(...u), this.defaultColor = R, this.color = R
                    }
                    get color() {
                        return this._color
                    }
                    set color(u) {
                        const h = u || this.defaultColor;
                        h !== this._color && (this._color && this._elementRef.nativeElement.classList.remove(`mat-${this._color}`), h && this._elementRef.nativeElement.classList.add(`mat-${h}`), this._color = h)
                    }
                }
            }

            function Pe(ne) {
                return class extends ne {
                    constructor(...R) {
                        super(...R), this._disableRipple = !1
                    }
                    get disableRipple() {
                        return this._disableRipple
                    }
                    set disableRipple(R) {
                        this._disableRipple = (0, v.Ig)(R)
                    }
                }
            }

            function Z(ne, R = 0) {
                return class extends ne {
                    constructor(...u) {
                        super(...u), this._tabIndex = R, this.defaultTabIndex = R
                    }
                    get tabIndex() {
                        return this.disabled ? -1 : this._tabIndex
                    }
                    set tabIndex(u) {
                        this._tabIndex = null != u ? (0, v.su)(u) : this.defaultTabIndex
                    }
                }
            }

            function ge(ne) {
                return class extends ne {
                    constructor(...R) {
                        super(...R), this.errorState = !1
                    }
                    updateErrorState() {
                        const R = this.errorState,
                            X = (this.errorStateMatcher || this._defaultErrorStateMatcher).isErrorState(this.ngControl ? this.ngControl.control : null, this._parentFormGroup || this._parentForm);
                        X !== R && (this.errorState = X, this.stateChanges.next())
                    }
                }
            }
            let q = (() => {
                class ne {
                    isErrorState(u, h) {
                        return !!(u && u.invalid && (u.touched || h && h.submitted))
                    }
                }
                return ne.\u0275fac = function(u) {
                    return new(u || ne)
                }, ne.\u0275prov = t.\u0275\ u0275defineInjectable({
                    token: ne,
                    factory: ne.\u0275fac,
                    providedIn: "root"
                }), ne
            })();
            class me {
                constructor(R, u, h, x = !1) {
                    this._renderer = R, this.element = u, this.config = h, this._animationForciblyDisabledThroughCss = x, this.state = 3
                }
                fadeOut() {
                    this._renderer.fadeOutRipple(this)
                }
            }
            const _e = {
                    enterDuration: 225,
                    exitDuration: 150
                },
                ke = (0, f.i$)({
                    passive: !0
                }),
                je = ["mousedown", "touchstart"],
                ct = ["mouseup", "mouseleave", "touchend", "touchcancel"];
            class xt {
                constructor(R, u, h, x) {
                    this._target = R, this._ngZone = u, this._isPointerDown = !1, this._activeRipples = new Map, this._pointerUpEventsRegistered = !1, x.isBrowser && (this._containerElement = (0, v.fI)(h))
                }
                fadeInRipple(R, u, h = {}) {
                    const x = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect(),
                        X = { ..._e,
                            ...h.animation
                        };
                    h.centered && (R = x.left + x.width / 2, u = x.top + x.height / 2);
                    const le = h.radius || function Ve(ne, R, u) {
                            const h = Math.max(Math.abs(ne - u.left), Math.abs(ne - u.right)),
                                x = Math.max(Math.abs(R - u.top), Math.abs(R - u.bottom));
                            return Math.sqrt(h * h + x * x)
                        }(R, u, x),
                        Ue = R - x.left,
                        Xe = u - x.top,
                        ot = X.enterDuration,
                        pt = document.createElement("div");
                    pt.classList.add("mat-ripple-element"), pt.style.left = Ue - le + "px", pt.style.top = Xe - le + "px", pt.style.height = 2 * le + "px", pt.style.width = 2 * le + "px", null != h.color && (pt.style.backgroundColor = h.color), pt.style.transitionDuration = `${ot}ms`, this._containerElement.appendChild(pt);
                    const jt = window.getComputedStyle(pt),
                        Xt = jt.transitionDuration,
                        It = "none" === jt.transitionProperty || "0s" === Xt || "0s, 0s" === Xt,
                        At = new me(this, pt, h, It);
                    pt.style.transform = "scale3d(1, 1, 1)", At.state = 0, h.persistent || (this._mostRecentTransientRipple = At);
                    let Qt = null;
                    return !It && (ot || X.exitDuration) && this._ngZone.runOutsideAngular(() => {
                        const Ut = () => this._finishRippleTransition(At),
                            Et = () => this._destroyRipple(At);
                        pt.addEventListener("transitionend", Ut), pt.addEventListener("transitioncancel", Et), Qt = {
                            onTransitionEnd: Ut,
                            onTransitionCancel: Et
                        }
                    }), this._activeRipples.set(At, Qt), (It || !ot) && this._finishRippleTransition(At), At
                }
                fadeOutRipple(R) {
                    if (2 === R.state || 3 === R.state) return;
                    const u = R.element,
                        h = { ..._e,
                            ...R.config.animation
                        };
                    u.style.transitionDuration = `${h.exitDuration}ms`, u.style.opacity = "0", R.state = 2, (R._animationForciblyDisabledThroughCss || !h.exitDuration) && this._finishRippleTransition(R)
                }
                fadeOutAll() {
                    this._getActiveRipples().forEach(R => R.fadeOut())
                }
                fadeOutAllNonPersistent() {
                    this._getActiveRipples().forEach(R => {
                        R.config.persistent || R.fadeOut()
                    })
                }
                setupTriggerEvents(R) {
                    const u = (0, v.fI)(R);
                    !u || u === this._triggerElement || (this._removeTriggerEvents(), this._triggerElement = u, this._registerEvents(je))
                }
                handleEvent(R) {
                    "mousedown" === R.type ? this._onMousedown(R) : "touchstart" === R.type ? this._onTouchStart(R) : this._onPointerUp(), this._pointerUpEventsRegistered || (this._registerEvents(ct), this._pointerUpEventsRegistered = !0)
                }
                _finishRippleTransition(R) {
                    0 === R.state ? this._startFadeOutTransition(R) : 2 === R.state && this._destroyRipple(R)
                }
                _startFadeOutTransition(R) {
                    const u = R === this._mostRecentTransientRipple,
                        {
                            persistent: h
                        } = R.config;
                    R.state = 1, !h && (!u || !this._isPointerDown) && R.fadeOut()
                }
                _destroyRipple(R) {
                    const u = this._activeRipples.get(R) ? ? null;
                    this._activeRipples.delete(R), this._activeRipples.size || (this._containerRect = null), R === this._mostRecentTransientRipple && (this._mostRecentTransientRipple = null), R.state = 3, null !== u && (R.element.removeEventListener("transitionend", u.onTransitionEnd), R.element.removeEventListener("transitioncancel", u.onTransitionCancel)), R.element.remove()
                }
                _onMousedown(R) {
                    const u = (0, r.X6)(R),
                        h = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + 800;
                    !this._target.rippleDisabled && !u && !h && (this._isPointerDown = !0, this.fadeInRipple(R.clientX, R.clientY, this._target.rippleConfig))
                }
                _onTouchStart(R) {
                    if (!this._target.rippleDisabled && !(0, r.yG)(R)) {
                        this._lastTouchStartEvent = Date.now(), this._isPointerDown = !0;
                        const u = R.changedTouches;
                        for (let h = 0; h < u.length; h++) this.fadeInRipple(u[h].clientX, u[h].clientY, this._target.rippleConfig)
                    }
                }
                _onPointerUp() {
                    !this._isPointerDown || (this._isPointerDown = !1, this._getActiveRipples().forEach(R => {
                        !R.config.persistent && (1 === R.state || R.config.terminateOnPointerUp && 0 === R.state) && R.fadeOut()
                    }))
                }
                _registerEvents(R) {
                    this._ngZone.runOutsideAngular(() => {
                        R.forEach(u => {
                            this._triggerElement.addEventListener(u, this, ke)
                        })
                    })
                }
                _getActiveRipples() {
                    return Array.from(this._activeRipples.keys())
                }
                _removeTriggerEvents() {
                    this._triggerElement && (je.forEach(R => {
                        this._triggerElement.removeEventListener(R, this, ke)
                    }), this._pointerUpEventsRegistered && ct.forEach(R => {
                        this._triggerElement.removeEventListener(R, this, ke)
                    }))
                }
            }
            const ue = new t.InjectionToken("mat-ripple-global-options");
            let xe = (() => {
                    class ne {
                        constructor(u, h, x, X, le) {
                            this._elementRef = u, this._animationMode = le, this.radius = 0, this._disabled = !1, this._isInitialized = !1, this._globalOptions = X || {}, this._rippleRenderer = new xt(this, h, u, x)
                        }
                        get disabled() {
                            return this._disabled
                        }
                        set disabled(u) {
                            u && this.fadeOutAllNonPersistent(), this._disabled = u, this._setupTriggerEventsIfEnabled()
                        }
                        get trigger() {
                            return this._trigger || this._elementRef.nativeElement
                        }
                        set trigger(u) {
                            this._trigger = u, this._setupTriggerEventsIfEnabled()
                        }
                        ngOnInit() {
                            this._isInitialized = !0, this._setupTriggerEventsIfEnabled()
                        }
                        ngOnDestroy() {
                            this._rippleRenderer._removeTriggerEvents()
                        }
                        fadeOutAll() {
                            this._rippleRenderer.fadeOutAll()
                        }
                        fadeOutAllNonPersistent() {
                            this._rippleRenderer.fadeOutAllNonPersistent()
                        }
                        get rippleConfig() {
                            return {
                                centered: this.centered,
                                radius: this.radius,
                                color: this.color,
                                animation: { ...this._globalOptions.animation,
                                    ..."NoopAnimations" === this._animationMode ? {
                                        enterDuration: 0,
                                        exitDuration: 0
                                    } : {},
                                    ...this.animation
                                },
                                terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
                            }
                        }
                        get rippleDisabled() {
                            return this.disabled || !!this._globalOptions.disabled
                        }
                        _setupTriggerEventsIfEnabled() {
                            !this.disabled && this._isInitialized && this._rippleRenderer.setupTriggerEvents(this.trigger)
                        }
                        launch(u, h = 0, x) {
                            return "number" == typeof u ? this._rippleRenderer.fadeInRipple(u, h, { ...this.rippleConfig,
                                ...x
                            }) : this._rippleRenderer.fadeInRipple(0, 0, { ...this.rippleConfig,
                                ...u
                            })
                        }
                    }
                    return ne.\u0275fac = function(u) {
                        return new(u || ne)(t.\u0275\ u0275directiveInject(t.ElementRef), t.\u0275\ u0275directiveInject(t.NgZone), t.\u0275\ u0275directiveInject(f.t4), t.\u0275\ u0275directiveInject(ue, 8), t.\u0275\ u0275directiveInject(M.ANIMATION_MODULE_TYPE, 8))
                    }, ne.\u0275dir = t.\u0275\ u0275defineDirective({
                        type: ne,
                        selectors: [
                            ["", "mat-ripple", ""],
                            ["", "matRipple", ""]
                        ],
                        hostAttrs: [1, "mat-ripple"],
                        hostVars: 2,
                        hostBindings: function(u, h) {
                            2 & u && t.\u0275\ u0275classProp("mat-ripple-unbounded", h.unbounded)
                        },
                        inputs: {
                            color: ["matRippleColor", "color"],
                            unbounded: ["matRippleUnbounded", "unbounded"],
                            centered: ["matRippleCentered", "centered"],
                            radius: ["matRippleRadius", "radius"],
                            animation: ["matRippleAnimation", "animation"],
                            disabled: ["matRippleDisabled", "disabled"],
                            trigger: ["matRippleTrigger", "trigger"]
                        },
                        exportAs: ["matRipple"]
                    }), ne
                })(),
                ae = (() => {
                    class ne {}
                    return ne.\u0275fac = function(u) {
                        return new(u || ne)
                    }, ne.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: ne
                    }), ne.\u0275inj = t.\u0275\ u0275defineInjector({
                        imports: [pe, pe]
                    }), ne
                })(),
                Te = (() => {
                    class ne {
                        constructor(u) {
                            this._animationMode = u, this.state = "unchecked", this.disabled = !1
                        }
                    }
                    return ne.\u0275fac = function(u) {
                        return new(u || ne)(t.\u0275\ u0275directiveInject(M.ANIMATION_MODULE_TYPE, 8))
                    }, ne.\u0275cmp = t.\u0275\ u0275defineComponent({
                        type: ne,
                        selectors: [
                            ["mat-pseudo-checkbox"]
                        ],
                        hostAttrs: [1, "mat-pseudo-checkbox"],
                        hostVars: 8,
                        hostBindings: function(u, h) {
                            2 & u && t.\u0275\ u0275classProp("mat-pseudo-checkbox-indeterminate", "indeterminate" === h.state)("mat-pseudo-checkbox-checked", "checked" === h.state)("mat-pseudo-checkbox-disabled", h.disabled)("_mat-animation-noopable", "NoopAnimations" === h._animationMode)
                        },
                        inputs: {
                            state: "state",
                            disabled: "disabled"
                        },
                        decls: 0,
                        vars: 0,
                        template: function(u, h) {},
                        styles: ['.mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}'],
                        encapsulation: 2,
                        changeDetection: 0
                    }), ne
                })(),
                se = (() => {
                    class ne {}
                    return ne.\u0275fac = function(u) {
                        return new(u || ne)
                    }, ne.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: ne
                    }), ne.\u0275inj = t.\u0275\ u0275defineInjector({
                        imports: [pe]
                    }), ne
                })();
            const we = new t.InjectionToken("MAT_OPTION_PARENT_COMPONENT"),
                mt = new t.InjectionToken("MatOptgroup");
            let Re = 0;
            class D {
                constructor(R, u = !1) {
                    this.source = R, this.isUserInput = u
                }
            }
            let he = (() => {
                    class ne {
                        constructor(u, h, x, X) {
                            this._element = u, this._changeDetectorRef = h, this._parent = x, this.group = X, this._selected = !1, this._active = !1, this._disabled = !1, this._mostRecentViewValue = "", this.id = "mat-option-" + Re++, this.onSelectionChange = new t.EventEmitter, this._stateChanges = new A.x
                        }
                        get multiple() {
                            return this._parent && this._parent.multiple
                        }
                        get selected() {
                            return this._selected
                        }
                        get disabled() {
                            return this.group && this.group.disabled || this._disabled
                        }
                        set disabled(u) {
                            this._disabled = (0, v.Ig)(u)
                        }
                        get disableRipple() {
                            return !(!this._parent || !this._parent.disableRipple)
                        }
                        get active() {
                            return this._active
                        }
                        get viewValue() {
                            return (this._getHostElement().textContent || "").trim()
                        }
                        select() {
                            this._selected || (this._selected = !0, this._changeDetectorRef.markForCheck(), this._emitSelectionChangeEvent())
                        }
                        deselect() {
                            this._selected && (this._selected = !1, this._changeDetectorRef.markForCheck(), this._emitSelectionChangeEvent())
                        }
                        focus(u, h) {
                            const x = this._getHostElement();
                            "function" == typeof x.focus && x.focus(h)
                        }
                        setActiveStyles() {
                            this._active || (this._active = !0, this._changeDetectorRef.markForCheck())
                        }
                        setInactiveStyles() {
                            this._active && (this._active = !1, this._changeDetectorRef.markForCheck())
                        }
                        getLabel() {
                            return this.viewValue
                        }
                        _handleKeydown(u) {
                            (u.keyCode === I.K5 || u.keyCode === I.L_) && !(0, I.Vb)(u) && (this._selectViaInteraction(), u.preventDefault())
                        }
                        _selectViaInteraction() {
                            this.disabled || (this._selected = !this.multiple || !this._selected, this._changeDetectorRef.markForCheck(), this._emitSelectionChangeEvent(!0))
                        }
                        _getAriaSelected() {
                            return this.selected || !this.multiple && null
                        }
                        _getTabIndex() {
                            return this.disabled ? "-1" : "0"
                        }
                        _getHostElement() {
                            return this._element.nativeElement
                        }
                        ngAfterViewChecked() {
                            if (this._selected) {
                                const u = this.viewValue;
                                u !== this._mostRecentViewValue && (this._mostRecentViewValue = u, this._stateChanges.next())
                            }
                        }
                        ngOnDestroy() {
                            this._stateChanges.complete()
                        }
                        _emitSelectionChangeEvent(u = !1) {
                            this.onSelectionChange.emit(new D(this, u))
                        }
                    }
                    return ne.\u0275fac = function(u) {
                        t.\u0275\ u0275invalidFactory()
                    }, ne.\u0275dir = t.\u0275\ u0275defineDirective({
                        type: ne,
                        inputs: {
                            value: "value",
                            id: "id",
                            disabled: "disabled"
                        },
                        outputs: {
                            onSelectionChange: "onSelectionChange"
                        }
                    }), ne
                })(),
                De = (() => {
                    class ne extends he {
                        constructor(u, h, x, X) {
                            super(u, h, x, X)
                        }
                    }
                    return ne.\u0275fac = function(u) {
                        return new(u || ne)(t.\u0275\ u0275directiveInject(t.ElementRef), t.\u0275\ u0275directiveInject(t.ChangeDetectorRef), t.\u0275\ u0275directiveInject(we, 8), t.\u0275\ u0275directiveInject(mt, 8))
                    }, ne.\u0275cmp = t.\u0275\ u0275defineComponent({
                        type: ne,
                        selectors: [
                            ["mat-option"]
                        ],
                        hostAttrs: ["role", "option", 1, "mat-option", "mat-focus-indicator"],
                        hostVars: 12,
                        hostBindings: function(u, h) {
                            1 & u && t.\u0275\ u0275listener("click", function() {
                                return h._selectViaInteraction()
                            })("keydown", function(X) {
                                return h._handleKeydown(X)
                            }), 2 & u && (t.\u0275\ u0275hostProperty("id", h.id), t.\u0275\ u0275attribute("tabindex", h._getTabIndex())("aria-selected", h._getAriaSelected())("aria-disabled", h.disabled.toString()), t.\u0275\ u0275classProp("mat-selected", h.selected)("mat-option-multiple", h.multiple)("mat-active", h.active)("mat-option-disabled", h.disabled))
                        },
                        exportAs: ["matOption"],
                        features: [t.\u0275\ u0275InheritDefinitionFeature],
                        ngContentSelectors: ce,
                        decls: 5,
                        vars: 4,
                        consts: [
                            ["class", "mat-option-pseudo-checkbox", 3, "state", "disabled", 4, "ngIf"],
                            [1, "mat-option-text"],
                            ["class", "cdk-visually-hidden", 4, "ngIf"],
                            ["mat-ripple", "", 1, "mat-option-ripple", 3, "matRippleTrigger", "matRippleDisabled"],
                            [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"],
                            [1, "cdk-visually-hidden"]
                        ],
                        template: function(u, h) {
                            1 & u && (t.\u0275\ u0275projectionDef(), t.\u0275\ u0275template(0, J, 1, 2, "mat-pseudo-checkbox", 0), t.\u0275\ u0275elementStart(1, "span", 1), t.\u0275\ u0275projection(2), t.\u0275\ u0275elementEnd(), t.\u0275\ u0275template(3, ie, 2, 1, "span", 2), t.\u0275\ u0275element(4, "div", 3)), 2 & u && (t.\u0275\ u0275property("ngIf", h.multiple), t.\u0275\ u0275advance(3), t.\u0275\ u0275property("ngIf", h.group && h.group._inert), t.\u0275\ u0275advance(1), t.\u0275\ u0275property("matRippleTrigger", h._getHostElement())("matRippleDisabled", h.disabled || h.disableRipple))
                        },
                        dependencies: [xe, p.NgIf, Te],
                        styles: ['.mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.mat-option.mat-active::before{content:""}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.cdk-high-contrast-active .mat-option.mat-selected:not(.mat-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-option.mat-selected:not(.mat-option-multiple)::after{right:auto;left:16px}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}'],
                        encapsulation: 2,
                        changeDetection: 0
                    }), ne
                })();

            function $(ne, R, u) {
                if (u.length) {
                    let h = R.toArray(),
                        x = u.toArray(),
                        X = 0;
                    for (let le = 0; le < ne + 1; le++) h[le].group && h[le].group === x[X] && X++;
                    return X
                }
                return 0
            }

            function G(ne, R, u, h) {
                return ne < u ? ne : ne + R > u + h ? Math.max(0, ne - h + R) : u
            }
            let Be = (() => {
                class ne {}
                return ne.\u0275fac = function(u) {
                    return new(u || ne)
                }, ne.\u0275mod = t.\u0275\ u0275defineNgModule({
                    type: ne
                }), ne.\u0275inj = t.\u0275\ u0275defineInjector({
                    imports: [ae, p.CommonModule, pe, se]
                }), ne
            })()
        },
        9549: (y, T, a) => {
            a.d(T, {
                Eo: () => it,
                G_: () => Ve,
                KE: () => ue,
                R9: () => _e,
                TO: () => rt,
                hX: () => E,
                lN: () => xe
            });
            var t = a(9643),
                r = a(3512),
                d = a(8125),
                O = a(3238),
                p = a(445),
                f = a(1281),
                v = a(7579),
                A = a(6451),
                M = a(4968),
                I = a(8675),
                z = a(2722),
                V = a(5698),
                J = a(7340),
                ie = a(3353),
                ce = a(5682);
            const ve = ["connectionContainer"],
                Oe = ["inputContainer"],
                oe = ["label"];

            function Me(ae, Te) {
                1 & ae && (d.\u0275\ u0275elementContainerStart(0), d.\u0275\ u0275elementStart(1, "div", 14), d.\u0275\ u0275element(2, "div", 15)(3, "div", 16)(4, "div", 17), d.\u0275\ u0275elementEnd(), d.\u0275\ u0275elementStart(5, "div", 18), d.\u0275\ u0275element(6, "div", 15)(7, "div", 16)(8, "div", 17), d.\u0275\ u0275elementEnd(), d.\u0275\ u0275elementContainerEnd())
            }

            function Ne(ae, Te) {
                if (1 & ae) {
                    const se = d.\u0275\ u0275getCurrentView();
                    d.\u0275\ u0275elementStart(0, "div", 19), d.\u0275\ u0275listener("cdkObserveContent", function() {
                        d.\u0275\ u0275restoreView(se);
                        const Ye = d.\u0275\ u0275nextContext();
                        return d.\u0275\ u0275resetView(Ye.updateOutlineGap())
                    }), d.\u0275\ u0275projection(1, 1), d.\u0275\ u0275elementEnd()
                }
                if (2 & ae) {
                    const se = d.\u0275\ u0275nextContext();
                    d.\u0275\ u0275property("cdkObserveContentDisabled", "outline" != se.appearance)
                }
            }

            function pe(ae, Te) {
                if (1 & ae && (d.\u0275\ u0275elementContainerStart(0), d.\u0275\ u0275projection(1, 2), d.\u0275\ u0275elementStart(2, "span"), d.\u0275\ u0275text(3), d.\u0275\ u0275elementEnd(), d.\u0275\ u0275elementContainerEnd()), 2 & ae) {
                    const se = d.\u0275\ u0275nextContext(2);
                    d.\u0275\ u0275advance(3), d.\u0275\ u0275textInterpolate(se._control.placeholder)
                }
            }

            function k(ae, Te) {
                1 & ae && d.\u0275\ u0275projection(0, 3, ["*ngSwitchCase", "true"])
            }

            function _(ae, Te) {
                1 & ae && (d.\u0275\ u0275elementStart(0, "span", 23), d.\u0275\ u0275text(1, " *"), d.\u0275\ u0275elementEnd())
            }

            function N(ae, Te) {
                if (1 & ae) {
                    const se = d.\u0275\ u0275getCurrentView();
                    d.\u0275\ u0275elementStart(0, "label", 20, 21), d.\u0275\ u0275listener("cdkObserveContent", function() {
                        d.\u0275\ u0275restoreView(se);
                        const Ye = d.\u0275\ u0275nextContext();
                        return d.\u0275\ u0275resetView(Ye.updateOutlineGap())
                    }), d.\u0275\ u0275template(2, pe, 4, 1, "ng-container", 12), d.\u0275\ u0275template(3, k, 1, 0, "ng-content", 12), d.\u0275\ u0275template(4, _, 2, 0, "span", 22), d.\u0275\ u0275elementEnd()
                }
                if (2 & ae) {
                    const se = d.\u0275\ u0275nextContext();
                    d.\u0275\ u0275classProp("mat-empty", se._control.empty && !se._shouldAlwaysFloat())("mat-form-field-empty", se._control.empty && !se._shouldAlwaysFloat())("mat-accent", "accent" == se.color)("mat-warn", "warn" == se.color), d.\u0275\ u0275property("cdkObserveContentDisabled", "outline" != se.appearance)("id", se._labelId)("ngSwitch", se._hasLabel()), d.\u0275\ u0275attribute("for", se._control.id)("aria-owns", se._control.id), d.\u0275\ u0275advance(2), d.\u0275\ u0275property("ngSwitchCase", !1), d.\u0275\ u0275advance(1), d.\u0275\ u0275property("ngSwitchCase", !0), d.\u0275\ u0275advance(1), d.\u0275\ u0275property("ngIf", !se.hideRequiredMarker && se._control.required && !se._control.disabled)
                }
            }

            function Y(ae, Te) {
                1 & ae && (d.\u0275\ u0275elementStart(0, "div", 24), d.\u0275\ u0275projection(1, 4), d.\u0275\ u0275elementEnd())
            }

            function te(ae, Te) {
                if (1 & ae && (d.\u0275\ u0275elementStart(0, "div", 25), d.\u0275\ u0275element(1, "span", 26), d.\u0275\ u0275elementEnd()), 2 & ae) {
                    const se = d.\u0275\ u0275nextContext();
                    d.\u0275\ u0275advance(1), d.\u0275\ u0275classProp("mat-accent", "accent" == se.color)("mat-warn", "warn" == se.color)
                }
            }

            function Pe(ae, Te) {
                if (1 & ae && (d.\u0275\ u0275elementStart(0, "div"), d.\u0275\ u0275projection(1, 5), d.\u0275\ u0275elementEnd()), 2 & ae) {
                    const se = d.\u0275\ u0275nextContext();
                    d.\u0275\ u0275property("@transitionMessages", se._subscriptAnimationState)
                }
            }

            function Z(ae, Te) {
                if (1 & ae && (d.\u0275\ u0275elementStart(0, "div", 30), d.\u0275\ u0275text(1), d.\u0275\ u0275elementEnd()), 2 & ae) {
                    const se = d.\u0275\ u0275nextContext(2);
                    d.\u0275\ u0275property("id", se._hintLabelId), d.\u0275\ u0275advance(1), d.\u0275\ u0275textInterpolate(se.hintLabel)
                }
            }

            function ge(ae, Te) {
                if (1 & ae && (d.\u0275\ u0275elementStart(0, "div", 27), d.\u0275\ u0275template(1, Z, 2, 2, "div", 28), d.\u0275\ u0275projection(2, 6), d.\u0275\ u0275element(3, "div", 29), d.\u0275\ u0275projection(4, 7), d.\u0275\ u0275elementEnd()), 2 & ae) {
                    const se = d.\u0275\ u0275nextContext();
                    d.\u0275\ u0275property("@transitionMessages", se._subscriptAnimationState), d.\u0275\ u0275advance(1), d.\u0275\ u0275property("ngIf", se.hintLabel)
                }
            }
            const be = ["*", [
                        ["", "matPrefix", ""]
                    ],
                    [
                        ["mat-placeholder"]
                    ],
                    [
                        ["mat-label"]
                    ],
                    [
                        ["", "matSuffix", ""]
                    ],
                    [
                        ["mat-error"]
                    ],
                    [
                        ["mat-hint", 3, "align", "end"]
                    ],
                    [
                        ["mat-hint", "align", "end"]
                    ]
                ],
                Ee = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
            let He = 0;
            const et = new d.InjectionToken("MatError");
            let rt = (() => {
                class ae {
                    constructor(se, we) {
                        this.id = "mat-error-" + He++, se || we.nativeElement.setAttribute("aria-live", "polite")
                    }
                }
                return ae.\u0275fac = function(se) {
                    return new(se || ae)(d.\u0275\ u0275injectAttribute("aria-live"), d.\u0275\ u0275directiveInject(d.ElementRef))
                }, ae.\u0275dir = d.\u0275\ u0275defineDirective({
                    type: ae,
                    selectors: [
                        ["mat-error"]
                    ],
                    hostAttrs: ["aria-atomic", "true", 1, "mat-error"],
                    hostVars: 1,
                    hostBindings: function(se, we) {
                        2 & se && d.\u0275\ u0275attribute("id", we.id)
                    },
                    inputs: {
                        id: "id"
                    },
                    features: [d.\u0275\ u0275ProvidersFeature([{
                        provide: et,
                        useExisting: ae
                    }])]
                }), ae
            })();
            const nt = {
                transitionMessages: (0, J.X$)("transitionMessages", [(0, J.SB)("enter", (0, J.oB)({
                    opacity: 1,
                    transform: "translateY(0%)"
                })), (0, J.eR)("void => enter", [(0, J.oB)({
                    opacity: 0,
                    transform: "translateY(-5px)"
                }), (0, J.jt)("300ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])
            };
            let it = (() => {
                class ae {}
                return ae.\u0275fac = function(se) {
                    return new(se || ae)
                }, ae.\u0275dir = d.\u0275\ u0275defineDirective({
                    type: ae
                }), ae
            })();
            const b = new d.InjectionToken("MatHint");
            let E = (() => {
                    class ae {}
                    return ae.\u0275fac = function(se) {
                        return new(se || ae)
                    }, ae.\u0275dir = d.\u0275\ u0275defineDirective({
                        type: ae,
                        selectors: [
                            ["mat-label"]
                        ]
                    }), ae
                })(),
                B = (() => {
                    class ae {}
                    return ae.\u0275fac = function(se) {
                        return new(se || ae)
                    }, ae.\u0275dir = d.\u0275\ u0275defineDirective({
                        type: ae,
                        selectors: [
                            ["mat-placeholder"]
                        ]
                    }), ae
                })();
            const H = new d.InjectionToken("MatPrefix"),
                me = new d.InjectionToken("MatSuffix");
            let _e = (() => {
                    class ae {}
                    return ae.\u0275fac = function(se) {
                        return new(se || ae)
                    }, ae.\u0275dir = d.\u0275\ u0275defineDirective({
                        type: ae,
                        selectors: [
                            ["", "matSuffix", ""]
                        ],
                        features: [d.\u0275\ u0275ProvidersFeature([{
                            provide: me,
                            useExisting: ae
                        }])]
                    }), ae
                })(),
                Le = 0;
            const ct = (0, O.pj)(class {
                    constructor(ae) {
                        this._elementRef = ae
                    }
                }, "primary"),
                xt = new d.InjectionToken("MAT_FORM_FIELD_DEFAULT_OPTIONS"),
                Ve = new d.InjectionToken("MatFormField");
            let ue = (() => {
                    class ae extends ct {
                        constructor(se, we, Ye, Ze, dt, mt, L) {
                            super(se), this._changeDetectorRef = we, this._dir = Ye, this._defaults = Ze, this._platform = dt, this._ngZone = mt, this._outlineGapCalculationNeededImmediately = !1, this._outlineGapCalculationNeededOnStable = !1, this._destroyed = new v.x, this._hideRequiredMarker = !1, this._showAlwaysAnimate = !1, this._subscriptAnimationState = "", this._hintLabel = "", this._hintLabelId = "mat-hint-" + Le++, this._labelId = "mat-form-field-label-" + Le++, this.floatLabel = this._getDefaultFloatLabelState(), this._animationsEnabled = "NoopAnimations" !== L, this.appearance = Ze ? .appearance || "legacy", Ze && (this._hideRequiredMarker = Boolean(Ze.hideRequiredMarker), Ze.color && (this.color = this.defaultColor = Ze.color))
                        }
                        get appearance() {
                            return this._appearance
                        }
                        set appearance(se) {
                            const we = this._appearance;
                            this._appearance = se || this._defaults ? .appearance || "legacy", "outline" === this._appearance && we !== se && (this._outlineGapCalculationNeededOnStable = !0)
                        }
                        get hideRequiredMarker() {
                            return this._hideRequiredMarker
                        }
                        set hideRequiredMarker(se) {
                            this._hideRequiredMarker = (0, f.Ig)(se)
                        }
                        _shouldAlwaysFloat() {
                            return "always" === this.floatLabel && !this._showAlwaysAnimate
                        }
                        _canLabelFloat() {
                            return "never" !== this.floatLabel
                        }
                        get hintLabel() {
                            return this._hintLabel
                        }
                        set hintLabel(se) {
                            this._hintLabel = se, this._processHints()
                        }
                        get floatLabel() {
                            return "legacy" !== this.appearance && "never" === this._floatLabel ? "auto" : this._floatLabel
                        }
                        set floatLabel(se) {
                            se !== this._floatLabel && (this._floatLabel = se || this._getDefaultFloatLabelState(), this._changeDetectorRef.markForCheck())
                        }
                        get _control() {
                            return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic
                        }
                        set _control(se) {
                            this._explicitFormFieldControl = se
                        }
                        getLabelId() {
                            return this._hasFloatingLabel() ? this._labelId : null
                        }
                        getConnectedOverlayOrigin() {
                            return this._connectionContainerRef || this._elementRef
                        }
                        ngAfterContentInit() {
                            this._validateControlChild();
                            const se = this._control;
                            se.controlType && this._elementRef.nativeElement.classList.add(`mat-form-field-type-${se.controlType}`), se.stateChanges.pipe((0, I.O)(null)).subscribe(() => {
                                this._validatePlaceholders(), this._syncDescribedByIds(), this._changeDetectorRef.markForCheck()
                            }), se.ngControl && se.ngControl.valueChanges && se.ngControl.valueChanges.pipe((0, z.R)(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck()), this._ngZone.runOutsideAngular(() => {
                                this._ngZone.onStable.pipe((0, z.R)(this._destroyed)).subscribe(() => {
                                    this._outlineGapCalculationNeededOnStable && this.updateOutlineGap()
                                })
                            }), (0, A.T)(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(() => {
                                this._outlineGapCalculationNeededOnStable = !0, this._changeDetectorRef.markForCheck()
                            }), this._hintChildren.changes.pipe((0, I.O)(null)).subscribe(() => {
                                this._processHints(), this._changeDetectorRef.markForCheck()
                            }), this._errorChildren.changes.pipe((0, I.O)(null)).subscribe(() => {
                                this._syncDescribedByIds(), this._changeDetectorRef.markForCheck()
                            }), this._dir && this._dir.change.pipe((0, z.R)(this._destroyed)).subscribe(() => {
                                "function" == typeof requestAnimationFrame ? this._ngZone.runOutsideAngular(() => {
                                    requestAnimationFrame(() => this.updateOutlineGap())
                                }) : this.updateOutlineGap()
                            })
                        }
                        ngAfterContentChecked() {
                            this._validateControlChild(), this._outlineGapCalculationNeededImmediately && this.updateOutlineGap()
                        }
                        ngAfterViewInit() {
                            this._subscriptAnimationState = "enter", this._changeDetectorRef.detectChanges()
                        }
                        ngOnDestroy() {
                            this._destroyed.next(), this._destroyed.complete()
                        }
                        _shouldForward(se) {
                            const we = this._control ? this._control.ngControl : null;
                            return we && we[se]
                        }
                        _hasPlaceholder() {
                            return !!(this._control && this._control.placeholder || this._placeholderChild)
                        }
                        _hasLabel() {
                            return !(!this._labelChildNonStatic && !this._labelChildStatic)
                        }
                        _shouldLabelFloat() {
                            return this._canLabelFloat() && (this._control && this._control.shouldLabelFloat || this._shouldAlwaysFloat())
                        }
                        _hideControlPlaceholder() {
                            return "legacy" === this.appearance && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat()
                        }
                        _hasFloatingLabel() {
                            return this._hasLabel() || "legacy" === this.appearance && this._hasPlaceholder()
                        }
                        _getDisplayedMessages() {
                            return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? "error" : "hint"
                        }
                        _animateAndLockLabel() {
                            this._hasFloatingLabel() && this._canLabelFloat() && (this._animationsEnabled && this._label && (this._showAlwaysAnimate = !0, (0, M.R)(this._label.nativeElement, "transitionend").pipe((0, V.q)(1)).subscribe(() => {
                                this._showAlwaysAnimate = !1
                            })), this.floatLabel = "always", this._changeDetectorRef.markForCheck())
                        }
                        _validatePlaceholders() {}
                        _processHints() {
                            this._validateHints(), this._syncDescribedByIds()
                        }
                        _validateHints() {}
                        _getDefaultFloatLabelState() {
                            return this._defaults && this._defaults.floatLabel || "auto"
                        }
                        _syncDescribedByIds() {
                            if (this._control) {
                                let se = [];
                                if (this._control.userAriaDescribedBy && "string" == typeof this._control.userAriaDescribedBy && se.push(...this._control.userAriaDescribedBy.split(" ")), "hint" === this._getDisplayedMessages()) {
                                    const we = this._hintChildren ? this._hintChildren.find(Ze => "start" === Ze.align) : null,
                                        Ye = this._hintChildren ? this._hintChildren.find(Ze => "end" === Ze.align) : null;
                                    we ? se.push(we.id) : this._hintLabel && se.push(this._hintLabelId), Ye && se.push(Ye.id)
                                } else this._errorChildren && se.push(...this._errorChildren.map(we => we.id));
                                this._control.setDescribedByIds(se)
                            }
                        }
                        _validateControlChild() {}
                        updateOutlineGap() {
                            const se = this._label ? this._label.nativeElement : null,
                                we = this._connectionContainerRef.nativeElement,
                                Ye = ".mat-form-field-outline-start",
                                Ze = ".mat-form-field-outline-gap";
                            if ("outline" !== this.appearance || !this._platform.isBrowser) return;
                            if (!se || !se.children.length || !se.textContent.trim()) {
                                const D = we.querySelectorAll(`${Ye}, ${Ze}`);
                                for (let he = 0; he < D.length; he++) D[he].style.width = "0";
                                return
                            }
                            if (!this._isAttachedToDOM()) return void(this._outlineGapCalculationNeededImmediately = !0);
                            let dt = 0,
                                mt = 0;
                            const L = we.querySelectorAll(Ye),
                                Re = we.querySelectorAll(Ze);
                            if (this._label && this._label.nativeElement.children.length) {
                                const D = we.getBoundingClientRect();
                                if (0 === D.width && 0 === D.height) return this._outlineGapCalculationNeededOnStable = !0, void(this._outlineGapCalculationNeededImmediately = !1);
                                const he = this._getStartEnd(D),
                                    De = se.children,
                                    $ = this._getStartEnd(De[0].getBoundingClientRect());
                                let G = 0;
                                for (let Be = 0; Be < De.length; Be++) G += De[Be].offsetWidth;
                                dt = Math.abs($ - he) - 5, mt = G > 0 ? .75 * G + 10 : 0
                            }
                            for (let D = 0; D < L.length; D++) L[D].style.width = `${dt}px`;
                            for (let D = 0; D < Re.length; D++) Re[D].style.width = `${mt}px`;
                            this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = !1
                        }
                        _getStartEnd(se) {
                            return this._dir && "rtl" === this._dir.value ? se.right : se.left
                        }
                        _isAttachedToDOM() {
                            const se = this._elementRef.nativeElement;
                            if (se.getRootNode) {
                                const we = se.getRootNode();
                                return we && we !== se
                            }
                            return document.documentElement.contains(se)
                        }
                    }
                    return ae.\u0275fac = function(se) {
                        return new(se || ae)(d.\u0275\ u0275directiveInject(d.ElementRef), d.\u0275\ u0275directiveInject(d.ChangeDetectorRef), d.\u0275\ u0275directiveInject(p.Is, 8), d.\u0275\ u0275directiveInject(xt, 8), d.\u0275\ u0275directiveInject(ie.t4), d.\u0275\ u0275directiveInject(d.NgZone), d.\u0275\ u0275directiveInject(ce.ANIMATION_MODULE_TYPE, 8))
                    }, ae.\u0275cmp = d.\u0275\ u0275defineComponent({
                        type: ae,
                        selectors: [
                            ["mat-form-field"]
                        ],
                        contentQueries: function(se, we, Ye) {
                            if (1 & se && (d.\u0275\ u0275contentQuery(Ye, it, 5), d.\u0275\ u0275contentQuery(Ye, it, 7), d.\u0275\ u0275contentQuery(Ye, E, 5), d.\u0275\ u0275contentQuery(Ye, E, 7), d.\u0275\ u0275contentQuery(Ye, B, 5), d.\u0275\ u0275contentQuery(Ye, et, 5), d.\u0275\ u0275contentQuery(Ye, b, 5), d.\u0275\ u0275contentQuery(Ye, H, 5), d.\u0275\ u0275contentQuery(Ye, me, 5)), 2 & se) {
                                let Ze;
                                d.\u0275\ u0275queryRefresh(Ze = d.\u0275\ u0275loadQuery()) && (we._controlNonStatic = Ze.first), d.\u0275\ u0275queryRefresh(Ze = d.\u0275\ u0275loadQuery()) && (we._controlStatic = Ze.first), d.\u0275\ u0275queryRefresh(Ze = d.\u0275\ u0275loadQuery()) && (we._labelChildNonStatic = Ze.first), d.\u0275\ u0275queryRefresh(Ze = d.\u0275\ u0275loadQuery()) && (we._labelChildStatic = Ze.first), d.\u0275\ u0275queryRefresh(Ze = d.\u0275\ u0275loadQuery()) && (we._placeholderChild = Ze.first), d.\u0275\ u0275queryRefresh(Ze = d.\u0275\ u0275loadQuery()) && (we._errorChildren = Ze), d.\u0275\ u0275queryRefresh(Ze = d.\u0275\ u0275loadQuery()) && (we._hintChildren = Ze), d.\u0275\ u0275queryRefresh(Ze = d.\u0275\ u0275loadQuery()) && (we._prefixChildren = Ze), d.\u0275\ u0275queryRefresh(Ze = d.\u0275\ u0275loadQuery()) && (we._suffixChildren = Ze)
                            }
                        },
                        viewQuery: function(se, we) {
                            if (1 & se && (d.\u0275\ u0275viewQuery(ve, 7), d.\u0275\ u0275viewQuery(Oe, 5), d.\u0275\ u0275viewQuery(oe, 5)), 2 & se) {
                                let Ye;
                                d.\u0275\ u0275queryRefresh(Ye = d.\u0275\ u0275loadQuery()) && (we._connectionContainerRef = Ye.first), d.\u0275\ u0275queryRefresh(Ye = d.\u0275\ u0275loadQuery()) && (we._inputContainerRef = Ye.first), d.\u0275\ u0275queryRefresh(Ye = d.\u0275\ u0275loadQuery()) && (we._label = Ye.first)
                            }
                        },
                        hostAttrs: [1, "mat-form-field"],
                        hostVars: 40,
                        hostBindings: function(se, we) {
                            2 & se && d.\u0275\ u0275classProp("mat-form-field-appearance-standard", "standard" == we.appearance)("mat-form-field-appearance-fill", "fill" == we.appearance)("mat-form-field-appearance-outline", "outline" == we.appearance)("mat-form-field-appearance-legacy", "legacy" == we.appearance)("mat-form-field-invalid", we._control.errorState)("mat-form-field-can-float", we._canLabelFloat())("mat-form-field-should-float", we._shouldLabelFloat())("mat-form-field-has-label", we._hasFloatingLabel())("mat-form-field-hide-placeholder", we._hideControlPlaceholder())("mat-form-field-disabled", we._control.disabled)("mat-form-field-autofilled", we._control.autofilled)("mat-focused", we._control.focused)("ng-untouched", we._shouldForward("untouched"))("ng-touched", we._shouldForward("touched"))("ng-pristine", we._shouldForward("pristine"))("ng-dirty", we._shouldForward("dirty"))("ng-valid", we._shouldForward("valid"))("ng-invalid", we._shouldForward("invalid"))("ng-pending", we._shouldForward("pending"))("_mat-animation-noopable", !we._animationsEnabled)
                        },
                        inputs: {
                            color: "color",
                            appearance: "appearance",
                            hideRequiredMarker: "hideRequiredMarker",
                            hintLabel: "hintLabel",
                            floatLabel: "floatLabel"
                        },
                        exportAs: ["matFormField"],
                        features: [d.\u0275\ u0275ProvidersFeature([{
                            provide: Ve,
                            useExisting: ae
                        }]), d.\u0275\ u0275InheritDefinitionFeature],
                        ngContentSelectors: Ee,
                        decls: 15,
                        vars: 8,
                        consts: [
                            [1, "mat-form-field-wrapper"],
                            [1, "mat-form-field-flex", 3, "click"],
                            ["connectionContainer", ""],
                            [4, "ngIf"],
                            ["class", "mat-form-field-prefix", 3, "cdkObserveContentDisabled", "cdkObserveContent", 4, "ngIf"],
                            [1, "mat-form-field-infix"],
                            ["inputContainer", ""],
                            [1, "mat-form-field-label-wrapper"],
                            ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"],
                            ["class", "mat-form-field-suffix", 4, "ngIf"],
                            ["class", "mat-form-field-underline", 4, "ngIf"],
                            [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"],
                            [4, "ngSwitchCase"],
                            ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"],
                            [1, "mat-form-field-outline"],
                            [1, "mat-form-field-outline-start"],
                            [1, "mat-form-field-outline-gap"],
                            [1, "mat-form-field-outline-end"],
                            [1, "mat-form-field-outline", "mat-form-field-outline-thick"],
                            [1, "mat-form-field-prefix", 3, "cdkObserveContentDisabled", "cdkObserveContent"],
                            [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"],
                            ["label", ""],
                            ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"],
                            ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"],
                            [1, "mat-form-field-suffix"],
                            [1, "mat-form-field-underline"],
                            [1, "mat-form-field-ripple"],
                            [1, "mat-form-field-hint-wrapper"],
                            ["class", "mat-hint", 3, "id", 4, "ngIf"],
                            [1, "mat-form-field-hint-spacer"],
                            [1, "mat-hint", 3, "id"]
                        ],
                        template: function(se, we) {
                            1 & se && (d.\u0275\ u0275projectionDef(be), d.\u0275\ u0275elementStart(0, "div", 0)(1, "div", 1, 2), d.\u0275\ u0275listener("click", function(Ze) {
                                return we._control.onContainerClick && we._control.onContainerClick(Ze)
                            }), d.\u0275\ u0275template(3, Me, 9, 0, "ng-container", 3), d.\u0275\ u0275template(4, Ne, 2, 1, "div", 4), d.\u0275\ u0275elementStart(5, "div", 5, 6), d.\u0275\ u0275projection(7), d.\u0275\ u0275elementStart(8, "span", 7), d.\u0275\ u0275template(9, N, 5, 16, "label", 8), d.\u0275\ u0275elementEnd()(), d.\u0275\ u0275template(10, Y, 2, 0, "div", 9), d.\u0275\ u0275elementEnd(), d.\u0275\ u0275template(11, te, 2, 4, "div", 10), d.\u0275\ u0275elementStart(12, "div", 11), d.\u0275\ u0275template(13, Pe, 2, 1, "div", 12), d.\u0275\ u0275template(14, ge, 5, 2, "div", 13), d.\u0275\ u0275elementEnd()()), 2 & se && (d.\u0275\ u0275advance(3), d.\u0275\ u0275property("ngIf", "outline" == we.appearance), d.\u0275\ u0275advance(1), d.\u0275\ u0275property("ngIf", we._prefixChildren.length), d.\u0275\ u0275advance(5), d.\u0275\ u0275property("ngIf", we._hasFloatingLabel()), d.\u0275\ u0275advance(1), d.\u0275\ u0275property("ngIf", we._suffixChildren.length), d.\u0275\ u0275advance(1), d.\u0275\ u0275property("ngIf", "outline" != we.appearance), d.\u0275\ u0275advance(1), d.\u0275\ u0275property("ngSwitch", we._getDisplayedMessages()), d.\u0275\ u0275advance(1), d.\u0275\ u0275property("ngSwitchCase", "error"), d.\u0275\ u0275advance(1), d.\u0275\ u0275property("ngSwitchCase", "hint"))
                        },
                        dependencies: [r.NgIf, r.NgSwitch, r.NgSwitchCase, t.wD],
                        styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.cdk-high-contrast-active .mat-form-field-disabled .mat-form-field-label{color:GrayText}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:none;transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}", '.mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{outline-color:GrayText}.cdk-high-contrast-active .mat-form-field-appearance-fill.mat-focused .mat-form-field-flex{outline:dashed 3px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:"";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}', '.mat-input-element{font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit;box-sizing:content-box}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element:not([type=password])::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:" ";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{opacity:0}._mat-animation-noopable .mat-input-element::placeholder{transition:none}._mat-animation-noopable .mat-input-element::-moz-placeholder{transition:none}._mat-animation-noopable .mat-input-element::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-input-element:-ms-input-placeholder{transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}', ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px)}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:rgba(0,0,0,0)}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px;border-top-color:GrayText}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:rgba(0,0,0,0)}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{border:3px dashed}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.cdk-high-contrast-active .mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:GrayText}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:rgba(0,0,0,0)}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}"],
                        encapsulation: 2,
                        data: {
                            animation: [nt.transitionMessages]
                        },
                        changeDetection: 0
                    }), ae
                })(),
                xe = (() => {
                    class ae {}
                    return ae.\u0275fac = function(se) {
                        return new(se || ae)
                    }, ae.\u0275mod = d.\u0275\ u0275defineNgModule({
                        type: ae
                    }), ae.\u0275inj = d.\u0275\ u0275defineInjector({
                        imports: [r.CommonModule, O.BQ, t.Q8, O.BQ]
                    }), ae
                })()
        },
        7392: (y, T, a) => {
            a.d(T, {
                Hw: () => Pt,
                Ps: () => Je
            });
            var t = a(8125),
                r = a(3238),
                d = a(1281),
                O = a(3512),
                p = a(9646),
                f = a(2843),
                v = a(4128),
                A = a(727),
                M = a(8505),
                I = a(4004),
                z = a(262),
                V = a(7461),
                J = a(3099),
                ie = a(5698),
                ce = a(8741),
                ve = a(3788);
            const Oe = ["*"];
            let oe;

            function Ne(b) {
                return function Me() {
                    if (void 0 === oe && (oe = null, typeof window < "u")) {
                        const b = window;
                        void 0 !== b.trustedTypes && (oe = b.trustedTypes.createPolicy("angular#components", {
                            createHTML: q => q
                        }))
                    }
                    return oe
                }() ? .createHTML(b) || b
            }

            function pe(b) {
                return Error(`Unable to find icon with the name "${b}"`)
            }

            function _(b) {
                return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${b}".`)
            }

            function N(b) {
                return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${b}".`)
            }
            class Y {
                constructor(q, E, B) {
                    this.url = q, this.svgText = E, this.options = B
                }
            }
            let te = (() => {
                class b {
                    constructor(E, B, H, Q) {
                        this._httpClient = E, this._sanitizer = B, this._errorHandler = Q, this._svgIconConfigs = new Map, this._iconSetConfigs = new Map, this._cachedIconsByUrl = new Map, this._inProgressUrlFetches = new Map, this._fontCssClassesByAlias = new Map, this._resolvers = [], this._defaultFontSetClass = ["material-icons", "mat-ligature-font"], this._document = H
                    }
                    addSvgIcon(E, B, H) {
                        return this.addSvgIconInNamespace("", E, B, H)
                    }
                    addSvgIconLiteral(E, B, H) {
                        return this.addSvgIconLiteralInNamespace("", E, B, H)
                    }
                    addSvgIconInNamespace(E, B, H, Q) {
                        return this._addSvgIconConfig(E, B, new Y(H, null, Q))
                    }
                    addSvgIconResolver(E) {
                        return this._resolvers.push(E), this
                    }
                    addSvgIconLiteralInNamespace(E, B, H, Q) {
                        const me = this._sanitizer.sanitize(t.SecurityContext.HTML, H);
                        if (!me) throw N(H);
                        const _e = Ne(me);
                        return this._addSvgIconConfig(E, B, new Y("", _e, Q))
                    }
                    addSvgIconSet(E, B) {
                        return this.addSvgIconSetInNamespace("", E, B)
                    }
                    addSvgIconSetLiteral(E, B) {
                        return this.addSvgIconSetLiteralInNamespace("", E, B)
                    }
                    addSvgIconSetInNamespace(E, B, H) {
                        return this._addSvgIconSetConfig(E, new Y(B, null, H))
                    }
                    addSvgIconSetLiteralInNamespace(E, B, H) {
                        const Q = this._sanitizer.sanitize(t.SecurityContext.HTML, B);
                        if (!Q) throw N(B);
                        const me = Ne(Q);
                        return this._addSvgIconSetConfig(E, new Y("", me, H))
                    }
                    registerFontClassAlias(E, B = E) {
                        return this._fontCssClassesByAlias.set(E, B), this
                    }
                    classNameForFontAlias(E) {
                        return this._fontCssClassesByAlias.get(E) || E
                    }
                    setDefaultFontSetClass(...E) {
                        return this._defaultFontSetClass = E, this
                    }
                    getDefaultFontSetClass() {
                        return this._defaultFontSetClass
                    }
                    getSvgIconFromUrl(E) {
                        const B = this._sanitizer.sanitize(t.SecurityContext.RESOURCE_URL, E);
                        if (!B) throw _(E);
                        const H = this._cachedIconsByUrl.get(B);
                        return H ? (0, p.of)(ge(H)) : this._loadSvgIconFromConfig(new Y(E, null)).pipe((0, M.b)(Q => this._cachedIconsByUrl.set(B, Q)), (0, I.U)(Q => ge(Q)))
                    }
                    getNamedSvgIcon(E, B = "") {
                        const H = be(B, E);
                        let Q = this._svgIconConfigs.get(H);
                        if (Q) return this._getSvgFromConfig(Q);
                        if (Q = this._getIconConfigFromResolvers(B, E), Q) return this._svgIconConfigs.set(H, Q), this._getSvgFromConfig(Q);
                        const me = this._iconSetConfigs.get(B);
                        return me ? this._getSvgFromIconSetConfigs(E, me) : (0, f._)(pe(H))
                    }
                    ngOnDestroy() {
                        this._resolvers = [], this._svgIconConfigs.clear(), this._iconSetConfigs.clear(), this._cachedIconsByUrl.clear()
                    }
                    _getSvgFromConfig(E) {
                        return E.svgText ? (0, p.of)(ge(this._svgElementFromConfig(E))) : this._loadSvgIconFromConfig(E).pipe((0, I.U)(B => ge(B)))
                    }
                    _getSvgFromIconSetConfigs(E, B) {
                        const H = this._extractIconWithNameFromAnySet(E, B);
                        if (H) return (0, p.of)(H);
                        const Q = B.filter(me => !me.svgText).map(me => this._loadSvgIconSetFromConfig(me).pipe((0, z.K)(_e => {
                            const ke = `Loading icon set URL: ${this._sanitizer.sanitize(t.SecurityContext.RESOURCE_URL, me.url)} failed: ${_e.message}`;
                            return this._errorHandler.handleError(new Error(ke)), (0, p.of)(null)
                        })));
                        return (0, v.D)(Q).pipe((0, I.U)(() => {
                            const me = this._extractIconWithNameFromAnySet(E, B);
                            if (!me) throw pe(E);
                            return me
                        }))
                    }
                    _extractIconWithNameFromAnySet(E, B) {
                        for (let H = B.length - 1; H >= 0; H--) {
                            const Q = B[H];
                            if (Q.svgText && Q.svgText.toString().indexOf(E) > -1) {
                                const me = this._svgElementFromConfig(Q),
                                    _e = this._extractSvgIconFromSet(me, E, Q.options);
                                if (_e) return _e
                            }
                        }
                        return null
                    }
                    _loadSvgIconFromConfig(E) {
                        return this._fetchIcon(E).pipe((0, M.b)(B => E.svgText = B), (0, I.U)(() => this._svgElementFromConfig(E)))
                    }
                    _loadSvgIconSetFromConfig(E) {
                        return E.svgText ? (0, p.of)(null) : this._fetchIcon(E).pipe((0, M.b)(B => E.svgText = B))
                    }
                    _extractSvgIconFromSet(E, B, H) {
                        const Q = E.querySelector(`[id="${B}"]`);
                        if (!Q) return null;
                        const me = Q.cloneNode(!0);
                        if (me.removeAttribute("id"), "svg" === me.nodeName.toLowerCase()) return this._setSvgAttributes(me, H);
                        if ("symbol" === me.nodeName.toLowerCase()) return this._setSvgAttributes(this._toSvgElement(me), H);
                        const _e = this._svgElementFromString(Ne("<svg></svg>"));
                        return _e.appendChild(me), this._setSvgAttributes(_e, H)
                    }
                    _svgElementFromString(E) {
                        const B = this._document.createElement("DIV");
                        B.innerHTML = E;
                        const H = B.querySelector("svg");
                        if (!H) throw Error("<svg> tag not found");
                        return H
                    }
                    _toSvgElement(E) {
                        const B = this._svgElementFromString(Ne("<svg></svg>")),
                            H = E.attributes;
                        for (let Q = 0; Q < H.length; Q++) {
                            const {
                                name: me,
                                value: _e
                            } = H[Q];
                            "id" !== me && B.setAttribute(me, _e)
                        }
                        for (let Q = 0; Q < E.childNodes.length; Q++) E.childNodes[Q].nodeType === this._document.ELEMENT_NODE && B.appendChild(E.childNodes[Q].cloneNode(!0));
                        return B
                    }
                    _setSvgAttributes(E, B) {
                        return E.setAttribute("fit", ""), E.setAttribute("height", "100%"), E.setAttribute("width", "100%"), E.setAttribute("preserveAspectRatio", "xMidYMid meet"), E.setAttribute("focusable", "false"), B && B.viewBox && E.setAttribute("viewBox", B.viewBox), E
                    }
                    _fetchIcon(E) {
                        const {
                            url: B,
                            options: H
                        } = E, Q = H ? .withCredentials ? ? !1;
                        if (!this._httpClient) throw function k() {
                            return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")
                        }();
                        if (null == B) throw Error(`Cannot fetch icon from URL "${B}".`);
                        const me = this._sanitizer.sanitize(t.SecurityContext.RESOURCE_URL, B);
                        if (!me) throw _(B);
                        const _e = this._inProgressUrlFetches.get(me);
                        if (_e) return _e;
                        const Le = this._httpClient.get(me, {
                            responseType: "text",
                            withCredentials: Q
                        }).pipe((0, I.U)(ke => Ne(ke)), (0, V.x)(() => this._inProgressUrlFetches.delete(me)), (0, J.B)());
                        return this._inProgressUrlFetches.set(me, Le), Le
                    }
                    _addSvgIconConfig(E, B, H) {
                        return this._svgIconConfigs.set(be(E, B), H), this
                    }
                    _addSvgIconSetConfig(E, B) {
                        const H = this._iconSetConfigs.get(E);
                        return H ? H.push(B) : this._iconSetConfigs.set(E, [B]), this
                    }
                    _svgElementFromConfig(E) {
                        if (!E.svgElement) {
                            const B = this._svgElementFromString(E.svgText);
                            this._setSvgAttributes(B, E.options), E.svgElement = B
                        }
                        return E.svgElement
                    }
                    _getIconConfigFromResolvers(E, B) {
                        for (let H = 0; H < this._resolvers.length; H++) {
                            const Q = this._resolvers[H](B, E);
                            if (Q) return Ee(Q) ? new Y(Q.url, null, Q.options) : new Y(Q, null)
                        }
                    }
                }
                return b.\u0275fac = function(E) {
                    return new(E || b)(t.\u0275\ u0275inject(ce.HttpClient, 8), t.\u0275\ u0275inject(ve.DomSanitizer), t.\u0275\ u0275inject(O.DOCUMENT, 8), t.\u0275\ u0275inject(t.ErrorHandler))
                }, b.\u0275prov = t.\u0275\ u0275defineInjectable({
                    token: b,
                    factory: b.\u0275fac,
                    providedIn: "root"
                }), b
            })();

            function ge(b) {
                return b.cloneNode(!0)
            }

            function be(b, q) {
                return b + ":" + q
            }

            function Ee(b) {
                return !(!b.url || !b.options)
            }
            const He = (0, r.pj)(class {
                    constructor(b) {
                        this._elementRef = b
                    }
                }),
                et = new t.InjectionToken("MAT_ICON_DEFAULT_OPTIONS"),
                rt = new t.InjectionToken("mat-icon-location", {
                    providedIn: "root",
                    factory: function nt() {
                        const b = (0, t.inject)(O.DOCUMENT),
                            q = b ? b.location : null;
                        return {
                            getPathname: () => q ? q.pathname + q.search : ""
                        }
                    }
                }),
                it = ["clip-path", "color-profile", "src", "cursor", "fill", "filter", "marker", "marker-start", "marker-mid", "marker-end", "mask", "stroke"],
                at = it.map(b => `[${b}]`).join(", "),
                gt = /^url\(['"]?#(.*?)['"]?\)$/;
            let Pt = (() => {
                    class b extends He {
                        constructor(E, B, H, Q, me, _e) {
                            super(E), this._iconRegistry = B, this._location = Q, this._errorHandler = me, this._inline = !1, this._previousFontSetClass = [], this._currentIconFetch = A.w0.EMPTY, _e && (_e.color && (this.color = this.defaultColor = _e.color), _e.fontSet && (this.fontSet = _e.fontSet)), H || E.nativeElement.setAttribute("aria-hidden", "true")
                        }
                        get inline() {
                            return this._inline
                        }
                        set inline(E) {
                            this._inline = (0, d.Ig)(E)
                        }
                        get svgIcon() {
                            return this._svgIcon
                        }
                        set svgIcon(E) {
                            E !== this._svgIcon && (E ? this._updateSvgIcon(E) : this._svgIcon && this._clearSvgElement(), this._svgIcon = E)
                        }
                        get fontSet() {
                            return this._fontSet
                        }
                        set fontSet(E) {
                            const B = this._cleanupFontValue(E);
                            B !== this._fontSet && (this._fontSet = B, this._updateFontIconClasses())
                        }
                        get fontIcon() {
                            return this._fontIcon
                        }
                        set fontIcon(E) {
                            const B = this._cleanupFontValue(E);
                            B !== this._fontIcon && (this._fontIcon = B, this._updateFontIconClasses())
                        }
                        _splitIconName(E) {
                            if (!E) return ["", ""];
                            const B = E.split(":");
                            switch (B.length) {
                                case 1:
                                    return ["", B[0]];
                                case 2:
                                    return B;
                                default:
                                    throw Error(`Invalid icon name: "${E}"`)
                            }
                        }
                        ngOnInit() {
                            this._updateFontIconClasses()
                        }
                        ngAfterViewChecked() {
                            const E = this._elementsWithExternalReferences;
                            if (E && E.size) {
                                const B = this._location.getPathname();
                                B !== this._previousPath && (this._previousPath = B, this._prependPathToReferences(B))
                            }
                        }
                        ngOnDestroy() {
                            this._currentIconFetch.unsubscribe(), this._elementsWithExternalReferences && this._elementsWithExternalReferences.clear()
                        }
                        _usingFontIcon() {
                            return !this.svgIcon
                        }
                        _setSvgElement(E) {
                            this._clearSvgElement();
                            const B = this._location.getPathname();
                            this._previousPath = B, this._cacheChildrenWithExternalReferences(E), this._prependPathToReferences(B), this._elementRef.nativeElement.appendChild(E)
                        }
                        _clearSvgElement() {
                            const E = this._elementRef.nativeElement;
                            let B = E.childNodes.length;
                            for (this._elementsWithExternalReferences && this._elementsWithExternalReferences.clear(); B--;) {
                                const H = E.childNodes[B];
                                (1 !== H.nodeType || "svg" === H.nodeName.toLowerCase()) && H.remove()
                            }
                        }
                        _updateFontIconClasses() {
                            if (!this._usingFontIcon()) return;
                            const E = this._elementRef.nativeElement,
                                B = (this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/) : this._iconRegistry.getDefaultFontSetClass()).filter(H => H.length > 0);
                            this._previousFontSetClass.forEach(H => E.classList.remove(H)), B.forEach(H => E.classList.add(H)), this._previousFontSetClass = B, this.fontIcon !== this._previousFontIconClass && !B.includes("mat-ligature-font") && (this._previousFontIconClass && E.classList.remove(this._previousFontIconClass), this.fontIcon && E.classList.add(this.fontIcon), this._previousFontIconClass = this.fontIcon)
                        }
                        _cleanupFontValue(E) {
                            return "string" == typeof E ? E.trim().split(" ")[0] : E
                        }
                        _prependPathToReferences(E) {
                            const B = this._elementsWithExternalReferences;
                            B && B.forEach((H, Q) => {
                                H.forEach(me => {
                                    Q.setAttribute(me.name, `url('${E}#${me.value}')`)
                                })
                            })
                        }
                        _cacheChildrenWithExternalReferences(E) {
                            const B = E.querySelectorAll(at),
                                H = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map;
                            for (let Q = 0; Q < B.length; Q++) it.forEach(me => {
                                const _e = B[Q],
                                    Le = _e.getAttribute(me),
                                    ke = Le ? Le.match(gt) : null;
                                if (ke) {
                                    let je = H.get(_e);
                                    je || (je = [], H.set(_e, je)), je.push({
                                        name: me,
                                        value: ke[1]
                                    })
                                }
                            })
                        }
                        _updateSvgIcon(E) {
                            if (this._svgNamespace = null, this._svgName = null, this._currentIconFetch.unsubscribe(), E) {
                                const [B, H] = this._splitIconName(E);
                                B && (this._svgNamespace = B), H && (this._svgName = H), this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(H, B).pipe((0, ie.q)(1)).subscribe(Q => this._setSvgElement(Q), Q => {
                                    this._errorHandler.handleError(new Error(`Error retrieving icon ${B}:${H}! ${Q.message}`))
                                })
                            }
                        }
                    }
                    return b.\u0275fac = function(E) {
                        return new(E || b)(t.\u0275\ u0275directiveInject(t.ElementRef), t.\u0275\ u0275directiveInject(te), t.\u0275\ u0275injectAttribute("aria-hidden"), t.\u0275\ u0275directiveInject(rt), t.\u0275\ u0275directiveInject(t.ErrorHandler), t.\u0275\ u0275directiveInject(et, 8))
                    }, b.\u0275cmp = t.\u0275\ u0275defineComponent({
                        type: b,
                        selectors: [
                            ["mat-icon"]
                        ],
                        hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
                        hostVars: 8,
                        hostBindings: function(E, B) {
                            2 & E && (t.\u0275\ u0275attribute("data-mat-icon-type", B._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", B._svgName || B.fontIcon)("data-mat-icon-namespace", B._svgNamespace || B.fontSet)("fontIcon", B._usingFontIcon() ? B.fontIcon : null), t.\u0275\ u0275classProp("mat-icon-inline", B.inline)("mat-icon-no-color", "primary" !== B.color && "accent" !== B.color && "warn" !== B.color))
                        },
                        inputs: {
                            color: "color",
                            inline: "inline",
                            svgIcon: "svgIcon",
                            fontSet: "fontSet",
                            fontIcon: "fontIcon"
                        },
                        exportAs: ["matIcon"],
                        features: [t.\u0275\ u0275InheritDefinitionFeature],
                        ngContentSelectors: Oe,
                        decls: 1,
                        vars: 0,
                        template: function(E, B) {
                            1 & E && (t.\u0275\ u0275projectionDef(), t.\u0275\ u0275projection(0))
                        },
                        styles: [".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],
                        encapsulation: 2,
                        changeDetection: 0
                    }), b
                })(),
                Je = (() => {
                    class b {}
                    return b.\u0275fac = function(E) {
                        return new(E || b)
                    }, b.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: b
                    }), b.\u0275inj = t.\u0275\ u0275defineInjector({
                        imports: [r.BQ, r.BQ]
                    }), b
                })()
        },
        7510: (y, T, a) => {
            a.d(T, {
                gD: () => _i,
                LD: () => Kn
            });
            var t = a(1281),
                r = a(8125),
                d = a(7579),
                O = a(9646),
                p = a(9751),
                f = a(4968),
                v = a(4408),
                A = a(727);
            const M = {
                schedule(S) {
                    let c = requestAnimationFrame,
                        l = cancelAnimationFrame;
                    const {
                        delegate: m
                    } = M;
                    m && (c = m.requestAnimationFrame, l = m.cancelAnimationFrame);
                    const C = c(j => {
                        l = void 0, S(j)
                    });
                    return new A.w0(() => l ? .(C))
                },
                requestAnimationFrame(...S) {
                    const {
                        delegate: c
                    } = M;
                    return (c ? .requestAnimationFrame || requestAnimationFrame)(...S)
                },
                cancelAnimationFrame(...S) {
                    const {
                        delegate: c
                    } = M;
                    return (c ? .cancelAnimationFrame || cancelAnimationFrame)(...S)
                },
                delegate: void 0
            };
            var z = a(7565);
            new class V extends z.v {
                flush(c) {
                    this._active = !0;
                    const l = this._scheduled;
                    this._scheduled = void 0;
                    const {
                        actions: m
                    } = this;
                    let C;
                    c = c || m.shift();
                    do {
                        if (C = c.execute(c.state, c.delay)) break
                    } while ((c = m[0]) && c.id === l && m.shift());
                    if (this._active = !1, C) {
                        for (;
                            (c = m[0]) && c.id === l && m.shift();) c.unsubscribe();
                        throw C
                    }
                }
            }(class I extends v.o {
                constructor(c, l) {
                    super(c, l), this.scheduler = c, this.work = l
                }
                requestAsyncId(c, l, m = 0) {
                    return null !== m && m > 0 ? super.requestAsyncId(c, l, m) : (c.actions.push(this), c._scheduled || (c._scheduled = M.requestAnimationFrame(() => c.flush(void 0))))
                }
                recycleAsyncId(c, l, m = 0) {
                    var C;
                    if (null != m ? m > 0 : this.delay > 0) return super.recycleAsyncId(c, l, m);
                    const {
                        actions: j
                    } = c;
                    null != l && (null === (C = j[j.length - 1]) || void 0 === C ? void 0 : C.id) !== l && (M.cancelAnimationFrame(l), c._scheduled = void 0)
                }
            });
            let ve, ce = 1;
            const Oe = {};

            function oe(S) {
                return S in Oe && (delete Oe[S], !0)
            }
            const Me = {
                    setImmediate(S) {
                        const c = ce++;
                        return Oe[c] = !0, ve || (ve = Promise.resolve()), ve.then(() => oe(c) && S()), c
                    },
                    clearImmediate(S) {
                        oe(S)
                    }
                },
                {
                    setImmediate: pe,
                    clearImmediate: k
                } = Me,
                _ = {
                    setImmediate(...S) {
                        const {
                            delegate: c
                        } = _;
                        return (c ? .setImmediate || pe)(...S)
                    },
                    clearImmediate(S) {
                        const {
                            delegate: c
                        } = _;
                        return (c ? .clearImmediate || k)(S)
                    },
                    delegate: void 0
                };
            new class Y extends z.v {
                flush(c) {
                    this._active = !0;
                    const l = this._scheduled;
                    this._scheduled = void 0;
                    const {
                        actions: m
                    } = this;
                    let C;
                    c = c || m.shift();
                    do {
                        if (C = c.execute(c.state, c.delay)) break
                    } while ((c = m[0]) && c.id === l && m.shift());
                    if (this._active = !1, C) {
                        for (;
                            (c = m[0]) && c.id === l && m.shift();) c.unsubscribe();
                        throw C
                    }
                }
            }(class N extends v.o {
                constructor(c, l) {
                    super(c, l), this.scheduler = c, this.work = l
                }
                requestAsyncId(c, l, m = 0) {
                    return null !== m && m > 0 ? super.requestAsyncId(c, l, m) : (c.actions.push(this), c._scheduled || (c._scheduled = _.setImmediate(c.flush.bind(c, void 0))))
                }
                recycleAsyncId(c, l, m = 0) {
                    var C;
                    if (null != m ? m > 0 : this.delay > 0) return super.recycleAsyncId(c, l, m);
                    const {
                        actions: j
                    } = c;
                    null != l && (null === (C = j[j.length - 1]) || void 0 === C ? void 0 : C.id) !== l && (_.clearImmediate(l), c._scheduled = void 0)
                }
            });
            var Z = a(4986),
                ge = a(4482),
                be = a(8421),
                Ee = a(5403),
                et = a(2805);

            function rt(S, c = Z.z) {
                return function He(S) {
                    return (0, ge.e)((c, l) => {
                        let m = !1,
                            C = null,
                            j = null,
                            fe = !1;
                        const Ie = () => {
                                if (j ? .unsubscribe(), j = null, m) {
                                    m = !1;
                                    const Ke = C;
                                    C = null, l.next(Ke)
                                }
                                fe && l.complete()
                            },
                            Ae = () => {
                                j = null, fe && l.complete()
                            };
                        c.subscribe((0, Ee.x)(l, Ke => {
                            m = !0, C = Ke, j || (0, be.Xf)(S(Ke)).subscribe(j = (0, Ee.x)(l, Ie, Ae))
                        }, () => {
                            fe = !0, (!m || !j || j.closed) && l.complete()
                        }))
                    })
                }(() => (0, et.H)(S, c))
            }
            var nt = a(9300),
                it = a(3353),
                at = a(3512),
                gt = a(445);
            let Q = (() => {
                    class S {
                        constructor(l, m, C) {
                            this._ngZone = l, this._platform = m, this._scrolled = new d.x, this._globalSubscription = null, this._scrolledCount = 0, this.scrollContainers = new Map, this._document = C
                        }
                        register(l) {
                            this.scrollContainers.has(l) || this.scrollContainers.set(l, l.elementScrolled().subscribe(() => this._scrolled.next(l)))
                        }
                        deregister(l) {
                            const m = this.scrollContainers.get(l);
                            m && (m.unsubscribe(), this.scrollContainers.delete(l))
                        }
                        scrolled(l = 20) {
                            return this._platform.isBrowser ? new p.y(m => {
                                this._globalSubscription || this._addGlobalListener();
                                const C = l > 0 ? this._scrolled.pipe(rt(l)).subscribe(m) : this._scrolled.subscribe(m);
                                return this._scrolledCount++, () => {
                                    C.unsubscribe(), this._scrolledCount--, this._scrolledCount || this._removeGlobalListener()
                                }
                            }) : (0, O.of)()
                        }
                        ngOnDestroy() {
                            this._removeGlobalListener(), this.scrollContainers.forEach((l, m) => this.deregister(m)), this._scrolled.complete()
                        }
                        ancestorScrolled(l, m) {
                            const C = this.getAncestorScrollContainers(l);
                            return this.scrolled(m).pipe((0, nt.h)(j => !j || C.indexOf(j) > -1))
                        }
                        getAncestorScrollContainers(l) {
                            const m = [];
                            return this.scrollContainers.forEach((C, j) => {
                                this._scrollableContainsElement(j, l) && m.push(j)
                            }), m
                        }
                        _getWindow() {
                            return this._document.defaultView || window
                        }
                        _scrollableContainsElement(l, m) {
                            let C = (0, t.fI)(m),
                                j = l.getElementRef().nativeElement;
                            do {
                                if (C == j) return !0
                            } while (C = C.parentElement);
                            return !1
                        }
                        _addGlobalListener() {
                            this._globalSubscription = this._ngZone.runOutsideAngular(() => {
                                const l = this._getWindow();
                                return (0, f.R)(l.document, "scroll").subscribe(() => this._scrolled.next())
                            })
                        }
                        _removeGlobalListener() {
                            this._globalSubscription && (this._globalSubscription.unsubscribe(), this._globalSubscription = null)
                        }
                    }
                    return S.\u0275fac = function(l) {
                        return new(l || S)(r.\u0275\ u0275inject(r.NgZone), r.\u0275\ u0275inject(it.t4), r.\u0275\ u0275inject(at.DOCUMENT, 8))
                    }, S.\u0275prov = r.\u0275\ u0275defineInjectable({
                        token: S,
                        factory: S.\u0275fac,
                        providedIn: "root"
                    }), S
                })(),
                Le = (() => {
                    class S {
                        constructor(l, m, C) {
                            this._platform = l, this._change = new d.x, this._changeListener = j => {
                                this._change.next(j)
                            }, this._document = C, m.runOutsideAngular(() => {
                                if (l.isBrowser) {
                                    const j = this._getWindow();
                                    j.addEventListener("resize", this._changeListener), j.addEventListener("orientationchange", this._changeListener)
                                }
                                this.change().subscribe(() => this._viewportSize = null)
                            })
                        }
                        ngOnDestroy() {
                            if (this._platform.isBrowser) {
                                const l = this._getWindow();
                                l.removeEventListener("resize", this._changeListener), l.removeEventListener("orientationchange", this._changeListener)
                            }
                            this._change.complete()
                        }
                        getViewportSize() {
                            this._viewportSize || this._updateViewportSize();
                            const l = {
                                width: this._viewportSize.width,
                                height: this._viewportSize.height
                            };
                            return this._platform.isBrowser || (this._viewportSize = null), l
                        }
                        getViewportRect() {
                            const l = this.getViewportScrollPosition(),
                                {
                                    width: m,
                                    height: C
                                } = this.getViewportSize();
                            return {
                                top: l.top,
                                left: l.left,
                                bottom: l.top + C,
                                right: l.left + m,
                                height: C,
                                width: m
                            }
                        }
                        getViewportScrollPosition() {
                            if (!this._platform.isBrowser) return {
                                top: 0,
                                left: 0
                            };
                            const l = this._document,
                                m = this._getWindow(),
                                C = l.documentElement,
                                j = C.getBoundingClientRect();
                            return {
                                top: -j.top || l.body.scrollTop || m.scrollY || C.scrollTop || 0,
                                left: -j.left || l.body.scrollLeft || m.scrollX || C.scrollLeft || 0
                            }
                        }
                        change(l = 20) {
                            return l > 0 ? this._change.pipe(rt(l)) : this._change
                        }
                        _getWindow() {
                            return this._document.defaultView || window
                        }
                        _updateViewportSize() {
                            const l = this._getWindow();
                            this._viewportSize = this._platform.isBrowser ? {
                                width: l.innerWidth,
                                height: l.innerHeight
                            } : {
                                width: 0,
                                height: 0
                            }
                        }
                    }
                    return S.\u0275fac = function(l) {
                        return new(l || S)(r.\u0275\ u0275inject(it.t4), r.\u0275\ u0275inject(r.NgZone), r.\u0275\ u0275inject(at.DOCUMENT, 8))
                    }, S.\u0275prov = r.\u0275\ u0275defineInjectable({
                        token: S,
                        factory: S.\u0275fac,
                        providedIn: "root"
                    }), S
                })(),
                se = (() => {
                    class S {}
                    return S.\u0275fac = function(l) {
                        return new(l || S)
                    }, S.\u0275mod = r.\u0275\ u0275defineNgModule({
                        type: S
                    }), S.\u0275inj = r.\u0275\ u0275defineInjector({}), S
                })(),
                we = (() => {
                    class S {}
                    return S.\u0275fac = function(l) {
                        return new(l || S)
                    }, S.\u0275mod = r.\u0275\ u0275defineNgModule({
                        type: S
                    }), S.\u0275inj = r.\u0275\ u0275defineInjector({
                        imports: [gt.vT, se, gt.vT, se]
                    }), S
                })();
            class D {
                attach(c) {
                    return this._attachedHost = c, c.attach(this)
                }
                detach() {
                    let c = this._attachedHost;
                    null != c && (this._attachedHost = null, c.detach())
                }
                get isAttached() {
                    return null != this._attachedHost
                }
                setAttachedHost(c) {
                    this._attachedHost = c
                }
            }
            class he extends D {
                constructor(c, l, m, C) {
                    super(), this.component = c, this.viewContainerRef = l, this.injector = m, this.componentFactoryResolver = C
                }
            }
            class De extends D {
                constructor(c, l, m, C) {
                    super(), this.templateRef = c, this.viewContainerRef = l, this.context = m, this.injector = C
                }
                get origin() {
                    return this.templateRef.elementRef
                }
                attach(c, l = this.context) {
                    return this.context = l, super.attach(c)
                }
                detach() {
                    return this.context = void 0, super.detach()
                }
            }
            class $ extends D {
                constructor(c) {
                    super(), this.element = c instanceof r.ElementRef ? c.nativeElement : c
                }
            }
            class ne extends class G {
                constructor() {
                    this._isDisposed = !1, this.attachDomPortal = null
                }
                hasAttached() {
                    return !!this._attachedPortal
                }
                attach(c) {
                    return c instanceof he ? (this._attachedPortal = c, this.attachComponentPortal(c)) : c instanceof De ? (this._attachedPortal = c, this.attachTemplatePortal(c)) : this.attachDomPortal && c instanceof $ ? (this._attachedPortal = c, this.attachDomPortal(c)) : void 0
                }
                detach() {
                    this._attachedPortal && (this._attachedPortal.setAttachedHost(null), this._attachedPortal = null), this._invokeDisposeFn()
                }
                dispose() {
                    this.hasAttached() && this.detach(), this._invokeDisposeFn(), this._isDisposed = !0
                }
                setDisposeFn(c) {
                    this._disposeFn = c
                }
                _invokeDisposeFn() {
                    this._disposeFn && (this._disposeFn(), this._disposeFn = null)
                }
            } {
                constructor(c, l, m, C, j) {
                    super(), this.outletElement = c, this._componentFactoryResolver = l, this._appRef = m, this._defaultInjector = C, this.attachDomPortal = fe => {
                        const Ie = fe.element,
                            Ae = this._document.createComment("dom-portal");
                        Ie.parentNode.insertBefore(Ae, Ie), this.outletElement.appendChild(Ie), this._attachedPortal = fe, super.setDisposeFn(() => {
                            Ae.parentNode && Ae.parentNode.replaceChild(Ie, Ae)
                        })
                    }, this._document = j
                }
                attachComponentPortal(c) {
                    const m = (c.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(c.component);
                    let C;
                    return c.viewContainerRef ? (C = c.viewContainerRef.createComponent(m, c.viewContainerRef.length, c.injector || c.viewContainerRef.injector), this.setDisposeFn(() => C.destroy())) : (C = m.create(c.injector || this._defaultInjector || r.Injector.NULL), this._appRef.attachView(C.hostView), this.setDisposeFn(() => {
                        this._appRef.viewCount > 0 && this._appRef.detachView(C.hostView), C.destroy()
                    })), this.outletElement.appendChild(this._getComponentRootNode(C)), this._attachedPortal = c, C
                }
                attachTemplatePortal(c) {
                    let l = c.viewContainerRef,
                        m = l.createEmbeddedView(c.templateRef, c.context, {
                            injector: c.injector
                        });
                    return m.rootNodes.forEach(C => this.outletElement.appendChild(C)), m.detectChanges(), this.setDisposeFn(() => {
                        let C = l.indexOf(m); - 1 !== C && l.remove(C)
                    }), this._attachedPortal = c, m
                }
                dispose() {
                    super.dispose(), this.outletElement.remove()
                }
                _getComponentRootNode(c) {
                    return c.hostView.rootNodes[0]
                }
            }
            let le = (() => {
                class S {}
                return S.\u0275fac = function(l) {
                    return new(l || S)
                }, S.\u0275mod = r.\u0275\ u0275defineNgModule({
                    type: S
                }), S.\u0275inj = r.\u0275\ u0275defineInjector({}), S
            })();
            var Xe = a(6451),
                ot = a(5698),
                pt = a(2722),
                jt = a(2529),
                _t = a(9521);
            const Xt = (0, it.Mq)();
            class It {
                constructor(c, l) {
                    this._viewportRuler = c, this._previousHTMLStyles = {
                        top: "",
                        left: ""
                    }, this._isEnabled = !1, this._document = l
                }
                attach() {}
                enable() {
                    if (this._canBeEnabled()) {
                        const c = this._document.documentElement;
                        this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(), this._previousHTMLStyles.left = c.style.left || "", this._previousHTMLStyles.top = c.style.top || "", c.style.left = (0, t.HM)(-this._previousScrollPosition.left), c.style.top = (0, t.HM)(-this._previousScrollPosition.top), c.classList.add("cdk-global-scrollblock"), this._isEnabled = !0
                    }
                }
                disable() {
                    if (this._isEnabled) {
                        const c = this._document.documentElement,
                            m = c.style,
                            C = this._document.body.style,
                            j = m.scrollBehavior || "",
                            fe = C.scrollBehavior || "";
                        this._isEnabled = !1, m.left = this._previousHTMLStyles.left, m.top = this._previousHTMLStyles.top, c.classList.remove("cdk-global-scrollblock"), Xt && (m.scrollBehavior = C.scrollBehavior = "auto"), window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top), Xt && (m.scrollBehavior = j, C.scrollBehavior = fe)
                    }
                }
                _canBeEnabled() {
                    if (this._document.documentElement.classList.contains("cdk-global-scrollblock") || this._isEnabled) return !1;
                    const l = this._document.body,
                        m = this._viewportRuler.getViewportSize();
                    return l.scrollHeight > m.height || l.scrollWidth > m.width
                }
            }
            class Qt {
                constructor(c, l, m, C) {
                    this._scrollDispatcher = c, this._ngZone = l, this._viewportRuler = m, this._config = C, this._scrollSubscription = null, this._detach = () => {
                        this.disable(), this._overlayRef.hasAttached() && this._ngZone.run(() => this._overlayRef.detach())
                    }
                }
                attach(c) {
                    this._overlayRef = c
                }
                enable() {
                    if (this._scrollSubscription) return;
                    const c = this._scrollDispatcher.scrolled(0);
                    this._config && this._config.threshold && this._config.threshold > 1 ? (this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top, this._scrollSubscription = c.subscribe(() => {
                        const l = this._viewportRuler.getViewportScrollPosition().top;
                        Math.abs(l - this._initialScrollPosition) > this._config.threshold ? this._detach() : this._overlayRef.updatePosition()
                    })) : this._scrollSubscription = c.subscribe(this._detach)
                }
                disable() {
                    this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null)
                }
                detach() {
                    this.disable(), this._overlayRef = null
                }
            }
            class Ut {
                enable() {}
                disable() {}
                attach() {}
            }

            function Et(S, c) {
                return c.some(l => S.bottom < l.top || S.top > l.bottom || S.right < l.left || S.left > l.right)
            }

            function vn(S, c) {
                return c.some(l => S.top < l.top || S.bottom > l.bottom || S.left < l.left || S.right > l.right)
            }
            class ln {
                constructor(c, l, m, C) {
                    this._scrollDispatcher = c, this._viewportRuler = l, this._ngZone = m, this._config = C, this._scrollSubscription = null
                }
                attach(c) {
                    this._overlayRef = c
                }
                enable() {
                    this._scrollSubscription || (this._scrollSubscription = this._scrollDispatcher.scrolled(this._config ? this._config.scrollThrottle : 0).subscribe(() => {
                        if (this._overlayRef.updatePosition(), this._config && this._config.autoClose) {
                            const l = this._overlayRef.overlayElement.getBoundingClientRect(),
                                {
                                    width: m,
                                    height: C
                                } = this._viewportRuler.getViewportSize();
                            Et(l, [{
                                width: m,
                                height: C,
                                bottom: C,
                                right: m,
                                top: 0,
                                left: 0
                            }]) && (this.disable(), this._ngZone.run(() => this._overlayRef.detach()))
                        }
                    }))
                }
                disable() {
                    this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null)
                }
                detach() {
                    this.disable(), this._overlayRef = null
                }
            }
            let Mn = (() => {
                class S {
                    constructor(l, m, C, j) {
                        this._scrollDispatcher = l, this._viewportRuler = m, this._ngZone = C, this.noop = () => new Ut, this.close = fe => new Qt(this._scrollDispatcher, this._ngZone, this._viewportRuler, fe), this.block = () => new It(this._viewportRuler, this._document), this.reposition = fe => new ln(this._scrollDispatcher, this._viewportRuler, this._ngZone, fe), this._document = j
                    }
                }
                return S.\u0275fac = function(l) {
                    return new(l || S)(r.\u0275\ u0275inject(Q), r.\u0275\ u0275inject(Le), r.\u0275\ u0275inject(r.NgZone), r.\u0275\ u0275inject(at.DOCUMENT))
                }, S.\u0275prov = r.\u0275\ u0275defineInjectable({
                    token: S,
                    factory: S.\u0275fac,
                    providedIn: "root"
                }), S
            })();
            class Jt {
                constructor(c) {
                    if (this.scrollStrategy = new Ut, this.panelClass = "", this.hasBackdrop = !1, this.backdropClass = "cdk-overlay-dark-backdrop", this.disposeOnNavigation = !1, c) {
                        const l = Object.keys(c);
                        for (const m of l) void 0 !== c[m] && (this[m] = c[m])
                    }
                }
            }
            class bn {
                constructor(c, l) {
                    this.connectionPair = c, this.scrollableViewProperties = l
                }
            }
            let xn = (() => {
                    class S {
                        constructor(l) {
                            this._attachedOverlays = [], this._document = l
                        }
                        ngOnDestroy() {
                            this.detach()
                        }
                        add(l) {
                            this.remove(l), this._attachedOverlays.push(l)
                        }
                        remove(l) {
                            const m = this._attachedOverlays.indexOf(l);
                            m > -1 && this._attachedOverlays.splice(m, 1), 0 === this._attachedOverlays.length && this.detach()
                        }
                    }
                    return S.\u0275fac = function(l) {
                        return new(l || S)(r.\u0275\ u0275inject(at.DOCUMENT))
                    }, S.\u0275prov = r.\u0275\ u0275defineInjectable({
                        token: S,
                        factory: S.\u0275fac,
                        providedIn: "root"
                    }), S
                })(),
                on = (() => {
                    class S extends xn {
                        constructor(l, m) {
                            super(l), this._ngZone = m, this._keydownListener = C => {
                                const j = this._attachedOverlays;
                                for (let fe = j.length - 1; fe > -1; fe--)
                                    if (j[fe]._keydownEvents.observers.length > 0) {
                                        const Ie = j[fe]._keydownEvents;
                                        this._ngZone ? this._ngZone.run(() => Ie.next(C)) : Ie.next(C);
                                        break
                                    }
                            }
                        }
                        add(l) {
                            super.add(l), this._isAttached || (this._ngZone ? this._ngZone.runOutsideAngular(() => this._document.body.addEventListener("keydown", this._keydownListener)) : this._document.body.addEventListener("keydown", this._keydownListener), this._isAttached = !0)
                        }
                        detach() {
                            this._isAttached && (this._document.body.removeEventListener("keydown", this._keydownListener), this._isAttached = !1)
                        }
                    }
                    return S.\u0275fac = function(l) {
                        return new(l || S)(r.\u0275\ u0275inject(at.DOCUMENT), r.\u0275\ u0275inject(r.NgZone, 8))
                    }, S.\u0275prov = r.\u0275\ u0275defineInjectable({
                        token: S,
                        factory: S.\u0275fac,
                        providedIn: "root"
                    }), S
                })(),
                qt = (() => {
                    class S extends xn {
                        constructor(l, m, C) {
                            super(l), this._platform = m, this._ngZone = C, this._cursorStyleIsSet = !1, this._pointerDownListener = j => {
                                this._pointerDownEventTarget = (0, it.sA)(j)
                            }, this._clickListener = j => {
                                const fe = (0, it.sA)(j),
                                    Ie = "click" === j.type && this._pointerDownEventTarget ? this._pointerDownEventTarget : fe;
                                this._pointerDownEventTarget = null;
                                const Ae = this._attachedOverlays.slice();
                                for (let Ke = Ae.length - 1; Ke > -1; Ke--) {
                                    const qe = Ae[Ke];
                                    if (qe._outsidePointerEvents.observers.length < 1 || !qe.hasAttached()) continue;
                                    if (qe.overlayElement.contains(fe) || qe.overlayElement.contains(Ie)) break;
                                    const ft = qe._outsidePointerEvents;
                                    this._ngZone ? this._ngZone.run(() => ft.next(j)) : ft.next(j)
                                }
                            }
                        }
                        add(l) {
                            if (super.add(l), !this._isAttached) {
                                const m = this._document.body;
                                this._ngZone ? this._ngZone.runOutsideAngular(() => this._addEventListeners(m)) : this._addEventListeners(m), this._platform.IOS && !this._cursorStyleIsSet && (this._cursorOriginalValue = m.style.cursor, m.style.cursor = "pointer", this._cursorStyleIsSet = !0), this._isAttached = !0
                            }
                        }
                        detach() {
                            if (this._isAttached) {
                                const l = this._document.body;
                                l.removeEventListener("pointerdown", this._pointerDownListener, !0), l.removeEventListener("click", this._clickListener, !0), l.removeEventListener("auxclick", this._clickListener, !0), l.removeEventListener("contextmenu", this._clickListener, !0), this._platform.IOS && this._cursorStyleIsSet && (l.style.cursor = this._cursorOriginalValue, this._cursorStyleIsSet = !1), this._isAttached = !1
                            }
                        }
                        _addEventListeners(l) {
                            l.addEventListener("pointerdown", this._pointerDownListener, !0), l.addEventListener("click", this._clickListener, !0), l.addEventListener("auxclick", this._clickListener, !0), l.addEventListener("contextmenu", this._clickListener, !0)
                        }
                    }
                    return S.\u0275fac = function(l) {
                        return new(l || S)(r.\u0275\ u0275inject(at.DOCUMENT), r.\u0275\ u0275inject(it.t4), r.\u0275\ u0275inject(r.NgZone, 8))
                    }, S.\u0275prov = r.\u0275\ u0275defineInjectable({
                        token: S,
                        factory: S.\u0275fac,
                        providedIn: "root"
                    }), S
                })(),
                In = (() => {
                    class S {
                        constructor(l, m) {
                            this._platform = m, this._document = l
                        }
                        ngOnDestroy() {
                            this._containerElement ? .remove()
                        }
                        getContainerElement() {
                            return this._containerElement || this._createContainer(), this._containerElement
                        }
                        _createContainer() {
                            const l = "cdk-overlay-container";
                            if (this._platform.isBrowser || (0, it.Oy)()) {
                                const C = this._document.querySelectorAll(`.${l}[platform="server"], .${l}[platform="test"]`);
                                for (let j = 0; j < C.length; j++) C[j].remove()
                            }
                            const m = this._document.createElement("div");
                            m.classList.add(l), (0, it.Oy)() ? m.setAttribute("platform", "test") : this._platform.isBrowser || m.setAttribute("platform", "server"), this._document.body.appendChild(m), this._containerElement = m
                        }
                    }
                    return S.\u0275fac = function(l) {
                        return new(l || S)(r.\u0275\ u0275inject(at.DOCUMENT), r.\u0275\ u0275inject(it.t4))
                    }, S.\u0275prov = r.\u0275\ u0275defineInjectable({
                        token: S,
                        factory: S.\u0275fac,
                        providedIn: "root"
                    }), S
                })();
            class Hn {
                constructor(c, l, m, C, j, fe, Ie, Ae, Ke, qe = !1) {
                    this._portalOutlet = c, this._host = l, this._pane = m, this._config = C, this._ngZone = j, this._keyboardDispatcher = fe, this._document = Ie, this._location = Ae, this._outsideClickDispatcher = Ke, this._animationsDisabled = qe, this._backdropElement = null, this._backdropClick = new d.x, this._attachments = new d.x, this._detachments = new d.x, this._locationChanges = A.w0.EMPTY, this._backdropClickHandler = ft => this._backdropClick.next(ft), this._backdropTransitionendHandler = ft => {
                        this._disposeBackdrop(ft.target)
                    }, this._keydownEvents = new d.x, this._outsidePointerEvents = new d.x, C.scrollStrategy && (this._scrollStrategy = C.scrollStrategy, this._scrollStrategy.attach(this)), this._positionStrategy = C.positionStrategy
                }
                get overlayElement() {
                    return this._pane
                }
                get backdropElement() {
                    return this._backdropElement
                }
                get hostElement() {
                    return this._host
                }
                attach(c) {
                    !this._host.parentElement && this._previousHostParent && this._previousHostParent.appendChild(this._host);
                    const l = this._portalOutlet.attach(c);
                    return this._positionStrategy && this._positionStrategy.attach(this), this._updateStackingOrder(), this._updateElementSize(), this._updateElementDirection(), this._scrollStrategy && this._scrollStrategy.enable(), this._ngZone.onStable.pipe((0, ot.q)(1)).subscribe(() => {
                        this.hasAttached() && this.updatePosition()
                    }), this._togglePointerEvents(!0), this._config.hasBackdrop && this._attachBackdrop(), this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !0), this._attachments.next(), this._keyboardDispatcher.add(this), this._config.disposeOnNavigation && (this._locationChanges = this._location.subscribe(() => this.dispose())), this._outsideClickDispatcher.add(this), "function" == typeof l ? .onDestroy && l.onDestroy(() => {
                        this.hasAttached() && this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()))
                    }), l
                }
                detach() {
                    if (!this.hasAttached()) return;
                    this.detachBackdrop(), this._togglePointerEvents(!1), this._positionStrategy && this._positionStrategy.detach && this._positionStrategy.detach(), this._scrollStrategy && this._scrollStrategy.disable();
                    const c = this._portalOutlet.detach();
                    return this._detachments.next(), this._keyboardDispatcher.remove(this), this._detachContentWhenStable(), this._locationChanges.unsubscribe(), this._outsideClickDispatcher.remove(this), c
                }
                dispose() {
                    const c = this.hasAttached();
                    this._positionStrategy && this._positionStrategy.dispose(), this._disposeScrollStrategy(), this._disposeBackdrop(this._backdropElement), this._locationChanges.unsubscribe(), this._keyboardDispatcher.remove(this), this._portalOutlet.dispose(), this._attachments.complete(), this._backdropClick.complete(), this._keydownEvents.complete(), this._outsidePointerEvents.complete(), this._outsideClickDispatcher.remove(this), this._host ? .remove(), this._previousHostParent = this._pane = this._host = null, c && this._detachments.next(), this._detachments.complete()
                }
                hasAttached() {
                    return this._portalOutlet.hasAttached()
                }
                backdropClick() {
                    return this._backdropClick
                }
                attachments() {
                    return this._attachments
                }
                detachments() {
                    return this._detachments
                }
                keydownEvents() {
                    return this._keydownEvents
                }
                outsidePointerEvents() {
                    return this._outsidePointerEvents
                }
                getConfig() {
                    return this._config
                }
                updatePosition() {
                    this._positionStrategy && this._positionStrategy.apply()
                }
                updatePositionStrategy(c) {
                    c !== this._positionStrategy && (this._positionStrategy && this._positionStrategy.dispose(), this._positionStrategy = c, this.hasAttached() && (c.attach(this), this.updatePosition()))
                }
                updateSize(c) {
                    this._config = { ...this._config,
                        ...c
                    }, this._updateElementSize()
                }
                setDirection(c) {
                    this._config = { ...this._config,
                        direction: c
                    }, this._updateElementDirection()
                }
                addPanelClass(c) {
                    this._pane && this._toggleClasses(this._pane, c, !0)
                }
                removePanelClass(c) {
                    this._pane && this._toggleClasses(this._pane, c, !1)
                }
                getDirection() {
                    const c = this._config.direction;
                    return c ? "string" == typeof c ? c : c.value : "ltr"
                }
                updateScrollStrategy(c) {
                    c !== this._scrollStrategy && (this._disposeScrollStrategy(), this._scrollStrategy = c, this.hasAttached() && (c.attach(this), c.enable()))
                }
                _updateElementDirection() {
                    this._host.setAttribute("dir", this.getDirection())
                }
                _updateElementSize() {
                    if (!this._pane) return;
                    const c = this._pane.style;
                    c.width = (0, t.HM)(this._config.width), c.height = (0, t.HM)(this._config.height), c.minWidth = (0, t.HM)(this._config.minWidth), c.minHeight = (0, t.HM)(this._config.minHeight), c.maxWidth = (0, t.HM)(this._config.maxWidth), c.maxHeight = (0, t.HM)(this._config.maxHeight)
                }
                _togglePointerEvents(c) {
                    this._pane.style.pointerEvents = c ? "" : "none"
                }
                _attachBackdrop() {
                    const c = "cdk-overlay-backdrop-showing";
                    this._backdropElement = this._document.createElement("div"), this._backdropElement.classList.add("cdk-overlay-backdrop"), this._animationsDisabled && this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"), this._config.backdropClass && this._toggleClasses(this._backdropElement, this._config.backdropClass, !0), this._host.parentElement.insertBefore(this._backdropElement, this._host), this._backdropElement.addEventListener("click", this._backdropClickHandler), !this._animationsDisabled && typeof requestAnimationFrame < "u" ? this._ngZone.runOutsideAngular(() => {
                        requestAnimationFrame(() => {
                            this._backdropElement && this._backdropElement.classList.add(c)
                        })
                    }) : this._backdropElement.classList.add(c)
                }
                _updateStackingOrder() {
                    this._host.nextSibling && this._host.parentNode.appendChild(this._host)
                }
                detachBackdrop() {
                    const c = this._backdropElement;
                    if (c) {
                        if (this._animationsDisabled) return void this._disposeBackdrop(c);
                        c.classList.remove("cdk-overlay-backdrop-showing"), this._ngZone.runOutsideAngular(() => {
                            c.addEventListener("transitionend", this._backdropTransitionendHandler)
                        }), c.style.pointerEvents = "none", this._backdropTimeout = this._ngZone.runOutsideAngular(() => setTimeout(() => {
                            this._disposeBackdrop(c)
                        }, 500))
                    }
                }
                _toggleClasses(c, l, m) {
                    const C = (0, t.Eq)(l || []).filter(j => !!j);
                    C.length && (m ? c.classList.add(...C) : c.classList.remove(...C))
                }
                _detachContentWhenStable() {
                    this._ngZone.runOutsideAngular(() => {
                        const c = this._ngZone.onStable.pipe((0, pt.R)((0, Xe.T)(this._attachments, this._detachments))).subscribe(() => {
                            (!this._pane || !this._host || 0 === this._pane.children.length) && (this._pane && this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !1), this._host && this._host.parentElement && (this._previousHostParent = this._host.parentElement, this._host.remove()), c.unsubscribe())
                        })
                    })
                }
                _disposeScrollStrategy() {
                    const c = this._scrollStrategy;
                    c && (c.disable(), c.detach && c.detach())
                }
                _disposeBackdrop(c) {
                    c && (c.removeEventListener("click", this._backdropClickHandler), c.removeEventListener("transitionend", this._backdropTransitionendHandler), c.remove(), this._backdropElement === c && (this._backdropElement = null)), this._backdropTimeout && (clearTimeout(this._backdropTimeout), this._backdropTimeout = void 0)
                }
            }
            const Nn = "cdk-overlay-connected-position-bounding-box",
                Rn = /([A-Za-z%]+)$/;
            class kn {
                constructor(c, l, m, C, j) {
                    this._viewportRuler = l, this._document = m, this._platform = C, this._overlayContainer = j, this._lastBoundingBoxSize = {
                        width: 0,
                        height: 0
                    }, this._isPushed = !1, this._canPush = !0, this._growAfterOpen = !1, this._hasFlexibleDimensions = !0, this._positionLocked = !1, this._viewportMargin = 0, this._scrollables = [], this._preferredPositions = [], this._positionChanges = new d.x, this._resizeSubscription = A.w0.EMPTY, this._offsetX = 0, this._offsetY = 0, this._appliedPanelClasses = [], this.positionChanges = this._positionChanges, this.setOrigin(c)
                }
                get positions() {
                    return this._preferredPositions
                }
                attach(c) {
                    this._validatePositions(), c.hostElement.classList.add(Nn), this._overlayRef = c, this._boundingBox = c.hostElement, this._pane = c.overlayElement, this._isDisposed = !1, this._isInitialRender = !0, this._lastPosition = null, this._resizeSubscription.unsubscribe(), this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
                        this._isInitialRender = !0, this.apply()
                    })
                }
                apply() {
                    if (this._isDisposed || !this._platform.isBrowser) return;
                    if (!this._isInitialRender && this._positionLocked && this._lastPosition) return void this.reapplyLastPosition();
                    this._clearPanelClasses(), this._resetOverlayElementStyles(), this._resetBoundingBoxStyles(), this._viewportRect = this._getNarrowedViewportRect(), this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect(), this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
                    const c = this._originRect,
                        l = this._overlayRect,
                        m = this._viewportRect,
                        C = this._containerRect,
                        j = [];
                    let fe;
                    for (let Ie of this._preferredPositions) {
                        let Ae = this._getOriginPoint(c, C, Ie),
                            Ke = this._getOverlayPoint(Ae, l, Ie),
                            qe = this._getOverlayFit(Ke, l, m, Ie);
                        if (qe.isCompletelyWithinViewport) return this._isPushed = !1, void this._applyPosition(Ie, Ae);
                        this._canFitWithFlexibleDimensions(qe, Ke, m) ? j.push({
                            position: Ie,
                            origin: Ae,
                            overlayRect: l,
                            boundingBoxRect: this._calculateBoundingBoxRect(Ae, Ie)
                        }) : (!fe || fe.overlayFit.visibleArea < qe.visibleArea) && (fe = {
                            overlayFit: qe,
                            overlayPoint: Ke,
                            originPoint: Ae,
                            position: Ie,
                            overlayRect: l
                        })
                    }
                    if (j.length) {
                        let Ie = null,
                            Ae = -1;
                        for (const Ke of j) {
                            const qe = Ke.boundingBoxRect.width * Ke.boundingBoxRect.height * (Ke.position.weight || 1);
                            qe > Ae && (Ae = qe, Ie = Ke)
                        }
                        return this._isPushed = !1, void this._applyPosition(Ie.position, Ie.origin)
                    }
                    if (this._canPush) return this._isPushed = !0, void this._applyPosition(fe.position, fe.originPoint);
                    this._applyPosition(fe.position, fe.originPoint)
                }
                detach() {
                    this._clearPanelClasses(), this._lastPosition = null, this._previousPushAmount = null, this._resizeSubscription.unsubscribe()
                }
                dispose() {
                    this._isDisposed || (this._boundingBox && F(this._boundingBox.style, {
                        top: "",
                        left: "",
                        right: "",
                        bottom: "",
                        height: "",
                        width: "",
                        alignItems: "",
                        justifyContent: ""
                    }), this._pane && this._resetOverlayElementStyles(), this._overlayRef && this._overlayRef.hostElement.classList.remove(Nn), this.detach(), this._positionChanges.complete(), this._overlayRef = this._boundingBox = null, this._isDisposed = !0)
                }
                reapplyLastPosition() {
                    if (this._isDisposed || !this._platform.isBrowser) return;
                    const c = this._lastPosition;
                    if (c) {
                        this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect(), this._viewportRect = this._getNarrowedViewportRect(), this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
                        const l = this._getOriginPoint(this._originRect, this._containerRect, c);
                        this._applyPosition(c, l)
                    } else this.apply()
                }
                withScrollableContainers(c) {
                    return this._scrollables = c, this
                }
                withPositions(c) {
                    return this._preferredPositions = c, -1 === c.indexOf(this._lastPosition) && (this._lastPosition = null), this._validatePositions(), this
                }
                withViewportMargin(c) {
                    return this._viewportMargin = c, this
                }
                withFlexibleDimensions(c = !0) {
                    return this._hasFlexibleDimensions = c, this
                }
                withGrowAfterOpen(c = !0) {
                    return this._growAfterOpen = c, this
                }
                withPush(c = !0) {
                    return this._canPush = c, this
                }
                withLockedPosition(c = !0) {
                    return this._positionLocked = c, this
                }
                setOrigin(c) {
                    return this._origin = c, this
                }
                withDefaultOffsetX(c) {
                    return this._offsetX = c, this
                }
                withDefaultOffsetY(c) {
                    return this._offsetY = c, this
                }
                withTransformOriginOn(c) {
                    return this._transformOriginSelector = c, this
                }
                _getOriginPoint(c, l, m) {
                    let C, j;
                    if ("center" == m.originX) C = c.left + c.width / 2;
                    else {
                        const fe = this._isRtl() ? c.right : c.left,
                            Ie = this._isRtl() ? c.left : c.right;
                        C = "start" == m.originX ? fe : Ie
                    }
                    return l.left < 0 && (C -= l.left), j = "center" == m.originY ? c.top + c.height / 2 : "top" == m.originY ? c.top : c.bottom, l.top < 0 && (j -= l.top), {
                        x: C,
                        y: j
                    }
                }
                _getOverlayPoint(c, l, m) {
                    let C, j;
                    return C = "center" == m.overlayX ? -l.width / 2 : "start" === m.overlayX ? this._isRtl() ? -l.width : 0 : this._isRtl() ? 0 : -l.width, j = "center" == m.overlayY ? -l.height / 2 : "top" == m.overlayY ? 0 : -l.height, {
                        x: c.x + C,
                        y: c.y + j
                    }
                }
                _getOverlayFit(c, l, m, C) {
                    const j = ee(l);
                    let {
                        x: fe,
                        y: Ie
                    } = c, Ae = this._getOffset(C, "x"), Ke = this._getOffset(C, "y");
                    Ae && (fe += Ae), Ke && (Ie += Ke);
                    let hn = 0 - Ie,
                        nn = Ie + j.height - m.height,
                        rn = this._subtractOverflows(j.width, 0 - fe, fe + j.width - m.width),
                        sn = this._subtractOverflows(j.height, hn, nn),
                        gn = rn * sn;
                    return {
                        visibleArea: gn,
                        isCompletelyWithinViewport: j.width * j.height === gn,
                        fitsInViewportVertically: sn === j.height,
                        fitsInViewportHorizontally: rn == j.width
                    }
                }
                _canFitWithFlexibleDimensions(c, l, m) {
                    if (this._hasFlexibleDimensions) {
                        const C = m.bottom - l.y,
                            j = m.right - l.x,
                            fe = ye(this._overlayRef.getConfig().minHeight),
                            Ie = ye(this._overlayRef.getConfig().minWidth),
                            Ke = c.fitsInViewportHorizontally || null != Ie && Ie <= j;
                        return (c.fitsInViewportVertically || null != fe && fe <= C) && Ke
                    }
                    return !1
                }
                _pushOverlayOnScreen(c, l, m) {
                    if (this._previousPushAmount && this._positionLocked) return {
                        x: c.x + this._previousPushAmount.x,
                        y: c.y + this._previousPushAmount.y
                    };
                    const C = ee(l),
                        j = this._viewportRect,
                        fe = Math.max(c.x + C.width - j.width, 0),
                        Ie = Math.max(c.y + C.height - j.height, 0),
                        Ae = Math.max(j.top - m.top - c.y, 0),
                        Ke = Math.max(j.left - m.left - c.x, 0);
                    let qe = 0,
                        ft = 0;
                    return qe = C.width <= j.width ? Ke || -fe : c.x < this._viewportMargin ? j.left - m.left - c.x : 0, ft = C.height <= j.height ? Ae || -Ie : c.y < this._viewportMargin ? j.top - m.top - c.y : 0, this._previousPushAmount = {
                        x: qe,
                        y: ft
                    }, {
                        x: c.x + qe,
                        y: c.y + ft
                    }
                }
                _applyPosition(c, l) {
                    if (this._setTransformOrigin(c), this._setOverlayElementStyles(l, c), this._setBoundingBoxStyles(l, c), c.panelClass && this._addPanelClasses(c.panelClass), this._lastPosition = c, this._positionChanges.observers.length) {
                        const m = this._getScrollVisibility(),
                            C = new bn(c, m);
                        this._positionChanges.next(C)
                    }
                    this._isInitialRender = !1
                }
                _setTransformOrigin(c) {
                    if (!this._transformOriginSelector) return;
                    const l = this._boundingBox.querySelectorAll(this._transformOriginSelector);
                    let m, C = c.overlayY;
                    m = "center" === c.overlayX ? "center" : this._isRtl() ? "start" === c.overlayX ? "right" : "left" : "start" === c.overlayX ? "left" : "right";
                    for (let j = 0; j < l.length; j++) l[j].style.transformOrigin = `${m} ${C}`
                }
                _calculateBoundingBoxRect(c, l) {
                    const m = this._viewportRect,
                        C = this._isRtl();
                    let j, fe, Ie, qe, ft, hn;
                    if ("top" === l.overlayY) fe = c.y, j = m.height - fe + this._viewportMargin;
                    else if ("bottom" === l.overlayY) Ie = m.height - c.y + 2 * this._viewportMargin, j = m.height - Ie + this._viewportMargin;
                    else {
                        const nn = Math.min(m.bottom - c.y + m.top, c.y),
                            rn = this._lastBoundingBoxSize.height;
                        j = 2 * nn, fe = c.y - nn, j > rn && !this._isInitialRender && !this._growAfterOpen && (fe = c.y - rn / 2)
                    }
                    if ("end" === l.overlayX && !C || "start" === l.overlayX && C) hn = m.width - c.x + this._viewportMargin, qe = c.x - this._viewportMargin;
                    else if ("start" === l.overlayX && !C || "end" === l.overlayX && C) ft = c.x, qe = m.right - c.x;
                    else {
                        const nn = Math.min(m.right - c.x + m.left, c.x),
                            rn = this._lastBoundingBoxSize.width;
                        qe = 2 * nn, ft = c.x - nn, qe > rn && !this._isInitialRender && !this._growAfterOpen && (ft = c.x - rn / 2)
                    }
                    return {
                        top: fe,
                        left: ft,
                        bottom: Ie,
                        right: hn,
                        width: qe,
                        height: j
                    }
                }
                _setBoundingBoxStyles(c, l) {
                    const m = this._calculateBoundingBoxRect(c, l);
                    !this._isInitialRender && !this._growAfterOpen && (m.height = Math.min(m.height, this._lastBoundingBoxSize.height), m.width = Math.min(m.width, this._lastBoundingBoxSize.width));
                    const C = {};
                    if (this._hasExactPosition()) C.top = C.left = "0", C.bottom = C.right = C.maxHeight = C.maxWidth = "", C.width = C.height = "100%";
                    else {
                        const j = this._overlayRef.getConfig().maxHeight,
                            fe = this._overlayRef.getConfig().maxWidth;
                        C.height = (0, t.HM)(m.height), C.top = (0, t.HM)(m.top), C.bottom = (0, t.HM)(m.bottom), C.width = (0, t.HM)(m.width), C.left = (0, t.HM)(m.left), C.right = (0, t.HM)(m.right), C.alignItems = "center" === l.overlayX ? "center" : "end" === l.overlayX ? "flex-end" : "flex-start", C.justifyContent = "center" === l.overlayY ? "center" : "bottom" === l.overlayY ? "flex-end" : "flex-start", j && (C.maxHeight = (0, t.HM)(j)), fe && (C.maxWidth = (0, t.HM)(fe))
                    }
                    this._lastBoundingBoxSize = m, F(this._boundingBox.style, C)
                }
                _resetBoundingBoxStyles() {
                    F(this._boundingBox.style, {
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        height: "",
                        width: "",
                        alignItems: "",
                        justifyContent: ""
                    })
                }
                _resetOverlayElementStyles() {
                    F(this._pane.style, {
                        top: "",
                        left: "",
                        bottom: "",
                        right: "",
                        position: "",
                        transform: ""
                    })
                }
                _setOverlayElementStyles(c, l) {
                    const m = {},
                        C = this._hasExactPosition(),
                        j = this._hasFlexibleDimensions,
                        fe = this._overlayRef.getConfig();
                    if (C) {
                        const qe = this._viewportRuler.getViewportScrollPosition();
                        F(m, this._getExactOverlayY(l, c, qe)), F(m, this._getExactOverlayX(l, c, qe))
                    } else m.position = "static";
                    let Ie = "",
                        Ae = this._getOffset(l, "x"),
                        Ke = this._getOffset(l, "y");
                    Ae && (Ie += `translateX(${Ae}px) `), Ke && (Ie += `translateY(${Ke}px)`), m.transform = Ie.trim(), fe.maxHeight && (C ? m.maxHeight = (0, t.HM)(fe.maxHeight) : j && (m.maxHeight = "")), fe.maxWidth && (C ? m.maxWidth = (0, t.HM)(fe.maxWidth) : j && (m.maxWidth = "")), F(this._pane.style, m)
                }
                _getExactOverlayY(c, l, m) {
                    let C = {
                            top: "",
                            bottom: ""
                        },
                        j = this._getOverlayPoint(l, this._overlayRect, c);
                    return this._isPushed && (j = this._pushOverlayOnScreen(j, this._overlayRect, m)), "bottom" === c.overlayY ? C.bottom = this._document.documentElement.clientHeight - (j.y + this._overlayRect.height) + "px" : C.top = (0, t.HM)(j.y), C
                }
                _getExactOverlayX(c, l, m) {
                    let fe, C = {
                            left: "",
                            right: ""
                        },
                        j = this._getOverlayPoint(l, this._overlayRect, c);
                    return this._isPushed && (j = this._pushOverlayOnScreen(j, this._overlayRect, m)), fe = this._isRtl() ? "end" === c.overlayX ? "left" : "right" : "end" === c.overlayX ? "right" : "left", "right" === fe ? C.right = this._document.documentElement.clientWidth - (j.x + this._overlayRect.width) + "px" : C.left = (0, t.HM)(j.x), C
                }
                _getScrollVisibility() {
                    const c = this._getOriginRect(),
                        l = this._pane.getBoundingClientRect(),
                        m = this._scrollables.map(C => C.getElementRef().nativeElement.getBoundingClientRect());
                    return {
                        isOriginClipped: vn(c, m),
                        isOriginOutsideView: Et(c, m),
                        isOverlayClipped: vn(l, m),
                        isOverlayOutsideView: Et(l, m)
                    }
                }
                _subtractOverflows(c, ...l) {
                    return l.reduce((m, C) => m - Math.max(C, 0), c)
                }
                _getNarrowedViewportRect() {
                    const c = this._document.documentElement.clientWidth,
                        l = this._document.documentElement.clientHeight,
                        m = this._viewportRuler.getViewportScrollPosition();
                    return {
                        top: m.top + this._viewportMargin,
                        left: m.left + this._viewportMargin,
                        right: m.left + c - this._viewportMargin,
                        bottom: m.top + l - this._viewportMargin,
                        width: c - 2 * this._viewportMargin,
                        height: l - 2 * this._viewportMargin
                    }
                }
                _isRtl() {
                    return "rtl" === this._overlayRef.getDirection()
                }
                _hasExactPosition() {
                    return !this._hasFlexibleDimensions || this._isPushed
                }
                _getOffset(c, l) {
                    return "x" === l ? c.offsetX ? ? this._offsetX : c.offsetY ? ? this._offsetY
                }
                _validatePositions() {}
                _addPanelClasses(c) {
                    this._pane && (0, t.Eq)(c).forEach(l => {
                        "" !== l && -1 === this._appliedPanelClasses.indexOf(l) && (this._appliedPanelClasses.push(l), this._pane.classList.add(l))
                    })
                }
                _clearPanelClasses() {
                    this._pane && (this._appliedPanelClasses.forEach(c => {
                        this._pane.classList.remove(c)
                    }), this._appliedPanelClasses = [])
                }
                _getOriginRect() {
                    const c = this._origin;
                    if (c instanceof r.ElementRef) return c.nativeElement.getBoundingClientRect();
                    if (c instanceof Element) return c.getBoundingClientRect();
                    const l = c.width || 0,
                        m = c.height || 0;
                    return {
                        top: c.y,
                        bottom: c.y + m,
                        left: c.x,
                        right: c.x + l,
                        height: m,
                        width: l
                    }
                }
            }

            function F(S, c) {
                for (let l in c) c.hasOwnProperty(l) && (S[l] = c[l]);
                return S
            }

            function ye(S) {
                if ("number" != typeof S && null != S) {
                    const [c, l] = S.split(Rn);
                    return l && "px" !== l ? null : parseFloat(c)
                }
                return S || null
            }

            function ee(S) {
                return {
                    top: Math.floor(S.top),
                    right: Math.floor(S.right),
                    bottom: Math.floor(S.bottom),
                    left: Math.floor(S.left),
                    width: Math.floor(S.width),
                    height: Math.floor(S.height)
                }
            }
            const st = "cdk-global-overlay-wrapper";
            class zt {
                constructor() {
                    this._cssPosition = "static", this._topOffset = "", this._bottomOffset = "", this._alignItems = "", this._xPosition = "", this._xOffset = "", this._width = "", this._height = "", this._isDisposed = !1
                }
                attach(c) {
                    const l = c.getConfig();
                    this._overlayRef = c, this._width && !l.width && c.updateSize({
                        width: this._width
                    }), this._height && !l.height && c.updateSize({
                        height: this._height
                    }), c.hostElement.classList.add(st), this._isDisposed = !1
                }
                top(c = "") {
                    return this._bottomOffset = "", this._topOffset = c, this._alignItems = "flex-start", this
                }
                left(c = "") {
                    return this._xOffset = c, this._xPosition = "left", this
                }
                bottom(c = "") {
                    return this._topOffset = "", this._bottomOffset = c, this._alignItems = "flex-end", this
                }
                right(c = "") {
                    return this._xOffset = c, this._xPosition = "right", this
                }
                start(c = "") {
                    return this._xOffset = c, this._xPosition = "start", this
                }
                end(c = "") {
                    return this._xOffset = c, this._xPosition = "end", this
                }
                width(c = "") {
                    return this._overlayRef ? this._overlayRef.updateSize({
                        width: c
                    }) : this._width = c, this
                }
                height(c = "") {
                    return this._overlayRef ? this._overlayRef.updateSize({
                        height: c
                    }) : this._height = c, this
                }
                centerHorizontally(c = "") {
                    return this.left(c), this._xPosition = "center", this
                }
                centerVertically(c = "") {
                    return this.top(c), this._alignItems = "center", this
                }
                apply() {
                    if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
                    const c = this._overlayRef.overlayElement.style,
                        l = this._overlayRef.hostElement.style,
                        m = this._overlayRef.getConfig(),
                        {
                            width: C,
                            height: j,
                            maxWidth: fe,
                            maxHeight: Ie
                        } = m,
                        Ae = !("100%" !== C && "100vw" !== C || fe && "100%" !== fe && "100vw" !== fe),
                        Ke = !("100%" !== j && "100vh" !== j || Ie && "100%" !== Ie && "100vh" !== Ie),
                        qe = this._xPosition,
                        ft = this._xOffset,
                        hn = "rtl" === this._overlayRef.getConfig().direction;
                    let nn = "",
                        rn = "",
                        sn = "";
                    Ae ? sn = "flex-start" : "center" === qe ? (sn = "center", hn ? rn = ft : nn = ft) : hn ? "left" === qe || "end" === qe ? (sn = "flex-end", nn = ft) : ("right" === qe || "start" === qe) && (sn = "flex-start", rn = ft) : "left" === qe || "start" === qe ? (sn = "flex-start", nn = ft) : ("right" === qe || "end" === qe) && (sn = "flex-end", rn = ft), c.position = this._cssPosition, c.marginLeft = Ae ? "0" : nn, c.marginTop = Ke ? "0" : this._topOffset, c.marginBottom = this._bottomOffset, c.marginRight = Ae ? "0" : rn, l.justifyContent = sn, l.alignItems = Ke ? "flex-start" : this._alignItems
                }
                dispose() {
                    if (this._isDisposed || !this._overlayRef) return;
                    const c = this._overlayRef.overlayElement.style,
                        l = this._overlayRef.hostElement,
                        m = l.style;
                    l.classList.remove(st), m.justifyContent = m.alignItems = c.marginTop = c.marginBottom = c.marginLeft = c.marginRight = c.position = "", this._overlayRef = null, this._isDisposed = !0
                }
            }
            let Gt = (() => {
                    class S {
                        constructor(l, m, C, j) {
                            this._viewportRuler = l, this._document = m, this._platform = C, this._overlayContainer = j
                        }
                        global() {
                            return new zt
                        }
                        flexibleConnectedTo(l) {
                            return new kn(l, this._viewportRuler, this._document, this._platform, this._overlayContainer)
                        }
                    }
                    return S.\u0275fac = function(l) {
                        return new(l || S)(r.\u0275\ u0275inject(Le), r.\u0275\ u0275inject(at.DOCUMENT), r.\u0275\ u0275inject(it.t4), r.\u0275\ u0275inject(In))
                    }, S.\u0275prov = r.\u0275\ u0275defineInjectable({
                        token: S,
                        factory: S.\u0275fac,
                        providedIn: "root"
                    }), S
                })(),
                fn = 0,
                en = (() => {
                    class S {
                        constructor(l, m, C, j, fe, Ie, Ae, Ke, qe, ft, hn, nn) {
                            this.scrollStrategies = l, this._overlayContainer = m, this._componentFactoryResolver = C, this._positionBuilder = j, this._keyboardDispatcher = fe, this._injector = Ie, this._ngZone = Ae, this._document = Ke, this._directionality = qe, this._location = ft, this._outsideClickDispatcher = hn, this._animationsModuleType = nn
                        }
                        create(l) {
                            const m = this._createHostElement(),
                                C = this._createPaneElement(m),
                                j = this._createPortalOutlet(C),
                                fe = new Jt(l);
                            return fe.direction = fe.direction || this._directionality.value, new Hn(j, m, C, fe, this._ngZone, this._keyboardDispatcher, this._document, this._location, this._outsideClickDispatcher, "NoopAnimations" === this._animationsModuleType)
                        }
                        position() {
                            return this._positionBuilder
                        }
                        _createPaneElement(l) {
                            const m = this._document.createElement("div");
                            return m.id = "cdk-overlay-" + fn++, m.classList.add("cdk-overlay-pane"), l.appendChild(m), m
                        }
                        _createHostElement() {
                            const l = this._document.createElement("div");
                            return this._overlayContainer.getContainerElement().appendChild(l), l
                        }
                        _createPortalOutlet(l) {
                            return this._appRef || (this._appRef = this._injector.get(r.ApplicationRef)), new ne(l, this._componentFactoryResolver, this._appRef, this._injector, this._document)
                        }
                    }
                    return S.\u0275fac = function(l) {
                        return new(l || S)(r.\u0275\ u0275inject(Mn), r.\u0275\ u0275inject(In), r.\u0275\ u0275inject(r.ComponentFactoryResolver), r.\u0275\ u0275inject(Gt), r.\u0275\ u0275inject(on), r.\u0275\ u0275inject(r.Injector), r.\u0275\ u0275inject(r.NgZone), r.\u0275\ u0275inject(at.DOCUMENT), r.\u0275\ u0275inject(gt.Is), r.\u0275\ u0275inject(at.Location), r.\u0275\ u0275inject(qt), r.\u0275\ u0275inject(r.ANIMATION_MODULE_TYPE, 8))
                    }, S.\u0275prov = r.\u0275\ u0275defineInjectable({
                        token: S,
                        factory: S.\u0275fac
                    }), S
                })();
            const An = [{
                    originX: "start",
                    originY: "bottom",
                    overlayX: "start",
                    overlayY: "top"
                }, {
                    originX: "start",
                    originY: "top",
                    overlayX: "start",
                    overlayY: "bottom"
                }, {
                    originX: "end",
                    originY: "top",
                    overlayX: "end",
                    overlayY: "bottom"
                }, {
                    originX: "end",
                    originY: "bottom",
                    overlayX: "end",
                    overlayY: "top"
                }],
                zn = new r.InjectionToken("cdk-connected-overlay-scroll-strategy");
            let an = (() => {
                    class S {
                        constructor(l) {
                            this.elementRef = l
                        }
                    }
                    return S.\u0275fac = function(l) {
                        return new(l || S)(r.\u0275\ u0275directiveInject(r.ElementRef))
                    }, S.\u0275dir = r.\u0275\ u0275defineDirective({
                        type: S,
                        selectors: [
                            ["", "cdk-overlay-origin", ""],
                            ["", "overlay-origin", ""],
                            ["", "cdkOverlayOrigin", ""]
                        ],
                        exportAs: ["cdkOverlayOrigin"]
                    }), S
                })(),
                Fn = (() => {
                    class S {
                        constructor(l, m, C, j, fe) {
                            this._overlay = l, this._dir = fe, this._hasBackdrop = !1, this._lockPosition = !1, this._growAfterOpen = !1, this._flexibleDimensions = !1, this._push = !1, this._backdropSubscription = A.w0.EMPTY, this._attachSubscription = A.w0.EMPTY, this._detachSubscription = A.w0.EMPTY, this._positionSubscription = A.w0.EMPTY, this.viewportMargin = 0, this.open = !1, this.disableClose = !1, this.backdropClick = new r.EventEmitter, this.positionChange = new r.EventEmitter, this.attach = new r.EventEmitter, this.detach = new r.EventEmitter, this.overlayKeydown = new r.EventEmitter, this.overlayOutsideClick = new r.EventEmitter, this._templatePortal = new De(m, C), this._scrollStrategyFactory = j, this.scrollStrategy = this._scrollStrategyFactory()
                        }
                        get offsetX() {
                            return this._offsetX
                        }
                        set offsetX(l) {
                            this._offsetX = l, this._position && this._updatePositionStrategy(this._position)
                        }
                        get offsetY() {
                            return this._offsetY
                        }
                        set offsetY(l) {
                            this._offsetY = l, this._position && this._updatePositionStrategy(this._position)
                        }
                        get hasBackdrop() {
                            return this._hasBackdrop
                        }
                        set hasBackdrop(l) {
                            this._hasBackdrop = (0, t.Ig)(l)
                        }
                        get lockPosition() {
                            return this._lockPosition
                        }
                        set lockPosition(l) {
                            this._lockPosition = (0, t.Ig)(l)
                        }
                        get flexibleDimensions() {
                            return this._flexibleDimensions
                        }
                        set flexibleDimensions(l) {
                            this._flexibleDimensions = (0, t.Ig)(l)
                        }
                        get growAfterOpen() {
                            return this._growAfterOpen
                        }
                        set growAfterOpen(l) {
                            this._growAfterOpen = (0, t.Ig)(l)
                        }
                        get push() {
                            return this._push
                        }
                        set push(l) {
                            this._push = (0, t.Ig)(l)
                        }
                        get overlayRef() {
                            return this._overlayRef
                        }
                        get dir() {
                            return this._dir ? this._dir.value : "ltr"
                        }
                        ngOnDestroy() {
                            this._attachSubscription.unsubscribe(), this._detachSubscription.unsubscribe(), this._backdropSubscription.unsubscribe(), this._positionSubscription.unsubscribe(), this._overlayRef && this._overlayRef.dispose()
                        }
                        ngOnChanges(l) {
                            this._position && (this._updatePositionStrategy(this._position), this._overlayRef.updateSize({
                                width: this.width,
                                minWidth: this.minWidth,
                                height: this.height,
                                minHeight: this.minHeight
                            }), l.origin && this.open && this._position.apply()), l.open && (this.open ? this._attachOverlay() : this._detachOverlay())
                        }
                        _createOverlay() {
                            (!this.positions || !this.positions.length) && (this.positions = An);
                            const l = this._overlayRef = this._overlay.create(this._buildConfig());
                            this._attachSubscription = l.attachments().subscribe(() => this.attach.emit()), this._detachSubscription = l.detachments().subscribe(() => this.detach.emit()), l.keydownEvents().subscribe(m => {
                                this.overlayKeydown.next(m), m.keyCode === _t.hY && !this.disableClose && !(0, _t.Vb)(m) && (m.preventDefault(), this._detachOverlay())
                            }), this._overlayRef.outsidePointerEvents().subscribe(m => {
                                this.overlayOutsideClick.next(m)
                            })
                        }
                        _buildConfig() {
                            const l = this._position = this.positionStrategy || this._createPositionStrategy(),
                                m = new Jt({
                                    direction: this._dir,
                                    positionStrategy: l,
                                    scrollStrategy: this.scrollStrategy,
                                    hasBackdrop: this.hasBackdrop
                                });
                            return (this.width || 0 === this.width) && (m.width = this.width), (this.height || 0 === this.height) && (m.height = this.height), (this.minWidth || 0 === this.minWidth) && (m.minWidth = this.minWidth), (this.minHeight || 0 === this.minHeight) && (m.minHeight = this.minHeight), this.backdropClass && (m.backdropClass = this.backdropClass), this.panelClass && (m.panelClass = this.panelClass), m
                        }
                        _updatePositionStrategy(l) {
                            const m = this.positions.map(C => ({
                                originX: C.originX,
                                originY: C.originY,
                                overlayX: C.overlayX,
                                overlayY: C.overlayY,
                                offsetX: C.offsetX || this.offsetX,
                                offsetY: C.offsetY || this.offsetY,
                                panelClass: C.panelClass || void 0
                            }));
                            return l.setOrigin(this._getFlexibleConnectedPositionStrategyOrigin()).withPositions(m).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector)
                        }
                        _createPositionStrategy() {
                            const l = this._overlay.position().flexibleConnectedTo(this._getFlexibleConnectedPositionStrategyOrigin());
                            return this._updatePositionStrategy(l), l
                        }
                        _getFlexibleConnectedPositionStrategyOrigin() {
                            return this.origin instanceof an ? this.origin.elementRef : this.origin
                        }
                        _attachOverlay() {
                            this._overlayRef ? this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop : this._createOverlay(), this._overlayRef.hasAttached() || this._overlayRef.attach(this._templatePortal), this.hasBackdrop ? this._backdropSubscription = this._overlayRef.backdropClick().subscribe(l => {
                                this.backdropClick.emit(l)
                            }) : this._backdropSubscription.unsubscribe(), this._positionSubscription.unsubscribe(), this.positionChange.observers.length > 0 && (this._positionSubscription = this._position.positionChanges.pipe((0, jt.o)(() => this.positionChange.observers.length > 0)).subscribe(l => {
                                this.positionChange.emit(l), 0 === this.positionChange.observers.length && this._positionSubscription.unsubscribe()
                            }))
                        }
                        _detachOverlay() {
                            this._overlayRef && this._overlayRef.detach(), this._backdropSubscription.unsubscribe(), this._positionSubscription.unsubscribe()
                        }
                    }
                    return S.\u0275fac = function(l) {
                        return new(l || S)(r.\u0275\ u0275directiveInject(en), r.\u0275\ u0275directiveInject(r.TemplateRef), r.\u0275\ u0275directiveInject(r.ViewContainerRef), r.\u0275\ u0275directiveInject(zn), r.\u0275\ u0275directiveInject(gt.Is, 8))
                    }, S.\u0275dir = r.\u0275\ u0275defineDirective({
                        type: S,
                        selectors: [
                            ["", "cdk-connected-overlay", ""],
                            ["", "connected-overlay", ""],
                            ["", "cdkConnectedOverlay", ""]
                        ],
                        inputs: {
                            origin: ["cdkConnectedOverlayOrigin", "origin"],
                            positions: ["cdkConnectedOverlayPositions", "positions"],
                            positionStrategy: ["cdkConnectedOverlayPositionStrategy", "positionStrategy"],
                            offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"],
                            offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"],
                            width: ["cdkConnectedOverlayWidth", "width"],
                            height: ["cdkConnectedOverlayHeight", "height"],
                            minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"],
                            minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"],
                            backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"],
                            panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"],
                            viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"],
                            scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
                            open: ["cdkConnectedOverlayOpen", "open"],
                            disableClose: ["cdkConnectedOverlayDisableClose", "disableClose"],
                            transformOriginSelector: ["cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"],
                            hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop"],
                            lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition"],
                            flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions"],
                            growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen"],
                            push: ["cdkConnectedOverlayPush", "push"]
                        },
                        outputs: {
                            backdropClick: "backdropClick",
                            positionChange: "positionChange",
                            attach: "attach",
                            detach: "detach",
                            overlayKeydown: "overlayKeydown",
                            overlayOutsideClick: "overlayOutsideClick"
                        },
                        exportAs: ["cdkConnectedOverlay"],
                        features: [r.\u0275\ u0275NgOnChangesFeature]
                    }), S
                })();
            const Ci = {
                provide: zn,
                deps: [en],
                useFactory: function Gn(S) {
                    return () => S.scrollStrategies.reposition()
                }
            };
            let Mi = (() => {
                class S {}
                return S.\u0275fac = function(l) {
                    return new(l || S)
                }, S.\u0275mod = r.\u0275\ u0275defineNgModule({
                    type: S
                }), S.\u0275inj = r.\u0275\ u0275defineInjector({
                    providers: [en, Ci],
                    imports: [gt.vT, le, we, we]
                }), S
            })();
            var $t = a(3238),
                $n = a(9549),
                ci = a(2687);
            class xi {
                constructor(c = !1, l, m = !0, C) {
                    this._multiple = c, this._emitChanges = m, this.compareWith = C, this._selection = new Set, this._deselectedToEmit = [], this._selectedToEmit = [], this.changed = new d.x, l && l.length && (c ? l.forEach(j => this._markSelected(j)) : this._markSelected(l[0]), this._selectedToEmit.length = 0)
                }
                get selected() {
                    return this._selected || (this._selected = Array.from(this._selection.values())), this._selected
                }
                select(...c) {
                    this._verifyValueAssignment(c), c.forEach(m => this._markSelected(m));
                    const l = this._hasQueuedChanges();
                    return this._emitChangeEvent(), l
                }
                deselect(...c) {
                    this._verifyValueAssignment(c), c.forEach(m => this._unmarkSelected(m));
                    const l = this._hasQueuedChanges();
                    return this._emitChangeEvent(), l
                }
                setSelection(...c) {
                    this._verifyValueAssignment(c);
                    const l = this.selected,
                        m = new Set(c);
                    c.forEach(j => this._markSelected(j)), l.filter(j => !m.has(j)).forEach(j => this._unmarkSelected(j));
                    const C = this._hasQueuedChanges();
                    return this._emitChangeEvent(), C
                }
                toggle(c) {
                    return this.isSelected(c) ? this.deselect(c) : this.select(c)
                }
                clear(c = !0) {
                    this._unmarkAll();
                    const l = this._hasQueuedChanges();
                    return c && this._emitChangeEvent(), l
                }
                isSelected(c) {
                    if (this.compareWith) {
                        for (const l of this._selection)
                            if (this.compareWith(l, c)) return !0;
                        return !1
                    }
                    return this._selection.has(c)
                }
                isEmpty() {
                    return 0 === this._selection.size
                }
                hasValue() {
                    return !this.isEmpty()
                }
                sort(c) {
                    this._multiple && this.selected && this._selected.sort(c)
                }
                isMultipleSelection() {
                    return this._multiple
                }
                _emitChangeEvent() {
                    this._selected = null, (this._selectedToEmit.length || this._deselectedToEmit.length) && (this.changed.next({
                        source: this,
                        added: this._selectedToEmit,
                        removed: this._deselectedToEmit
                    }), this._deselectedToEmit = [], this._selectedToEmit = [])
                }
                _markSelected(c) {
                    this.isSelected(c) || (this._multiple || this._unmarkAll(), this.isSelected(c) || this._selection.add(c), this._emitChanges && this._selectedToEmit.push(c))
                }
                _unmarkSelected(c) {
                    this.isSelected(c) && (this._selection.delete(c), this._emitChanges && this._deselectedToEmit.push(c))
                }
                _unmarkAll() {
                    this.isEmpty() || this._selection.forEach(c => this._unmarkSelected(c))
                }
                _verifyValueAssignment(c) {}
                _hasQueuedChanges() {
                    return !(!this._deselectedToEmit.length && !this._selectedToEmit.length)
                }
            }
            var Wn = a(8018),
                Pi = a(9770),
                pi = a(8675),
                Cn = a(3900),
                Qn = a(4004),
                gi = a(1884),
                Ft = a(7340);
            const wi = ["trigger"],
                Jn = ["panel"];

            function Di(S, c) {
                if (1 & S && (r.\u0275\ u0275elementStart(0, "span", 8), r.\u0275\ u0275text(1), r.\u0275\ u0275elementEnd()), 2 & S) {
                    const l = r.\u0275\ u0275nextContext();
                    r.\u0275\ u0275advance(1), r.\u0275\ u0275textInterpolate(l.placeholder)
                }
            }

            function Ei(S, c) {
                if (1 & S && (r.\u0275\ u0275elementStart(0, "span", 12), r.\u0275\ u0275text(1), r.\u0275\ u0275elementEnd()), 2 & S) {
                    const l = r.\u0275\ u0275nextContext(2);
                    r.\u0275\ u0275advance(1), r.\u0275\ u0275textInterpolate(l.triggerValue)
                }
            }

            function mi(S, c) {
                1 & S && r.\u0275\ u0275projection(0, 0, ["*ngSwitchCase", "true"])
            }

            function ui(S, c) {
                if (1 & S && (r.\u0275\ u0275elementStart(0, "span", 9), r.\u0275\ u0275template(1, Ei, 2, 1, "span", 10), r.\u0275\ u0275template(2, mi, 1, 0, "ng-content", 11), r.\u0275\ u0275elementEnd()), 2 & S) {
                    const l = r.\u0275\ u0275nextContext();
                    r.\u0275\ u0275property("ngSwitch", !!l.customTrigger), r.\u0275\ u0275advance(2), r.\u0275\ u0275property("ngSwitchCase", !0)
                }
            }

            function Un(S, c) {
                if (1 & S) {
                    const l = r.\u0275\ u0275getCurrentView();
                    r.\u0275\ u0275elementStart(0, "div", 13)(1, "div", 14, 15), r.\u0275\ u0275listener("@transformPanel.done", function(C) {
                        r.\u0275\ u0275restoreView(l);
                        const j = r.\u0275\ u0275nextContext();
                        return r.\u0275\ u0275resetView(j._panelDoneAnimatingStream.next(C.toState))
                    })("keydown", function(C) {
                        r.\u0275\ u0275restoreView(l);
                        const j = r.\u0275\ u0275nextContext();
                        return r.\u0275\ u0275resetView(j._handleKeydown(C))
                    }), r.\u0275\ u0275projection(3, 1), r.\u0275\ u0275elementEnd()()
                }
                if (2 & S) {
                    const l = r.\u0275\ u0275nextContext();
                    r.\u0275\ u0275property("@transformPanelWrap", void 0), r.\u0275\ u0275advance(1), r.\u0275\ u0275classMapInterpolate1("mat-select-panel ", l._getPanelTheme(), ""), r.\u0275\ u0275styleProp("transform-origin", l._transformOrigin)("font-size", l._triggerFontSize, "px"), r.\u0275\ u0275property("ngClass", l.panelClass)("@transformPanel", l.multiple ? "showing-multiple" : "showing"), r.\u0275\ u0275attribute("id", l.id + "-panel")("aria-multiselectable", l.multiple)("aria-label", l.ariaLabel || null)("aria-labelledby", l._getPanelAriaLabelledby())
                }
            }
            const fi = [
                    [
                        ["mat-select-trigger"]
                    ], "*"
                ],
                Si = ["mat-select-trigger", "*"],
                hi = {
                    transformPanelWrap: (0, Ft.X$)("transformPanelWrap", [(0, Ft.eR)("* => void", (0, Ft.IO)("@transformPanel", [(0, Ft.pV)()], {
                        optional: !0
                    }))]),
                    transformPanel: (0, Ft.X$)("transformPanel", [(0, Ft.SB)("void", (0, Ft.oB)({
                        transform: "scaleY(0.8)",
                        minWidth: "100%",
                        opacity: 0
                    })), (0, Ft.SB)("showing", (0, Ft.oB)({
                        opacity: 1,
                        minWidth: "calc(100% + 32px)",
                        transform: "scaleY(1)"
                    })), (0, Ft.SB)("showing-multiple", (0, Ft.oB)({
                        opacity: 1,
                        minWidth: "calc(100% + 64px)",
                        transform: "scaleY(1)"
                    })), (0, Ft.eR)("void => *", (0, Ft.jt)("120ms cubic-bezier(0, 0, 0.2, 1)")), (0, Ft.eR)("* => void", (0, Ft.jt)("100ms 25ms linear", (0, Ft.oB)({
                        opacity: 0
                    })))])
                };
            let Se = 0;
            const wt = new r.InjectionToken("mat-select-scroll-strategy"),
                cn = new r.InjectionToken("MAT_SELECT_CONFIG"),
                Wt = {
                    provide: wt,
                    deps: [en],
                    useFactory: function tn(S) {
                        return () => S.scrollStrategies.reposition()
                    }
                };
            class dn {
                constructor(c, l) {
                    this.source = c, this.value = l
                }
            }
            const pn = (0, $t.Kr)((0, $t.sb)((0, $t.Id)((0, $t.FD)(class {
                    constructor(S, c, l, m, C) {
                        this._elementRef = S, this._defaultErrorStateMatcher = c, this._parentForm = l, this._parentFormGroup = m, this.ngControl = C, this.stateChanges = new d.x
                    }
                })))),
                Pn = new r.InjectionToken("MatSelectTrigger");
            let Dn = (() => {
                    class S extends pn {
                        constructor(l, m, C, j, fe, Ie, Ae, Ke, qe, ft, hn, nn, rn, sn) {
                            super(fe, j, Ae, Ke, ft), this._viewportRuler = l, this._changeDetectorRef = m, this._ngZone = C, this._dir = Ie, this._parentFormField = qe, this._liveAnnouncer = rn, this._defaultOptions = sn, this._panelOpen = !1, this._compareWith = (gn, Ti) => gn === Ti, this._uid = "mat-select-" + Se++, this._triggerAriaLabelledBy = null, this._destroy = new d.x, this._onChange = () => {}, this._onTouched = () => {}, this._valueId = "mat-select-value-" + Se++, this._panelDoneAnimatingStream = new d.x, this._overlayPanelClass = this._defaultOptions ? .overlayPanelClass || "", this._focused = !1, this.controlType = "mat-select", this._multiple = !1, this._disableOptionCentering = this._defaultOptions ? .disableOptionCentering ? ? !1, this.ariaLabel = "", this.optionSelectionChanges = (0, Pi.P)(() => {
                                const gn = this.options;
                                return gn ? gn.changes.pipe((0, pi.O)(gn), (0, Cn.w)(() => (0, Xe.T)(...gn.map(Ti => Ti.onSelectionChange)))) : this._ngZone.onStable.pipe((0, ot.q)(1), (0, Cn.w)(() => this.optionSelectionChanges))
                            }), this.openedChange = new r.EventEmitter, this._openedStream = this.openedChange.pipe((0, nt.h)(gn => gn), (0, Qn.U)(() => {})), this._closedStream = this.openedChange.pipe((0, nt.h)(gn => !gn), (0, Qn.U)(() => {})), this.selectionChange = new r.EventEmitter, this.valueChange = new r.EventEmitter, this.ngControl && (this.ngControl.valueAccessor = this), null != sn ? .typeaheadDebounceInterval && (this._typeaheadDebounceInterval = sn.typeaheadDebounceInterval), this._scrollStrategyFactory = nn, this._scrollStrategy = this._scrollStrategyFactory(), this.tabIndex = parseInt(hn) || 0, this.id = this.id
                        }
                        get focused() {
                            return this._focused || this._panelOpen
                        }
                        get placeholder() {
                            return this._placeholder
                        }
                        set placeholder(l) {
                            this._placeholder = l, this.stateChanges.next()
                        }
                        get required() {
                            return this._required ? ? this.ngControl ? .control ? .hasValidator(Wn.Validators.required) ? ? !1
                        }
                        set required(l) {
                            this._required = (0, t.Ig)(l), this.stateChanges.next()
                        }
                        get multiple() {
                            return this._multiple
                        }
                        set multiple(l) {
                            this._multiple = (0, t.Ig)(l)
                        }
                        get disableOptionCentering() {
                            return this._disableOptionCentering
                        }
                        set disableOptionCentering(l) {
                            this._disableOptionCentering = (0, t.Ig)(l)
                        }
                        get compareWith() {
                            return this._compareWith
                        }
                        set compareWith(l) {
                            this._compareWith = l, this._selectionModel && this._initializeSelection()
                        }
                        get value() {
                            return this._value
                        }
                        set value(l) {
                            this._assignValue(l) && this._onChange(l)
                        }
                        get typeaheadDebounceInterval() {
                            return this._typeaheadDebounceInterval
                        }
                        set typeaheadDebounceInterval(l) {
                            this._typeaheadDebounceInterval = (0, t.su)(l)
                        }
                        get id() {
                            return this._id
                        }
                        set id(l) {
                            this._id = l || this._uid, this.stateChanges.next()
                        }
                        ngOnInit() {
                            this._selectionModel = new xi(this.multiple), this.stateChanges.next(), this._panelDoneAnimatingStream.pipe((0, gi.x)(), (0, pt.R)(this._destroy)).subscribe(() => this._panelDoneAnimating(this.panelOpen))
                        }
                        ngAfterContentInit() {
                            this._initKeyManager(), this._selectionModel.changed.pipe((0, pt.R)(this._destroy)).subscribe(l => {
                                l.added.forEach(m => m.select()), l.removed.forEach(m => m.deselect())
                            }), this.options.changes.pipe((0, pi.O)(null), (0, pt.R)(this._destroy)).subscribe(() => {
                                this._resetOptions(), this._initializeSelection()
                            })
                        }
                        ngDoCheck() {
                            const l = this._getTriggerAriaLabelledby(),
                                m = this.ngControl;
                            if (l !== this._triggerAriaLabelledBy) {
                                const C = this._elementRef.nativeElement;
                                this._triggerAriaLabelledBy = l, l ? C.setAttribute("aria-labelledby", l) : C.removeAttribute("aria-labelledby")
                            }
                            m && (this._previousControl !== m.control && (void 0 !== this._previousControl && null !== m.disabled && m.disabled !== this.disabled && (this.disabled = m.disabled), this._previousControl = m.control), this.updateErrorState())
                        }
                        ngOnChanges(l) {
                            (l.disabled || l.userAriaDescribedBy) && this.stateChanges.next(), l.typeaheadDebounceInterval && this._keyManager && this._keyManager.withTypeAhead(this._typeaheadDebounceInterval)
                        }
                        ngOnDestroy() {
                            this._destroy.next(), this._destroy.complete(), this.stateChanges.complete()
                        }
                        toggle() {
                            this.panelOpen ? this.close() : this.open()
                        }
                        open() {
                            this._canOpen() && (this._panelOpen = !0, this._keyManager.withHorizontalOrientation(null), this._highlightCorrectOption(), this._changeDetectorRef.markForCheck())
                        }
                        close() {
                            this._panelOpen && (this._panelOpen = !1, this._keyManager.withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr"), this._changeDetectorRef.markForCheck(), this._onTouched())
                        }
                        writeValue(l) {
                            this._assignValue(l)
                        }
                        registerOnChange(l) {
                            this._onChange = l
                        }
                        registerOnTouched(l) {
                            this._onTouched = l
                        }
                        setDisabledState(l) {
                            this.disabled = l, this._changeDetectorRef.markForCheck(), this.stateChanges.next()
                        }
                        get panelOpen() {
                            return this._panelOpen
                        }
                        get selected() {
                            return this.multiple ? this._selectionModel ? .selected || [] : this._selectionModel ? .selected[0]
                        }
                        get triggerValue() {
                            if (this.empty) return "";
                            if (this._multiple) {
                                const l = this._selectionModel.selected.map(m => m.viewValue);
                                return this._isRtl() && l.reverse(), l.join(", ")
                            }
                            return this._selectionModel.selected[0].viewValue
                        }
                        _isRtl() {
                            return !!this._dir && "rtl" === this._dir.value
                        }
                        _handleKeydown(l) {
                            this.disabled || (this.panelOpen ? this._handleOpenKeydown(l) : this._handleClosedKeydown(l))
                        }
                        _handleClosedKeydown(l) {
                            const m = l.keyCode,
                                C = m === _t.JH || m === _t.LH || m === _t.oh || m === _t.SV,
                                j = m === _t.K5 || m === _t.L_,
                                fe = this._keyManager;
                            if (!fe.isTyping() && j && !(0, _t.Vb)(l) || (this.multiple || l.altKey) && C) l.preventDefault(), this.open();
                            else if (!this.multiple) {
                                const Ie = this.selected;
                                fe.onKeydown(l);
                                const Ae = this.selected;
                                Ae && Ie !== Ae && this._liveAnnouncer.announce(Ae.viewValue, 1e4)
                            }
                        }
                        _handleOpenKeydown(l) {
                            const m = this._keyManager,
                                C = l.keyCode,
                                j = C === _t.JH || C === _t.LH,
                                fe = m.isTyping();
                            if (j && l.altKey) l.preventDefault(), this.close();
                            else if (fe || C !== _t.K5 && C !== _t.L_ || !m.activeItem || (0, _t.Vb)(l))
                                if (!fe && this._multiple && C === _t.A && l.ctrlKey) {
                                    l.preventDefault();
                                    const Ie = this.options.some(Ae => !Ae.disabled && !Ae.selected);
                                    this.options.forEach(Ae => {
                                        Ae.disabled || (Ie ? Ae.select() : Ae.deselect())
                                    })
                                } else {
                                    const Ie = m.activeItemIndex;
                                    m.onKeydown(l), this._multiple && j && l.shiftKey && m.activeItem && m.activeItemIndex !== Ie && m.activeItem._selectViaInteraction()
                                }
                            else l.preventDefault(), m.activeItem._selectViaInteraction()
                        }
                        _onFocus() {
                            this.disabled || (this._focused = !0, this.stateChanges.next())
                        }
                        _onBlur() {
                            this._focused = !1, !this.disabled && !this.panelOpen && (this._onTouched(), this._changeDetectorRef.markForCheck(), this.stateChanges.next())
                        }
                        _onAttached() {
                            this._overlayDir.positionChange.pipe((0, ot.q)(1)).subscribe(() => {
                                this._changeDetectorRef.detectChanges(), this._positioningSettled()
                            })
                        }
                        _getPanelTheme() {
                            return this._parentFormField ? `mat-${this._parentFormField.color}` : ""
                        }
                        get empty() {
                            return !this._selectionModel || this._selectionModel.isEmpty()
                        }
                        _initializeSelection() {
                            Promise.resolve().then(() => {
                                this.ngControl && (this._value = this.ngControl.value), this._setSelectionByValue(this._value), this.stateChanges.next()
                            })
                        }
                        _setSelectionByValue(l) {
                            if (this._selectionModel.selected.forEach(m => m.setInactiveStyles()), this._selectionModel.clear(), this.multiple && l) Array.isArray(l), l.forEach(m => this._selectOptionByValue(m)), this._sortValues();
                            else {
                                const m = this._selectOptionByValue(l);
                                m ? this._keyManager.updateActiveItem(m) : this.panelOpen || this._keyManager.updateActiveItem(-1)
                            }
                            this._changeDetectorRef.markForCheck()
                        }
                        _selectOptionByValue(l) {
                            const m = this.options.find(C => {
                                if (this._selectionModel.isSelected(C)) return !1;
                                try {
                                    return null != C.value && this._compareWith(C.value, l)
                                } catch {
                                    return !1
                                }
                            });
                            return m && this._selectionModel.select(m), m
                        }
                        _assignValue(l) {
                            return !!(l !== this._value || this._multiple && Array.isArray(l)) && (this.options && this._setSelectionByValue(l), this._value = l, !0)
                        }
                        _initKeyManager() {
                            this._keyManager = new ci.s1(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? "rtl" : "ltr").withHomeAndEnd().withAllowedModifierKeys(["shiftKey"]), this._keyManager.tabOut.pipe((0, pt.R)(this._destroy)).subscribe(() => {
                                this.panelOpen && (!this.multiple && this._keyManager.activeItem && this._keyManager.activeItem._selectViaInteraction(), this.focus(), this.close())
                            }), this._keyManager.change.pipe((0, pt.R)(this._destroy)).subscribe(() => {
                                this._panelOpen && this.panel ? this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0) : !this._panelOpen && !this.multiple && this._keyManager.activeItem && this._keyManager.activeItem._selectViaInteraction()
                            })
                        }
                        _resetOptions() {
                            const l = (0, Xe.T)(this.options.changes, this._destroy);
                            this.optionSelectionChanges.pipe((0, pt.R)(l)).subscribe(m => {
                                this._onSelect(m.source, m.isUserInput), m.isUserInput && !this.multiple && this._panelOpen && (this.close(), this.focus())
                            }), (0, Xe.T)(...this.options.map(m => m._stateChanges)).pipe((0, pt.R)(l)).subscribe(() => {
                                this._changeDetectorRef.markForCheck(), this.stateChanges.next()
                            })
                        }
                        _onSelect(l, m) {
                            const C = this._selectionModel.isSelected(l);
                            null != l.value || this._multiple ? (C !== l.selected && (l.selected ? this._selectionModel.select(l) : this._selectionModel.deselect(l)), m && this._keyManager.setActiveItem(l), this.multiple && (this._sortValues(), m && this.focus())) : (l.deselect(), this._selectionModel.clear(), null != this.value && this._propagateChanges(l.value)), C !== this._selectionModel.isSelected(l) && this._propagateChanges(), this.stateChanges.next()
                        }
                        _sortValues() {
                            if (this.multiple) {
                                const l = this.options.toArray();
                                this._selectionModel.sort((m, C) => this.sortComparator ? this.sortComparator(m, C, l) : l.indexOf(m) - l.indexOf(C)), this.stateChanges.next()
                            }
                        }
                        _propagateChanges(l) {
                            let m = null;
                            m = this.multiple ? this.selected.map(C => C.value) : this.selected ? this.selected.value : l, this._value = m, this.valueChange.emit(m), this._onChange(m), this.selectionChange.emit(this._getChangeEvent(m)), this._changeDetectorRef.markForCheck()
                        }
                        _highlightCorrectOption() {
                            this._keyManager && (this.empty ? this._keyManager.setFirstItemActive() : this._keyManager.setActiveItem(this._selectionModel.selected[0]))
                        }
                        _canOpen() {
                            return !this._panelOpen && !this.disabled && this.options ? .length > 0
                        }
                        focus(l) {
                            this._elementRef.nativeElement.focus(l)
                        }
                        _getPanelAriaLabelledby() {
                            if (this.ariaLabel) return null;
                            const l = this._parentFormField ? .getLabelId();
                            return this.ariaLabelledby ? (l ? l + " " : "") + this.ariaLabelledby : l
                        }
                        _getAriaActiveDescendant() {
                            return this.panelOpen && this._keyManager && this._keyManager.activeItem ? this._keyManager.activeItem.id : null
                        }
                        _getTriggerAriaLabelledby() {
                            if (this.ariaLabel) return null;
                            const l = this._parentFormField ? .getLabelId();
                            let m = (l ? l + " " : "") + this._valueId;
                            return this.ariaLabelledby && (m += " " + this.ariaLabelledby), m
                        }
                        _panelDoneAnimating(l) {
                            this.openedChange.emit(l)
                        }
                        setDescribedByIds(l) {
                            l.length ? this._elementRef.nativeElement.setAttribute("aria-describedby", l.join(" ")) : this._elementRef.nativeElement.removeAttribute("aria-describedby")
                        }
                        onContainerClick() {
                            this.focus(), this.open()
                        }
                        get shouldLabelFloat() {
                            return this._panelOpen || !this.empty || this._focused && !!this._placeholder
                        }
                    }
                    return S.\u0275fac = function(l) {
                        return new(l || S)(r.\u0275\ u0275directiveInject(Le), r.\u0275\ u0275directiveInject(r.ChangeDetectorRef), r.\u0275\ u0275directiveInject(r.NgZone), r.\u0275\ u0275directiveInject($t.rD), r.\u0275\ u0275directiveInject(r.ElementRef), r.\u0275\ u0275directiveInject(gt.Is, 8), r.\u0275\ u0275directiveInject(Wn.NgForm, 8), r.\u0275\ u0275directiveInject(Wn.FormGroupDirective, 8), r.\u0275\ u0275directiveInject($n.G_, 8), r.\u0275\ u0275directiveInject(Wn.NgControl, 10), r.\u0275\ u0275injectAttribute("tabindex"), r.\u0275\ u0275directiveInject(wt), r.\u0275\ u0275directiveInject(ci.Kd), r.\u0275\ u0275directiveInject(cn, 8))
                    }, S.\u0275dir = r.\u0275\ u0275defineDirective({
                        type: S,
                        viewQuery: function(l, m) {
                            if (1 & l && (r.\u0275\ u0275viewQuery(wi, 5), r.\u0275\ u0275viewQuery(Jn, 5), r.\u0275\ u0275viewQuery(Fn, 5)), 2 & l) {
                                let C;
                                r.\u0275\ u0275queryRefresh(C = r.\u0275\ u0275loadQuery()) && (m.trigger = C.first), r.\u0275\ u0275queryRefresh(C = r.\u0275\ u0275loadQuery()) && (m.panel = C.first), r.\u0275\ u0275queryRefresh(C = r.\u0275\ u0275loadQuery()) && (m._overlayDir = C.first)
                            }
                        },
                        inputs: {
                            userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"],
                            panelClass: "panelClass",
                            placeholder: "placeholder",
                            required: "required",
                            multiple: "multiple",
                            disableOptionCentering: "disableOptionCentering",
                            compareWith: "compareWith",
                            value: "value",
                            ariaLabel: ["aria-label", "ariaLabel"],
                            ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
                            errorStateMatcher: "errorStateMatcher",
                            typeaheadDebounceInterval: "typeaheadDebounceInterval",
                            sortComparator: "sortComparator",
                            id: "id"
                        },
                        outputs: {
                            openedChange: "openedChange",
                            _openedStream: "opened",
                            _closedStream: "closed",
                            selectionChange: "selectionChange",
                            valueChange: "valueChange"
                        },
                        features: [r.\u0275\ u0275InheritDefinitionFeature, r.\u0275\ u0275NgOnChangesFeature]
                    }), S
                })(),
                _i = (() => {
                    class S extends Dn {
                        constructor() {
                            super(...arguments), this._scrollTop = 0, this._triggerFontSize = 0, this._transformOrigin = "top", this._offsetY = 0, this._positions = [{
                                originX: "start",
                                originY: "top",
                                overlayX: "start",
                                overlayY: "top"
                            }, {
                                originX: "start",
                                originY: "bottom",
                                overlayX: "start",
                                overlayY: "bottom"
                            }]
                        }
                        _calculateOverlayScroll(l, m, C) {
                            const j = this._getItemHeight();
                            return Math.min(Math.max(0, j * l - m + j / 2), C)
                        }
                        ngOnInit() {
                            super.ngOnInit(), this._viewportRuler.change().pipe((0, pt.R)(this._destroy)).subscribe(() => {
                                this.panelOpen && (this._triggerRect = this.trigger.nativeElement.getBoundingClientRect(), this._changeDetectorRef.markForCheck())
                            })
                        }
                        open() {
                            super._canOpen() && (super.open(), this._triggerRect = this.trigger.nativeElement.getBoundingClientRect(), this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || "0"), this._calculateOverlayPosition(), this._ngZone.onStable.pipe((0, ot.q)(1)).subscribe(() => {
                                this._triggerFontSize && this._overlayDir.overlayRef && this._overlayDir.overlayRef.overlayElement && (this._overlayDir.overlayRef.overlayElement.style.fontSize = `${this._triggerFontSize}px`)
                            }))
                        }
                        _scrollOptionIntoView(l) {
                            const m = (0, $t.CB)(l, this.options, this.optionGroups),
                                C = this._getItemHeight();
                            this.panel.nativeElement.scrollTop = 0 === l && 1 === m ? 0 : (0, $t.jH)((l + m) * C, C, this.panel.nativeElement.scrollTop, 256)
                        }
                        _positioningSettled() {
                            this._calculateOverlayOffsetX(), this.panel.nativeElement.scrollTop = this._scrollTop
                        }
                        _panelDoneAnimating(l) {
                            this.panelOpen ? this._scrollTop = 0 : (this._overlayDir.offsetX = 0, this._changeDetectorRef.markForCheck()), super._panelDoneAnimating(l)
                        }
                        _getChangeEvent(l) {
                            return new dn(this, l)
                        }
                        _calculateOverlayOffsetX() {
                            const l = this._overlayDir.overlayRef.overlayElement.getBoundingClientRect(),
                                m = this._viewportRuler.getViewportSize(),
                                C = this._isRtl(),
                                j = this.multiple ? 56 : 32;
                            let fe;
                            if (this.multiple) fe = 40;
                            else if (this.disableOptionCentering) fe = 16;
                            else {
                                let Ke = this._selectionModel.selected[0] || this.options.first;
                                fe = Ke && Ke.group ? 32 : 16
                            }
                            C || (fe *= -1);
                            const Ie = 0 - (l.left + fe - (C ? j : 0)),
                                Ae = l.right + fe - m.width + (C ? 0 : j);
                            Ie > 0 ? fe += Ie + 8 : Ae > 0 && (fe -= Ae + 8), this._overlayDir.offsetX = Math.round(fe), this._overlayDir.overlayRef.updatePosition()
                        }
                        _calculateOverlayOffsetY(l, m, C) {
                            const j = this._getItemHeight(),
                                fe = (j - this._triggerRect.height) / 2,
                                Ie = Math.floor(256 / j);
                            let Ae;
                            return this.disableOptionCentering ? 0 : (Ae = 0 === this._scrollTop ? l * j : this._scrollTop === C ? (l - (this._getItemCount() - Ie)) * j + (j - (this._getItemCount() * j - 256) % j) : m - j / 2, Math.round(-1 * Ae - fe))
                        }
                        _checkOverlayWithinViewport(l) {
                            const m = this._getItemHeight(),
                                C = this._viewportRuler.getViewportSize(),
                                j = this._triggerRect.top - 8,
                                fe = C.height - this._triggerRect.bottom - 8,
                                Ie = Math.abs(this._offsetY),
                                Ke = Math.min(this._getItemCount() * m, 256) - Ie - this._triggerRect.height;
                            Ke > fe ? this._adjustPanelUp(Ke, fe) : Ie > j ? this._adjustPanelDown(Ie, j, l) : this._transformOrigin = this._getOriginBasedOnOption()
                        }
                        _adjustPanelUp(l, m) {
                            const C = Math.round(l - m);
                            this._scrollTop -= C, this._offsetY -= C, this._transformOrigin = this._getOriginBasedOnOption(), this._scrollTop <= 0 && (this._scrollTop = 0, this._offsetY = 0, this._transformOrigin = "50% bottom 0px")
                        }
                        _adjustPanelDown(l, m, C) {
                            const j = Math.round(l - m);
                            if (this._scrollTop += j, this._offsetY += j, this._transformOrigin = this._getOriginBasedOnOption(), this._scrollTop >= C) return this._scrollTop = C, this._offsetY = 0, void(this._transformOrigin = "50% top 0px")
                        }
                        _calculateOverlayPosition() {
                            const l = this._getItemHeight(),
                                m = this._getItemCount(),
                                C = Math.min(m * l, 256),
                                fe = m * l - C;
                            let Ie;
                            Ie = this.empty ? 0 : Math.max(this.options.toArray().indexOf(this._selectionModel.selected[0]), 0), Ie += (0, $t.CB)(Ie, this.options, this.optionGroups);
                            const Ae = C / 2;
                            this._scrollTop = this._calculateOverlayScroll(Ie, Ae, fe), this._offsetY = this._calculateOverlayOffsetY(Ie, Ae, fe), this._checkOverlayWithinViewport(fe)
                        }
                        _getOriginBasedOnOption() {
                            const l = this._getItemHeight(),
                                m = (l - this._triggerRect.height) / 2;
                            return `50% ${Math.abs(this._offsetY) - m + l / 2}px 0px`
                        }
                        _getItemHeight() {
                            return 3 * this._triggerFontSize
                        }
                        _getItemCount() {
                            return this.options.length + this.optionGroups.length
                        }
                    }
                    return S.\u0275fac = function() {
                        let c;
                        return function(m) {
                            return (c || (c = r.\u0275\ u0275getInheritedFactory(S)))(m || S)
                        }
                    }(), S.\u0275cmp = r.\u0275\ u0275defineComponent({
                        type: S,
                        selectors: [
                            ["mat-select"]
                        ],
                        contentQueries: function(l, m, C) {
                            if (1 & l && (r.\u0275\ u0275contentQuery(C, Pn, 5), r.\u0275\ u0275contentQuery(C, $t.ey, 5), r.\u0275\ u0275contentQuery(C, $t.K7, 5)), 2 & l) {
                                let j;
                                r.\u0275\ u0275queryRefresh(j = r.\u0275\ u0275loadQuery()) && (m.customTrigger = j.first), r.\u0275\ u0275queryRefresh(j = r.\u0275\ u0275loadQuery()) && (m.options = j), r.\u0275\ u0275queryRefresh(j = r.\u0275\ u0275loadQuery()) && (m.optionGroups = j)
                            }
                        },
                        hostAttrs: ["role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "true", 1, "mat-select"],
                        hostVars: 19,
                        hostBindings: function(l, m) {
                            1 & l && r.\u0275\ u0275listener("keydown", function(j) {
                                return m._handleKeydown(j)
                            })("focus", function() {
                                return m._onFocus()
                            })("blur", function() {
                                return m._onBlur()
                            }), 2 & l && (r.\u0275\ u0275attribute("id", m.id)("tabindex", m.tabIndex)("aria-controls", m.panelOpen ? m.id + "-panel" : null)("aria-expanded", m.panelOpen)("aria-label", m.ariaLabel || null)("aria-required", m.required.toString())("aria-disabled", m.disabled.toString())("aria-invalid", m.errorState)("aria-activedescendant", m._getAriaActiveDescendant()), r.\u0275\ u0275classProp("mat-select-disabled", m.disabled)("mat-select-invalid", m.errorState)("mat-select-required", m.required)("mat-select-empty", m.empty)("mat-select-multiple", m.multiple))
                        },
                        inputs: {
                            disabled: "disabled",
                            disableRipple: "disableRipple",
                            tabIndex: "tabIndex"
                        },
                        exportAs: ["matSelect"],
                        features: [r.\u0275\ u0275ProvidersFeature([{
                            provide: $n.Eo,
                            useExisting: S
                        }, {
                            provide: $t.HF,
                            useExisting: S
                        }]), r.\u0275\ u0275InheritDefinitionFeature],
                        ngContentSelectors: Si,
                        decls: 9,
                        vars: 12,
                        consts: [
                            ["cdk-overlay-origin", "", 1, "mat-select-trigger", 3, "click"],
                            ["origin", "cdkOverlayOrigin", "trigger", ""],
                            [1, "mat-select-value", 3, "ngSwitch"],
                            ["class", "mat-select-placeholder mat-select-min-line", 4, "ngSwitchCase"],
                            ["class", "mat-select-value-text", 3, "ngSwitch", 4, "ngSwitchCase"],
                            [1, "mat-select-arrow-wrapper"],
                            [1, "mat-select-arrow"],
                            ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOffsetY", "backdropClick", "attach", "detach"],
                            [1, "mat-select-placeholder", "mat-select-min-line"],
                            [1, "mat-select-value-text", 3, "ngSwitch"],
                            ["class", "mat-select-min-line", 4, "ngSwitchDefault"],
                            [4, "ngSwitchCase"],
                            [1, "mat-select-min-line"],
                            [1, "mat-select-panel-wrap"],
                            ["role", "listbox", "tabindex", "-1", 3, "ngClass", "keydown"],
                            ["panel", ""]
                        ],
                        template: function(l, m) {
                            if (1 & l && (r.\u0275\ u0275projectionDef(fi), r.\u0275\ u0275elementStart(0, "div", 0, 1), r.\u0275\ u0275listener("click", function() {
                                    return m.toggle()
                                }), r.\u0275\ u0275elementStart(3, "div", 2), r.\u0275\ u0275template(4, Di, 2, 1, "span", 3), r.\u0275\ u0275template(5, ui, 3, 2, "span", 4), r.\u0275\ u0275elementEnd(), r.\u0275\ u0275elementStart(6, "div", 5), r.\u0275\ u0275element(7, "div", 6), r.\u0275\ u0275elementEnd()(), r.\u0275\ u0275template(8, Un, 4, 14, "ng-template", 7), r.\u0275\ u0275listener("backdropClick", function() {
                                    return m.close()
                                })("attach", function() {
                                    return m._onAttached()
                                })("detach", function() {
                                    return m.close()
                                })), 2 & l) {
                                const C = r.\u0275\ u0275reference(1);
                                r.\u0275\ u0275attribute("aria-owns", m.panelOpen ? m.id + "-panel" : null), r.\u0275\ u0275advance(3), r.\u0275\ u0275property("ngSwitch", m.empty), r.\u0275\ u0275attribute("id", m._valueId), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngSwitchCase", !0), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngSwitchCase", !1), r.\u0275\ u0275advance(3), r.\u0275\ u0275property("cdkConnectedOverlayPanelClass", m._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", m._scrollStrategy)("cdkConnectedOverlayOrigin", C)("cdkConnectedOverlayOpen", m.panelOpen)("cdkConnectedOverlayPositions", m._positions)("cdkConnectedOverlayMinWidth", null == m._triggerRect ? null : m._triggerRect.width)("cdkConnectedOverlayOffsetY", m._offsetY)
                            }
                        },
                        dependencies: [at.NgClass, at.NgSwitch, at.NgSwitchCase, at.NgSwitchDefault, Fn, an],
                        styles: ['.mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{height:16px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;margin:0 4px}.mat-form-field.mat-focused .mat-select-arrow{transform:translateX(0)}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}'],
                        encapsulation: 2,
                        data: {
                            animation: [hi.transformPanelWrap, hi.transformPanel]
                        },
                        changeDetection: 0
                    }), S
                })(),
                Kn = (() => {
                    class S {}
                    return S.\u0275fac = function(l) {
                        return new(l || S)
                    }, S.\u0275mod = r.\u0275\ u0275defineNgModule({
                        type: S
                    }), S.\u0275inj = r.\u0275\ u0275defineInjector({
                        providers: [Wt],
                        imports: [at.CommonModule, Mi, $t.Ng, $t.BQ, se, $n.lN, $t.Ng, $t.BQ]
                    }), S
                })()
        },
        455: (y, T, a) => {
            a.d(T, {
                Rr: () => Oe,
                rP: () => pe
            });
            var t = a(9643),
                r = a(8125),
                d = a(3238),
                O = a(2687),
                p = a(1281),
                f = a(8018),
                v = a(5682);
            const A = ["input"],
                M = function(k) {
                    return {
                        enterDuration: k
                    }
                },
                I = ["*"],
                z = new r.InjectionToken("mat-slide-toggle-default-options", {
                    providedIn: "root",
                    factory: () => ({
                        disableToggleValue: !1
                    })
                });
            let V = 0;
            const J = {
                provide: f.NG_VALUE_ACCESSOR,
                useExisting: (0, r.forwardRef)(() => Oe),
                multi: !0
            };
            class ie {
                constructor(_, N) {
                    this.source = _, this.checked = N
                }
            }
            const ce = (0, d.sb)((0, d.pj)((0, d.Kr)((0, d.Id)(class {
                constructor(k) {
                    this._elementRef = k
                }
            }))));
            let ve = (() => {
                    class k extends ce {
                        constructor(N, Y, te, Pe, Z, ge, be) {
                            super(N), this._focusMonitor = Y, this._changeDetectorRef = te, this.defaults = Z, this._onChange = Ee => {}, this._onTouched = () => {}, this._required = !1, this._checked = !1, this.name = null, this.labelPosition = "after", this.ariaLabel = null, this.ariaLabelledby = null, this.change = new r.EventEmitter, this.toggleChange = new r.EventEmitter, this.tabIndex = parseInt(Pe) || 0, this.color = this.defaultColor = Z.color || "accent", this._noopAnimations = "NoopAnimations" === ge, this.id = this._uniqueId = `${be}${++V}`
                        }
                        get required() {
                            return this._required
                        }
                        set required(N) {
                            this._required = (0, p.Ig)(N)
                        }
                        get checked() {
                            return this._checked
                        }
                        set checked(N) {
                            this._checked = (0, p.Ig)(N), this._changeDetectorRef.markForCheck()
                        }
                        get inputId() {
                            return `${this.id || this._uniqueId}-input`
                        }
                        ngAfterContentInit() {
                            this._focusMonitor.monitor(this._elementRef, !0).subscribe(N => {
                                "keyboard" === N || "program" === N ? this._focused = !0 : N || Promise.resolve().then(() => {
                                    this._focused = !1, this._onTouched(), this._changeDetectorRef.markForCheck()
                                })
                            })
                        }
                        ngOnDestroy() {
                            this._focusMonitor.stopMonitoring(this._elementRef)
                        }
                        writeValue(N) {
                            this.checked = !!N
                        }
                        registerOnChange(N) {
                            this._onChange = N
                        }
                        registerOnTouched(N) {
                            this._onTouched = N
                        }
                        setDisabledState(N) {
                            this.disabled = N, this._changeDetectorRef.markForCheck()
                        }
                        toggle() {
                            this.checked = !this.checked, this._onChange(this.checked)
                        }
                        _emitChangeEvent() {
                            this._onChange(this.checked), this.change.emit(this._createChangeEvent(this.checked))
                        }
                    }
                    return k.\u0275fac = function(N) {
                        r.\u0275\ u0275invalidFactory()
                    }, k.\u0275dir = r.\u0275\ u0275defineDirective({
                        type: k,
                        inputs: {
                            name: "name",
                            id: "id",
                            labelPosition: "labelPosition",
                            ariaLabel: ["aria-label", "ariaLabel"],
                            ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
                            ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
                            required: "required",
                            checked: "checked"
                        },
                        outputs: {
                            change: "change",
                            toggleChange: "toggleChange"
                        },
                        features: [r.\u0275\ u0275InheritDefinitionFeature]
                    }), k
                })(),
                Oe = (() => {
                    class k extends ve {
                        constructor(N, Y, te, Pe, Z, ge) {
                            super(N, Y, te, Pe, Z, ge, "mat-slide-toggle-")
                        }
                        _createChangeEvent(N) {
                            return new ie(this, N)
                        }
                        _onChangeEvent(N) {
                            N.stopPropagation(), this.toggleChange.emit(), this.defaults.disableToggleValue ? this._inputElement.nativeElement.checked = this.checked : (this.checked = this._inputElement.nativeElement.checked, this._emitChangeEvent())
                        }
                        _onInputClick(N) {
                            N.stopPropagation()
                        }
                        focus(N, Y) {
                            Y ? this._focusMonitor.focusVia(this._inputElement, Y, N) : this._inputElement.nativeElement.focus(N)
                        }
                        _onLabelTextChange() {
                            this._changeDetectorRef.detectChanges()
                        }
                    }
                    return k.\u0275fac = function(N) {
                        return new(N || k)(r.\u0275\ u0275directiveInject(r.ElementRef), r.\u0275\ u0275directiveInject(O.tE), r.\u0275\ u0275directiveInject(r.ChangeDetectorRef), r.\u0275\ u0275injectAttribute("tabindex"), r.\u0275\ u0275directiveInject(z), r.\u0275\ u0275directiveInject(v.ANIMATION_MODULE_TYPE, 8))
                    }, k.\u0275cmp = r.\u0275\ u0275defineComponent({
                        type: k,
                        selectors: [
                            ["mat-slide-toggle"]
                        ],
                        viewQuery: function(N, Y) {
                            if (1 & N && r.\u0275\ u0275viewQuery(A, 5), 2 & N) {
                                let te;
                                r.\u0275\ u0275queryRefresh(te = r.\u0275\ u0275loadQuery()) && (Y._inputElement = te.first)
                            }
                        },
                        hostAttrs: [1, "mat-slide-toggle"],
                        hostVars: 13,
                        hostBindings: function(N, Y) {
                            2 & N && (r.\u0275\ u0275hostProperty("id", Y.id), r.\u0275\ u0275attribute("tabindex", null)("aria-label", null)("aria-labelledby", null)("name", null), r.\u0275\ u0275classProp("mat-checked", Y.checked)("mat-disabled", Y.disabled)("mat-slide-toggle-label-before", "before" == Y.labelPosition)("_mat-animation-noopable", Y._noopAnimations))
                        },
                        inputs: {
                            disabled: "disabled",
                            disableRipple: "disableRipple",
                            color: "color",
                            tabIndex: "tabIndex"
                        },
                        exportAs: ["matSlideToggle"],
                        features: [r.\u0275\ u0275ProvidersFeature([J]), r.\u0275\ u0275InheritDefinitionFeature],
                        ngContentSelectors: I,
                        decls: 14,
                        vars: 20,
                        consts: [
                            [1, "mat-slide-toggle-label"],
                            ["label", ""],
                            [1, "mat-slide-toggle-bar"],
                            ["type", "checkbox", "role", "switch", 1, "mat-slide-toggle-input", "cdk-visually-hidden", 3, "id", "required", "tabIndex", "checked", "disabled", "change", "click"],
                            ["input", ""],
                            [1, "mat-slide-toggle-thumb-container"],
                            [1, "mat-slide-toggle-thumb"],
                            ["mat-ripple", "", 1, "mat-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"],
                            [1, "mat-ripple-element", "mat-slide-toggle-persistent-ripple"],
                            [1, "mat-slide-toggle-content", 3, "cdkObserveContent"],
                            ["labelContent", ""],
                            [2, "display", "none"]
                        ],
                        template: function(N, Y) {
                            if (1 & N && (r.\u0275\ u0275projectionDef(), r.\u0275\ u0275elementStart(0, "label", 0, 1)(2, "span", 2)(3, "input", 3, 4), r.\u0275\ u0275listener("change", function(Pe) {
                                    return Y._onChangeEvent(Pe)
                                })("click", function(Pe) {
                                    return Y._onInputClick(Pe)
                                }), r.\u0275\ u0275elementEnd(), r.\u0275\ u0275elementStart(5, "span", 5), r.\u0275\ u0275element(6, "span", 6), r.\u0275\ u0275elementStart(7, "span", 7), r.\u0275\ u0275element(8, "span", 8), r.\u0275\ u0275elementEnd()()(), r.\u0275\ u0275elementStart(9, "span", 9, 10), r.\u0275\ u0275listener("cdkObserveContent", function() {
                                    return Y._onLabelTextChange()
                                }), r.\u0275\ u0275elementStart(11, "span", 11), r.\u0275\ u0275text(12, "\xa0"), r.\u0275\ u0275elementEnd(), r.\u0275\ u0275projection(13), r.\u0275\ u0275elementEnd()()), 2 & N) {
                                const te = r.\u0275\ u0275reference(1),
                                    Pe = r.\u0275\ u0275reference(10);
                                r.\u0275\ u0275attribute("for", Y.inputId), r.\u0275\ u0275advance(2), r.\u0275\ u0275classProp("mat-slide-toggle-bar-no-side-margin", !Pe.textContent || !Pe.textContent.trim()), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("id", Y.inputId)("required", Y.required)("tabIndex", Y.tabIndex)("checked", Y.checked)("disabled", Y.disabled), r.\u0275\ u0275attribute("name", Y.name)("aria-checked", Y.checked)("aria-label", Y.ariaLabel)("aria-labelledby", Y.ariaLabelledby)("aria-describedby", Y.ariaDescribedby), r.\u0275\ u0275advance(4), r.\u0275\ u0275property("matRippleTrigger", te)("matRippleDisabled", Y.disableRipple || Y.disabled)("matRippleCentered", !0)("matRippleRadius", 20)("matRippleAnimation", r.\u0275\ u0275pureFunction1(18, M, Y._noopAnimations ? 0 : 150))
                            }
                        },
                        dependencies: [d.wG, t.wD],
                        styles: ['.mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{-webkit-user-select:none;user-select:none;display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%;display:block}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.mat-slide-toggle-input:focus~.mat-slide-toggle-thumb-container .mat-focus-indicator::before{content:""}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}'],
                        encapsulation: 2,
                        changeDetection: 0
                    }), k
                })(),
                Ne = (() => {
                    class k {}
                    return k.\u0275fac = function(N) {
                        return new(N || k)
                    }, k.\u0275mod = r.\u0275\ u0275defineNgModule({
                        type: k
                    }), k.\u0275inj = r.\u0275\ u0275defineInjector({}), k
                })(),
                pe = (() => {
                    class k {}
                    return k.\u0275fac = function(N) {
                        return new(N || k)
                    }, k.\u0275mod = r.\u0275\ u0275defineNgModule({
                        type: k
                    }), k.\u0275inj = r.\u0275\ u0275defineInjector({
                        imports: [Ne, d.si, d.BQ, t.Q8, Ne, d.BQ]
                    }), k
                })()
        },
        4918: (y, T, a) => {
            a.d(T, {
                uo: () => Sr,
                IJ: () => Is,
                xl: () => lr
            });
            var t = a(8125),
                r = a(3512),
                d = a(9751),
                O = a(515),
                p = a(9646),
                f = a(7579),
                v = a(4968),
                A = a(2805),
                M = a(8421),
                I = a(5797),
                z = a(5403);
            var ie = a(1135),
                ce = a(9841),
                ve = a(5032);
            const Oe = new d.y(ve.Z);
            var Me = a(3269);

            function Ne(...n) {
                const i = (0, Me.jO)(n),
                    e = (0, I.k)(n);
                return e.length ? new d.y(o => {
                    let s = e.map(() => []),
                        g = e.map(() => !1);
                    o.add(() => {
                        s = g = null
                    });
                    for (let w = 0; !o.closed && w < e.length; w++)(0, M.Xf)(e[w]).subscribe((0, z.x)(o, U => {
                        if (s[w].push(U), s.every(W => W.length)) {
                            const W = s.map(de => de.shift());
                            o.next(i ? i(...W) : W), s.some((de, Ce) => !de.length && g[Ce]) && o.complete()
                        }
                    }, () => {
                        g[w] = !0, !s[w].length && o.complete()
                    }));
                    return () => {
                        s = g = null
                    }
                }) : O.E
            }
            var pe = a(7272),
                _ = a(2722),
                N = a(9300),
                Y = a(5698),
                te = a(4004),
                Pe = a(8675),
                Z = a(1884),
                ge = a(3900),
                be = a(8505),
                Ee = a(4482),
                He = a(4671);

            function et(...n) {
                const i = (0, Me.jO)(n);
                return (0, Ee.e)((e, o) => {
                    const s = n.length,
                        g = new Array(s);
                    let w = n.map(() => !1),
                        U = !1;
                    for (let W = 0; W < s; W++)(0, M.Xf)(n[W]).subscribe((0, z.x)(o, de => {
                        g[W] = de, !U && !w[W] && (w[W] = !0, (U = w.every(He.y)) && (w = null))
                    }, ve.Z));
                    e.subscribe((0, z.x)(o, W => {
                        if (U) {
                            const de = [W, ...g];
                            o.next(i ? i(...de) : de)
                        }
                    }))
                })
            }
            a(4986), a(9718), a(5577), a(5684);
            var b = a(8018);
            Math, Math, Math;
            const St = ["*"];

            function Lt(n, i) {
                if (1 & n) {
                    const e = t.\u0275\ u0275getCurrentView();
                    t.\u0275\ u0275elementStart(0, "button", 6), t.\u0275\ u0275listener("click", function() {
                        const g = t.\u0275\ u0275restoreView(e).$implicit,
                            w = t.\u0275\ u0275nextContext();
                        return w.focus(), t.\u0275\ u0275resetView(w.select(g.id, w.NgbSlideEventSource.INDICATOR))
                    }), t.\u0275\ u0275elementEnd()
                }
                if (2 & n) {
                    const e = i.$implicit,
                        o = t.\u0275\ u0275nextContext();
                    t.\u0275\ u0275classProp("active", e.id === o.activeId), t.\u0275\ u0275attribute("aria-labelledby", "slide-" + e.id)("aria-controls", "slide-" + e.id)("aria-selected", e.id === o.activeId)
                }
            }

            function Rt(n, i) {}

            function wt(n, i) {
                if (1 & n && (t.\u0275\ u0275elementStart(0, "div", 7)(1, "span", 8), t.\u0275\ u0275i18n(2, 9), t.\u0275\ u0275elementEnd(), t.\u0275\ u0275template(3, Rt, 0, 0, "ng-template", 10), t.\u0275\ u0275elementEnd()), 2 & n) {
                    const e = i.$implicit,
                        o = i.index,
                        s = i.count;
                    t.\u0275\ u0275property("id", "slide-" + e.id), t.\u0275\ u0275advance(2), t.\u0275\ u0275i18nExp(o + 1)(s), t.\u0275\ u0275i18nApply(2), t.\u0275\ u0275advance(1), t.\u0275\ u0275property("ngTemplateOutlet", e.tplRef)
                }
            }

            function tn(n, i) {
                if (1 & n) {
                    const e = t.\u0275\ u0275getCurrentView();
                    t.\u0275\ u0275elementStart(0, "button", 11), t.\u0275\ u0275listener("click", function() {
                        t.\u0275\ u0275restoreView(e);
                        const s = t.\u0275\ u0275nextContext();
                        return t.\u0275\ u0275resetView(s.arrowLeft())
                    }), t.\u0275\ u0275element(1, "span", 12), t.\u0275\ u0275elementStart(2, "span", 8), t.\u0275\ u0275i18n(3, 13), t.\u0275\ u0275elementEnd()()
                }
            }

            function cn(n, i) {
                if (1 & n) {
                    const e = t.\u0275\ u0275getCurrentView();
                    t.\u0275\ u0275elementStart(0, "button", 14), t.\u0275\ u0275listener("click", function() {
                        t.\u0275\ u0275restoreView(e);
                        const s = t.\u0275\ u0275nextContext();
                        return t.\u0275\ u0275resetView(s.arrowRight())
                    }), t.\u0275\ u0275element(1, "span", 15), t.\u0275\ u0275elementStart(2, "span", 8), t.\u0275\ u0275i18n(3, 16), t.\u0275\ u0275elementEnd()()
                }
            }
            const Do = ["dialog"];

            function rr(n) {
                return "string" == typeof n
            }

            function qn(n) {
                return null != n
            }

            function vi(n) {
                return (n || document.body).getBoundingClientRect()
            }
            const yr = {
                    animation: !0,
                    transitionTimerDelayMs: 5
                },
                Ca = () => {},
                {
                    transitionTimerDelayMs: Ma
                } = yr,
                Ii = new Map,
                mn = (n, i, e, o) => {
                    let s = o.context || {};
                    const g = Ii.get(i);
                    if (g) switch (o.runningTransition) {
                        case "continue":
                            return O.E;
                        case "stop":
                            n.run(() => g.transition$.complete()), s = Object.assign(g.context, s), Ii.delete(i)
                    }
                    const w = e(i, o.animation, s) || Ca;
                    if (!o.animation || "none" === window.getComputedStyle(i).transitionProperty) return n.run(() => w()), (0, p.of)(void 0).pipe(function ba(n) {
                        return i => new d.y(e => i.subscribe({
                            next: w => n.run(() => e.next(w)),
                            error: w => n.run(() => e.error(w)),
                            complete: () => n.run(() => e.complete())
                        }))
                    }(n));
                    const U = new f.x,
                        W = new f.x,
                        de = U.pipe(function k(...n) {
                            return i => (0, pe.z)(i, (0, p.of)(...n))
                        }(!0));
                    Ii.set(i, {
                        transition$: U,
                        complete: () => {
                            W.next(), W.complete()
                        },
                        context: s
                    });
                    const Ce = function ya(n) {
                        const {
                            transitionDelay: i,
                            transitionDuration: e
                        } = window.getComputedStyle(n);
                        return 1e3 * (parseFloat(i) + parseFloat(e))
                    }(i);
                    return n.runOutsideAngular(() => {
                        const Ge = (0, v.R)(i, "transitionend").pipe((0, _.R)(de), (0, N.h)(({
                            target: $e
                        }) => $e === i));
                        (function V(...n) {
                            return 1 === (n = (0, I.k)(n)).length ? (0, M.Xf)(n[0]) : new d.y(function J(n) {
                                return i => {
                                    let e = [];
                                    for (let o = 0; e && !i.closed && o < n.length; o++) e.push((0, M.Xf)(n[o]).subscribe((0, z.x)(i, s => {
                                        if (e) {
                                            for (let g = 0; g < e.length; g++) g !== o && e[g].unsubscribe();
                                            e = null
                                        }
                                        i.next(s)
                                    })))
                                }
                            }(n))
                        })((0, A.H)(Ce + Ma).pipe((0, _.R)(de)), Ge, W).pipe((0, _.R)(de)).subscribe(() => {
                            Ii.delete(i), n.run(() => {
                                w(), U.next(), U.complete()
                            })
                        })
                    }), U.asObservable()
                };
            let Gi = (() => {
                    class n {
                        constructor() {
                            this.animation = yr.animation
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275prov = t.\u0275\ u0275defineInjectable({
                        token: n,
                        factory: n.\u0275fac,
                        providedIn: "root"
                    }), n
                })(),
                wr = (() => {
                    class n {}
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: n
                    }), n.\u0275inj = t.\u0275\ u0275defineInjector({
                        imports: [r.CommonModule]
                    }), n
                })(),
                Dr = (() => {
                    class n {}
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: n
                    }), n.\u0275inj = t.\u0275\ u0275defineInjector({
                        imports: [r.CommonModule]
                    }), n
                })();
            var Yn = (() => {
                return (n = Yn || (Yn = {})).START = "start", n.END = "end", Yn;
                var n
            })();
            const Er = ({
                    classList: n
                }) => n.contains("carousel-item-start") || n.contains("carousel-item-end"),
                Ni = n => {
                    n.remove("carousel-item-start"), n.remove("carousel-item-end")
                },
                $i = n => {
                    Ni(n), n.remove("carousel-item-prev"), n.remove("carousel-item-next")
                },
                Ea = (n, i, {
                    direction: e
                }) => {
                    const {
                        classList: o
                    } = n;
                    return i ? (Er(n) ? Ni(o) : (o.add("carousel-item-" + (e === Yn.START ? "next" : "prev")), vi(n), o.add("carousel-item-" + e)), () => {
                        $i(o), o.add("active")
                    }) : (Ni(o), $i(o), void o.add("active"))
                },
                Sa = (n, i, {
                    direction: e
                }) => {
                    const {
                        classList: o
                    } = n;
                    return i ? (Er(n) ? Ni(o) : o.add("carousel-item-" + e), () => {
                        $i(o), o.remove("active")
                    }) : (Ni(o), $i(o), void o.remove("active"))
                };
            let Ta = (() => {
                    class n {
                        constructor(e) {
                            this._ngbConfig = e, this.interval = 5e3, this.wrap = !0, this.keyboard = !0, this.pauseOnHover = !0, this.pauseOnFocus = !0, this.showNavigationArrows = !0, this.showNavigationIndicators = !0
                        }
                        get animation() {
                            return void 0 === this._animation ? this._ngbConfig.animation : this._animation
                        }
                        set animation(e) {
                            this._animation = e
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)(t.\u0275\ u0275inject(Gi))
                    }, n.\u0275prov = t.\u0275\ u0275defineInjectable({
                        token: n,
                        factory: n.\u0275fac,
                        providedIn: "root"
                    }), n
                })(),
                Ia = 0,
                lr = (() => {
                    class n {
                        constructor(e) {
                            this.tplRef = e, this.id = "ngb-slide-" + Ia++, this.slid = new t.EventEmitter
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)(t.\u0275\ u0275directiveInject(t.TemplateRef))
                    }, n.\u0275dir = t.\u0275\ u0275defineDirective({
                        type: n,
                        selectors: [
                            ["ng-template", "ngbSlide", ""]
                        ],
                        inputs: {
                            id: "id"
                        },
                        outputs: {
                            slid: "slid"
                        }
                    }), n
                })(),
                Sr = (() => {
                    class n {
                        constructor(e, o, s, g, w) {
                            this._platformId = o, this._ngZone = s, this._cd = g, this._container = w, this.NgbSlideEventSource = ei, this._destroy$ = new f.x, this._interval$ = new ie.X(0), this._mouseHover$ = new ie.X(!1), this._focused$ = new ie.X(!1), this._pauseOnHover$ = new ie.X(!1), this._pauseOnFocus$ = new ie.X(!1), this._pause$ = new ie.X(!1), this._wrap$ = new ie.X(!1), this.slide = new t.EventEmitter, this.slid = new t.EventEmitter, this._transitionIds = null, this.animation = e.animation, this.interval = e.interval, this.wrap = e.wrap, this.keyboard = e.keyboard, this.pauseOnHover = e.pauseOnHover, this.pauseOnFocus = e.pauseOnFocus, this.showNavigationArrows = e.showNavigationArrows, this.showNavigationIndicators = e.showNavigationIndicators
                        }
                        set interval(e) {
                            this._interval$.next(e)
                        }
                        get interval() {
                            return this._interval$.value
                        }
                        set wrap(e) {
                            this._wrap$.next(e)
                        }
                        get wrap() {
                            return this._wrap$.value
                        }
                        set pauseOnHover(e) {
                            this._pauseOnHover$.next(e)
                        }
                        get pauseOnHover() {
                            return this._pauseOnHover$.value
                        }
                        set pauseOnFocus(e) {
                            this._pauseOnFocus$.next(e)
                        }
                        get pauseOnFocus() {
                            return this._pauseOnFocus$.value
                        }
                        set mouseHover(e) {
                            this._mouseHover$.next(e)
                        }
                        get mouseHover() {
                            return this._mouseHover$.value
                        }
                        set focused(e) {
                            this._focused$.next(e)
                        }
                        get focused() {
                            return this._focused$.value
                        }
                        arrowLeft() {
                            this.focus(), this.prev(ei.ARROW_LEFT)
                        }
                        arrowRight() {
                            this.focus(), this.next(ei.ARROW_RIGHT)
                        }
                        ngAfterContentInit() {
                            (0, r.isPlatformBrowser)(this._platformId) && this._ngZone.runOutsideAngular(() => {
                                const e = (0, ce.a)([this.slide.pipe((0, te.U)(o => o.current), (0, Pe.O)(this.activeId)), this._wrap$, this.slides.changes.pipe((0, Pe.O)(null))]).pipe((0, te.U)(([o, s]) => {
                                    const g = this.slides.toArray(),
                                        w = this._getSlideIdxById(o);
                                    return s ? g.length > 1 : w < g.length - 1
                                }), (0, Z.x)());
                                (0, ce.a)([this._pause$, this._pauseOnHover$, this._mouseHover$, this._pauseOnFocus$, this._focused$, this._interval$, e]).pipe((0, te.U)(([o, s, g, w, U, W, de]) => o || s && g || w && U || !de ? 0 : W), (0, Z.x)(), (0, ge.w)(o => o > 0 ? (0, A.H)(o, o) : Oe), (0, _.R)(this._destroy$)).subscribe(() => this._ngZone.run(() => this.next(ei.TIMER)))
                            }), this.slides.changes.pipe((0, _.R)(this._destroy$)).subscribe(() => {
                                this._transitionIds ? .forEach(e => (n => {
                                    Ii.get(n) ? .complete()
                                })(this._getSlideElement(e))), this._transitionIds = null, this._cd.markForCheck(), this._ngZone.onStable.pipe((0, Y.q)(1)).subscribe(() => {
                                    for (const {
                                            id: e
                                        } of this.slides) {
                                        const o = this._getSlideElement(e);
                                        e === this.activeId ? o.classList.add("active") : o.classList.remove("active")
                                    }
                                })
                            })
                        }
                        ngAfterContentChecked() {
                            let e = this._getSlideById(this.activeId);
                            this.activeId = e ? e.id : this.slides.length ? this.slides.first.id : ""
                        }
                        ngAfterViewInit() {
                            if (this.activeId) {
                                const e = this._getSlideElement(this.activeId);
                                e && e.classList.add("active")
                            }
                        }
                        ngOnDestroy() {
                            this._destroy$.next()
                        }
                        select(e, o) {
                            this._cycleToSelected(e, this._getSlideEventDirection(this.activeId, e), o)
                        }
                        prev(e) {
                            this._cycleToSelected(this._getPrevSlide(this.activeId), Yn.END, e)
                        }
                        next(e) {
                            this._cycleToSelected(this._getNextSlide(this.activeId), Yn.START, e)
                        }
                        pause() {
                            this._pause$.next(!0)
                        }
                        cycle() {
                            this._pause$.next(!1)
                        }
                        focus() {
                            this._container.nativeElement.focus()
                        }
                        _cycleToSelected(e, o, s) {
                            const g = this._transitionIds;
                            if (g && (g[0] !== e || g[1] !== this.activeId)) return;
                            let w = this._getSlideById(e);
                            if (w && w.id !== this.activeId) {
                                this._transitionIds = [this.activeId, e], this.slide.emit({
                                    prev: this.activeId,
                                    current: w.id,
                                    direction: o,
                                    paused: this._pause$.value,
                                    source: s
                                });
                                const U = {
                                        animation: this.animation,
                                        runningTransition: "stop",
                                        context: {
                                            direction: o
                                        }
                                    },
                                    W = [],
                                    de = this._getSlideById(this.activeId);
                                if (de) {
                                    const $e = mn(this._ngZone, this._getSlideElement(de.id), Sa, U);
                                    $e.subscribe(() => {
                                        de.slid.emit({
                                            isShown: !1,
                                            direction: o,
                                            source: s
                                        })
                                    }), W.push($e)
                                }
                                const Ce = this.activeId;
                                this.activeId = w.id;
                                const Ge = this._getSlideById(this.activeId),
                                    We = mn(this._ngZone, this._getSlideElement(w.id), Ea, U);
                                We.subscribe(() => {
                                    Ge ? .slid.emit({
                                        isShown: !0,
                                        direction: o,
                                        source: s
                                    })
                                }), W.push(We), Ne(...W).pipe((0, Y.q)(1)).subscribe(() => {
                                    this._transitionIds = null, this.slid.emit({
                                        prev: Ce,
                                        current: w.id,
                                        direction: o,
                                        paused: this._pause$.value,
                                        source: s
                                    })
                                })
                            }
                            this._cd.markForCheck()
                        }
                        _getSlideEventDirection(e, o) {
                            return this._getSlideIdxById(e) > this._getSlideIdxById(o) ? Yn.END : Yn.START
                        }
                        _getSlideById(e) {
                            return this.slides.find(o => o.id === e) || null
                        }
                        _getSlideIdxById(e) {
                            const o = this._getSlideById(e);
                            return null != o ? this.slides.toArray().indexOf(o) : -1
                        }
                        _getNextSlide(e) {
                            const o = this.slides.toArray(),
                                s = this._getSlideIdxById(e);
                            return s === o.length - 1 ? this.wrap ? o[0].id : o[o.length - 1].id : o[s + 1].id
                        }
                        _getPrevSlide(e) {
                            const o = this.slides.toArray(),
                                s = this._getSlideIdxById(e);
                            return 0 === s ? this.wrap ? o[o.length - 1].id : o[0].id : o[s - 1].id
                        }
                        _getSlideElement(e) {
                            return this._container.nativeElement.querySelector(`#slide-${e}`)
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)(t.\u0275\ u0275directiveInject(Ta), t.\u0275\ u0275directiveInject(t.PLATFORM_ID), t.\u0275\ u0275directiveInject(t.NgZone), t.\u0275\ u0275directiveInject(t.ChangeDetectorRef), t.\u0275\ u0275directiveInject(t.ElementRef))
                    }, n.\u0275cmp = t.\u0275\ u0275defineComponent({
                        type: n,
                        selectors: [
                            ["ngb-carousel"]
                        ],
                        contentQueries: function(e, o, s) {
                            if (1 & e && t.\u0275\ u0275contentQuery(s, lr, 4), 2 & e) {
                                let g;
                                t.\u0275\ u0275queryRefresh(g = t.\u0275\ u0275loadQuery()) && (o.slides = g)
                            }
                        },
                        hostAttrs: ["tabIndex", "0", 1, "carousel", "slide"],
                        hostVars: 3,
                        hostBindings: function(e, o) {
                            1 & e && t.\u0275\ u0275listener("keydown.arrowLeft", function() {
                                return o.keyboard && o.arrowLeft()
                            })("keydown.arrowRight", function() {
                                return o.keyboard && o.arrowRight()
                            })("mouseenter", function() {
                                return o.mouseHover = !0
                            })("mouseleave", function() {
                                return o.mouseHover = !1
                            })("focusin", function() {
                                return o.focused = !0
                            })("focusout", function() {
                                return o.focused = !1
                            }), 2 & e && (t.\u0275\ u0275attribute("aria-activedescendant", "slide-" + o.activeId), t.\u0275\ u0275styleProp("display", "block"))
                        },
                        inputs: {
                            animation: "animation",
                            activeId: "activeId",
                            interval: "interval",
                            wrap: "wrap",
                            keyboard: "keyboard",
                            pauseOnHover: "pauseOnHover",
                            pauseOnFocus: "pauseOnFocus",
                            showNavigationArrows: "showNavigationArrows",
                            showNavigationIndicators: "showNavigationIndicators"
                        },
                        outputs: {
                            slide: "slide",
                            slid: "slid"
                        },
                        exportAs: ["ngbCarousel"],
                        decls: 6,
                        vars: 6,
                        consts: function() {
                            let i, e, o;
                            return i = $localize `:Currently selected slide number read by screen reader@@ngb.carousel.slide-number: Slide ${"\ufffd0\ufffd"}:INTERPOLATION: of ${"\ufffd1\ufffd"}:INTERPOLATION_1: `, e = $localize `:@@ngb.carousel.previous:Previous`, o = $localize `:@@ngb.carousel.next:Next`, [
                                ["role", "tablist", 1, "carousel-indicators"],
                                ["type", "button", "data-bs-target", "", "role", "tab", 3, "active", "click", 4, "ngFor", "ngForOf"],
                                [1, "carousel-inner"],
                                ["class", "carousel-item", "role", "tabpanel", 3, "id", 4, "ngFor", "ngForOf"],
                                ["class", "carousel-control-prev", "type", "button", 3, "click", 4, "ngIf"],
                                ["class", "carousel-control-next", "type", "button", 3, "click", 4, "ngIf"],
                                ["type", "button", "data-bs-target", "", "role", "tab", 3, "click"],
                                ["role", "tabpanel", 1, "carousel-item", 3, "id"],
                                [1, "visually-hidden"], i, [3, "ngTemplateOutlet"],
                                ["type", "button", 1, "carousel-control-prev", 3, "click"],
                                ["aria-hidden", "true", 1, "carousel-control-prev-icon"], e, ["type", "button", 1, "carousel-control-next", 3, "click"],
                                ["aria-hidden", "true", 1, "carousel-control-next-icon"], o
                            ]
                        },
                        template: function(e, o) {
                            1 & e && (t.\u0275\ u0275elementStart(0, "div", 0), t.\u0275\ u0275template(1, Lt, 1, 5, "button", 1), t.\u0275\ u0275elementEnd(), t.\u0275\ u0275elementStart(2, "div", 2), t.\u0275\ u0275template(3, wt, 4, 4, "div", 3), t.\u0275\ u0275elementEnd(), t.\u0275\ u0275template(4, tn, 4, 0, "button", 4), t.\u0275\ u0275template(5, cn, 4, 0, "button", 5)), 2 & e && (t.\u0275\ u0275classProp("visually-hidden", !o.showNavigationIndicators), t.\u0275\ u0275advance(1), t.\u0275\ u0275property("ngForOf", o.slides), t.\u0275\ u0275advance(2), t.\u0275\ u0275property("ngForOf", o.slides), t.\u0275\ u0275advance(1), t.\u0275\ u0275property("ngIf", o.showNavigationArrows), t.\u0275\ u0275advance(1), t.\u0275\ u0275property("ngIf", o.showNavigationArrows))
                        },
                        dependencies: [r.NgForOf, r.NgIf, r.NgTemplateOutlet],
                        encapsulation: 2,
                        changeDetection: 0
                    }), n
                })();
            var ei = (() => {
                return (n = ei || (ei = {})).TIMER = "timer", n.ARROW_LEFT = "arrowLeft", n.ARROW_RIGHT = "arrowRight", n.INDICATOR = "indicator", ei;
                var n
            })();
            let Tr = (() => {
                    class n {}
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: n
                    }), n.\u0275inj = t.\u0275\ u0275defineInjector({
                        imports: [r.CommonModule]
                    }), n
                })(),
                Ir = (() => {
                    class n {}
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: n
                    }), n.\u0275inj = t.\u0275\ u0275defineInjector({}), n
                })();
            var Kt = (() => {
                return (n = Kt || (Kt = {}))[n.Tab = 9] = "Tab", n[n.Enter = 13] = "Enter", n[n.Escape = 27] = "Escape", n[n.Space = 32] = "Space", n[n.PageUp = 33] = "PageUp", n[n.PageDown = 34] = "PageDown", n[n.End = 35] = "End", n[n.Home = 36] = "Home", n[n.ArrowLeft = 37] = "ArrowLeft", n[n.ArrowUp = 38] = "ArrowUp", n[n.ArrowRight = 39] = "ArrowRight", n[n.ArrowDown = 40] = "ArrowDown", Kt;
                var n
            })();
            typeof navigator < "u" && navigator.userAgent && (/iPad|iPhone|iPod/.test(navigator.userAgent) || /Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2 || /Android/.test(navigator.userAgent));
            const Rr = ["a[href]", "button:not([disabled])", 'input:not([disabled]):not([type="hidden"])', "select:not([disabled])", "textarea:not([disabled])", "[contenteditable]", '[tabindex]:not([tabindex="-1"])'].join(", ");

            function kr(n) {
                const i = Array.from(n.querySelectorAll(Rr)).filter(e => -1 !== e.tabIndex);
                return [i[0], i[i.length - 1]]
            }
            new Date(1882, 10, 12), new Date(2174, 10, 25);
            let Vr = (() => {
                    class n {}
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: n
                    }), n.\u0275inj = t.\u0275\ u0275defineInjector({
                        imports: [r.CommonModule, b.FormsModule]
                    }), n
                })(),
                Wr = (() => {
                    class n {}
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: n
                    }), n.\u0275inj = t.\u0275\ u0275defineInjector({}), n
                })();
            class ii {
                constructor(i, e, o) {
                    this.nodes = i, this.viewRef = e, this.componentRef = o
                }
            }
            let ds = (() => {
                class n {
                    constructor(e, o) {
                        this._el = e, this._zone = o
                    }
                    ngOnInit() {
                        this._zone.onStable.asObservable().pipe((0, Y.q)(1)).subscribe(() => {
                            mn(this._zone, this._el.nativeElement, (e, o) => {
                                o && vi(e), e.classList.add("show")
                            }, {
                                animation: this.animation,
                                runningTransition: "continue"
                            })
                        })
                    }
                    hide() {
                        return mn(this._zone, this._el.nativeElement, ({
                            classList: e
                        }) => e.remove("show"), {
                            animation: this.animation,
                            runningTransition: "stop"
                        })
                    }
                }
                return n.\u0275fac = function(e) {
                    return new(e || n)(t.\u0275\ u0275directiveInject(t.ElementRef), t.\u0275\ u0275directiveInject(t.NgZone))
                }, n.\u0275cmp = t.\u0275\ u0275defineComponent({
                    type: n,
                    selectors: [
                        ["ngb-modal-backdrop"]
                    ],
                    hostAttrs: [2, "z-index", "1055"],
                    hostVars: 6,
                    hostBindings: function(e, o) {
                        2 & e && (t.\u0275\ u0275classMap("modal-backdrop" + (o.backdropClass ? " " + o.backdropClass : "")), t.\u0275\ u0275classProp("show", !o.animation)("fade", o.animation))
                    },
                    inputs: {
                        animation: "animation",
                        backdropClass: "backdropClass"
                    },
                    decls: 0,
                    vars: 0,
                    template: function(e, o) {},
                    encapsulation: 2
                }), n
            })();
            class Kr {
                close(i) {}
                dismiss(i) {}
            }
            class ps {
                constructor(i, e, o, s) {
                    this._windowCmptRef = i, this._contentRef = e, this._backdropCmptRef = o, this._beforeDismiss = s, this._closed = new f.x, this._dismissed = new f.x, this._hidden = new f.x, i.instance.dismissEvent.subscribe(g => {
                        this.dismiss(g)
                    }), this.result = new Promise((g, w) => {
                        this._resolve = g, this._reject = w
                    }), this.result.then(null, () => {})
                }
                get componentInstance() {
                    if (this._contentRef && this._contentRef.componentRef) return this._contentRef.componentRef.instance
                }
                get closed() {
                    return this._closed.asObservable().pipe((0, _.R)(this._hidden))
                }
                get dismissed() {
                    return this._dismissed.asObservable().pipe((0, _.R)(this._hidden))
                }
                get hidden() {
                    return this._hidden.asObservable()
                }
                get shown() {
                    return this._windowCmptRef.instance.shown.asObservable()
                }
                close(i) {
                    this._windowCmptRef && (this._closed.next(i), this._resolve(i), this._removeModalElements())
                }
                _dismiss(i) {
                    this._dismissed.next(i), this._reject(i), this._removeModalElements()
                }
                dismiss(i) {
                    if (this._windowCmptRef)
                        if (this._beforeDismiss) {
                            const e = this._beforeDismiss();
                            ! function br(n) {
                                return n && n.then
                            }(e) ? !1 !== e && this._dismiss(i): e.then(o => {
                                !1 !== o && this._dismiss(i)
                            }, () => {})
                        } else this._dismiss(i)
                }
                _removeModalElements() {
                    const i = this._windowCmptRef.instance.hide(),
                        e = this._backdropCmptRef ? this._backdropCmptRef.instance.hide() : (0, p.of)(void 0);
                    i.subscribe(() => {
                        const {
                            nativeElement: o
                        } = this._windowCmptRef.location;
                        o.parentNode.removeChild(o), this._windowCmptRef.destroy(), this._contentRef && this._contentRef.viewRef && this._contentRef.viewRef.destroy(), this._windowCmptRef = null, this._contentRef = null
                    }), e.subscribe(() => {
                        if (this._backdropCmptRef) {
                            const {
                                nativeElement: o
                            } = this._backdropCmptRef.location;
                            o.parentNode.removeChild(o), this._backdropCmptRef.destroy(), this._backdropCmptRef = null
                        }
                    }), Ne(i, e).subscribe(() => {
                        this._hidden.next(), this._hidden.complete()
                    })
                }
            }
            var Ai = (() => {
                return (n = Ai || (Ai = {}))[n.BACKDROP_CLICK = 0] = "BACKDROP_CLICK", n[n.ESC = 1] = "ESC", Ai;
                var n
            })();
            let gs = (() => {
                    class n {
                        constructor(e, o, s) {
                            this._document = e, this._elRef = o, this._zone = s, this._closed$ = new f.x, this._elWithFocus = null, this.backdrop = !0, this.keyboard = !0, this.dismissEvent = new t.EventEmitter, this.shown = new f.x, this.hidden = new f.x
                        }
                        get fullscreenClass() {
                            return !0 === this.fullscreen ? " modal-fullscreen" : rr(this.fullscreen) ? ` modal-fullscreen-${this.fullscreen}-down` : ""
                        }
                        dismiss(e) {
                            this.dismissEvent.emit(e)
                        }
                        ngOnInit() {
                            this._elWithFocus = this._document.activeElement, this._zone.onStable.asObservable().pipe((0, Y.q)(1)).subscribe(() => {
                                this._show()
                            })
                        }
                        ngOnDestroy() {
                            this._disableEventHandling()
                        }
                        hide() {
                            const {
                                nativeElement: e
                            } = this._elRef, o = {
                                animation: this.animation,
                                runningTransition: "stop"
                            }, w = Ne(mn(this._zone, e, () => e.classList.remove("show"), o), mn(this._zone, this._dialogEl.nativeElement, () => {}, o));
                            return w.subscribe(() => {
                                this.hidden.next(), this.hidden.complete()
                            }), this._disableEventHandling(), this._restoreFocus(), w
                        }
                        _show() {
                            const e = {
                                animation: this.animation,
                                runningTransition: "continue"
                            };
                            Ne(mn(this._zone, this._elRef.nativeElement, (g, w) => {
                                w && vi(g), g.classList.add("show")
                            }, e), mn(this._zone, this._dialogEl.nativeElement, () => {}, e)).subscribe(() => {
                                this.shown.next(), this.shown.complete()
                            }), this._enableEventHandling(), this._setFocus()
                        }
                        _enableEventHandling() {
                            const {
                                nativeElement: e
                            } = this._elRef;
                            this._zone.runOutsideAngular(() => {
                                (0, v.R)(e, "keydown").pipe((0, _.R)(this._closed$), (0, N.h)(s => s.which === Kt.Escape)).subscribe(s => {
                                    this.keyboard ? requestAnimationFrame(() => {
                                        s.defaultPrevented || this._zone.run(() => this.dismiss(Ai.ESC))
                                    }) : "static" === this.backdrop && this._bumpBackdrop()
                                });
                                let o = !1;
                                (0, v.R)(this._dialogEl.nativeElement, "mousedown").pipe((0, _.R)(this._closed$), (0, be.b)(() => o = !1), (0, ge.w)(() => (0, v.R)(e, "mouseup").pipe((0, _.R)(this._closed$), (0, Y.q)(1))), (0, N.h)(({
                                    target: s
                                }) => e === s)).subscribe(() => {
                                    o = !0
                                }), (0, v.R)(e, "click").pipe((0, _.R)(this._closed$)).subscribe(({
                                    target: s
                                }) => {
                                    e === s && ("static" === this.backdrop ? this._bumpBackdrop() : !0 === this.backdrop && !o && this._zone.run(() => this.dismiss(Ai.BACKDROP_CLICK))), o = !1
                                })
                            })
                        }
                        _disableEventHandling() {
                            this._closed$.next()
                        }
                        _setFocus() {
                            const {
                                nativeElement: e
                            } = this._elRef;
                            if (!e.contains(document.activeElement)) {
                                const o = e.querySelector("[ngbAutofocus]"),
                                    s = kr(e)[0];
                                (o || s || e).focus()
                            }
                        }
                        _restoreFocus() {
                            const e = this._document.body,
                                o = this._elWithFocus;
                            let s;
                            s = o && o.focus && e.contains(o) ? o : e, this._zone.runOutsideAngular(() => {
                                setTimeout(() => s.focus()), this._elWithFocus = null
                            })
                        }
                        _bumpBackdrop() {
                            "static" === this.backdrop && mn(this._zone, this._elRef.nativeElement, ({
                                classList: e
                            }) => (e.add("modal-static"), () => e.remove("modal-static")), {
                                animation: this.animation,
                                runningTransition: "continue"
                            })
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)(t.\u0275\ u0275directiveInject(r.DOCUMENT), t.\u0275\ u0275directiveInject(t.ElementRef), t.\u0275\ u0275directiveInject(t.NgZone))
                    }, n.\u0275cmp = t.\u0275\ u0275defineComponent({
                        type: n,
                        selectors: [
                            ["ngb-modal-window"]
                        ],
                        viewQuery: function(e, o) {
                            if (1 & e && t.\u0275\ u0275viewQuery(Do, 7), 2 & e) {
                                let s;
                                t.\u0275\ u0275queryRefresh(s = t.\u0275\ u0275loadQuery()) && (o._dialogEl = s.first)
                            }
                        },
                        hostAttrs: ["role", "dialog", "tabindex", "-1"],
                        hostVars: 7,
                        hostBindings: function(e, o) {
                            2 & e && (t.\u0275\ u0275attribute("aria-modal", !0)("aria-labelledby", o.ariaLabelledBy)("aria-describedby", o.ariaDescribedBy), t.\u0275\ u0275classMap("modal d-block" + (o.windowClass ? " " + o.windowClass : "")), t.\u0275\ u0275classProp("fade", o.animation))
                        },
                        inputs: {
                            animation: "animation",
                            ariaLabelledBy: "ariaLabelledBy",
                            ariaDescribedBy: "ariaDescribedBy",
                            backdrop: "backdrop",
                            centered: "centered",
                            fullscreen: "fullscreen",
                            keyboard: "keyboard",
                            scrollable: "scrollable",
                            size: "size",
                            windowClass: "windowClass",
                            modalDialogClass: "modalDialogClass"
                        },
                        outputs: {
                            dismissEvent: "dismiss"
                        },
                        ngContentSelectors: St,
                        decls: 4,
                        vars: 2,
                        consts: [
                            ["role", "document"],
                            ["dialog", ""],
                            [1, "modal-content"]
                        ],
                        template: function(e, o) {
                            1 & e && (t.\u0275\ u0275projectionDef(), t.\u0275\ u0275elementStart(0, "div", 0, 1)(2, "div", 2), t.\u0275\ u0275projection(3), t.\u0275\ u0275elementEnd()()), 2 & e && t.\u0275\ u0275classMap("modal-dialog" + (o.size ? " modal-" + o.size : "") + (o.centered ? " modal-dialog-centered" : "") + o.fullscreenClass + (o.scrollable ? " modal-dialog-scrollable" : "") + (o.modalDialogClass ? " " + o.modalDialogClass : ""))
                        },
                        styles: ["ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}\n"],
                        encapsulation: 2
                    }), n
                })(),
                ms = (() => {
                    class n {
                        constructor(e) {
                            this._document = e
                        }
                        hide() {
                            const e = Math.abs(window.innerWidth - this._document.documentElement.clientWidth),
                                o = this._document.body,
                                s = o.style,
                                {
                                    overflow: g,
                                    paddingRight: w
                                } = s;
                            if (e > 0) {
                                const U = parseFloat(window.getComputedStyle(o).paddingRight);
                                s.paddingRight = `${U + e}px`
                            }
                            return s.overflow = "hidden", () => {
                                e > 0 && (s.paddingRight = w), s.overflow = g
                            }
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)(t.\u0275\ u0275inject(r.DOCUMENT))
                    }, n.\u0275prov = t.\u0275\ u0275defineInjectable({
                        token: n,
                        factory: n.\u0275fac,
                        providedIn: "root"
                    }), n
                })(),
                us = (() => {
                    class n {
                        constructor(e, o, s, g, w, U) {
                            this._applicationRef = e, this._injector = o, this._document = s, this._scrollBar = g, this._rendererFactory = w, this._ngZone = U, this._activeWindowCmptHasChanged = new f.x, this._ariaHiddenValues = new Map, this._scrollBarRestoreFn = null, this._backdropAttributes = ["animation", "backdropClass"], this._modalRefs = [], this._windowAttributes = ["animation", "ariaLabelledBy", "ariaDescribedBy", "backdrop", "centered", "fullscreen", "keyboard", "scrollable", "size", "windowClass", "modalDialogClass"], this._windowCmpts = [], this._activeInstances = new t.EventEmitter, this._activeWindowCmptHasChanged.subscribe(() => {
                                if (this._windowCmpts.length) {
                                    const W = this._windowCmpts[this._windowCmpts.length - 1];
                                    ((n, i, e, o = !1) => {
                                        this._ngZone.runOutsideAngular(() => {
                                            const s = (0, v.R)(i, "focusin").pipe((0, _.R)(e), (0, te.U)(g => g.target));
                                            (0, v.R)(i, "keydown").pipe((0, _.R)(e), (0, N.h)(g => g.which === Kt.Tab), et(s)).subscribe(([g, w]) => {
                                                const [U, W] = kr(i);
                                                (w === U || w === i) && g.shiftKey && (W.focus(), g.preventDefault()), w === W && !g.shiftKey && (U.focus(), g.preventDefault())
                                            }), o && (0, v.R)(i, "click").pipe((0, _.R)(e), et(s), (0, te.U)(g => g[1])).subscribe(g => g.focus())
                                        })
                                    })(0, W.location.nativeElement, this._activeWindowCmptHasChanged), this._revertAriaHidden(), this._setAriaHidden(W.location.nativeElement)
                                }
                            })
                        }
                        _restoreScrollBar() {
                            const e = this._scrollBarRestoreFn;
                            e && (this._scrollBarRestoreFn = null, e())
                        }
                        _hideScrollBar() {
                            this._scrollBarRestoreFn || (this._scrollBarRestoreFn = this._scrollBar.hide())
                        }
                        open(e, o, s) {
                            const g = s.container instanceof HTMLElement ? s.container : qn(s.container) ? this._document.querySelector(s.container) : this._document.body,
                                w = this._rendererFactory.createRenderer(null, null);
                            if (!g) throw new Error(`The specified modal container "${s.container || "body"}" was not found in the DOM.`);
                            this._hideScrollBar();
                            const U = new Kr,
                                W = this._getContentRef(s.injector || e, o, U, s);
                            let de = !1 !== s.backdrop ? this._attachBackdrop(g) : void 0,
                                Ce = this._attachWindowComponent(g, W.nodes),
                                Ge = new ps(Ce, W, de, s.beforeDismiss);
                            return this._registerModalRef(Ge), this._registerWindowCmpt(Ce), Ge.hidden.pipe((0, Y.q)(1)).subscribe(() => Promise.resolve(!0).then(() => {
                                this._modalRefs.length || (w.removeClass(this._document.body, "modal-open"), this._restoreScrollBar(), this._revertAriaHidden())
                            })), U.close = We => {
                                Ge.close(We)
                            }, U.dismiss = We => {
                                Ge.dismiss(We)
                            }, this._applyWindowOptions(Ce.instance, s), 1 === this._modalRefs.length && w.addClass(this._document.body, "modal-open"), de && de.instance && (this._applyBackdropOptions(de.instance, s), de.changeDetectorRef.detectChanges()), Ce.changeDetectorRef.detectChanges(), Ge
                        }
                        get activeInstances() {
                            return this._activeInstances
                        }
                        dismissAll(e) {
                            this._modalRefs.forEach(o => o.dismiss(e))
                        }
                        hasOpenModals() {
                            return this._modalRefs.length > 0
                        }
                        _attachBackdrop(e) {
                            let o = (0, t.createComponent)(ds, {
                                environmentInjector: this._applicationRef.injector,
                                elementInjector: this._injector
                            });
                            return this._applicationRef.attachView(o.hostView), e.appendChild(o.location.nativeElement), o
                        }
                        _attachWindowComponent(e, o) {
                            let s = (0, t.createComponent)(gs, {
                                environmentInjector: this._applicationRef.injector,
                                elementInjector: this._injector,
                                projectableNodes: o
                            });
                            return this._applicationRef.attachView(s.hostView), e.appendChild(s.location.nativeElement), s
                        }
                        _applyWindowOptions(e, o) {
                            this._windowAttributes.forEach(s => {
                                qn(o[s]) && (e[s] = o[s])
                            })
                        }
                        _applyBackdropOptions(e, o) {
                            this._backdropAttributes.forEach(s => {
                                qn(o[s]) && (e[s] = o[s])
                            })
                        }
                        _getContentRef(e, o, s, g) {
                            return o ? o instanceof t.TemplateRef ? this._createFromTemplateRef(o, s) : rr(o) ? this._createFromString(o) : this._createFromComponent(e, o, s, g) : new ii([])
                        }
                        _createFromTemplateRef(e, o) {
                            const g = e.createEmbeddedView({
                                $implicit: o,
                                close(w) {
                                    o.close(w)
                                },
                                dismiss(w) {
                                    o.dismiss(w)
                                }
                            });
                            return this._applicationRef.attachView(g), new ii([g.rootNodes], g)
                        }
                        _createFromString(e) {
                            const o = this._document.createTextNode(`${e}`);
                            return new ii([
                                [o]
                            ])
                        }
                        _createFromComponent(e, o, s, g) {
                            const w = t.Injector.create({
                                    providers: [{
                                        provide: Kr,
                                        useValue: s
                                    }],
                                    parent: e
                                }),
                                U = (0, t.createComponent)(o, {
                                    environmentInjector: this._applicationRef.injector,
                                    elementInjector: w
                                }),
                                W = U.location.nativeElement;
                            return g.scrollable && W.classList.add("component-host-scrollable"), this._applicationRef.attachView(U.hostView), new ii([
                                [W]
                            ], U.hostView, U)
                        }
                        _setAriaHidden(e) {
                            const o = e.parentElement;
                            o && e !== this._document.body && (Array.from(o.children).forEach(s => {
                                s !== e && "SCRIPT" !== s.nodeName && (this._ariaHiddenValues.set(s, s.getAttribute("aria-hidden")), s.setAttribute("aria-hidden", "true"))
                            }), this._setAriaHidden(o))
                        }
                        _revertAriaHidden() {
                            this._ariaHiddenValues.forEach((e, o) => {
                                e ? o.setAttribute("aria-hidden", e) : o.removeAttribute("aria-hidden")
                            }), this._ariaHiddenValues.clear()
                        }
                        _registerModalRef(e) {
                            const o = () => {
                                const s = this._modalRefs.indexOf(e);
                                s > -1 && (this._modalRefs.splice(s, 1), this._activeInstances.emit(this._modalRefs))
                            };
                            this._modalRefs.push(e), this._activeInstances.emit(this._modalRefs), e.result.then(o, o)
                        }
                        _registerWindowCmpt(e) {
                            this._windowCmpts.push(e), this._activeWindowCmptHasChanged.next(), e.onDestroy(() => {
                                const o = this._windowCmpts.indexOf(e);
                                o > -1 && (this._windowCmpts.splice(o, 1), this._activeWindowCmptHasChanged.next())
                            })
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)(t.\u0275\ u0275inject(t.ApplicationRef), t.\u0275\ u0275inject(t.Injector), t.\u0275\ u0275inject(r.DOCUMENT), t.\u0275\ u0275inject(ms), t.\u0275\ u0275inject(t.RendererFactory2), t.\u0275\ u0275inject(t.NgZone))
                    }, n.\u0275prov = t.\u0275\ u0275defineInjectable({
                        token: n,
                        factory: n.\u0275fac,
                        providedIn: "root"
                    }), n
                })(),
                fs = (() => {
                    class n {
                        constructor(e) {
                            this._ngbConfig = e, this.backdrop = !0, this.fullscreen = !1, this.keyboard = !0
                        }
                        get animation() {
                            return void 0 === this._animation ? this._ngbConfig.animation : this._animation
                        }
                        set animation(e) {
                            this._animation = e
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)(t.\u0275\ u0275inject(Gi))
                    }, n.\u0275prov = t.\u0275\ u0275defineInjectable({
                        token: n,
                        factory: n.\u0275fac,
                        providedIn: "root"
                    }), n
                })(),
                hs = (() => {
                    class n {
                        constructor(e, o, s) {
                            this._injector = e, this._modalStack = o, this._config = s
                        }
                        open(e, o = {}) {
                            const s = { ...this._config,
                                animation: this._config.animation,
                                ...o
                            };
                            return this._modalStack.open(this._injector, e, s)
                        }
                        get activeInstances() {
                            return this._modalStack.activeInstances
                        }
                        dismissAll(e) {
                            this._modalStack.dismissAll(e)
                        }
                        hasOpenModals() {
                            return this._modalStack.hasOpenModals()
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)(t.\u0275\ u0275inject(t.Injector), t.\u0275\ u0275inject(us), t.\u0275\ u0275inject(fs))
                    }, n.\u0275prov = t.\u0275\ u0275defineInjectable({
                        token: n,
                        factory: n.\u0275fac,
                        providedIn: "root"
                    }), n
                })(),
                Yr = (() => {
                    class n {}
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: n
                    }), n.\u0275inj = t.\u0275\ u0275defineInjector({
                        providers: [hs]
                    }), n
                })(),
                Jr = (() => {
                    class n {}
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: n
                    }), n.\u0275inj = t.\u0275\ u0275defineInjector({
                        imports: [r.CommonModule]
                    }), n
                })(),
                ao = (() => {
                    class n {}
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: n
                    }), n.\u0275inj = t.\u0275\ u0275defineInjector({
                        imports: [r.CommonModule]
                    }), n
                })(),
                lo = (() => {
                    class n {}
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: n
                    }), n.\u0275inj = t.\u0275\ u0275defineInjector({
                        imports: [r.CommonModule]
                    }), n
                })(),
                co = (() => {
                    class n {}
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: n
                    }), n.\u0275inj = t.\u0275\ u0275defineInjector({
                        imports: [r.CommonModule]
                    }), n
                })(),
                po = (() => {
                    class n {}
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: n
                    }), n.\u0275inj = t.\u0275\ u0275defineInjector({
                        imports: [r.CommonModule]
                    }), n
                })(),
                go = (() => {
                    class n {}
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: n
                    }), n.\u0275inj = t.\u0275\ u0275defineInjector({
                        imports: [r.CommonModule]
                    }), n
                })(),
                mo = (() => {
                    class n {}
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: n
                    }), n.\u0275inj = t.\u0275\ u0275defineInjector({
                        imports: [r.CommonModule]
                    }), n
                })(),
                uo = (() => {
                    class n {}
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: n
                    }), n.\u0275inj = t.\u0275\ u0275defineInjector({}), n
                })();
            new t.InjectionToken("live announcer delay", {
                providedIn: "root",
                factory: function Ss() {
                    return 100
                }
            });
            let fo = (() => {
                    class n {}
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: n
                    }), n.\u0275inj = t.\u0275\ u0275defineInjector({
                        imports: [r.CommonModule]
                    }), n
                })(),
                ho = (() => {
                    class n {}
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: n
                    }), n.\u0275inj = t.\u0275\ u0275defineInjector({}), n
                })();
            const Ts = [wr, Dr, Tr, Ir, Vr, Wr, Yr, Jr, ho, ao, lo, co, po, go, mo, uo, fo];
            let Is = (() => {
                class n {}
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275mod = t.\u0275\ u0275defineNgModule({
                    type: n
                }), n.\u0275inj = t.\u0275\ u0275defineInjector({
                    imports: [Ts, wr, Dr, Tr, Ir, Vr, Wr, Yr, Jr, ho, ao, lo, co, po, go, mo, uo, fo]
                }), n
            })()
        },
        4568: (y, T, a) => {
            a.d(T, {
                rv: () => dt,
                rP: () => H,
                Uq: () => mt
            });
            var t = a(5861),
                r = a(8125),
                d = a(8018),
                O = a(1499),
                p = a(8741),
                f = a(9751),
                v = a(9770),
                A = a(4986),
                M = a(1165),
                I = a(4482),
                z = a(8421),
                V = a(3888),
                J = a(5403),
                ie = a(9672);
            const ce = (0, V.d)(L => function(D = null) {
                L(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = D
            });

            function Oe(L) {
                throw new ce(L)
            }
            var oe = a(262),
                Me = a(3099),
                Ne = a(3512),
                pe = a(8222),
                k = a(9206),
                _ = a(3894);
            const N = void 0,
                te = ["en", [
                        ["a", "p"],
                        ["AM", "PM"], N
                    ],
                    [
                        ["AM", "PM"], N, N
                    ],
                    [
                        ["S", "M", "T", "W", "T", "F", "S"],
                        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                    ], N, [
                        ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    ], N, [
                        ["B", "A"],
                        ["BC", "AD"],
                        ["Before Christ", "Anno Domini"]
                    ], 0, [6, 0],
                    ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                    ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                    ["{1}, {0}", N, "{1} 'at' {0}", N],
                    [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                    ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr",
                    function Y(L) {
                        const D = Math.floor(Math.abs(L)),
                            he = L.toString().replace(/^[^.]*\.?/, "").length;
                        return 1 === D && 0 === he ? 1 : 5
                    }
                ];
            var Pe = a(6252);
            const Z = void 0,
                ge = [
                    [
                        ["mi", "n", "in the morning", "in the afternoon", "in the evening", "at night"],
                        ["midnight", "noon", "in the morning", "in the afternoon", "in the evening", "at night"], Z
                    ],
                    [
                        ["midnight", "noon", "morning", "afternoon", "evening", "night"], Z, Z
                    ],
                    ["00:00", "12:00", ["06:00", "12:00"],
                        ["12:00", "18:00"],
                        ["18:00", "21:00"],
                        ["21:00", "06:00"]
                    ]
                ];

            function be(L, Re) {
                if (1 & L && r.\u0275\ u0275element(0, "div", 1), 2 & L) {
                    const D = r.\u0275\ u0275nextContext();
                    r.\u0275\ u0275property("innerHtml", D.error, r.\u0275\ u0275sanitizeHtml)
                }
            }

            function Ee(L, Re) {
                if (1 & L && r.\u0275\ u0275element(0, "img", 1), 2 & L) {
                    const D = r.\u0275\ u0275nextContext();
                    r.\u0275\ u0275classMapInterpolate1("desktop ", D.class, ""), r.\u0275\ u0275property("src", D.imageHelper.getResponsiveImageDesktopUrl(D.image, D.imageStyleDesktop), r.\u0275\ u0275sanitizeUrl)("alt", D.imageHelper.getResponsiveImageDesktopAlt(D.image))
                }
            }

            function He(L, Re) {
                if (1 & L && r.\u0275\ u0275element(0, "img", 1), 2 & L) {
                    const D = r.\u0275\ u0275nextContext();
                    r.\u0275\ u0275classMapInterpolate1("mobile ", D.class, ""), r.\u0275\ u0275property("src", D.imageHelper.getResponsiveImageMobileUrl(D.image, D.imageStyleMobile), r.\u0275\ u0275sanitizeUrl)("alt", D.imageHelper.getResponsiveImageMobileAlt(D.image))
                }
            }
            const et = function(L, Re) {
                return [L, Re]
            };

            function rt(L, Re) {
                if (1 & L && r.\u0275\ u0275element(0, "pzpn-newsletter-responsive-image", 9), 2 & L) {
                    const D = r.\u0275\ u0275nextContext();
                    r.\u0275\ u0275property("image", D.config.headlineImage)("imageStyleDesktop", r.\u0275\ u0275pureFunction2(3, et, D.imageStyleEnum.small, D.imageStyleEnum.lnpArticle))("imageStyleMobile", r.\u0275\ u0275pureFunction2(6, et, D.imageStyleEnum.small, D.imageStyleEnum.lnpArticle))
                }
            }

            function nt(L, Re) {
                if (1 & L && r.\u0275\ u0275element(0, "pzpn-newsletter-image", 10), 2 & L) {
                    const D = r.\u0275\ u0275nextContext();
                    r.\u0275\ u0275property("imgSrc", null == D.config ? null : D.config.headlineDefaultImageUrl)
                }
            }
            const it = function(L, Re) {
                return {
                    regulationsUrl: L,
                    privacyPolicyUrl: Re
                }
            };

            function at(L, Re) {
                if (1 & L) {
                    const D = r.\u0275\ u0275getCurrentView();
                    r.\u0275\ u0275elementStart(0, "div", 11)(1, "div", 12), r.\u0275\ u0275text(2), r.\u0275\ u0275pipe(3, "translate"), r.\u0275\ u0275elementEnd(), r.\u0275\ u0275elementStart(4, "form", 13), r.\u0275\ u0275listener("submit", function() {
                        r.\u0275\ u0275restoreView(D);
                        const De = r.\u0275\ u0275nextContext();
                        return r.\u0275\ u0275resetView(De.onFormSubmit())
                    }), r.\u0275\ u0275elementStart(5, "div", 14)(6, "label", 15)(7, "input", 16), r.\u0275\ u0275listener("focus", function() {
                        r.\u0275\ u0275restoreView(D);
                        const De = r.\u0275\ u0275nextContext();
                        return r.\u0275\ u0275resetView(De.pzpnNewsletterFormHelper.clearErrors(De.formGroup, "email"))
                    }), r.\u0275\ u0275pipe(8, "translate"), r.\u0275\ u0275elementEnd()(), r.\u0275\ u0275element(9, "pzpn-newsletter-form-field-error", 17), r.\u0275\ u0275elementStart(10, "label", 18)(11, "input", 19), r.\u0275\ u0275listener("change", function() {
                        r.\u0275\ u0275restoreView(D);
                        const De = r.\u0275\ u0275nextContext();
                        return r.\u0275\ u0275resetView(De.pzpnNewsletterFormHelper.clearErrors(De.formGroup, "regulation"))
                    }), r.\u0275\ u0275elementEnd(), r.\u0275\ u0275element(12, "span", 20), r.\u0275\ u0275pipe(13, "translate"), r.\u0275\ u0275elementEnd(), r.\u0275\ u0275element(14, "pzpn-newsletter-form-field-error", 17), r.\u0275\ u0275elementEnd(), r.\u0275\ u0275elementStart(15, "div", 14), r.\u0275\ u0275element(16, "input", 21), r.\u0275\ u0275pipe(17, "translate"), r.\u0275\ u0275elementEnd()()()
                }
                if (2 & L) {
                    const D = r.\u0275\ u0275nextContext();
                    r.\u0275\ u0275classProp("disabled", D.formGroup.disabled), r.\u0275\ u0275advance(2), r.\u0275\ u0275textInterpolate((null == D.config ? null : D.config.headlineText) || r.\u0275\ u0275pipeBind1(3, 11, "pzpn-newsletter.headline-text")), r.\u0275\ u0275advance(2), r.\u0275\ u0275property("formGroup", D.formGroup), r.\u0275\ u0275advance(3), r.\u0275\ u0275property("formControlName", "email")("placeholder", r.\u0275\ u0275pipeBind1(8, 13, "pzpn-newsletter.placeholder-text")), r.\u0275\ u0275advance(2), r.\u0275\ u0275property("error", D.pzpnNewsletterFormHelper.getFieldError(D.formGroup, "email")), r.\u0275\ u0275advance(2), r.\u0275\ u0275property("formControlName", "regulation"), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("innerHTML", (null == D.config ? null : D.config.consentText) || r.\u0275\ u0275pipeBind2(13, 15, "pzpn-newsletter.consent-text", r.\u0275\ u0275pureFunction2(20, it, null == D.config ? null : D.config.regulationsUrl, null == D.config ? null : D.config.privacyPolicyUrl)), r.\u0275\ u0275sanitizeHtml), r.\u0275\ u0275advance(2), r.\u0275\ u0275property("error", D.pzpnNewsletterFormHelper.getFieldError(D.formGroup, "regulation")), r.\u0275\ u0275advance(2), r.\u0275\ u0275property("value", (null == D.config ? null : D.config.buttonText) || r.\u0275\ u0275pipeBind1(17, 18, "pzpn-newsletter.button-text"))
                }
            }

            function gt(L, Re) {
                1 & L && (r.\u0275\ u0275element(0, "div", 22), r.\u0275\ u0275pipe(1, "translate")), 2 & L && r.\u0275\ u0275property("innerHTML", r.\u0275\ u0275pipeBind1(1, 1, "pzpn-newsletter.success-text"), r.\u0275\ u0275sanitizeHtml)
            }

            function Pt(L, Re) {
                1 & L && (r.\u0275\ u0275element(0, "div", 23), r.\u0275\ u0275pipe(1, "translate")), 2 & L && r.\u0275\ u0275property("innerHTML", r.\u0275\ u0275pipeBind1(1, 1, "pzpn-newsletter.error-text"), r.\u0275\ u0275sanitizeHtml)
            }
            var Je = (() => {
                return (L = Je || (Je = {})).large = "bpp_large", L.medium = "bpp_medium", L.small = "bpp_small", L.thumbnailLarge = "bpp_thumbnail_large", L.thumbnailSmall = "bpp_thumbnail_small", L.lnpArticle = "lnp_article", Je;
                var L
            })();
            const b_newsletter_createContact = () => "api/v1/Newsletter/Subscribe",
                q = {
                    en: "en-US",
                    enus: "en-US",
                    en_us: "en-US",
                    "en-us": "en-US",
                    pl: "pl-PL",
                    plpl: "pl-PL",
                    pl_pl: "pl-PL",
                    "pl-pl": "pl-PL"
                },
                E = {
                    "pzpn-newsletter": {
                        "headline-text": "Sign up to PZPN newsletter and be up to date!",
                        "placeholder-text": "E-mail address",
                        "consent-text": 'I have read and accepted <a href="%{privacyPolicyUrl}">Privacy policy</a> and <a href="%{regulationsUrl}">regulations</a> of this website.',
                        "button-text": "Sign up",
                        "success-text": "Thank you for registering",
                        "error-text": "Unexpected error occurred<br/>Please try again later"
                    },
                    forms: {
                        errors: {
                            "field-required": "This field is required",
                            "field-required-true": "This consent is required",
                            "invalid-email": "Incorrect e-mail address",
                            "invalid-phone-number": "Incorrect phone number format",
                            "invalid-post-code": "Incorrect postal code format",
                            "invalid-house-number": "Incorrect house number format",
                            "invalid-flat-number": "Incorrect flat number format",
                            "invalid-pesel": "Incorrect PESEL number",
                            "invalid-passport-number": "Incorrect PESEL / passport number",
                            "end-date-must-be-later-than-start-date": "End date has to be earlier than start date"
                        }
                    }
                },
                B = {
                    "pzpn-newsletter": {
                        "headline-text": "Zapisz si\u0119 na newsletter PZPN i b\u0105d\u017a na bie\u017c\u0105co!",
                        "placeholder-text": "Adres e-mail",
                        "consent-text": 'Zapozna\u0142em si\u0119 i akceptuj\u0119 <a href="%{privacyPolicyUrl}">Polityk\u0119 prywatno\u015bci</a> oraz <a href="%{regulationsUrl}">regulamin</a> serwisu.',
                        "button-text": "Zapisz si\u0119",
                        "success-text": "Dzi\u0119kujemy za rejestracj\u0119",
                        "error-text": "Wyst\u0105pi\u0142 nieoczekiwany b\u0142\u0105d<br/>Prosimy spr\xf3bowa\u0107 p\xf3\u017aniej"
                    },
                    forms: {
                        errors: {
                            "field-required": "To pole jest wymagane",
                            "field-required-true": "Ta zgoda jest wymagana",
                            "invalid-email": "Podano b\u0142\u0119dny adres e-mail",
                            "invalid-phone-number": "B\u0142\u0119dny format numeru telefonu",
                            "invalid-post-code": "B\u0142\u0119dny format kodu pocztowego",
                            "invalid-house-number": "B\u0142\u0119dny format numeru domu",
                            "invalid-flat-number": "B\u0142\u0119dny format numeru lokalu",
                            "invalid-pesel": "Podano b\u0142\u0119dny numer PESEL",
                            "invalid-passport-number": "Podano b\u0142\u0119dny numer PESEL / numer paszportu",
                            "end-date-must-be-later-than-start-date": "Data zako\u0144czenia musi by\u0107 p\xf3\u017aniejsza od daty rozpocz\u0119cia"
                        }
                    }
                };
            let H = (() => {
                    class L {
                        get shared() {
                            return {
                                defaultLocale: "pl-PL",
                                profileApiRestService: {
                                    authToken: {
                                        authHeaderName: "Authorization",
                                        authScheme: "Bearer"
                                    },
                                    defaultRequestHeaders: {
                                        "Content-Type": "application/json",
                                        "Accept-Language": "pl"
                                    },
                                    requestTimeout: 3e4
                                }
                            }
                        }
                        get services() {
                            return {
                                requestManager: {
                                    numberOfConcurrentRequests: 10,
                                    requestTimeout: 6e4
                                }
                            }
                        }
                    }
                    return L.\u0275fac = function(D) {
                        return new(D || L)
                    }, L.\u0275prov = r.\u0275\ u0275defineInjectable({
                        token: L,
                        factory: L.\u0275fac,
                        providedIn: "root"
                    }), L
                })(),
                Q = (() => {
                    class L {
                        constructor(D, he) {
                            this.pzpnNewsletterEnvConfig = D, this.localeId = he, this.onLanguageChange = new r.EventEmitter, this.localeMap = q, this.polyglot = new O, this.localeFilesMap = {
                                "en-US": {
                                    appBase: E
                                },
                                "pl-PL": {
                                    appBase: B
                                }
                            }, this.setLocale(this.pzpnNewsletterEnvConfig.shared.defaultLocale)
                        }
                        getLocale() {
                            return this.localeId
                        }
                        setLocale(D) {
                            if (!this.localeMap.hasOwnProperty(D.toLowerCase())) return void console.error(`Missing locale map definition for '${D}'`);
                            const he = this.localeMap[D.toLowerCase()];
                            this.localeFilesMap.hasOwnProperty(he) ? this.currentLocaleId !== he && (this.localeId = he, this.currentLocaleId = he, this.polyglot.locale(this.currentLocaleId), this.polyglot.replace(this.prepareLocalePhrases(this.currentLocaleId)), this.onLanguageChange.emit(this.currentLocaleId)) : console.error(`Missing localeFilesMap definition for '${he}'`)
                        }
                        translate(D, he) {
                            return this.polyglot.t(D, he)
                        }
                        prepareLocalePhrases(D) {
                            const he = {},
                                De = this.localeFilesMap[D];
                            for (const $ of Object.keys(De)) Object.assign(he, De[$]);
                            return he
                        }
                    }
                    return L.\u0275fac = function(D) {
                        return new(D || L)(r.\u0275\ u0275inject(H), r.\u0275\ u0275inject(r.LOCALE_ID))
                    }, L.\u0275prov = r.\u0275\ u0275defineInjectable({
                        token: L,
                        factory: L.\u0275fac
                    }), L
                })(),
                me = (() => {
                    class L {
                        constructor(D) {
                            this.translateService = D, this.patterns = {
                                email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                letters: /^[a-zA-Z\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\xd3\xf3\u015a\u015b\u0179\u017a\u017b\u017c\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd4\xd5\xd6\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xf0\xef\xf1\xf2\xf4\xf5\xf6\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff\u0100\u0101\u0102\u0103\u0108\u0109\u010b\u010a\u010c\u010d\u010e\u010f\u0110\u0111\u0112\u0113\u0114\u0115\u0116\u0117\u011a\u011b\u011c\u011d\u011e\u011f\u0120\u0121\u0122\u0123\u0124\u0128\u0129\u012a\u012d\u012e\u012f\u0130\u0131\u0134\u0135\u0136\u0139\u013a\u013c\u013b\u013d\u013e\u013f\u0140\u0147\u0149\u014a\u014b\u014c\u014d\u014e\u014f\u0150\u0151\u0152\u0153\u0154\u0156\u0157\u0158\u0159\u015c\u015d\u015e\u015f\u0160\u0161\u0162\u0163\u0164\u0165\u0166\u0167\u0168\u0169\u016a\u016b\u016c\u016d\u016e\u016f\u0170\u0171\u0172\u0173\u0174\u0175\u0176\u0177\u0178]+$/,
                                lettersDash: /^[a-zA-Z\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\xd3\xf3\u015a\u015b\u0179\u017a\u017b\u017c\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd4\xd5\xd6\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xf0\xef\xf1\xf2\xf4\xf5\xf6\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff\u0100\u0101\u0102\u0103\u0108\u0109\u010b\u010a\u010c\u010d\u010e\u010f\u0110\u0111\u0112\u0113\u0114\u0115\u0116\u0117\u011a\u011b\u011c\u011d\u011e\u011f\u0120\u0121\u0122\u0123\u0124\u0128\u0129\u012a\u012d\u012e\u012f\u0130\u0131\u0134\u0135\u0136\u0139\u013a\u013c\u013b\u013d\u013e\u013f\u0140\u0147\u0149\u014a\u014b\u014c\u014d\u014e\u014f\u0150\u0151\u0152\u0153\u0154\u0156\u0157\u0158\u0159\u015c\u015d\u015e\u015f\u0160\u0161\u0162\u0163\u0164\u0165\u0166\u0167\u0168\u0169\u016a\u016b\u016c\u016d\u016e\u016f\u0170\u0171\u0172\u0173\u0174\u0175\u0176\u0177\u0178\-]+$/,
                                lettersDashSpace: /^[a-zA-Z\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\xd3\xf3\u015a\u015b\u0179\u017a\u017b\u017c\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd4\xd5\xd6\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xf0\xef\xf1\xf2\xf4\xf5\xf6\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff\u0100\u0101\u0102\u0103\u0108\u0109\u010b\u010a\u010c\u010d\u010e\u010f\u0110\u0111\u0112\u0113\u0114\u0115\u0116\u0117\u011a\u011b\u011c\u011d\u011e\u011f\u0120\u0121\u0122\u0123\u0124\u0128\u0129\u012a\u012d\u012e\u012f\u0130\u0131\u0134\u0135\u0136\u0139\u013a\u013c\u013b\u013d\u013e\u013f\u0140\u0147\u0149\u014a\u014b\u014c\u014d\u014e\u014f\u0150\u0151\u0152\u0153\u0154\u0156\u0157\u0158\u0159\u015c\u015d\u015e\u015f\u0160\u0161\u0162\u0163\u0164\u0165\u0166\u0167\u0168\u0169\u016a\u016b\u016c\u016d\u016e\u016f\u0170\u0171\u0172\u0173\u0174\u0175\u0176\u0177\u0178\- ]+$/,
                                lettersNumbersDashDotSpace: /^[0-9a-zA-Z\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\xd3\xf3\u015a\u015b\u0179\u017a\u017b\u017c\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd4\xd5\xd6\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xf0\xef\xf1\xf2\xf4\xf5\xf6\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff\u0100\u0101\u0102\u0103\u0108\u0109\u010b\u010a\u010c\u010d\u010e\u010f\u0110\u0111\u0112\u0113\u0114\u0115\u0116\u0117\u011a\u011b\u011c\u011d\u011e\u011f\u0120\u0121\u0122\u0123\u0124\u0128\u0129\u012a\u012d\u012e\u012f\u0130\u0131\u0134\u0135\u0136\u0139\u013a\u013c\u013b\u013d\u013e\u013f\u0140\u0147\u0149\u014a\u014b\u014c\u014d\u014e\u014f\u0150\u0151\u0152\u0153\u0154\u0156\u0157\u0158\u0159\u015c\u015d\u015e\u015f\u0160\u0161\u0162\u0163\u0164\u0165\u0166\u0167\u0168\u0169\u016a\u016b\u016c\u016d\u016e\u016f\u0170\u0171\u0172\u0173\u0174\u0175\u0176\u0177\u0178.\- ]+$/,
                                lettersDashApostropheSpace: /^[a-zA-Z\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\xd3\xf3\u015a\u015b\u0179\u017a\u017b\u017c\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd4\xd5\xd6\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xf0\xef\xf1\xf2\xf4\xf5\xf6\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff\u0100\u0101\u0102\u0103\u0108\u0109\u010b\u010a\u010c\u010d\u010e\u010f\u0110\u0111\u0112\u0113\u0114\u0115\u0116\u0117\u011a\u011b\u011c\u011d\u011e\u011f\u0120\u0121\u0122\u0123\u0124\u0128\u0129\u012a\u012d\u012e\u012f\u0130\u0131\u0134\u0135\u0136\u0139\u013a\u013c\u013b\u013d\u013e\u013f\u0140\u0147\u0149\u014a\u014b\u014c\u014d\u014e\u014f\u0150\u0151\u0152\u0153\u0154\u0156\u0157\u0158\u0159\u015c\u015d\u015e\u015f\u0160\u0161\u0162\u0163\u0164\u0165\u0166\u0167\u0168\u0169\u016a\u016b\u016c\u016d\u016e\u016f\u0170\u0171\u0172\u0173\u0174\u0175\u0176\u0177\u0178\-' ]+$/,
                                houseNumber: /^[0-9a-zA-Z\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\xd3\xf3\u015a\u015b\u0179\u017a\u017b\u017c\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd4\xd5\xd6\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xf0\xef\xf1\xf2\xf4\xf5\xf6\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff\u0100\u0101\u0102\u0103\u0108\u0109\u010b\u010a\u010c\u010d\u010e\u010f\u0110\u0111\u0112\u0113\u0114\u0115\u0116\u0117\u011a\u011b\u011c\u011d\u011e\u011f\u0120\u0121\u0122\u0123\u0124\u0128\u0129\u012a\u012d\u012e\u012f\u0130\u0131\u0134\u0135\u0136\u0139\u013a\u013c\u013b\u013d\u013e\u013f\u0140\u0147\u0149\u014a\u014b\u014c\u014d\u014e\u014f\u0150\u0151\u0152\u0153\u0154\u0156\u0157\u0158\u0159\u015c\u015d\u015e\u015f\u0160\u0161\u0162\u0163\u0164\u0165\u0166\u0167\u0168\u0169\u016a\u016b\u016c\u016d\u016e\u016f\u0170\u0171\u0172\u0173\u0174\u0175\u0176\u0177\u0178]+[-\/ ]?[0-9a-zA-Z\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\xd3\xf3\u015a\u015b\u0179\u017a\u017b\u017c\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd4\xd5\xd6\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xf0\xef\xf1\xf2\xf4\xf5\xf6\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff\u0100\u0101\u0102\u0103\u0108\u0109\u010b\u010a\u010c\u010d\u010e\u010f\u0110\u0111\u0112\u0113\u0114\u0115\u0116\u0117\u011a\u011b\u011c\u011d\u011e\u011f\u0120\u0121\u0122\u0123\u0124\u0128\u0129\u012a\u012d\u012e\u012f\u0130\u0131\u0134\u0135\u0136\u0139\u013a\u013c\u013b\u013d\u013e\u013f\u0140\u0147\u0149\u014a\u014b\u014c\u014d\u014e\u014f\u0150\u0151\u0152\u0153\u0154\u0156\u0157\u0158\u0159\u015c\u015d\u015e\u015f\u0160\u0161\u0162\u0163\u0164\u0165\u0166\u0167\u0168\u0169\u016a\u016b\u016c\u016d\u016e\u016f\u0170\u0171\u0172\u0173\u0174\u0175\u0176\u0177\u0178]*$/,
                                passportNumber: /^([a-zA-Z0-9]{1,9})$/,
                                phoneNumber: /^\d{9,12}$/,
                                postalCode: /^\d{2}-\d{3}$/,
                                postalCodeMasked: /^\d{5}$/
                            }, this.patternValidator = (he, De) => $ => {
                                const G = $.value;
                                return _e(G) && !he.test(G) ? {
                                    message: De
                                } : null
                            }
                        }
                        requiredValidator(D) {
                            return _e(D.value) ? null : {
                                message: "forms.errors.field-required"
                            }
                        }
                        requiredTrueValidator(D) {
                            return !0 !== D.value ? {
                                message: "forms.errors.field-required-true"
                            } : null
                        }
                        validateForm(D) {
                            Object.keys(D.controls).forEach(he => {
                                const De = D.get(he);
                                De instanceof d.UntypedFormControl ? (De.markAsTouched({
                                    onlySelf: !0
                                }), De.updateValueAndValidity()) : (De instanceof d.UntypedFormGroup || De instanceof d.UntypedFormArray) && this.validateForm(De)
                            })
                        }
                        validateField(D, he) {
                            D.get(he).markAsTouched({
                                onlySelf: !0
                            }), D.get(he).updateValueAndValidity()
                        }
                        clearFormErrors(D) {
                            Object.keys(D.controls).forEach(he => {
                                const De = D.get(he);
                                De instanceof d.UntypedFormControl ? (De.markAsUntouched({
                                    onlySelf: !0
                                }), De.setErrors(null)) : (De instanceof d.UntypedFormGroup || De instanceof d.UntypedFormArray) && this.clearFormErrors(De)
                            })
                        }
                        clearErrors(D, he, De = null, $ = null) {
                            D.get(he).markAsUntouched({
                                onlySelf: !0
                            }), D.get(he).setErrors(null), De && De.hasOwnProperty("modelError") && De.modelError.hasOwnProperty($) && delete De.modelError[$]
                        }
                        getFieldError(D, he, De = null, $ = null) {
                            if (D) {
                                const G = D.get(he);
                                if (G.touched && G.errors && G.errors.message) return this.translateService.translate(G.errors.message);
                                if (De && De.hasOwnProperty("modelError") && De.modelError.hasOwnProperty($)) return De.modelError[$].join("<br/>");
                                if (De && null === $ && De.hasOwnProperty("message")) return De.message
                            }
                            return null
                        }
                        clearControlErrors(D, he = null, De = null) {
                            D.markAsUntouched({
                                onlySelf: !0
                            }), D.setErrors(null), he && he.hasOwnProperty("modelError") && he.modelError.hasOwnProperty(De) && delete he.modelError[De]
                        }
                        getControlError(D, he, De) {
                            if (D) {
                                if (D.touched && D.errors && D.errors.message) return this.translateService.translate(D.errors.message);
                                if (he && he.hasOwnProperty("modelError") && he.modelError.hasOwnProperty(De)) return he.modelError[De].join("<br/>");
                                if (he && null === De && he.hasOwnProperty("message")) return he.message
                            }
                            return null
                        }
                    }
                    return L.\u0275fac = function(D) {
                        return new(D || L)(r.\u0275\ u0275inject(Q))
                    }, L.\u0275prov = r.\u0275\ u0275defineInjectable({
                        token: L,
                        factory: L.\u0275fac
                    }), L
                })();

            function _e(L) {
                return null != L && "" !== String(L).trim()
            }
            let Le = (() => {
                class L {
                    constructor(D) {
                        this.pzpnNewsletterEnvConfig = D
                    }
                    static getImageStyle(D, he) {
                        if (he && D.styles)
                            for (let De = 0; De < D.styles.length; De++)
                                if (D.styles[he[De]]) return D.styles[he[De]];
                        return D.url
                    }
                    setConfig(D) {
                        this.config = D
                    }
                    getCmsImageUrl(D) {
                        if (D) return D = D.replace(/^\//, "").replace("\\", "/"), `${this.pzpnNewsletterEnvConfig.urls.imageUrl.fromCms}${D}`
                    }
                    getResponsiveImageDesktopUrl(D, he) {
                        return D && D.url ? this.getCmsImageUrl(L.getImageStyle(D, he)) : null
                    }
                    getResponsiveImageMobileUrl(D, he) {
                        return D && D.mobile ? this.getCmsImageUrl(L.getImageStyle(D.mobile, he)) : this.getResponsiveImageDesktopUrl(D, he)
                    }
                    getResponsiveImageDesktopAlt(D) {
                        if (D) {
                            if (D.alt) return D.alt;
                            if (D.description) return D.description
                        }
                        return ""
                    }
                    getResponsiveImageMobileAlt(D) {
                        return D && D.mobile ? D.mobile.alt : this.getResponsiveImageDesktopAlt(D)
                    }
                }
                return L.\u0275fac = function(D) {
                    return new(D || L)(r.\u0275\ u0275inject(H))
                }, L.\u0275prov = r.\u0275\ u0275defineInjectable({
                    token: L,
                    factory: L.\u0275fac,
                    providedIn: "root"
                }), L
            })();
            f.y.prototype.safeSubscribe = function ke(L, Re, D, he) {
                if ("object" != typeof L) throw new TypeError("First argument is not an object. Did you mean to pass 'this'?");
                D || (D = () => null), he || (he = () => null);
                const De = "function" == typeof L.ngOnDestroy,
                    $ = "object" == typeof L.__sso,
                    G = this.subscribe(Be => Re(Be), Be => D(Be), () => he);
                if (!$)
                    if (L.__sso = new Set, De) {
                        const Be = L.ngOnDestroy;
                        L.ngOnDestroy = function() {
                            L.__sso.forEach(function(ne) {
                                ne.unsubscribe()
                            }), L.__sso.clear(), Be.call(L)
                        }
                    } else console.error(`SSO: ngOnDestroy method missing in ${L.constructor.name}`);
                return L.__sso.add(G), G
            };
            var je = (() => {
                return (L = je || (je = {}))[L.httpUnauthorized = 401] = "httpUnauthorized", L[L.httpForbidden = 403] = "httpForbidden", L[L.httpNotFound = 404] = "httpNotFound", L[L.httpRequestTimeout = 408] = "httpRequestTimeout", L[L.httpConflict = 409] = "httpConflict", L[L.httpEntityTooLarge = 413] = "httpEntityTooLarge", L[L.httpInternalServerError = 500] = "httpInternalServerError", L[L.httpNotImplemented = 501] = "httpNotImplemented", L[L.httpBadGateway = 502] = "httpBadGateway", L[L.httpServiceUnavailable = 503] = "httpServiceUnavailable", L[L.httpGatewayTimeout = 504] = "httpGatewayTimeout", L[L.requestBadRequest = 400] = "requestBadRequest", L[L.clientDefaultError = 1e4] = "clientDefaultError", L[L.clientAppInitError = 10001] = "clientAppInitError", je;
                var L
            })();
            class ct {
                constructor(Re, D) {
                    this.code = 0, this.type = "HttpError", this.code = Re.status, this.message = Re.message, this.url = D, this.date = new Date
                }
            }
            class xt {
                constructor(Re, D) {
                    this.code = 0, this.modelError = {}, this.type = "RequestError", this.code = Re.status, this.message = Re.message, this.url = D, this.date = new Date, Re.hasOwnProperty("error") && (this.modelError = Re.error)
                }
            }
            class Ve {
                constructor() {}
                static isErrorHandled(Re) {
                    return Ve.handledErrorCodes.includes(Re.code)
                }
                static getAppropriateError(Re, D) {
                    return Re.status === Ve.errorCodes.requestBadRequest ? new xt(Re, D) : new ct(Re, D)
                }
                static prepareRequestOptions(Re, D, he) {
                    let De = {
                        headers: Re
                    };
                    return "object" == typeof D && (De = Object.assign(De, {
                        body: D
                    })), "object" == typeof he && (De = Object.assign(De, he)), De
                }
            }
            Ve.errorCodes = je, Ve.httpErrorCodes = [Ve.errorCodes.requestBadRequest, Ve.errorCodes.httpUnauthorized, Ve.errorCodes.httpForbidden, Ve.errorCodes.httpNotFound, Ve.errorCodes.httpConflict, Ve.errorCodes.httpEntityTooLarge, Ve.errorCodes.httpInternalServerError, Ve.errorCodes.httpNotImplemented, Ve.errorCodes.httpBadGateway, Ve.errorCodes.httpServiceUnavailable, Ve.errorCodes.httpGatewayTimeout], Ve.handledErrorCodes = [Ve.errorCodes.requestBadRequest, Ve.errorCodes.httpUnauthorized, Ve.errorCodes.httpForbidden, Ve.errorCodes.httpNotFound, Ve.errorCodes.httpConflict, Ve.errorCodes.httpEntityTooLarge, Ve.errorCodes.httpNotImplemented, Ve.errorCodes.httpBadGateway, Ve.errorCodes.httpServiceUnavailable, Ve.errorCodes.httpGatewayTimeout], Ve.\u0275fac = function(Re) {
                return new(Re || Ve)
            }, Ve.\u0275prov = r.\u0275\ u0275defineInjectable({
                token: Ve,
                factory: Ve.\u0275fac
            });
            class ue {
                constructor(Re, D) {
                    this.url = Re, this.observable = D
                }
            }
            let xe = (() => {
                    class L {
                        constructor(D, he, De) {
                            this.http = D, this.httpBackend = he, this.pzpnNewsletterEnvConfig = De, this.bypassInterceptorHttpClient = new p.HttpClient(this.httpBackend)
                        }
                        ngOnDestroy() {}
                        makeRequest(D, he, De, $ = !1) {
                            return ($ ? this.bypassInterceptorHttpClient : this.http).request(D, he, De).pipe(function ve(L, Re) {
                                const {
                                    first: D,
                                    each: he,
                                    with: De = Oe,
                                    scheduler: $ = Re ? ? A.z,
                                    meta: G = null
                                } = (0, M.q)(L) ? {
                                    first: L
                                } : "number" == typeof L ? {
                                    each: L
                                } : L;
                                if (null == D && null == he) throw new TypeError("No timeout provided.");
                                return (0, I.e)((Be, ne) => {
                                    let R, u, h = null,
                                        x = 0;
                                    const X = le => {
                                        u = (0, ie.f)(ne, $, () => {
                                            try {
                                                R.unsubscribe(), (0, z.Xf)(De({
                                                    meta: G,
                                                    lastValue: h,
                                                    seen: x
                                                })).subscribe(ne)
                                            } catch (Ue) {
                                                ne.error(Ue)
                                            }
                                        }, le)
                                    };
                                    R = Be.subscribe((0, J.x)(ne, le => {
                                        u ? .unsubscribe(), x++, ne.next(h = le), he > 0 && X(he)
                                    }, void 0, void 0, () => {
                                        u ? .closed || u ? .unsubscribe(), h = null
                                    })), !x && X(null != D ? "number" == typeof D ? D : +D - $.now() : he)
                                })
                            }(this.pzpnNewsletterEnvConfig.services.requestManager.requestTimeout), (0, oe.K)(Be => {
                                throw Ve.getAppropriateError(Be, he)
                            }))
                        }
                    }
                    return L.\u0275fac = function(D) {
                        return new(D || L)(r.\u0275\ u0275inject(p.HttpClient), r.\u0275\ u0275inject(p.HttpBackend), r.\u0275\ u0275inject(H))
                    }, L.\u0275prov = r.\u0275\ u0275defineInjectable({
                        token: L,
                        factory: L.\u0275fac,
                        providedIn: "root"
                    }), L
                })(),
                ae = (() => {
                    class L {
                        constructor(D) {
                            this.requestManager = D, this.defaultRequestHeaders = {
                                "Content-Type": "application/json",
                                "Accept-Language": "pl",
                                Accept: "application/json"
                            }, this.existingRequests = []
                        }
                        ngOnDestroy() {}
                        get(D, he, De = !1) {
                            var $ = this;
                            const G = this.existingRequests.find(ne => ne.url === D);
                            if (G) return G.observable;
                            const Be = new f.y(ne => {
                                (0, v.P)((0, t.Z)(function*() {
                                    return yield $.getRequestHeaders(D)
                                })).safeSubscribe(this, R => {
                                    const u = Ve.prepareRequestOptions(R, null, he);
                                    this.requestManager.makeRequest("GET", D, u, De).safeSubscribe(this, h => {
                                        const x = this.existingRequests.findIndex(X => X.url === D); - 1 !== x && this.existingRequests.splice(x, 1), ne.next(h)
                                    }, h => {
                                        this.logError(h), ne.error(h)
                                    }, () => ne.complete())
                                }, R => {
                                    ne.error(R)
                                })
                            }).pipe((0, Me.B)());
                            return this.existingRequests.push(new ue(D, Be)), Be
                        }
                        post(D, he, De) {
                            var $ = this;
                            return new f.y(G => {
                                (0, v.P)((0, t.Z)(function*() {
                                    return yield $.getRequestHeaders(D)
                                })).safeSubscribe(this, Be => {
                                    const ne = Ve.prepareRequestOptions(Be, he, De);
                                    this.requestManager.makeRequest("POST", D, ne).safeSubscribe(this, R => G.next(R), R => {
                                        this.logError(R), G.error(R)
                                    }, () => G.complete())
                                }, Be => {
                                    G.error(Be)
                                })
                            })
                        }
                        put(D, he, De) {
                            var $ = this;
                            return new f.y(G => {
                                (0, v.P)((0, t.Z)(function*() {
                                    return yield $.getRequestHeaders(D)
                                })).safeSubscribe(this, Be => {
                                    const ne = Ve.prepareRequestOptions(Be, he, De);
                                    this.requestManager.makeRequest("PUT", D, ne).safeSubscribe(this, R => G.next(R), R => {
                                        this.logError(R), G.error(R)
                                    }, () => G.complete())
                                }, Be => {
                                    G.error(Be)
                                })
                            })
                        }
                        delete(D, he, De) {
                            var $ = this;
                            return new f.y(G => {
                                (0, v.P)((0, t.Z)(function*() {
                                    return yield $.getRequestHeaders(D)
                                })).safeSubscribe(this, Be => {
                                    const ne = Ve.prepareRequestOptions(Be, he, De);
                                    this.requestManager.makeRequest("DELETE", D, ne).safeSubscribe(this, R => G.next(R), R => {
                                        this.logError(R), G.error(R)
                                    }, () => G.complete())
                                }, Be => {
                                    G.error(Be)
                                })
                            })
                        }
                        getRequestHeaders(D) {
                            return new Promise(he => he(new p.HttpHeaders(this.defaultRequestHeaders)))
                        }
                    }
                    return L.\u0275fac = function(D) {
                        return new(D || L)(r.\u0275\ u0275inject(xe))
                    }, L.\u0275prov = r.\u0275\ u0275defineInjectable({
                        token: L,
                        factory: L.\u0275fac,
                        providedIn: "root"
                    }), L
                })(),
                Te = (() => {
                    class L extends ae {
                        constructor(D) {
                            super(D)
                        }
                        logError(D) {}
                    }
                    return L.\u0275fac = function(D) {
                        return new(D || L)(r.\u0275\ u0275inject(xe))
                    }, L.\u0275prov = r.\u0275\ u0275defineInjectable({
                        token: L,
                        factory: L.\u0275fac,
                        providedIn: "root"
                    }), L
                })(),
                se = (() => {
                    class L {
                        constructor() {}
                        ngOnInit() {}
                    }
                    return L.\u0275fac = function(D) {
                        return new(D || L)
                    }, L.\u0275cmp = r.\u0275\ u0275defineComponent({
                        type: L,
                        selectors: [
                            ["pzpn-newsletter-form-field-error"]
                        ],
                        inputs: {
                            error: "error"
                        },
                        decls: 1,
                        vars: 1,
                        consts: [
                            ["class", "pzpn-newsletter-form-field-error", 3, "innerHtml", 4, "ngIf"],
                            [1, "pzpn-newsletter-form-field-error", 3, "innerHtml"]
                        ],
                        template: function(D, he) {
                            1 & D && r.\u0275\ u0275template(0, be, 1, 1, "div", 0), 2 & D && r.\u0275\ u0275property("ngIf", he.error)
                        },
                        dependencies: [Ne.NgIf]
                    }), L
                })(),
                we = (() => {
                    class L {
                        constructor(D) {
                            this.imageHelper = D, this.desktop = !0, this.mobile = !0
                        }
                        ngOnInit() {}
                    }
                    return L.\u0275fac = function(D) {
                        return new(D || L)(r.\u0275\ u0275directiveInject(Le))
                    }, L.\u0275cmp = r.\u0275\ u0275defineComponent({
                        type: L,
                        selectors: [
                            ["pzpn-newsletter-responsive-image"]
                        ],
                        inputs: {
                            image: "image",
                            url: "url",
                            imageStyleDesktop: "imageStyleDesktop",
                            imageStyleMobile: "imageStyleMobile",
                            class: "class",
                            desktop: "desktop",
                            mobile: "mobile"
                        },
                        decls: 2,
                        vars: 2,
                        consts: [
                            [3, "src", "alt", "class", 4, "ngIf"],
                            [3, "src", "alt"]
                        ],
                        template: function(D, he) {
                            1 & D && (r.\u0275\ u0275template(0, Ee, 1, 5, "img", 0), r.\u0275\ u0275template(1, He, 1, 5, "img", 0)), 2 & D && (r.\u0275\ u0275property("ngIf", he.desktop), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngIf", he.mobile))
                        },
                        dependencies: [Ne.NgIf]
                    }), L
                })(),
                Ye = (() => {
                    class L {
                        constructor() {}
                        ngOnInit() {
                            this.imgSrc || console.error("Please specify config.headlineDefaultImageUrl")
                        }
                    }
                    return L.\u0275fac = function(D) {
                        return new(D || L)
                    }, L.\u0275cmp = r.\u0275\ u0275defineComponent({
                        type: L,
                        selectors: [
                            ["pzpn-newsletter-image"]
                        ],
                        inputs: {
                            imgSrc: "imgSrc"
                        },
                        decls: 1,
                        vars: 1,
                        consts: [
                            ["width", "288", "height", "344", "alt", "Logo", 3, "src"]
                        ],
                        template: function(D, he) {
                            1 & D && r.\u0275\ u0275element(0, "img", 0), 2 & D && r.\u0275\ u0275property("src", he.imgSrc, r.\u0275\ u0275sanitizeUrl)
                        }
                    }), L
                })(),
                Ze = (() => {
                    class L {
                        constructor(D, he) {
                            this.translateService = D, this.changeDetectorRef = he, this.translationChangeRegistered = !1, this.subscribeToLocaleChange()
                        }
                        ngOnDestroy() {}
                        transform(D, he) {
                            return D && 0 !== D.length ? ((!pe(D, this.lastKey) || !pe(he, this.lastInterpolationOptions)) && this.registerTranslationChange(), this.translationChangeRegistered && this.cacheTranslationResult(D, he), this.cachedTranslation) : D
                        }
                        subscribeToLocaleChange() {
                            this.translateService.onLanguageChange.safeSubscribe(this, this.registerTranslationChange.bind(this))
                        }
                        registerTranslationChange() {
                            this.translationChangeRegistered = !0
                        }
                        unregisterTranslationChange() {
                            this.translationChangeRegistered = !1
                        }
                        cacheTranslationResult(D, he) {
                            this.lastKey = D, this.lastInterpolationOptions = he, this.cachedTranslation = this.translateService.translate(D, he), this.unregisterTranslationChange(), this.changeDetectorRef.markForCheck()
                        }
                    }
                    return L.\u0275fac = function(D) {
                        return new(D || L)(r.\u0275\ u0275directiveInject(Q, 16), r.\u0275\ u0275directiveInject(r.ChangeDetectorRef, 16))
                    }, L.\u0275pipe = r.\u0275\ u0275definePipe({
                        name: "translate",
                        type: L,
                        pure: !1
                    }), L
                })(),
                dt = (() => {
                    class L {
                        constructor(D, he, De, $, G, Be, ne) {
                            this.changeDetectorRef = D, this.formBuilder = he, this.pzpnNewsletterTranslateService = De, this.pzpnNewsletterFormHelper = $, this.pzpnNewsletterEnvConfig = G, this.pzpnNewsletterImageHelper = Be, this.pzpnNewsletterService = ne, this.imageStyleEnum = Je, this.contactAdded = !1, this.contactError = !1, this.timeout = null, this.onCreateContactSuccess = () => {
                                this.contactAdded = !0, this.contactError = !1, this.showForm()
                            }, this.onCreateContactError = () => {
                                this.contactAdded = !1, this.contactError = !0, this.showForm()
                            }
                        }
                        ngOnInit() {
                            this.pzpnNewsletterImageHelper.setConfig(this.config), this.locale && this.locale.safeSubscribe(this, D => {
                                this.pzpnNewsletterTranslateService.setLocale(D), this.changeDetectorRef.detectChanges()
                            }), this.config ? .consentText || (this.config ? .regulationsUrl || (this.config.regulationsUrl = "/regulamin"), this.config ? .privacyPolicyUrl || (this.config.privacyPolicyUrl = "/polityka-prywatnosci")), this.createForm()
                        }
                        ngOnDestroy() {
                            this.timeout && (clearTimeout(this.timeout), this.timeout = null)
                        }
                        onFormSubmit() {
                            if (!this.formGroup.enabled) return;
                            if (this.pzpnNewsletterFormHelper.validateForm(this.formGroup), !this.formGroup.valid) return !1;
                            const D = `${this.pzpnNewsletterEnvConfig.urls.apiUrl}${b_newsletter_createContact()}`,
                                he = {
                                    email: this.formGroup.get("email").value,
                                    sourceSystem: this.config ? .sourceSystem
                                };
                            return this.formGroup.disable(), this.pzpnNewsletterService.post(D, he).safeSubscribe(this, this.onCreateContactSuccess, this.onCreateContactError), !1
                        }
                        createForm() {
                            this.formGroup = this.formBuilder.group({
                                email: [null, [this.pzpnNewsletterFormHelper.requiredValidator, this.pzpnNewsletterFormHelper.patternValidator(this.pzpnNewsletterFormHelper.patterns.email, "forms.errors.invalid-email")]],
                                regulation: [!1, [this.pzpnNewsletterFormHelper.requiredTrueValidator]]
                            })
                        }
                        showForm() {
                            this.timeout = setTimeout(() => {
                                this.contactAdded = !1, this.contactError = !1, this.formGroup.enable()
                            }, 5e3)
                        }
                    }
                    return L.\u0275fac = function(D) {
                        return new(D || L)(r.\u0275\ u0275directiveInject(r.ChangeDetectorRef), r.\u0275\ u0275directiveInject(d.UntypedFormBuilder), r.\u0275\ u0275directiveInject(Q), r.\u0275\ u0275directiveInject(me), r.\u0275\ u0275directiveInject(H), r.\u0275\ u0275directiveInject(Le), r.\u0275\ u0275directiveInject(Te))
                    }, L.\u0275cmp = r.\u0275\ u0275defineComponent({
                        type: L,
                        selectors: [
                            ["pzpn-newsletter"]
                        ],
                        inputs: {
                            locale: "locale",
                            config: "config"
                        },
                        decls: 9,
                        vars: 5,
                        consts: [
                            [1, "pzpn-newsletter"],
                            [1, "pzpn-newsletter-content-wrapper"],
                            [1, "pzpn-newsletter-container"],
                            [1, "pzpn-newsletter-image"],
                            [3, "image", "imageStyleDesktop", "imageStyleMobile", 4, "ngIf"],
                            [3, "imgSrc", 4, "ngIf"],
                            ["class", "pzpn-newsletter-form", 3, "disabled", 4, "ngIf"],
                            ["class", "pzpn-newsletter-success-message", 3, "innerHTML", 4, "ngIf"],
                            ["class", "pzpn-newsletter-error-message", 3, "innerHTML", 4, "ngIf"],
                            [3, "image", "imageStyleDesktop", "imageStyleMobile"],
                            [3, "imgSrc"],
                            [1, "pzpn-newsletter-form"],
                            [1, "headline"],
                            [3, "formGroup", "submit"],
                            [1, "row"],
                            [1, "pzpn-newsletter-mb-10"],
                            ["type", "text", 3, "formControlName", "placeholder", "focus"],
                            [3, "error"],
                            [1, "pzpn-newsletter-mb-30"],
                            ["type", "checkbox", 3, "formControlName", "change"],
                            [3, "innerHTML"],
                            ["type", "submit", 3, "value"],
                            [1, "pzpn-newsletter-success-message", 3, "innerHTML"],
                            [1, "pzpn-newsletter-error-message", 3, "innerHTML"]
                        ],
                        template: function(D, he) {
                            1 & D && (r.\u0275\ u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3), r.\u0275\ u0275template(4, rt, 1, 9, "pzpn-newsletter-responsive-image", 4), r.\u0275\ u0275template(5, nt, 1, 1, "pzpn-newsletter-image", 5), r.\u0275\ u0275elementEnd(), r.\u0275\ u0275template(6, at, 18, 23, "div", 6), r.\u0275\ u0275template(7, gt, 2, 3, "div", 7), r.\u0275\ u0275template(8, Pt, 2, 3, "div", 8), r.\u0275\ u0275elementEnd()()()), 2 & D && (r.\u0275\ u0275advance(4), r.\u0275\ u0275property("ngIf", null == he.config ? null : he.config.headlineImage), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngIf", !(null != he.config && he.config.headlineImage)), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngIf", !he.contactError && !he.contactAdded), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngIf", !he.contactError && he.contactAdded), r.\u0275\ u0275advance(1), r.\u0275\ u0275property("ngIf", he.contactError))
                        },
                        dependencies: [Ne.NgIf, d.\u0275NgNoValidate, d.DefaultValueAccessor, d.CheckboxControlValueAccessor, d.NgControlStatus, d.NgControlStatusGroup, d.FormGroupDirective, d.FormControlName, se, we, Ye, Ze]
                    }), L
                })();
            (0, Ne.registerLocaleData)(_.Z, "pl-PL", Pe.Z), (0, Ne.registerLocaleData)(te, "en-US", ge);
            let mt = (() => {
                class L {
                    static forRoot(D) {
                        return {
                            ngModule: L,
                            providers: [D.config]
                        }
                    }
                }
                return L.\u0275fac = function(D) {
                    return new(D || L)
                }, L.\u0275mod = r.\u0275\ u0275defineNgModule({
                    type: L
                }), L.\u0275inj = r.\u0275\ u0275defineInjector({
                    providers: [Q, Te, Le, xe, me],
                    imports: [Ne.CommonModule, k.RouterModule, p.HttpClientModule, d.ReactiveFormsModule]
                }), L
            })()
        },
        577: (y, T, a) => {
            a.d(T, {
                M6: () => ce,
                _J: () => Ne,
                bk: () => Me
            });
            var t = a(8125),
                r = a(3512),
                d = a(9646),
                O = a(2843),
                p = a(4004),
                f = a(8505),
                v = a(262),
                A = a(7461),
                M = a(3099),
                I = a(8741);
            const z = ["*"];
            class V {}
            let J = (() => {
                class pe extends V {
                    constructor(_) {
                        super(), this.http = _
                    }
                    getSvg(_) {
                        return this.http.get(_, {
                            responseType: "text"
                        })
                    }
                }
                return pe.\u0275fac = function(_) {
                    return new(_ || pe)(t.\u0275\ u0275inject(I.HttpClient))
                }, pe.\u0275prov = t.\u0275\ u0275defineInjectable({
                    token: pe,
                    factory: pe.\u0275fac
                }), pe
            })();
            const ie = new t.InjectionToken("SERVER_URL");
            let ce = (() => {
                class pe {
                    constructor(_, N, Y, te) {
                        this.loader = _, this.platformId = N, this.serverUrl = Y, this._document = te, this.iconsByUrl = new Map, this.iconsLoadingByUrl = new Map, this.document = this._document
                    }
                    addSvg(_, N) {
                        if (!this.iconsByUrl.has(_)) {
                            const Y = this.document.createElement("DIV");
                            Y.innerHTML = N;
                            const te = Y.querySelector("svg");
                            this.iconsByUrl.set(_, te)
                        }
                    }
                    loadSvg(_, N = _) {
                        if (this.serverUrl && null === _.match(/^(http(s)?):/) && (N = _ = this.serverUrl + _), this.iconsByUrl.has(N)) return (0, d.of)(this.iconsByUrl.get(N));
                        if (this.iconsLoadingByUrl.has(N)) return this.iconsLoadingByUrl.get(N);
                        const Y = this.loader.getSvg(_).pipe((0, p.U)(te => {
                            const Pe = this.document.createElement("DIV");
                            return Pe.innerHTML = te, Pe.querySelector("svg")
                        }), (0, f.b)(te => this.iconsByUrl.set(N, te)), (0, v.K)(te => (console.error(te), (0, O._)(te))), (0, A.x)(() => this.iconsLoadingByUrl.delete(N)), (0, M.B)());
                        return this.iconsLoadingByUrl.set(N, Y), Y
                    }
                    getSvgByName(_) {
                        return this.iconsByUrl.has(_) ? (0, d.of)(this.iconsByUrl.get(_)) : this.iconsLoadingByUrl.has(_) ? this.iconsLoadingByUrl.get(_) : (0, O._)(`No svg with name '${_}' has been loaded`)
                    }
                    unloadSvg(_) {
                        this.iconsByUrl.has(_) && this.iconsByUrl.delete(_)
                    }
                }
                return pe.\u0275fac = function(_) {
                    return new(_ || pe)(t.\u0275\ u0275inject(V), t.\u0275\ u0275inject(t.PLATFORM_ID), t.\u0275\ u0275inject(ie, 8), t.\u0275\ u0275inject(r.DOCUMENT, 8))
                }, pe.\u0275prov = t.\u0275\ u0275defineInjectable({
                    token: pe,
                    factory: pe.\u0275fac
                }), pe
            })();
            const Oe = {
                provide: ce,
                deps: [
                    [new t.Optional, new t.SkipSelf, ce], V, [t.PLATFORM_ID],
                    [new t.Optional, ie],
                    [new t.Optional, r.DOCUMENT]
                ],
                useFactory: function ve(pe, k, _, N, Y) {
                    return pe || new ce(k, _, N, Y)
                }
            };
            class oe {
                constructor() {
                    this.loaded = !1
                }
            }
            let Me = (() => {
                    class pe {
                        constructor(_, N, Y, te, Pe) {
                            this.element = _, this.differs = N, this.renderer = Y, this.iconReg = te, this.cdr = Pe, this.stretch = !1, this.applyClass = !1, this.applyCss = !1, this.helper = new oe, this._svgStyle = null
                        }
                        set svgStyle(_) {
                            this._svgStyle = _, !this.helper.differ && _ && (this.helper.differ = this.differs.find(_).create())
                        }
                        ngOnInit() {
                            this.init()
                        }
                        ngOnDestroy() {
                            this.destroy()
                        }
                        ngOnChanges(_) {
                            const N = this.element.nativeElement.firstChild;
                            (_.src || _.name) && (this.helper.loaded && this.destroy(), this.init()), _.stretch && this.stylize(), _.applyClass && (this.applyClass ? this.setClass(N, null, this.klass) : this.setClass(N, this.klass, null)), _.svgClass && this.setClass(N, _.svgClass.previousValue, _.svgClass.currentValue), _.klass && (this.setClass(this.element.nativeElement, _.klass.previousValue, _.klass.currentValue), this.setClass(N, _.klass.previousValue, this.applyClass ? _.klass.currentValue : null)), _.viewBox && (this.helper.loaded && this.destroy(), this.init()), _.applyCss && (console.warn("applyCss deprecated since 9.1.0, will be removed in 10.0.0"), console.warn("use applyClass instead")), _.svgAriaLabel && this.doAria(_.svgAriaLabel.currentValue)
                        }
                        ngDoCheck() {
                            if (this.helper.svg && this.helper.differ) {
                                const _ = this.helper.differ.diff(this._svgStyle);
                                _ && this.applyChanges(_)
                            }
                        }
                        init() {
                            if (this.name) {
                                const _ = this.iconReg.getSvgByName(this.name);
                                _ && (this.helper.icnSub = _.subscribe(N => this.initSvg(N)))
                            } else if (this.src) {
                                const _ = this.iconReg.loadSvg(this.src);
                                _ && (this.helper.icnSub = _.subscribe(N => this.initSvg(N)))
                            } else this.element.nativeElement.innerHTML = "", this.cdr.markForCheck()
                        }
                        initSvg(_) {
                            !this.helper.loaded && _ && (this.setSvg(_), this.resetDiffer())
                        }
                        destroy() {
                            this.helper.icnSub && this.helper.icnSub.unsubscribe(), this.helper = new oe
                        }
                        resetDiffer() {
                            this._svgStyle && !this.helper.differ && (this.helper.differ = this.differs.find(this._svgStyle).create())
                        }
                        setSvg(_) {
                            if (!this.helper.loaded && _) {
                                this.helper.svg = _;
                                const N = _.cloneNode(!0),
                                    Y = this.element.nativeElement;
                                if (Y.innerHTML = "", this.renderer.appendChild(Y, N), this.helper.loaded = !0, this.copyNgContentAttribute(Y, N), this.klass && this.applyClass && this.setClass(Y.firstChild, null, this.klass), this.svgClass && this.setClass(Y.firstChild, null, this.svgClass), this.viewBox)
                                    if ("auto" === this.viewBox) {
                                        const te = N.getAttribute("width"),
                                            Pe = N.getAttribute("height");
                                        Pe && te && (this.renderer.setAttribute(N, "viewBox", `0 0 ${te} ${Pe}`), this.renderer.removeAttribute(N, "width"), this.renderer.removeAttribute(N, "height"))
                                    } else "" !== this.viewBox && (this.renderer.setAttribute(N, "viewBox", this.viewBox), this.renderer.removeAttribute(N, "width"), this.renderer.removeAttribute(N, "height"));
                                this.stylize(), void 0 === this.svgAriaLabel && Y.firstChild.hasAttribute("aria-label") || this.doAria(this.svgAriaLabel || ""), this.cdr.markForCheck()
                            }
                        }
                        copyNgContentAttribute(_, N) {
                            const Y = _.attributes,
                                te = Y.length;
                            for (let Pe = 0; Pe < te; Pe += 1) {
                                const Z = Y.item(Pe);
                                if (Z && Z.name.startsWith("_ngcontent")) {
                                    this.setNgContentAttribute(N, Z.name);
                                    break
                                }
                            }
                        }
                        setNgContentAttribute(_, N) {
                            this.renderer.setAttribute(_, N, "");
                            const Y = _.childNodes.length;
                            for (let te = 0; te < Y; te += 1) {
                                const Pe = _.childNodes[te];
                                Pe instanceof Element && this.setNgContentAttribute(Pe, N)
                            }
                        }
                        stylize() {
                            if (this.helper.svg) {
                                const _ = this.element.nativeElement.firstChild;
                                !0 === this.stretch ? this.renderer.setAttribute(_, "preserveAspectRatio", "none") : !1 === this.stretch && this.renderer.removeAttribute(_, "preserveAspectRatio")
                            }
                        }
                        applyChanges(_) {
                            _.forEachRemovedItem(N => this.setStyle(N.key, null)), _.forEachAddedItem(N => this.setStyle(N.key, N.currentValue)), _.forEachChangedItem(N => this.setStyle(N.key, N.currentValue))
                        }
                        setStyle(_, N) {
                            const [Y, te] = _.split("."), Pe = this.element.nativeElement.firstChild;
                            null !== (N = null !== N && te ? `${N}${te}` : N) ? this.renderer.setStyle(Pe, Y, N) : this.renderer.removeStyle(Pe, Y)
                        }
                        setClass(_, N, Y) {
                            if (_) {
                                if (N) {
                                    const te = (Array.isArray(N) ? N : N.split(" ")).filter(Pe => Pe);
                                    for (const Pe of te) this.renderer.removeClass(_, Pe)
                                }
                                if (Y) {
                                    const te = (Array.isArray(Y) ? Y : Y.split(" ")).filter(Pe => Pe);
                                    for (const Pe of te) this.renderer.addClass(_, Pe)
                                }
                            }
                        }
                        doAria(_) {
                            const N = this.element.nativeElement.firstChild;
                            N && ("" === _ ? (this.renderer.setAttribute(N, "aria-hidden", "true"), this.renderer.removeAttribute(N, "aria-label")) : (this.renderer.removeAttribute(N, "aria-hidden"), this.renderer.setAttribute(N, "aria-label", _)))
                        }
                    }
                    return pe.\u0275fac = function(_) {
                        return new(_ || pe)(t.\u0275\ u0275directiveInject(t.ElementRef), t.\u0275\ u0275directiveInject(t.KeyValueDiffers), t.\u0275\ u0275directiveInject(t.Renderer2), t.\u0275\ u0275directiveInject(ce), t.\u0275\ u0275directiveInject(t.ChangeDetectorRef))
                    }, pe.\u0275cmp = t.\u0275\ u0275defineComponent({
                        type: pe,
                        selectors: [
                            ["svg-icon"]
                        ],
                        inputs: {
                            src: "src",
                            name: "name",
                            stretch: "stretch",
                            applyClass: "applyClass",
                            applyCss: "applyCss",
                            svgClass: "svgClass",
                            klass: ["class", "klass"],
                            viewBox: "viewBox",
                            svgAriaLabel: "svgAriaLabel",
                            svgStyle: "svgStyle"
                        },
                        features: [t.\u0275\ u0275NgOnChangesFeature],
                        ngContentSelectors: z,
                        decls: 1,
                        vars: 0,
                        template: function(_, N) {
                            1 & _ && (t.\u0275\ u0275projectionDef(), t.\u0275\ u0275projection(0))
                        },
                        encapsulation: 2
                    }), pe
                })(),
                Ne = (() => {
                    class pe {
                        static forRoot(_ = {}) {
                            return {
                                ngModule: pe,
                                providers: [Oe, _.loader || {
                                    provide: V,
                                    useClass: J
                                }]
                            }
                        }
                    }
                    return pe.\u0275fac = function(_) {
                        return new(_ || pe)
                    }, pe.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: pe
                    }), pe.\u0275inj = t.\u0275\ u0275defineInjector({
                        imports: [
                            [r.CommonModule]
                        ]
                    }), pe
                })()
        },
        4700: (y, T, a) => {
            a.d(T, {
                We: () => M,
                YC: () => Oe,
                dw: () => oe
            });
            var t = a(8125),
                r = a(3512),
                d = a(7579);
            a(8018);
            const p = new t.InjectionToken("recaptcha-language"),
                f = new t.InjectionToken("recaptcha-base-url"),
                v = new t.InjectionToken("recaptcha-nonce-tag"),
                M = (new t.InjectionToken("recaptcha-settings"), new t.InjectionToken("recaptcha-v3-site-key")),
                z_loadScript = function I(pe, k, _, N, Y) {
                    window.ng2recaptchaloaded = () => {
                        k(grecaptcha)
                    };
                    const te = document.createElement("script");
                    te.innerHTML = "", te.src = `${N || "https://www.google.com/recaptcha/api.js"}?render=${pe}&onload=ng2recaptchaloaded${_}`, Y && (te.nonce = Y), te.async = !0, te.defer = !0, document.head.appendChild(te)
                };
            let Oe = (() => {
                    class pe {
                        
                        constructor(_, N, Y, te, Pe, Z) {
                            this.onLoadComplete = ge => {
                                this.grecaptcha = ge, this.actionBacklog && this.actionBacklog.length > 0 && (this.actionBacklog.forEach(([be, Ee]) => this.executeActionWithSubject(be, Ee)), this.actionBacklog = void 0)
                            }, this.zone = _, this.isBrowser = (0, r.isPlatformBrowser)(Y), this.siteKey = N, this.nonce = Pe, this.language = Z, this.baseUrl = te, this.init()
                        }
                        get onExecute() {
                            return this.onExecuteSubject || (this.onExecuteSubject = new d.x, this.onExecuteObservable = this.onExecuteSubject.asObservable()), this.onExecuteObservable
                        }
                        get onExecuteError() {
                            return this.onExecuteErrorSubject || (this.onExecuteErrorSubject = new d.x, this.onExecuteErrorObservable = this.onExecuteErrorSubject.asObservable()), this.onExecuteErrorObservable
                        }
                        execute(_) {
                            const N = new d.x;
                            return this.isBrowser && (this.grecaptcha ? this.executeActionWithSubject(_, N) : (this.actionBacklog || (this.actionBacklog = []), this.actionBacklog.push([_, N]))), N.asObservable()
                        }
                        executeActionWithSubject(_, N) {
                            const Y = te => {
                                this.zone.run(() => {
                                    N.error(te), this.onExecuteErrorSubject && this.onExecuteErrorSubject.next({
                                        action: _,
                                        error: te
                                    })
                                })
                            };
                            this.zone.runOutsideAngular(() => {
                                try {
                                    this.grecaptcha.execute(this.siteKey, {
                                        action: _
                                    }).then(te => {
                                        this.zone.run(() => {
                                            N.next(te), N.complete(), this.onExecuteSubject && this.onExecuteSubject.next({
                                                action: _,
                                                token: te
                                            })
                                        })
                                    }, Y)
                                } catch (te) {
                                    Y(te)
                                }
                            })
                        }
                        init() {
                            this.isBrowser && ("grecaptcha" in window ? this.grecaptcha = grecaptcha : z_loadScript(this.siteKey, this.onLoadComplete, this.language ? "&hl=" + this.language : "", this.baseUrl, this.nonce))
                        }
                    }
                    return pe.\u0275fac = function(_) {
                        return new(_ || pe)(t.\u0275\ u0275inject(t.NgZone), t.\u0275\ u0275inject(M), t.\u0275\ u0275inject(t.PLATFORM_ID), t.\u0275\ u0275inject(f, 8), t.\u0275\ u0275inject(v, 8), t.\u0275\ u0275inject(p, 8))
                    }, pe.\u0275prov = t.\u0275\ u0275defineInjectable({
                        token: pe,
                        factory: pe.\u0275fac
                    }), pe
                })(),
                oe = (() => {
                    class pe {}
                    return pe.\u0275fac = function(_) {
                        return new(_ || pe)
                    }, pe.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: pe
                    }), pe.\u0275inj = t.\u0275\ u0275defineInjector({
                        providers: [Oe]
                    }), pe
                })()
        },
        7296: (y, T, a) => {
            a.d(T, {
                Ry: () => ct,
                Rq: () => Ve
            });
            var t = a(8125),
                r = a(9646),
                d = a(4968),
                O = a(5577),
                p = a(4004),
                f = a(8505),
                v = a(9300),
                A = a(4986),
                M = a(4482),
                I = a(5403),
                z = a(8421);
            const V = {
                leading: !0,
                trailing: !1
            };
            var ie = a(2805);

            function Oe(ue, xe, ae, Te) {
                const se = window && !!window.document && window.document.documentElement;
                let we = se && xe ? window : ae;
                if (ue && (we = ue && se && "string" == typeof ue ? function oe(ue, xe, ae) {
                        return (ae ? window.document : xe).querySelector(ue)
                    }(ue, ae.nativeElement, Te) : ue, !we)) throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");
                return we
            }

            function Me(ue) {
                return ue && !ue.firstChange
            }
            const pe = {
                    clientHeight: "clientHeight",
                    offsetHeight: "offsetHeight",
                    scrollHeight: "scrollHeight",
                    pageYOffset: "pageYOffset",
                    offsetTop: "offsetTop",
                    scrollTop: "scrollTop",
                    top: "top"
                },
                k = {
                    clientHeight: "clientWidth",
                    offsetHeight: "offsetWidth",
                    scrollHeight: "scrollWidth",
                    pageYOffset: "pageXOffset",
                    offsetTop: "offsetLeft",
                    scrollTop: "scrollLeft",
                    top: "left"
                };
            class _ {
                constructor(xe = !0) {
                    this.vertical = xe, this.propsMap = xe ? pe : k
                }
                clientHeightKey() {
                    return this.propsMap.clientHeight
                }
                offsetHeightKey() {
                    return this.propsMap.offsetHeight
                }
                scrollHeightKey() {
                    return this.propsMap.scrollHeight
                }
                pageYOffsetKey() {
                    return this.propsMap.pageYOffset
                }
                offsetTopKey() {
                    return this.propsMap.offsetTop
                }
                scrollTopKey() {
                    return this.propsMap.scrollTop
                }
                topKey() {
                    return this.propsMap.top
                }
            }

            function Pe(ue) {
                return ["Window", "global"].some(ae => Object.prototype.toString.call(ue).includes(ae))
            }

            function Z(ue, xe) {
                return ue ? xe.document.documentElement : null
            }

            function ge(ue, xe) {
                const ae = function et({
                    container: ue,
                    isWindow: xe,
                    axis: ae
                }) {
                    const {
                        offsetHeightKey: Te,
                        clientHeightKey: se
                    } = He(ae);
                    return rt(ue, xe, Te, se)
                }(xe);
                return xe.isWindow ? function be(ue, xe, ae) {
                    const {
                        axis: Te,
                        container: se,
                        isWindow: we
                    } = ae, {
                        offsetHeightKey: Ye,
                        clientHeightKey: Ze
                    } = He(Te), dt = ue + it(Z(we, se), Te, we), mt = rt(xe.nativeElement, we, Ye, Ze), L = function nt(ue, xe, ae) {
                        const Te = xe.topKey();
                        if (ue.getBoundingClientRect) return ue.getBoundingClientRect()[Te] + it(ue, xe, ae)
                    }(xe.nativeElement, Te, we) + mt;
                    return {
                        height: ue,
                        scrolled: dt,
                        totalToScroll: L,
                        isWindow: we
                    }
                }(ae, ue, xe) : function Ee(ue, xe, ae) {
                    const {
                        axis: Te,
                        container: se
                    } = ae;
                    return {
                        height: ue,
                        scrolled: se[Te.scrollTopKey()],
                        totalToScroll: se[Te.scrollHeightKey()],
                        isWindow: !1
                    }
                }(ae, 0, xe)
            }

            function He(ue) {
                return {
                    offsetHeightKey: ue.offsetHeightKey(),
                    clientHeightKey: ue.clientHeightKey()
                }
            }

            function rt(ue, xe, ae, Te) {
                if (isNaN(ue[ae])) {
                    const se = Z(xe, ue);
                    return se ? se[Te] : 0
                }
                return ue[ae]
            }

            function it(ue, xe, ae) {
                const Te = xe.pageYOffsetKey(),
                    se = xe.scrollTopKey(),
                    we = xe.offsetTopKey();
                return isNaN(window.pageYOffset) ? Z(ae, ue)[se] : ue.ownerDocument ? ue.ownerDocument.defaultView[Te] : ue[we]
            }

            function at(ue, xe = {
                down: 0,
                up: 0
            }, ae) {
                let Te, se;
                if (ue.totalToScroll <= 0) return !1;
                const we = ue.isWindow ? ue.scrolled : ue.height + ue.scrolled;
                return ae ? (Te = (ue.totalToScroll - we) / ue.totalToScroll, se = (xe ? .down ? xe.down : 0) / 10) : (Te = ue.scrolled / (ue.scrolled + (ue.totalToScroll - we)), se = (xe ? .up ? xe.up : 0) / 10), Te <= se
            }
            class Q {
                constructor({
                    totalToScroll: xe
                }) {
                    this.lastScrollPosition = 0, this.lastTotalToScroll = 0, this.totalToScroll = 0, this.triggered = {
                        down: 0,
                        up: 0
                    }, this.totalToScroll = xe
                }
                updateScrollPosition(xe) {
                    return this.lastScrollPosition = xe
                }
                updateTotalToScroll(xe) {
                    this.lastTotalToScroll !== xe && (this.lastTotalToScroll = this.totalToScroll, this.totalToScroll = xe)
                }
                updateScroll(xe, ae) {
                    this.updateScrollPosition(xe), this.updateTotalToScroll(ae)
                }
                updateTriggeredFlag(xe, ae) {
                    ae ? this.triggered.down = xe : this.triggered.up = xe
                }
                isTriggeredScroll(xe, ae) {
                    return ae ? this.triggered.down === xe : this.triggered.up === xe
                }
            }

            function me(ue) {
                const {
                    scrollContainer: xe,
                    scrollWindow: ae,
                    element: Te,
                    fromRoot: se
                } = ue, we = function Y({
                    windowElement: ue,
                    axis: xe
                }) {
                    return function te(ue, xe) {
                        const ae = ue.isWindow || xe && !xe.nativeElement ? xe : xe.nativeElement;
                        return { ...ue,
                            container: ae
                        }
                    }({
                        axis: xe,
                        isWindow: Pe(ue)
                    }, ue)
                }({
                    axis: new _(!ue.horizontal),
                    windowElement: Oe(xe, ae, Te, se)
                }), Ye = new Q({
                    totalToScroll: ge(Te, we)
                }), dt = {
                    up: ue.upDistance,
                    down: ue.downDistance
                };
                return function _e(ue) {
                    let xe = (0, d.R)(ue.container, "scroll");
                    return ue.throttle && (xe = xe.pipe(function ce(ue, xe = A.z, ae = V) {
                        const Te = (0, ie.H)(ue, xe);
                        return function J(ue, xe = V) {
                            return (0, M.e)((ae, Te) => {
                                const {
                                    leading: se,
                                    trailing: we
                                } = xe;
                                let Ye = !1,
                                    Ze = null,
                                    dt = null,
                                    mt = !1;
                                const L = () => {
                                        dt ? .unsubscribe(), dt = null, we && (he(), mt && Te.complete())
                                    },
                                    Re = () => {
                                        dt = null, mt && Te.complete()
                                    },
                                    D = De => dt = (0, z.Xf)(ue(De)).subscribe((0, I.x)(Te, L, Re)),
                                    he = () => {
                                        if (Ye) {
                                            Ye = !1;
                                            const De = Ze;
                                            Ze = null, Te.next(De), !mt && D(De)
                                        }
                                    };
                                ae.subscribe((0, I.x)(Te, De => {
                                    Ye = !0, Ze = De, (!dt || dt.closed) && (se ? he() : D(De))
                                }, () => {
                                    mt = !0, (!(we && Ye && dt) || dt.closed) && Te.complete()
                                }))
                            })
                        }(() => Te, ae)
                    }(ue.throttle, void 0, {
                        leading: !0,
                        trailing: !0
                    }))), xe
                }({
                    container: we.container,
                    throttle: ue.throttle
                }).pipe((0, O.z)(() => (0, r.of)(ge(Te, we))), (0, p.U)(mt => function Le(ue, xe, ae) {
                    const {
                        scrollDown: Te,
                        fire: se
                    } = function Pt(ue, xe, ae) {
                        const Te = function gt(ue, xe) {
                            return ue < xe.scrolled
                        }(ue, xe);
                        return {
                            fire: at(xe, ae, Te),
                            scrollDown: Te
                        }
                    }(ue, xe, ae);
                    return {
                        scrollDown: Te,
                        fire: se,
                        stats: xe
                    }
                }(Ye.lastScrollPosition, mt, dt)), (0, f.b)(({
                    stats: mt
                }) => Ye.updateScroll(mt.scrolled, mt.totalToScroll)), (0, v.h)(({
                    fire: mt,
                    scrollDown: L,
                    stats: {
                        totalToScroll: Re
                    }
                }) => function N(ue, xe, ae) {
                    return !!(ue && xe || !ae && xe)
                }(ue.alwaysCallback, mt, Ye.isTriggeredScroll(Re, L))), (0, f.b)(({
                    scrollDown: mt,
                    stats: {
                        totalToScroll: L
                    }
                }) => {
                    Ye.updateTriggeredFlag(L, mt)
                }), (0, p.U)(je))
            }

            function je(ue) {
                const {
                    scrollDown: xe,
                    stats: {
                        scrolled: ae
                    }
                } = ue;
                return {
                    type: xe ? "[NGX_ISE] DOWN" : "[NGX_ISE] UP",
                    payload: {
                        currentScrollPosition: ae
                    }
                }
            }
            let ct = (() => {
                    class ue {
                        constructor(ae, Te) {
                            this.element = ae, this.zone = Te, this.scrolled = new t.EventEmitter, this.scrolledUp = new t.EventEmitter, this.infiniteScrollDistance = 2, this.infiniteScrollUpDistance = 1.5, this.infiniteScrollThrottle = 150, this.infiniteScrollDisabled = !1, this.infiniteScrollContainer = null, this.scrollWindow = !0, this.immediateCheck = !1, this.horizontal = !1, this.alwaysCallback = !1, this.fromRoot = !1
                        }
                        ngAfterViewInit() {
                            this.infiniteScrollDisabled || this.setup()
                        }
                        ngOnChanges({
                            infiniteScrollContainer: ae,
                            infiniteScrollDisabled: Te,
                            infiniteScrollDistance: se
                        }) {
                            const we = Me(ae),
                                Ye = Me(Te),
                                Ze = Me(se),
                                dt = !Ye && !this.infiniteScrollDisabled || Ye && !Te.currentValue || Ze;
                            (we || Ye || Ze) && (this.destroyScroller(), dt && this.setup())
                        }
                        setup() {
                            (function Ne() {
                                return typeof window < "u"
                            })() && this.zone.runOutsideAngular(() => {
                                this.disposeScroller = me({
                                    fromRoot: this.fromRoot,
                                    alwaysCallback: this.alwaysCallback,
                                    disable: this.infiniteScrollDisabled,
                                    downDistance: this.infiniteScrollDistance,
                                    element: this.element,
                                    horizontal: this.horizontal,
                                    scrollContainer: this.infiniteScrollContainer,
                                    scrollWindow: this.scrollWindow,
                                    throttle: this.infiniteScrollThrottle,
                                    upDistance: this.infiniteScrollUpDistance
                                }).subscribe(ae => this.handleOnScroll(ae))
                            })
                        }
                        handleOnScroll({
                            type: ae,
                            payload: Te
                        }) {
                            const se = "[NGX_ISE] DOWN" === ae ? this.scrolled : this.scrolledUp;
                            (function xt(ue) {
                                return ue.observed ? ? ue.observers.length > 0
                            })(se) && this.zone.run(() => se.emit(Te))
                        }
                        ngOnDestroy() {
                            this.destroyScroller()
                        }
                        destroyScroller() {
                            this.disposeScroller && this.disposeScroller.unsubscribe()
                        }
                    }
                    return ue.\u0275fac = function(ae) {
                        return new(ae || ue)(t.\u0275\ u0275directiveInject(t.ElementRef), t.\u0275\ u0275directiveInject(t.NgZone))
                    }, ue.\u0275dir = t.\u0275\ u0275defineDirective({
                        type: ue,
                        selectors: [
                            ["", "infiniteScroll", ""],
                            ["", "infinite-scroll", ""],
                            ["", "data-infinite-scroll", ""]
                        ],
                        inputs: {
                            infiniteScrollDistance: "infiniteScrollDistance",
                            infiniteScrollUpDistance: "infiniteScrollUpDistance",
                            infiniteScrollThrottle: "infiniteScrollThrottle",
                            infiniteScrollDisabled: "infiniteScrollDisabled",
                            infiniteScrollContainer: "infiniteScrollContainer",
                            scrollWindow: "scrollWindow",
                            immediateCheck: "immediateCheck",
                            horizontal: "horizontal",
                            alwaysCallback: "alwaysCallback",
                            fromRoot: "fromRoot"
                        },
                        outputs: {
                            scrolled: "scrolled",
                            scrolledUp: "scrolledUp"
                        },
                        features: [t.\u0275\ u0275NgOnChangesFeature]
                    }), ue
                })(),
                Ve = (() => {
                    class ue {}
                    return ue.\u0275fac = function(ae) {
                        return new(ae || ue)
                    }, ue.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: ue
                    }), ue.\u0275inj = t.\u0275\ u0275defineInjector({}), ue
                })()
        },
        8909: (y, T, a) => {
            a.d(T, {
                LI: () => N,
                pm: () => _,
                wH: () => Y
            });
            var t = a(8125),
                r = a(9206),
                d = a(9300),
                O = a(4004),
                p = a(1135),
                f = a(3512);

            function v(te, Pe) {
                1 & te && t.\u0275\ u0275elementContainer(0)
            }

            function A(te, Pe) {
                if (1 & te && (t.\u0275\ u0275elementContainerStart(0), t.\u0275\ u0275text(1), t.\u0275\ u0275elementContainerEnd()), 2 & te) {
                    const Z = t.\u0275\ u0275nextContext(2).$implicit;
                    t.\u0275\ u0275advance(1), t.\u0275\ u0275textInterpolate(Z.label)
                }
            }
            const M = function(te) {
                    return {
                        "xng-breadcrumb-link-disabled": te
                    }
                },
                I = function(te, Pe, Z, ge, be, Ee) {
                    return {
                        $implicit: te,
                        info: Pe,
                        last: Z,
                        first: ge,
                        index: be,
                        count: Ee
                    }
                };

            function z(te, Pe) {
                if (1 & te && (t.\u0275\ u0275elementStart(0, "a", 7), t.\u0275\ u0275template(1, v, 1, 0, "ng-container", 8), t.\u0275\ u0275template(2, A, 2, 1, "ng-container", 9), t.\u0275\ u0275elementEnd()), 2 & te) {
                    const Z = t.\u0275\ u0275nextContext(),
                        ge = Z.$implicit,
                        be = Z.last,
                        Ee = Z.first,
                        He = Z.index,
                        et = Z.count,
                        rt = t.\u0275\ u0275nextContext();
                    t.\u0275\ u0275property("ngClass", t.\u0275\ u0275pureFunction1(10, M, ge.disable))("routerLink", ge.routeInterceptor ? ge.routeInterceptor(ge.routeLink, ge) : ge.routeLink)("queryParams", rt.preserveQueryParams ? ge.queryParams : void 0)("fragment", rt.preserveFragment ? ge.fragment : void 0)("target", rt.anchorTarget ? rt.anchorTarget : "_self"), t.\u0275\ u0275attribute("aria-disabled", ge.disable)("tabIndex", ge.disable ? -1 : 0), t.\u0275\ u0275advance(1), t.\u0275\ u0275property("ngTemplateOutlet", rt.itemTemplate)("ngTemplateOutletContext", t.\u0275\ u0275pureFunction6(12, I, ge.label, ge.info, be, Ee, He, et)), t.\u0275\ u0275advance(1), t.\u0275\ u0275property("ngIf", !rt.itemTemplate)
                }
            }

            function V(te, Pe) {
                1 & te && t.\u0275\ u0275elementContainer(0)
            }

            function J(te, Pe) {
                if (1 & te && (t.\u0275\ u0275elementContainerStart(0), t.\u0275\ u0275text(1), t.\u0275\ u0275elementContainerEnd()), 2 & te) {
                    const Z = t.\u0275\ u0275nextContext(2).$implicit;
                    t.\u0275\ u0275advance(1), t.\u0275\ u0275textInterpolate(Z.label)
                }
            }

            function ie(te, Pe) {
                if (1 & te && (t.\u0275\ u0275elementStart(0, "label", 10), t.\u0275\ u0275template(1, V, 1, 0, "ng-container", 8), t.\u0275\ u0275template(2, J, 2, 1, "ng-container", 9), t.\u0275\ u0275elementEnd()), 2 & te) {
                    const Z = t.\u0275\ u0275nextContext(),
                        ge = Z.$implicit,
                        be = Z.last,
                        Ee = Z.first,
                        He = Z.index,
                        et = Z.count,
                        rt = t.\u0275\ u0275nextContext();
                    t.\u0275\ u0275advance(1), t.\u0275\ u0275property("ngTemplateOutlet", rt.itemTemplate)("ngTemplateOutletContext", t.\u0275\ u0275pureFunction6(3, I, ge.label, ge.info, be, Ee, He, et)), t.\u0275\ u0275advance(1), t.\u0275\ u0275property("ngIf", !rt.itemTemplate)
                }
            }

            function ce(te, Pe) {
                1 & te && t.\u0275\ u0275elementContainer(0)
            }

            function ve(te, Pe) {
                if (1 & te && (t.\u0275\ u0275elementContainerStart(0), t.\u0275\ u0275text(1), t.\u0275\ u0275elementContainerEnd()), 2 & te) {
                    const Z = t.\u0275\ u0275nextContext(3);
                    t.\u0275\ u0275advance(1), t.\u0275\ u0275textInterpolate(Z.separator)
                }
            }

            function Oe(te, Pe) {
                if (1 & te && (t.\u0275\ u0275elementStart(0, "li", 11), t.\u0275\ u0275template(1, ce, 1, 0, "ng-container", 12), t.\u0275\ u0275template(2, ve, 2, 1, "ng-container", 9), t.\u0275\ u0275elementEnd()), 2 & te) {
                    const Z = t.\u0275\ u0275nextContext(2);
                    t.\u0275\ u0275advance(1), t.\u0275\ u0275property("ngTemplateOutlet", Z.separatorTemplate), t.\u0275\ u0275advance(1), t.\u0275\ u0275property("ngIf", !Z.separatorTemplate)
                }
            }

            function oe(te, Pe) {
                if (1 & te && (t.\u0275\ u0275elementContainerStart(0), t.\u0275\ u0275elementStart(1, "li", 3), t.\u0275\ u0275template(2, z, 3, 19, "a", 4), t.\u0275\ u0275template(3, ie, 3, 10, "label", 5), t.\u0275\ u0275elementEnd(), t.\u0275\ u0275template(4, Oe, 3, 2, "li", 6), t.\u0275\ u0275elementContainerEnd()), 2 & te) {
                    const Z = Pe.last;
                    t.\u0275\ u0275advance(2), t.\u0275\ u0275property("ngIf", !Z), t.\u0275\ u0275advance(1), t.\u0275\ u0275property("ngIf", Z), t.\u0275\ u0275advance(1), t.\u0275\ u0275property("ngIf", !Z)
                }
            }
            let Me = (() => {
                class te {}
                return te.\u0275fac = function(Z) {
                    return new(Z || te)
                }, te.\u0275dir = t.\u0275\ u0275defineDirective({
                    type: te,
                    selectors: [
                        ["", "xngBreadcrumbItem", ""]
                    ]
                }), te
            })();
            const k = te => te && Object.keys(te).length > 0;
            let _ = (() => {
                    class te {
                        constructor(Z, ge) {
                            this.activatedRoute = Z, this.router = ge, this.baseHref = "/", this.dynamicBreadcrumbStore = [], this.currentBreadcrumbs = [], this.previousBreadcrumbs = [], this.breadcrumbs = new p.X([]), this.breadcrumbs$ = this.breadcrumbs.asObservable(), this.detectRouteChanges()
                        }
                        detectRouteChanges() {
                            this.setupBreadcrumbs(this.activatedRoute.snapshot), this.router.events.pipe((0, d.h)(Z => Z instanceof r.GuardsCheckEnd)).subscribe(Z => {
                                Z instanceof r.GuardsCheckEnd && Z.shouldActivate && this.setupBreadcrumbs(Z.state.root)
                            })
                        }
                        setupBreadcrumbs(Z) {
                            this.previousBreadcrumbs = this.currentBreadcrumbs;
                            const ge = this.getRootBreadcrumb();
                            this.currentBreadcrumbs = ge ? [ge] : [], this.prepareBreadcrumbList(Z, this.baseHref)
                        }
                        getRootBreadcrumb() {
                            const Z = this.router.config.find(Ee => "" === Ee.path),
                                ge = this.extractObject(Z ? .data ? .breadcrumb),
                                be = this.getFromStore(ge.alias, "/");
                            if (k(ge) || k(be)) return { ...be,
                                ...ge,
                                routeLink: this.baseHref,
                                ...this.getQueryParamsFromPreviousList("/")
                            }
                        }
                        prepareBreadcrumbItem(Z, ge) {
                            const {
                                path: be,
                                breadcrumb: Ee
                            } = this.parseRouteData(Z.routeConfig), He = this.resolvePathSegment(be, Z), et = `${ge}${He}`, rt = this.getFromStore(Ee.alias, et), nt = this.extractLabel(rt ? .label || Ee ? .label, He);
                            let it = !1,
                                at = "";
                            return nt || (it = !0, at = He), { ...rt,
                                ...Ee,
                                label: it ? at : nt,
                                routeLink: et,
                                isAutoGeneratedLabel: it,
                                ...this.getQueryParamsFromPreviousList(et)
                            }
                        }
                        prepareBreadcrumbList(Z, ge) {
                            if (Z.routeConfig ? .path) {
                                const He = this.prepareBreadcrumbItem(Z, ge);
                                if (this.currentBreadcrumbs.push(He), Z.firstChild) return this.prepareBreadcrumbList(Z.firstChild, He.routeLink + "/")
                            } else if (Z.firstChild) return this.prepareBreadcrumbList(Z.firstChild, ge);
                            this.setQueryParamsForActiveBreadcrumb(this.currentBreadcrumbs[this.currentBreadcrumbs.length - 1], Z);
                            const Ee = this.currentBreadcrumbs.filter(He => !He.skip);
                            this.breadcrumbs.next(Ee)
                        }
                        getFromStore(Z, ge) {
                            return this.dynamicBreadcrumbStore.find(be => Z && Z === be.alias || ge && ge === be.routeLink || this.matchRegex(ge, be.routeRegex))
                        }
                        matchRegex(Z, ge) {
                            return Z.match(new RegExp(ge)) ? .[0] === Z
                        }
                        resolvePathSegment(Z, ge) {
                            return Z.includes(":") && Object.entries(ge.params).forEach(([be, Ee]) => {
                                Z = Z.replace(`:${be}`, `${Ee}`)
                            }), Z
                        }
                        getQueryParamsFromPreviousList(Z) {
                            const {
                                queryParams: ge,
                                fragment: be
                            } = this.previousBreadcrumbs.find(Ee => Ee.routeLink === Z) || {};
                            return {
                                queryParams: ge,
                                fragment: be
                            }
                        }
                        setQueryParamsForActiveBreadcrumb(Z, ge) {
                            if (Z) {
                                const {
                                    queryParams: be,
                                    fragment: Ee
                                } = ge;
                                Z.queryParams = be ? { ...be
                                } : void 0, Z.fragment = Ee
                            }
                        }
                        parseRouteData(Z) {
                            const {
                                path: ge,
                                data: be
                            } = Z;
                            return {
                                path: ge,
                                breadcrumb: this.mergeWithBaseChildData(Z, be ? .breadcrumb)
                            }
                        }
                        mergeWithBaseChildData(Z, ge) {
                            if (!Z) return this.extractObject(ge);
                            let be;
                            Z.loadChildren ? be = Z._loadedRoutes.find(He => "" === He.path) : Z.children && (be = Z.children.find(He => "" === He.path));
                            const Ee = be ? .data ? .breadcrumb;
                            return Ee ? this.mergeWithBaseChildData(be, { ...this.extractObject(ge),
                                ...this.extractObject(Ee)
                            }) : this.extractObject(ge)
                        }
                        set(Z, ge) {
                            const be = this.extractObject(ge);
                            let Ee;
                            Ee = Z.startsWith("@") ? ["alias", { ...be,
                                alias: Z.slice(1)
                            }] : Z.includes(":") ? ["routeRegex", { ...be,
                                routeRegex: this.buildRegex(Z)
                            }] : ["routeLink", { ...be,
                                routeLink: this.ensureLeadingSlash(Z)
                            }], Ee[1].isAutoGeneratedLabel = !1, this.updateStore(...Ee), this.updateCurrentBreadcrumbs(...Ee)
                        }
                        updateStore(Z, ge) {
                            const be = this.dynamicBreadcrumbStore.findIndex(Ee => ge[Z] === Ee[Z]);
                            be > -1 ? this.dynamicBreadcrumbStore[be] = { ...this.dynamicBreadcrumbStore[be],
                                ...ge
                            } : this.dynamicBreadcrumbStore.push({ ...ge
                            })
                        }
                        updateCurrentBreadcrumbs(Z, ge) {
                            const be = this.currentBreadcrumbs.findIndex(Ee => "routeRegex" === Z ? this.matchRegex(Ee.routeLink, ge[Z]) : ge[Z] === Ee[Z]);
                            if (be > -1) {
                                this.currentBreadcrumbs[be] = { ...this.currentBreadcrumbs[be],
                                    ...ge
                                };
                                const Ee = this.currentBreadcrumbs.filter(He => !He.skip);
                                this.breadcrumbs.next([...Ee])
                            }
                        }
                        buildRegex(Z) {
                            return this.ensureLeadingSlash(Z).replace(new RegExp("/:[^/]+", "g"), "/[^/]+")
                        }
                        ensureLeadingSlash(Z) {
                            return Z.startsWith("/") ? Z : `/${Z}`
                        }
                        extractLabel(Z, ge) {
                            const be = "object" == typeof Z ? Z.label : Z;
                            return "function" == typeof be ? be(ge) : be
                        }
                        extractObject(Z) {
                            return !Z || "string" != typeof Z && "function" != typeof Z ? Z || {} : {
                                label: Z
                            }
                        }
                    }
                    return te.\u0275fac = function(Z) {
                        return new(Z || te)(t.\u0275\ u0275inject(r.ActivatedRoute), t.\u0275\ u0275inject(r.Router))
                    }, te.\u0275prov = t.\u0275\ u0275defineInjectable({
                        token: te,
                        factory: te.\u0275fac,
                        providedIn: "root"
                    }), te
                })(),
                N = (() => {
                    class te {
                        constructor(Z, ge) {
                            this.breadcrumbService = Z, this._separator = "/", this.autoGenerate = !0, this.preserveQueryParams = !0, this.preserveFragment = !0, this.class = "", this.setupMessage = "not set up yet", this.someParameterValue = null, ge.params.subscribe(be => {
                                this.setupComponent(be.someParam)
                            })
                        }
                        set separator(Z) {
                            Z instanceof t.TemplateRef ? (this.separatorTemplate = Z, this._separator = void 0) : (this.separatorTemplate = void 0, this._separator = Z || "/")
                        }
                        get separator() {
                            return this._separator
                        }
                        setupComponent(Z) {
                            this.setupMessage = "set up at " + new Date, this.someParameterValue = Z
                        }
                        ngOnInit() {
                            this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$.pipe((0, O.U)(Z => Z.filter(ge => !!this.autoGenerate || !ge.isAutoGeneratedLabel).map(ge => {
                                const {
                                    routeInterceptor: be,
                                    routeLink: Ee
                                } = ge;
                                return { ...ge,
                                    routeLink: be ? .(Ee, ge) || Ee
                                }
                            })))
                        }
                    }
                    return te.\u0275fac = function(Z) {
                        return new(Z || te)(t.\u0275\ u0275directiveInject(_), t.\u0275\ u0275directiveInject(r.ActivatedRoute))
                    }, te.\u0275cmp = t.\u0275\ u0275defineComponent({
                        type: te,
                        selectors: [
                            ["xng-breadcrumb"]
                        ],
                        contentQueries: function(Z, ge, be) {
                            if (1 & Z && t.\u0275\ u0275contentQuery(be, Me, 5, t.TemplateRef), 2 & Z) {
                                let Ee;
                                t.\u0275\ u0275queryRefresh(Ee = t.\u0275\ u0275loadQuery()) && (ge.itemTemplate = Ee.first)
                            }
                        },
                        inputs: {
                            autoGenerate: "autoGenerate",
                            preserveQueryParams: "preserveQueryParams",
                            preserveFragment: "preserveFragment",
                            class: "class",
                            anchorTarget: "anchorTarget",
                            separator: "separator"
                        },
                        decls: 4,
                        vars: 4,
                        consts: [
                            ["aria-label", "breadcrumb", 1, "xng-breadcrumb-root", 3, "ngClass"],
                            [1, "xng-breadcrumb-list"],
                            [4, "ngFor", "ngForOf"],
                            [1, "xng-breadcrumb-item"],
                            ["class", "xng-breadcrumb-link", "role", "button", "rel", "noopener noreferrer", 3, "ngClass", "routerLink", "queryParams", "fragment", "target", 4, "ngIf"],
                            ["class", "xng-breadcrumb-trail", 4, "ngIf"],
                            ["class", "xng-breadcrumb-separator", "aria-hidden", "true", 4, "ngIf"],
                            ["role", "button", "rel", "noopener noreferrer", 1, "xng-breadcrumb-link", 3, "ngClass", "routerLink", "queryParams", "fragment", "target"],
                            [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
                            [4, "ngIf"],
                            [1, "xng-breadcrumb-trail"],
                            ["aria-hidden", "true", 1, "xng-breadcrumb-separator"],
                            [4, "ngTemplateOutlet"]
                        ],
                        template: function(Z, ge) {
                            1 & Z && (t.\u0275\ u0275elementStart(0, "nav", 0)(1, "ol", 1), t.\u0275\ u0275template(2, oe, 5, 3, "ng-container", 2), t.\u0275\ u0275pipe(3, "async"), t.\u0275\ u0275elementEnd()()), 2 & Z && (t.\u0275\ u0275property("ngClass", ge.class), t.\u0275\ u0275advance(2), t.\u0275\ u0275property("ngForOf", t.\u0275\ u0275pipeBind1(3, 2, ge.breadcrumbs$)))
                        },
                        dependencies: [f.NgClass, f.NgForOf, f.NgIf, f.NgTemplateOutlet, r.RouterLinkWithHref, f.AsyncPipe],
                        styles: [".xng-breadcrumb-root{margin:0;color:#0009}.xng-breadcrumb-list{display:flex;align-items:center;flex-wrap:wrap;margin:0;padding:0}.xng-breadcrumb-item{list-style:none}.xng-breadcrumb-trail{display:flex;align-items:center;color:#000000e6}.xng-breadcrumb-link{display:flex;align-items:center;white-space:nowrap;color:inherit;text-decoration:none;transition:-webkit-text-decoration .3s;transition:text-decoration .3s;transition:text-decoration .3s,-webkit-text-decoration .3s;cursor:pointer}.xng-breadcrumb-link:hover{text-decoration:underline}.xng-breadcrumb-link-disabled{pointer-events:none;cursor:disabled}.xng-breadcrumb-separator{display:flex;-webkit-user-select:none;user-select:none;margin-left:8px;margin-right:8px}\n"],
                        encapsulation: 2
                    }), te
                })(),
                Y = (() => {
                    class te {}
                    return te.\u0275fac = function(Z) {
                        return new(Z || te)
                    }, te.\u0275mod = t.\u0275\ u0275defineNgModule({
                        type: te
                    }), te.\u0275inj = t.\u0275\ u0275defineInjector({
                        imports: [f.CommonModule, r.RouterModule]
                    }), te
                })()
        },
        5861: (y, T, a) => {
            function t(d, O, p, f, v, A, M) {
                try {
                    var I = d[A](M),
                        z = I.value
                } catch (V) {
                    return void p(V)
                }
                I.done ? O(z) : Promise.resolve(z).then(f, v)
            }

            function r(d) {
                return function() {
                    var O = this,
                        p = arguments;
                    return new Promise(function(f, v) {
                        var A = d.apply(O, p);

                        function M(z) {
                            t(A, f, v, M, I, "next", z)
                        }

                        function I(z) {
                            t(A, f, v, M, I, "throw", z)
                        }
                        M(void 0)
                    })
                }
            }
            a.d(T, {
                Z: () => r
            })
        }
    }
]);