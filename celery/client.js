const celery = require('celery-node');
celery.config.TASK_PROTOCOL = 1;

const client = celery.createClient(
    "amqp://",
    "amqp://"
);

const task = client.createTask("tasks.add");
const result = task.applyAsync([1, 2]);
result.get().then(data => {
    console.log(data);
    client.disconnect();
});