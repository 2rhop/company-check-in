import { ToastOptions } from 'ng2-toastr';

export class CustomToastOptions extends ToastOptions {
    //-- Configuring Toasts options
    
    toastLife = 2500;

    newestOnTop = true;

    // dismiss = 'click';   //controlled,auto (Default)

    positionClass = "toast-top-left";   /*  toast-top-right (Default)
                                            toast-top-center
                                            toast-top-left
                                            toast-top-full-width
                                            toast-bottom-right
                                            toast-bottom-center
                                            toast-bottom-left
                                            toast-bottom-full-width */

    animate = "flyLeft";    //flyright,fade (Default)

    // showCloseButton = true;

    maxShown = 6;

    // enableHTML=true;

    // messageClass:'some-css-class'

    // titleClass:'some-css-class'   
}