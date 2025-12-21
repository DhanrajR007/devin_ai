import Redis from "ioredis";

const redisClient = new Redis({
  host: "redis-17414.crce182.ap-south-1-1.ec2.cloud.redislabs.com",
  port: 17414,
  password: "1asG7tSgeQoq2IOLDuKXgD8YLXvXlex5",
});

redisClient.on("connect", () => {
  console.log("Redis connected");
});
export default redisClient;
