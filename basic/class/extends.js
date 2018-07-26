/*

Extends dalam javascript class berarti menambahkan attribute dan method yang dimiliki oleh class lain dan diterapkan pada class saat ini. Contoh pada baris code dibawah, class HtmlDeveloper dan class ReactDeveloper menambahkan Developer ke dalam class mereka, sehingga baik class HtmlDeveloper dan ReactDeveloper akan memiliki attribute first name dan last name serta get name. Developer dapat dianalogikan sebagai orang tua, dan react + html developer merupakan anak dari Developer, sehingga apa pun yang dimiliki oleh developer akan menjadi milik react + html, dan TIDAK DISARANKAN untuk developer memiliki attribute atau method yang dimiliki oleh sang anak. 

Constructor sudah dibahas pada file learn-constructor, namun yang uniknya disini terdapat sebuah fungsi bernamakan super yang dimana super hanya dapat digunakan untuk class yang mengextends class lainnya. Tujuannya adalah untuk memanggil constructor pada class yang diextendsnya, pada contoh dibawah class HtmlDeveloper pada method constructornya, memanggil super dan memparsing data yang dibutuhkan di constructor parentnya
*/

class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getName() {
    return `firstname : ${this.firstname}\nlastname : ${this.lastname}
      and ${this.level}`;
  }
}

class HtmlDeveloper extends Developer {
  constructor(firstname, lastname, levelHtml) {
    super(firstname, lastname);
    this.level = levelHtml;
  }

  getJob() {
    return this.firstname + " is html developer and my skill is " + this.level;
  }
}

class ReactDeveloper extends Developer {
  constructor(firstname, lastname, levelReact) {
    super(firstname, lastname);
    this.level = levelReact;
  }

  getJob() {
    return this.firstname + " is react developer and my skill is " + this.level;
  }
}

var zuli = new ReactDeveloper("siti", "zuliatul", 20);
zuli.getName();
zuli.getJob();

var kondel = new HtmlDeveloper("azhar", "prabudi", 30);
kondel.getName();
kondel.getJob();
