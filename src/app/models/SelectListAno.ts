export class SelectListAno {
 
  public anoNum: number = 0;
  public anoDesc: string = '';
 
  constructor(init?: Partial<SelectListAno>) {
    Object.assign(this, init);
  }
 
}