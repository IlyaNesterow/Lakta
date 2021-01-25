import React from 'react'
import { useSelector } from 'react-redux' 
import { 
  faMobileAlt, faPhone, faEnvelope, 
  faAddressCard, faUniversity, faDollarSign, faKey, faUserTie
} from '@fortawesome/free-solid-svg-icons'

import Page from '../../styles/info-page'
import content from '../../content/info'
import SubSection from './SubSection'
import SubTitle from './SubTitle'


const Main = () => {
  const theme = useSelector(state => state.theme)
  const lang = useSelector(state => state.lang)

  return(
    <Page 
      id="page-section"
      darkTheme={ theme }
      imageUrl="https://upload.wikimedia.org/wikipedia/commons/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg"
    >
      <h1>{ content.title[ lang ] }</h1>
      <SubTitle
        title={ content.contactInfo[ lang ] }
        icon={ faUserTie }
      />
      <SubSection
        icon={ faMobileAlt }
        fieldName={ content.mobilePhone[ lang ] }
        fieldValue={ content.mobilePhone.field }
      />
      <SubSection
        icon={ faPhone }
        fieldName={ content.workPhone[ lang ] }
        fieldValue={ content.workPhone.field }
      />
      <SubSection
        icon={ faEnvelope }
        fieldName={ content.email[ lang ] }
        fieldValue={ content.email.field }
      />
      <SubSection
        icon={ faAddressCard }
        fieldName={ content.address[ lang ] }
        fieldValue={ content.address.field }
      />
      <SubTitle
        title={ content.requisites[ lang ] }
        icon={ faKey }
      />
      <SubSection
        icon={ faUniversity }
        fieldName={ content.registrationNumber[ lang ] }
        fieldValue={ content.registrationNumber.field }
      />
      <SubSection
        icon={ faDollarSign }
        fieldName={ content.bankAccount[ lang ] }
        fieldValue={ content.bankAccount.field }
      />
    </Page>
  )
}

export default Main