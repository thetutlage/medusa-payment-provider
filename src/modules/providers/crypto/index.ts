import { AbstractPaymentProvider } from "@medusajs/framework/utils"

type Options = {
  apiKey: string
}

class MyPaymentProviderService extends AbstractPaymentProvider<
  Options
> {
  // TODO implement methods
}

export default {
  services: [MyPaymentProviderService],
}