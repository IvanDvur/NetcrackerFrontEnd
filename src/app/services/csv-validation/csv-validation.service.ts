import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class CsvValidationService {

  messageService: MessageService

  constructor(private http: HttpClient) {

  }

  validateCSV(csvFile: File): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const fileData = event.target?.result as string;
        const lines = fileData.split('\n');

        // Проверка наличия заголовка и обязательных полей
        if (lines.length < 2) {
          this.messageService.add({
            severity: 'error',
            summary: 'Ошибка',
            detail: 'CSV файл пуст или не содержит заголовка и данных.'
          });
          console.error('CSV файл пуст или не содержит заголовка и данных.');
          resolve(false);
          return;
        }

        const header = lines[0].split(',');
        const phoneNumberIndex = header.indexOf('PHONE_NUMBER');
        const emailIndex = header.indexOf('EMAIL');

        if ((phoneNumberIndex === -1 && emailIndex === -1)) {
          this.messageService.add({
            severity: 'error',
            summary: 'Ошибка',
            detail: 'CSV файл не содержит хотя бы одного обязательного поля "PHONE_NUMBER" или "EMAIL"'
          });
          console.error('CSV файл не содержит хотя бы одного обязательного поля "PHONE_NUMBER" или "EMAIL"');
          resolve(false);
          return;
        }

        const phoneNumberRegex = /^\+?\d{1,3}-?\d{3}-?\d{3}-?\d{2}-?\d{2}$/;
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        // Проверка каждой строки на наличие данных в обязательных полях и их формат
        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(',');

          if (values.length < header.length) {
            this.messageService.add({
              severity: 'error',
              summary: 'Ошибка',
              detail: `Строка ${i + 1} не содержит всех полей.`
            });
            console.error(`Строка ${i + 1} не содержит всех полей.`);
            resolve(false);
            return;
          }

          if (phoneNumberIndex !== -1) {
            const phoneNumber = values[phoneNumberIndex].trim();
            if (phoneNumber && !phoneNumberRegex.test(phoneNumber)) {
              this.messageService.add({
                severity: 'error',
                summary: 'Ошибка',
                detail: `Неверный формат поля PHONE_NUMBER в строке ${i + 1}.`
              });
              console.error(`Неверный формат поля PHONE_NUMBER в строке ${i + 1}.`);
              resolve(false);
              return;
            }
          }

          if (emailIndex !== -1) {
            const email = values[emailIndex].trim();
            if (email && !emailRegex.test(email)) {
              this.messageService.add({
                severity: 'error',
                summary: 'Ошибка',
                detail: `Неверный формат поля EMAIL в строке ${i + 1}.`
              });
              console.error(`Неверный формат поля EMAIL в строке ${i + 1}.`);
              resolve(false);
              return;
            }
          }
        }

        resolve(true);
      };

      reader.onerror = () => {
        console.error('Ошибка чтения CSV файла.');
        resolve(false);
      };

      reader.readAsText(csvFile);
    });
  }

  // validateCSV(csvFile: File): Promise<boolean> {
  //   return new Promise<boolean>((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = (event: ProgressEvent<FileReader>) => {
  //       const fileData = event.target?.result as string;
  //       const lines = fileData.split('\n');
  //
  //       // Проверка наличия заголовка и обязательных полей
  //       if (lines.length < 2) {
  //         console.error('CSV файл пуст или не содержит заголовка и данных.');
  //         resolve(false);
  //         return;
  //       }
  //
  //       const header = lines[0].split(',');
  //       const phoneNumberIndex = header.indexOf('PHONE_NUMBER');
  //       const emailIndex = header.indexOf('EMAIL');
  //
  //       if (phoneNumberIndex === -1 || emailIndex === -1) {
  //         console.error('CSV файл не содержит обязательных полей "PHONE_NUMBER" и/или "EMAIL".');
  //         resolve(false);
  //         return;
  //       }
  //
  //       const phoneNumberRegex = /^\+?\d{1,3}-?\d{3}-?\d{3}-?\d{2}-?\d{2}$/;
  //       const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  //
  //       // Проверка каждой строки на наличие данных в обязательных полях и их формат
  //       for (let i = 1; i < lines.length; i++) {
  //         const line = lines[i].trim(); // Удаление лишних пробелов и символов перевода строки
  //
  //         if (!line) {
  //           console.error(`Строка ${i + 1} пустая.`);
  //           resolve(false);
  //           return;
  //         }
  //
  //         const values = line.split(',');
  //
  //         if (values.length < header.length) {
  //           console.error(`Строка ${i + 1} не содержит всех полей.`);
  //           resolve(false);
  //           return;
  //         }
  //
  //         const phoneNumber = values[phoneNumberIndex].trim();
  //         const email = values[emailIndex].trim();
  //
  //         if (!phoneNumber || !email) {
  //           console.error(`Строка ${i + 1} не содержит значения в обязательных полях.`);
  //           resolve(false);
  //           return;
  //         }
  //
  //         if (!phoneNumberRegex.test(phoneNumber)) {
  //           console.error(`Неверный формат поля PHONE_NUMBER в строке ${i + 1}.`);
  //           resolve(false);
  //           return;
  //         }
  //
  //         if (!emailRegex.test(email)) {
  //           console.error(`Неверный формат поля EMAIL в строке ${i + 1}.`);
  //           resolve(false);
  //           return;
  //         }
  //       }
  //
  //       resolve(true);
  //     };
  //
  //     reader.onerror = () => {
  //       console.error('Ошибка чтения CSV файла.');
  //       resolve(false);
  //     };
  //
  //     reader.readAsText(csvFile);
  //   });
  // }
}
