import Fastify from 'fastify';
import axios from 'axios';

const fastify = Fastify({
    logger: false
  });

const api_url = "https://panel.danbot.host/api/client";
const route_head = "/api/client";
const port = 3000;

// Account

fastify.get(`${route_head}/account`, async (request, reply) =>{
    let res = await axios.get(`${api_url}/account`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.get(`${route_head}/account/two-factor`, async (request, reply) =>{
    let res = await axios.get(`${api_url}/account/two-factor`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/two-factor`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/two-factor`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "code": request.body.code
        }
    })
    reply.send(res.data)
})

fastify.delete(`${route_head}/account/two-factor`, async (request: any, reply) =>{
    let res = await axios.delete(`${api_url}/account/two-factor`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        data: {
            "password": request.body.password
        }
    })
    reply.send(res.data)
})

fastify.put(`${route_head}/account/email`, async (request: any, reply) =>{
    let res = await axios.put(`${api_url}/account/email`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        data: {
            "email": request.body.email,
            "password": request.body.password
        }
    })
    reply.send(res.data)
})

fastify.put(`${route_head}/account/password`, async (request: any, reply) =>{
    let res = await axios.put(`${api_url}/account/password`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        data: {
            "current_password": request.body.current_password,
            "password": request.body.password
        }
    })
    reply.send(res.data)
})

fastify.get(`${route_head}/account/api-keys`, async (request: any, reply) =>{
    let res = await axios.get(`${api_url}/account/api-keys`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/api-keys`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/api-keys`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body:{
            "description": request.body.description,
            "allowed_ips": request.body.allowed_ips
        }
    })
    reply.send(res.data)
})

fastify.delete(`${route_head}/account/api-keys/:identifier`, async (request: any, reply) =>{
    let res = await axios.delete(`${api_url}/account/api-keys/${request.params.identifier}`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

// Server

fastify.get(`${route_head}/account/servers/:serverID/databases`, async (request: any, reply) =>{
    let res = await axios.get(`${api_url}/account/servers/${request.params.serverID}/databases`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/databases`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/databases`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "database": request.body.database,
            "remote": request.body.remote
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/databases/:databaseID/rotate-password`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/databases/${request.params.databaseID}/rotate-password`, {
        headers: {
            "Authorization": request.headers.authorization
        },
    })
    reply.send(res.data)
})

fastify.delete(`${route_head}/account/servers/:serverID/databases/:databaseID`, async (request: any, reply) =>{
    let res = await axios.delete(`${api_url}/account/servers/${request.params.serverID}/databases/${request.params.databaseID}`, {
        headers: {
            "Authorization": request.headers.authorization
        },
    })
    reply.send(res.data)
})

fastify.get(`${route_head}/account/servers/:serverID/files/:list?`, async (request: any, reply) =>{
    let res = await axios.delete(`${api_url}/account/servers/${request.params.serverID}/files/${request.params.list}`, {
        headers: {
            "Authorization": request.headers.authorization
        },
    })
    reply.send(res.data)
})

fastify.get(`${route_head}/account/servers/:serverID/files/:contents?`, async (request: any, reply) =>{
    let res = await axios.get(`${api_url}/account/servers/${request.params.serverID}/files/${request.params.contents}`, {
        headers: {
            "Authorization": request.headers.authorization
        },
    })
    reply.send(res.data)
})


fastify.get(`${route_head}/account/servers/:serverID/files/:download?`, async (request: any, reply) =>{
    let res = await axios.get(`${api_url}/account/servers/${request.params.serverID}/files/${request.params.download}`, {
        headers: {
            "Authorization": request.headers.authorization
        },
    })
    reply.send(res.data)
})

fastify.put(`${route_head}/account/servers/:serverID/files/rename`, async (request: any, reply) =>{
    let res = await axios.put(`${api_url}/account/servers/${request.params.serverID}/files/rename`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "root": request.body.root,
            "files": request.body.files
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/files/copy`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/files/copy`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "location": request.body.location
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/files/:write?`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/files/${request.params.write}`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: request.body
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/files/compress`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/files/compress`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "root": request.body.root,
            "files": request.body.files
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/files/decompress`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/files/decompress`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "root": request.body.root,
            "file": request.body.file
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/files/delete`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/files/delete`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "root": request.body.root,
            "files": request.body.files
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/files/create-folder`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/files/create-folder`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "root": request.body.root,
            "name": request.body.name
        }
    })
    reply.send(res.data)
})

fastify.get(`${route_head}/account/servers/:serverID/files/upload`, async (request: any, reply) =>{
    let res = await axios.get(`${api_url}/account/servers/${request.params.serverID}/files/upload`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

// Schedules

fastify.get(`${route_head}/account/servers/:serverID/schedules`, async (request: any, reply) =>{
    let res = await axios.get(`${api_url}/account/servers/${request.params.serverID}/schedules`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/schedules`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/schedules`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "name": request.body.name,
            "minute": request.body.minute,
            "hour": request.body.hour,
            "day_of_month": request.body.day_of_month,
            "day_of_week": request.body.day_of_week,
            "is_active": request.body.is_active
        }
    })
    reply.send(res.data)
})

fastify.get(`${route_head}/account/servers/:serverID/schedules/:scheduleID`, async (request: any, reply) =>{
    let res = await axios.get(`${api_url}/account/servers/${request.params.serverID}/schedules/${request.params.scheduleID}`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/schedules/:scheduleID`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/schedules/${request.params.scheduleID}`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "name": request.body.name,
            "minute": request.body.minute,
            "hour": request.body.hour,
            "day_of_month": request.body.day_of_month,
            "day_of_week": request.body.day_of_week,
            "is_active": request.body.is_active
        }
    })
    reply.send(res.data)
})

fastify.delete(`${route_head}/account/servers/:serverID/schedules/:scheduleID`, async (request: any, reply) =>{
    let res = await axios.delete(`${api_url}/account/servers/${request.params.serverID}/schedules/${request.params.scheduleID}`, {
        headers: {
            "Authorization": request.headers.authorization
        },
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/schedules/:scheduleID/task`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/schedules/${request.params.scheduleID}/task`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "action": request.body.action,
            "payload": request.body.payload,
            "time_offset": request.body.time_offset
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/schedules/:scheduleID/task/:taskID`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/schedules/${request.params.scheduleID}/task/${request.params.taskID}`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "action": request.body.action,
            "payload": request.body.payload,
            "time_offset": request.body.time_offset
        }
    })
    reply.send(res.data)
})

fastify.delete(`${route_head}/account/servers/:serverID/schedules/:scheduleID/task/:taskID`, async (request: any, reply) =>{
    let res = await axios.delete(`${api_url}/account/servers/${request.params.serverID}/schedules/${request.params.scheduleID}/task/${request.params.taskID}`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

// Network

fastify.get(`${route_head}/account/servers/:serverID/network/allocations`, async (request: any, reply) =>{
    let res = await axios.get(`${api_url}/account/servers/${request.params.serverID}/network/allocations`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/network/allocations`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/network/allocations`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/network/allocations/:allocID`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/network/allocations/${request.params.allocID}`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "notes": request.body.notes
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/network/allocations/:allocID/primary`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/network/allocations/${request.params.allocID}/primary`, {
        headers: {
            "Authorization": request.headers.authorization
        },
    })
    reply.send(res.data)
})

fastify.delete(`${route_head}/account/servers/:serverID/network/allocations/:allocID`, async (request: any, reply) =>{
    let res = await axios.delete(`${api_url}/account/servers/${request.params.serverID}/network/allocations/${request.params.allocID}`, {
        headers: {
            "Authorization": request.headers.authorization
        },
    })
    reply.send(res.data)
})

// Users

fastify.get(`${route_head}/account/servers/:serverID/users`, async (request: any, reply) =>{
    let res = await axios.get(`${api_url}/account/servers/${request.params.serverID}/users`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/users`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/users`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "email": request.body.email,
            "permissions": request.body.permissions
        }
    })
    reply.send(res.data)
})


fastify.get(`${route_head}/account/servers/:serverID/users/:userID`, async (request: any, reply) =>{
    let res = await axios.get(`${api_url}/account/servers/${request.params.serverID}/users/${request.params.userID}`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/users/:userID`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/users/${request.params.userID}`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "permissions": request.body.permissions
        }
    })
    reply.send(res.data)
})

fastify.delete(`${route_head}/account/servers/:serverID/users/:userID`, async (request: any, reply) =>{
    let res = await axios.delete(`${api_url}/account/servers/${request.params.serverID}/users/${request.params.userID}`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

// Backups

fastify.get(`${route_head}/account/servers/:serverID/backups`, async (request: any, reply) =>{
    let res = await axios.get(`${api_url}/account/servers/${request.params.serverID}/backups`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/backups`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/backups`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.get(`${route_head}/account/servers/:serverID/backups/:backupID`, async (request: any, reply) =>{
    let res = await axios.get(`${api_url}/account/servers/${request.params.serverID}/backups/${request.params.backupID}`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.get(`${route_head}/account/servers/:serverID/backups/:backupID/download`, async (request: any, reply) =>{
    let res = await axios.get(`${api_url}/account/servers/${request.params.serverID}/backups/${request.params.backupID}/download`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.delete(`${route_head}/account/servers/:serverID/backups/:backupID`, async (request: any, reply) =>{
    let res = await axios.delete(`${api_url}/account/servers/${request.params.serverID}/backups/${request.params.backupID}`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

// Startup

fastify.get(`${route_head}/account/servers/:serverID/startup`, async (request: any, reply) =>{
    let res = await axios.get(`${api_url}/account/servers/${request.params.serverID}/startup`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/startup/variable`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/startup/variable`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "key": request.body.key,
            "value": request.body.value
        }
    })
    reply.send(res.data)
})

// Settings

fastify.post(`${route_head}/account/servers/:serverID/settings/rename`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/settings/rename`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "name": request.body.name
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/settings/reinstall`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/settings/reinstall`, {
        headers: {
            "Authorization": request.headers.authorization
        },
    })
    reply.send(res.data)
})

// Misc

fastify.get(`${route_head}/account/servers/:serverID`, async (request: any, reply) =>{
    let res = await axios.get(`${api_url}/account/servers/${request.params.serverID}`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.get(`${route_head}/account/servers/:serverID/websocket`, async (request: any, reply) =>{
    let res = await axios.get(`${api_url}/account/servers/${request.params.serverID}/websocket`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.get(`${route_head}/account/servers/:serverID/resources`, async (request: any, reply) =>{
    let res = await axios.get(`${api_url}/account/servers/${request.params.serverID}/resources`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/command`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/command`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "command": request.body.command
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/account/servers/:serverID/power`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/account/servers/${request.params.serverID}/power`, {
        headers: {
            "Authorization": request.headers.authorization
        },
        body: {
            "command": request.body.signal
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.post(`${route_head}/permissions`, async (request: any, reply) =>{
    let res = await axios.post(`${api_url}/permissions`, {
        headers: {
            "Authorization": request.headers.authorization
        }
    })
    reply.send(res.data)
})

fastify.get(`/`, async (request, reply) =>{
    reply.send({ idfk: "man"})
})

fastify.listen({ host: "0.0.0.0", port: port }, (err, address) => {
if (err) throw err
    console.log(`Server is now listening on ${address}`)
})