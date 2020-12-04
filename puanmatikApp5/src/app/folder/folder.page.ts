import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public mat:number=0;
  public fen:number=0;
  public sos:number=0;
  public tur:number=0;
  public sonuc:number=0;
  public a : number=0;


  constructor(private activatedRoute: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  hesapla(mat,fen,sos,tur){

    this.sonuc= (200+mat*3.3+fen*3.4+sos*3.4+tur*3.3);
  }



}
