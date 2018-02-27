import { Injectable, ViewContainerRef, SkipSelf, Host } from '@angular/core';
import { ToastsManager, Toast, ToastOptions } from 'ng2-toastr';
import { Observable } from "rxjs/observable";

@Injectable()
export class MessageService {

  constructor(public toastr: ToastsManager, public toastrConfig: ToastOptions) {
  }

  // Toastr messages
  showSuccess(str: string, vcr: ViewContainerRef, title?: string, opt?: ToastOptions): Promise<Toast> {
    this.toastr.setRootViewContainerRef(vcr);
    return this.toastr.success(str, title, opt);
  }

  showError(str: string, vcr: ViewContainerRef, title?: string, opt?: ToastOptions): Promise<Toast> {
    this.toastr.setRootViewContainerRef(vcr);
    return this.toastr.error(str, title, opt);
  }

  showWarning(str: string, vcr: ViewContainerRef, title?: string, opt?: ToastOptions): Promise<Toast> {
    this.toastr.setRootViewContainerRef(vcr);
    return this.toastr.warning(str, title, opt);
  }

  showInfo(str: string, vcr: ViewContainerRef, title?: string, opt?: ToastOptions): Promise<Toast> {
    this.toastr.setRootViewContainerRef(vcr);
    return this.toastr.info(str, title, opt);
  }

  showCustom(body: string, title: string, vcr: ViewContainerRef, opt: ToastOptions): Promise<Toast> {
    this.toastr.setRootViewContainerRef(vcr);
    return this.toastr.custom(body, title, opt);
  }

  onClick(): Observable<Toast> {
    return this.toastr.onClickToast()
  }

}
