FROM fusuf/whatsasena:latest

RUN git clone https://github.com/SAFEER7/SUPERSMARTBOT_v2 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN git clone https://github.com/SAFEER7/edia 


CMD ["node", "bot.js"]
