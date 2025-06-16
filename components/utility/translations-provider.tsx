"use client"

import initTranslations from "../../lib/i18n"
import { createInstance } from "i18next"
import { I18nextProvider } from "react-i18next"
import React, { ReactNode } from "react"

interface TranslationsProviderProps {
  namespaces: string[]
  locale: string
  resources: any
  children: ReactNode
}

const TranslationsProvider: React.FC<TranslationsProviderProps> = ({
  children,
  locale,
  namespaces,
  resources
}) => {
  const i18n = createInstance()

  initTranslations(locale, namespaces, i18n, resources)

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

export default TranslationsProvider
