import React, {useState} from 'react'
import { Card, CardHeader, CardBody, Collapse, Container, Row, Col, Button} from 'reactstrap'
import { useTranslation } from 'react-i18next'

function FAQ() {

  const [toggleQuestion, setToggleQuestion] = useState(0);

  const { t } = useTranslation("help");
  const dataFAQ = [
    {
      name: 'order',
      category: t("faq-section.categories.order.title"),
      questions: [
        {
          id: 1,
          question: t("faq-section.categories.order.question-lists.question-1.question"),
          answer: [
            t("faq-section.categories.order.question-lists.question-1.answer-row-1"),
            t("faq-section.categories.order.question-lists.question-1.answer-row-2"),
            t("faq-section.categories.order.question-lists.question-1.answer-row-3"),
          ]
        },
        {
          id: 2,
          question: t("faq-section.categories.order.question-lists.question-2.question"),
          answer: [t("faq-section.categories.order.question-lists.question-2.answer")],
        },
        {
          id: 3,
          question: t("faq-section.categories.order.question-lists.question-3.question"),
          answer: [t("faq-section.categories.order.question-lists.question-3.answer")],
        },
        {
          id: 4,
          question: t("faq-section.categories.order.question-lists.question-4.question"),
          answer: [t("faq-section.categories.order.question-lists.question-4.answer")],
        },
        {
          id: 5,
          question: t("faq-section.categories.order.question-lists.question-5.question"),
          answer: [t("faq-section.categories.order.question-lists.question-5.answer")],
        },
        {
          id: 6,
          question: t("faq-section.categories.order.question-lists.question-6.question"),
          answer: [t("faq-section.categories.order.question-lists.question-6.answer")],
        },
        {
          id: 7,
          question: t("faq-section.categories.order.question-lists.question-7.question"),
          answer: [t("faq-section.categories.order.question-lists.question-7.answer")],
        },
        {
          id: 8,
          question: t("faq-section.categories.order.question-lists.question-8.question"),
          answer: [t("faq-section.categories.order.question-lists.question-8.answer")],
        },
        {
          id: 9,
          question: t("faq-section.categories.order.question-lists.question-9.question"),
          answer: [
            t("faq-section.categories.order.question-lists.question-9.answer-row-1"),
            t("faq-section.categories.order.question-lists.question-9.answer-row-2")
          ],
        },
        {
          id: 10,
          question: t("faq-section.categories.order.question-lists.question-10.question"),
          answer: [t("faq-section.categories.order.question-lists.question-10.answer")],
        }
      ]
    },
    {
      name: 'delivery',
      category: t("faq-section.categories.delivery.title"),
      questions: [
        {
          id: 11,
          question: t("faq-section.categories.delivery.question-lists.question-1.question"),
          answer: [t("faq-section.categories.delivery.question-lists.question-1.answer")]
        },
        {
          id: 12,
          question: t("faq-section.categories.delivery.question-lists.question-2.question"),
          answer: [t("faq-section.categories.delivery.question-lists.question-2.answer")]
        },
        {
          id: 13,
          question: t("faq-section.categories.delivery.question-lists.question-3.question"),
          answer: [t("faq-section.categories.delivery.question-lists.question-3.answer")]
        },
        {
          id: 14,
          question: t("faq-section.categories.delivery.question-lists.question-4.question"),
          answer: [t("faq-section.categories.delivery.question-lists.question-4.answer")]
        }
      ]
    },
    {
      name: 'quality',
      category: t("faq-section.categories.quality.title"),
      questions: [
        {
          id: 15,
          question: t("faq-section.categories.quality.question-lists.question-1.question"),
          answer: [t("faq-section.categories.quality.question-lists.question-1.answer")]
        },
        {
          id: 16,
          question: t("faq-section.categories.quality.question-lists.question-2.question"),
          answer: [t("faq-section.categories.quality.question-lists.question-2.answer")]
        },
        {
          id: 17,
          question: t("faq-section.categories.quality.question-lists.question-3.question"),
          answer: [t("faq-section.categories.quality.question-lists.question-3.answer")]
        },
        {
          id: 18,
          question: t("faq-section.categories.quality.question-lists.question-4.question"),
          answer: [t("faq-section.categories.quality.question-lists.question-4.answer")]
        },
      ]
    }
  ]
  return(
    <div id="faq-section">
      <Container>
        <h5 className="title-faq">{t("faq-section.title")}</h5>
        <p className="subtitle-faq">{t("faq-section.subtitle")}</p>
        {dataFAQ.map(v => (
          <div className="faq-section">
            <h5 className="category-title">{v.category}</h5>
            {v.questions.map(w => (
              <Card className="question-card">
                  <CardHeader onClick={toggleQuestion !== (w.id) ? () => setToggleQuestion(w.id) : () => setToggleQuestion(0)}>
                      <span className="font-weight-bold">{w.question}</span>
                  </CardHeader>
                  <Collapse isOpen={toggleQuestion === w.id ? true : false}>
                  {w.answer.map(a => (
                      <CardBody className="question-card-answer">{a}</CardBody>        
                  ))}
                  </Collapse>
              </Card>
            ))}
          </div>
        ))}
      </Container>
    </div>
  )
}

export default FAQ;