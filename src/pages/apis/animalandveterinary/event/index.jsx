import React from "react"
import Link from "gatsby-link"

import KeyFacts from '../../../../components/RenderContentObject/KeyFacts'

import meta from './_meta.yaml'

class IndexRoute extends React.Component {
  render() {

    return (
      <section className="doc-content">
        <h2>Animal & Veterinary Adverse Events Overview</h2>
        <p>The FDA encourages veterinarians and animal owners to report adverse drug experiences and product defects associated with animal drugs or animal devices. Adverse drug experiences can include side effects or other problems, such as the drug not appearing effective. The FDA recommends that an animal drug adverse event reporter include details on the following: names and amounts of all drugs, products marketed as supplements, or vitamins the animal has been given; current type and/or brand of pet food and treats; information about any recent surgeries; and as much medical information as possible. Medical information may include: veterinary examination findings; bloodwork, urinalysis, and fecal exam results; x-ray findings; other relevant information such as blood pressure; and neurologic test results. However, the details and information submitted in any report may vary and in some cases certain information may not be included in a given report.</p>
        <p>To read more about animal & veterinary adverse events and adverse event reporting, see <a href="http://www.fda.gov/AnimalVeterinary/SafetyHealth/default.htm">Animal & Veterinary Safety & Health</a>.</p>

        <KeyFacts
          noun_name={meta.api_path.split("/")[1]}
          endpoint_name={meta.api_path.split("/")[2]}
        />

        <h3>Responsible use of the data</h3>
        <p>Do not rely on openFDA to make decisions regarding medical care. Always speak to your health provider about the risks and benefits of FDA-regulated products. We may limit or otherwise restrict your access to the API in line with our <Link to="/terms/">Terms of Service</Link>.</p>
        <p>Adverse event reports submitted to FDA do not undergo extensive validation or verification. Therefore, <strong>a causal relationship cannot be established between product and reactions listed in a report.</strong> While a suspected relationship may exist, it is not medically validated and should not be the sole source of information for clinical decision making or other assumptions about the safety or effectiveness of a product.</p>
        <p>Additionally, it is important to remember that adverse event reports represent a small percentage of total usage numbers of a product. Commonly used products may have a higher number of reported adverse events due to the higher total number of animals being given the product.</p>

        <h3>Disclaimer</h3>
        <p>Animal drug AE data does have limitations. There is no certainty that the reported event (adverse event or medication error) was actually due to the product. FDA does not require that a causal relationship between a product and event be proven, and reports do not always contain enough detail to properly evaluate an event.</p>
        <p>Further, FDA does not receive reports for every adverse event or medication error that occurs with a product. Many factors can influence whether or not an event will be reported, such as the time a product has been marketed and publicity about an event.</p>
        <p>Submission of a safety report does not constitute an admission that medical personnel, user facility, importer, distributor, manufacturer or product caused or contributed to the event. The information in these reports has not been scientifically or otherwise verified as to a cause and effect relationship and cannot be used to estimate the incidence of these events.</p>
      </section>
    )
  }
}

export default IndexRoute
