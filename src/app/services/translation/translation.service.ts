import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  static languages = ['ru']

  static language = 'ru'

  private static dictionary: {[key: string]: TranslationSet} = {
    ru:{
      language: 'ru',
      values: {
        WAITING: 'Ожидает отправки',
        NOT_REQUESTED: '-',
        PROCESSING: 'Обрабатывается',
        PROCESSED: 'В процессе рассылки',
        SENT: 'Доставлено',
        FATAL: 'Ошибка сервера',
        EXPIRED: 'Отложено',
        NOT_SENT: 'Не отправлено'
      }
    }
  }

  constructor() { }

 static translate(key: string): any {
    if (this.dictionary[this.language] != null) {
      return this.dictionary[this.language].values[key]
    }
  }
}

export class TranslationSet {
  public language: string
  public values: { [key: string]: string } = {}
}
