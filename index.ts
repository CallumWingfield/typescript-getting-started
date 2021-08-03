import express from 'express';
import path from 'path';
import { ServiceModule } from './services/service.module';
import { ServiceService } from './services/service.service';
import { ServiceController } from './services/service.controller';
import { IFunData } from './services/dto/crypt.dto';
import { CryptDto } from './services/dto/crypt.dto';
import { isFunctionDeclaration } from 'typescript';
import { publicDecrypt } from 'crypto';
import { type } from 'os';


const PORT = process.env.PORT || 5000;
const app = express();
var bodyParser = require('body-parser')

express()
  .use(express.static(path.join(__dirname, '../public')))
  .set('views', path.join(__dirname, '../views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

  var urlencodedParser = bodyParser.urlencoded({ extended: false })

  app.get('/crypt',urlencodedParser, async (req, res) => {
    var crypt = new CryptDto();
    crypt.funData = {
        imgUrls: [],
        token: "",
        analyticsTier: 2,
        decryptionKey: req.body.decryptionKey,
        gameToken: "",
        sessionToken: req.body.sessionToken,
        sid: "",
    };
    crypt.imgUrl = req.body.imgUrl;
    crypt.publicKey = req.body.publicKey;
    crypt.guesses = JSON.parse(req.body.guesses);

    res.send((await ServiceController.prototype.login(crypt)).toString());
});

app.get('/test',urlencodedParser, async (req, res) => {
    var crypt = new CryptDto();
    crypt.guesses = JSON.parse(req.body.guesses);

    var test =  JSON.parse(req.body.guesses);
    res.send(crypt.guesses);
});