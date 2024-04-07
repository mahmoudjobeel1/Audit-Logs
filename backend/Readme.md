# Audit Logs Backend

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Instalog provides a robust backend solution for logging various user activities within applications. This system enables IT administrators to monitor their team's actions such as logins, incident creations, and deletions.

## Features

- **Activity Logging**: Capture events such as logins, incident creations, and deletions.
- **Pagination**: Navigate through large sets of logged events efficiently.
- **Search**: Search for events based on actor, target, action, or occurrence time.
- **Filters**: Filter events based on actor ID, target ID, action ID, name, or occurrence time.

## Tech Stack

- **Language**: TypeScript
- **ORM**: Prisma
- **Framework**: Fastify
- **Database**: PostgreSQL
- **Deployment**: Render

## Getting Started

To set up the Instalog backend locally, follow these steps:

1. Clone this repository: `git clone https://github.com/mahmoudjobeel1/Audit-Logs/tree/main/backend`
2. Install dependencies: `npm install`
3. Set up your PostgreSQL database and configure the connection in `.env` file.
4. Run the migrations: `npx prisma migrate dev`
5. Start the server: `npm start`

## API Endpoints

The following endpoints are available:

- `POST /create_event`: Create a new event.

  Example:

  ```http
  POST https://audit-logs-backend.onrender.com/create_event
  Content-Type: application/json

  {
    "object": "Event",
    "actorId": "dbc123",
    "actorName": "Ali",
    "group": "GUC",
    "targetId": "xyz789",
    "targetName": "Resource Name",
    "location": "192.168.1.1",
    "metadata": {
      "device": "laptop"
    },
    "action": {
      "create": {
        "object": "Event_Action",
        "name": "user.success"
      }
    }
  }

  ```

- `GET /events`: Retrieve events with optional pagination, search, and filtering options.

## GET /events

Retrieve events with optional pagination, search, and filtering options.

### Example

```http
GET https://audit-logs-backend.onrender.com/events?actorId=dbc123&targetId=xyz789&actionName=user.success
```
#### Parameters
- actorId: Filter events by actor ID.
- targetId: Filter events by target ID.
- actionName: Filter events by action name.
- occurredAtStart: Filter events occurred after this date 
- occurredAtEnd: Filter events occurred before this date 
- searchText: Search for events containing this text.
- limit: Limit the number of events returned.
- lastEventId: Get events after this event ID (for pagination). 

