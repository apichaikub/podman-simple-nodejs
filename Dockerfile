FROM node:20-alpine

# ตั้ง working directory
WORKDIR /app

# คัดลอกไฟล์ server.js เข้า container
COPY server.js .

# เปิด port 4000
EXPOSE 4000

# คำสั่งเริ่มต้นเมื่อ container เริ่มทำงาน
CMD ["node", "server.js"]
