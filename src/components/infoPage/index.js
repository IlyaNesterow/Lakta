import React, { useEffect } from 'react'
import { useSelector } from 'react-redux' 
import { 
  faMobileAlt, faPhone, faEnvelope, 
  faAddressCard, faUniversity, faDollarSign, faKey, faUserTie
} from '@fortawesome/free-solid-svg-icons'

import Page from '../../styles/info-page'
import { ContentContext } from '../../utils/contexts'
import SubSection from './SubSection'
import SubTitle from './SubTitle'


const Main = () => {
  useEffect(() => window.scrollTo(0, 0), [])
  
  const theme = useSelector(state => state.theme)
  const lang = useSelector(state => state.lang)

  return(
    <ContentContext.Consumer>
      {content => 
        <Page 
          id="page-section"
          darkTheme={ theme }
          imageUrl={ content.info.bgImage }
        >
          <h1>{ content.info.title[ lang ] }</h1>
          <SubTitle
            title={ content.info.contactInfo[ lang ] }
            icon={ faUserTie }
          />
          <SubSection
            icon={ faMobileAlt }
            fieldName={ content.info.mobilePhone[ lang ] }
            fieldValue={ content.info.mobilePhone.field }
          />
          <SubSection
            icon={ faPhone }
            fieldName={ content.info.workPhone[ lang ] }
            fieldValue={ content.info.workPhone.field }
          />
          <SubSection
            icon={ faEnvelope }
            fieldName={ content.info.email[ lang ] }
            fieldValue={ content.info.email.field }
          />
          <SubSection
            icon={ faAddressCard }
            fieldName={ content.info.address[ lang ] }
            fieldValue={ content.info.address.field }
          />
          <SubTitle
            title={ content.info.requisites[ lang ] }
            icon={ faKey }
          />
          <SubSection
            icon={ faUniversity }
            fieldName={ content.info.registrationNumber[ lang ] }
            fieldValue={ content.info.registrationNumber.field }
          />
          <SubSection
            icon={ faDollarSign }
            fieldName={ content.info.bankAccount[ lang ] }
            fieldValue={ content.info.bankAccount.field }
          />
        </Page>
      }
    </ContentContext.Consumer>
  )
}

export default Main