import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# Assuming you've read the data into a pandas DataFrame called 'df'
# Example: df = pd.read_csv('path_to_your_data.csv')

# Convert 'result' column to one-hot encoding
df = pd.get_dummies(df, columns=['result'])

# Split the data into training and testing sets
X = df.drop('market_value', axis=1)  # Features (all columns except market value)
y = df['market_value']  # Target variable
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a linear regression model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Evaluate the model's performance using Mean Squared Error (MSE)
mse = mean_squared_error(y_test, y_pred)
print(f"Mean Squared Error: {mse}")

# Now, you can use the trained model to predict market value for any player
# Example: predicted_value = model.predict(new_data)
