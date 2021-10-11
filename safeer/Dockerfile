FROM ravindu01manoj/sewqueen:lovegift

RUN git clone https://github.com/SAFEER7/SUPERSMARTBOT_v2 /root/WhatsAsenaDuplicated

WORKDIR /root/WhatsAsenaDuplicated/

ENV TZ=Europe/Istanbul

RUN npm install supervisor -g

RUN yarn install --no-audit

CMD ["node", "bot.js"]


