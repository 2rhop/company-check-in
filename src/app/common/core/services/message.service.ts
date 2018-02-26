import { Injectable, ViewContainerRef, SkipSelf, Host } from '@angular/core';
import { ToastsManager, Toast, ToastOptions } from 'ng2-toastr';
import { Observable } from "rxjs/observable";

@Injectable()
export class MessageService {

  constructor(public toastr: ToastsManager, private toastrConfig: ToastOptions) {
    //-- Configuring Toasts options
    toastrConfig.toastLife = 2500;
    toastrConfig.newestOnTop=true;
    // toastrConfig.dismiss='swing' ;
    toastrConfig.positionClass = "toast-top-left";
  }

  // Toastr messages
  showSuccess(str: string, vcr: ViewContainerRef): Promise<Toast> {
    this.toastr.setRootViewContainerRef(vcr);
    return this.toastr.success(str, 'SUCCESS', );
  }

  showError(str: string, vcr: ViewContainerRef): Promise<Toast> {
    this.toastr.setRootViewContainerRef(vcr);
    return this.toastr.error(str, 'ERROR',);
  }

  showWarning(str: string, vcr: ViewContainerRef): Promise<Toast> {
    this.toastr.setRootViewContainerRef(vcr);
    return this.toastr.warning(str, 'WARNING');
  }

  showInfo(str: string, vcr: ViewContainerRef): Promise<Toast> {
    this.toastr.setRootViewContainerRef(vcr);
    return this.toastr.info(str,null);
  }

  showCustom(html: string, vcr: ViewContainerRef): Promise<Toast> {
    this.toastr.setRootViewContainerRef(vcr);
    return this.toastr.custom(html, null, { enableHTML: true });
  }

  onClick(): Observable<Toast> {
    return this.toastr.onClickToast()
  }

}
