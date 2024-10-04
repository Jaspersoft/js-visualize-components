/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

declare module "js-sdk/src/common/util/i18nMessage";

export interface I18nMessageFunc {
  (messageKey: string, ...params: string[]): string;
}

interface I18nMessage {
  create: (bundle: { [key: string]: string }) => I18nMessageFunc;
}

declare const i18nMessage: I18nMessage;
export default i18nMessage;
