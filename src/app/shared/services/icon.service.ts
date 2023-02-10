import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icons } from '../enums/icons.enum';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  private path: string = "../../assets/images/icons";

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) { }

  registerIcons(): void {

    this.load(Icons, this.path)
  }

  private load(icons: typeof Icons,url:string): void{
    Object.keys(icons).forEach((icon:string) =>{
      this.matIconRegistry.addSvgIcon(
        icon,        
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          `${url}/${this.getValueByKey(icon)}.svg`
        )
      )
    })
  }

  private getValueByKey(Key: string){
    const index = Object.keys(Icons).indexOf(Key);

    return Object.values(Icons)[index];
    
  }
}
