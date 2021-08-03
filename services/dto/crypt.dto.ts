import {
    IsNotEmpty,
    IsOptional,
    IsString,
    Min,
    IsEmail,
    MinLength,
    IsArray,
    IsNumber,
  } from 'class-validator';
  
  export class CryptDto {
  
    funData: IFunData;
  
    @IsString()
    imgUrl: string;
  
    @IsString()
    publicKey: string;
  
    guesses: string[];
  
  }

  export interface IFunData {
    imgUrls: string[];
    token: string;
    gameToken: string;
    sessionToken: string;
    sid: string;
    analyticsTier: number;
    decryptionKey: string;
  }
  