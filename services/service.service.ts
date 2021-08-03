import { Crypter } from "../crypter";
import { CryptDto } from "./dto/crypt.dto";

export class ServiceService {

    constructor() {
      
    }


    public async getCaptchaCrypt(dto: CryptDto) {
        let decryptionKey = dto.funData.decryptionKey;
        let guesses = dto.guesses;
        const imgEnc = await (await fetch(dto.imgUrl)).json();
        const img = Crypter.decrypt(imgEnc, decryptionKey);
        let clockwise = await this.fetchNewSolution(img, dto.publicKey, (guesses.length+1));
        guesses.push(parseFloat(clockwise.answer).toFixed(2));
        let answer = Crypter.encrypt(guesses.join(','), dto.funData.sessionToken);
        var test = JSON.stringify({
          answer,
          guesses
        });
        return test;
  }

    async fetchNewSolution(image: string, publicKey: String, imageNumber: number) {
    const req = await fetch('http://api2.de-ltd.co.uk/api/fcapi/image.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: process.env.newSolverAPIKEY,
        action: "solve",
        user: "senssl",
        pass: "jqzUAM0113",
        image: image,
        captchaId: publicKey,
        imgNumber: imageNumber,
        game: 1,
        variant: "wbgs"
      }),
    });
  
    try {
      let data = await req.json();
      return data;
    } catch (e) {
      console.log(e);
      this.fetchNewSolution(image, publicKey, imageNumber);
    }
  }
  }