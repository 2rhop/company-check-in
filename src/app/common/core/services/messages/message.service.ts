import { Injectable, ViewContainerRef, SkipSelf, Host } from '@angular/core';
import { ToastsManager, Toast, ToastOptions } from 'ng2-toastr';
import { Observable } from "rxjs/observable";

@Injectable()
export class MessageService {

  constructor(public toastr: ToastsManager, public toastrConfig: ToastOptions) {
  }

  // Toastr messages
  showSuccess(str: string, vcr: ViewContainerRef, opt?: ToastOptions): Promise<Toast> {
    this.toastr.setRootViewContainerRef(vcr);
      return this.toastr.success(str, 'SUCCESS', opt);
  }

  showError(str: string, vcr: ViewContainerRef, opt?: ToastOptions): Promise<Toast> {
    this.toastr.setRootViewContainerRef(vcr);
      return this.toastr.error(str, 'ERROR', opt);
  }

  showWarning(str: string, vcr: ViewContainerRef, opt?: ToastOptions): Promise<Toast> {
    this.toastr.setRootViewContainerRef(vcr);
      return this.toastr.warning(str, 'WARNING', opt);
  }

  showInfo(str: string, vcr: ViewContainerRef, opt?: ToastOptions): Promise<Toast> {
    this.toastr.setRootViewContainerRef(vcr);
      return this.toastr.info(str, null, opt);
  }

  showCustom(html: string, vcr: ViewContainerRef, opt: ToastOptions): Promise<Toast> {
    this.toastr.setRootViewContainerRef(vcr);
    return this.toastr.custom(html, null, opt);
  }

  onClick(): Observable<Toast> {
    return this.toastr.onClickToast()
  }

}
