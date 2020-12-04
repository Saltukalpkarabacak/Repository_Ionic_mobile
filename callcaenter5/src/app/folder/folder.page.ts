import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public firmalar:any;


  constructor(private activatedRoute: ActivatedRoute) {
   

   }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.firmalar=[
                   {adi:'Akbank',kategori:'Banka',tel:'4564564',logo:'https://www.akbank.com/SiteAssets/img/akbfa.jpg'},
                   {adi:'Ziraat',kategori:'Banka',tel:'654654',logo:'https://www.hatayticaretrehberi.com/wp-content/uploads/2017/03/ziraat-bankasi-altinozu.jpg'}, 
                   {adi:'VakıfBank',kategori:'Banka',tel:'468484',logo:'https://i.pinimg.com/originals/55/41/71/554171a25d4a40ca5a5dd791b191213a.png'},
                   {adi:'İşbank',kategori:'Banka',tel:'64684',logo:'https://www.isbank.com.tr/StaticFiles/Isbank/images/icons/isbank-og-image.jpg'},
                  ] 
  
  }

}
