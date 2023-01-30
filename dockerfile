# Use an official Python runtime as the parent image
FROM python:3.8-slim-buster

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install the required packages
RUN pip install --no-cache-dir -r requirements.txt


# Set environment variables
ENV FLASK_APP=backend.py

# Expose port 5000 for Flask to listen on
EXPOSE 5000

# Define the command to run the application
CMD ["flask", "run", "--host=0.0.0.0"]
