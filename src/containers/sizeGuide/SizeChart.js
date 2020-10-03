import React from 'react'
import { Card, CardHeader, CardBody, UncontrolledCollapse, Container, Table} from 'reactstrap'
import { useTranslation } from 'react-i18next'

function SizeTableComponent({title,head,body}) {
  return (
    <div>
    <h5>{title}</h5>
    <Table>
      <thead>
        <tr>
          {head.map(h => <th>{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {body.map(b => 
          <tr>
            {b.map(x => <td>{x}</td>)}
          </tr>
        )}
      </tbody>
    </Table>
    </div>
  )
}

function SizeChart() {

  const { t } = useTranslation("sizeguide");
  const dataSize = [
    {
      id: 1,
      name: t("size-section.categories.bodysize.title"),
      paragraph: t("size-section.categories.bodysize.paragraph"),
      table: [
        {
          "title": t("size-section.categories.bodysize.tables.tops"),
          "header": ["","S","M","L","XL"],
          "body": [
            [t("size-section.common.height"),"155~165","165~175","175~185","175~185"],
            [t("size-section.common.neck"),"~38","~40","~42","~44"],
            [t("size-section.common.chest"),"80~88","88~96","96~104","104~112"],
            [t("size-section.common.waist"),"68~76","76~84","84~92","92~100"]
          ]
        },
        {
          "title": t("size-section.categories.bodysize.tables.bottoms"),
          "header": [t("size-section.common.size"),t("size-section.common.circ")],
          "body": [
            ["28","70"],
            ["29","73"],
            ["30","76"],
            ["31","79"],
            ["32","82"],
            ["33","84"],
            ["34","86.5"],
            ["35","88"],
            ["36","91"],
            ["37","94"],
            ["38","95"],
            ["40","100"]
          ]
        }
      ]
    },
    {
      id: 2,
      name: t("size-section.categories.topwear.title"),
      table: [
        {
          "id": 1,
          "title": t("size-section.categories.topwear.tables.suitJacket"),
          "header": ["","S","M","L","XL"],
          "body": [
            [t("size-section.common.jacketLength"),"68","70","72","75"],
            [t("size-section.common.shoulder"),"43.5","44.5","46","48.5"],
            [t("size-section.common.width"),"51","53","55","59"],
            [t("size-section.common.sleeve"),"59","60.5","62.5","63.5"]
          ]
        },
        {
          "id": 2,
          "title": t("size-section.categories.topwear.tables.outer"),
          "header": ["","S","M","L","XL"],
          "body": [
            [t("size-section.common.jacketLength"),"73","75","77","80"],
            [t("size-section.common.width"),"53.5","56.5","59.5","63.5"],
            [t("size-section.common.sleeveCB"),"82","84.5","87","89.5"]
          ]
        },
        {
          "id": 3,
          "title": t("size-section.categories.topwear.tables.longSleeveFormal"),
          "header": ["","S","M","L","XL"],
          "body": [
            [t("size-section.common.torsoLength"),"74","76","78","81"],
            [t("size-section.common.shoulder"),"43.5","45","46.5","48.5"],
            [t("size-section.common.width"),"50","53","56","60"],
            [t("size-section.common.sleeve"),"59","61","62.5","64"],
            [t("size-section.common.neck"),"38","40","42","44"]
          ]
        },
        {
          "id": 4,
          "title": t("size-section.categories.topwear.tables.shortSleeveFormal"),
          "header": ["","S","M","L","XL"],
          "body": [
            [t("size-section.common.torsoLength"),"72","74","76","79"],
            [t("size-section.common.shoulder"),"44","45.5","47","49"],
            [t("size-section.common.width"),"52","55","58","62"],
            [t("size-section.common.sleeve"),"22.5","24","25","26"],
            [t("size-section.common.neck"),"38","40","42","44"]
          ]
        },
        {
          "id": 5,
          "title": t("size-section.categories.topwear.tables.shortSleeveMandarin"),
          "header": ["","S","M","L","XL"],
          "body": [
            [t("size-section.common.torsoLength"),"72","74","76","79"],
            [t("size-section.common.shoulder"),"45.5","47","48.5","50.5"],
            [t("size-section.common.width"),"53.5","56.5","59.5","63.5"],
            [t("size-section.common.sleeve"),"22.5","24","25","26"],
            [t("size-section.common.neck"),"40.5","42.5","44.5","46.5"]
          ]
        },
        {
          "id": 6,
          "title": t("size-section.categories.topwear.tables.casualShirt"),
          "header": ["","S","M","L","XL"],
          "body": [
            [t("size-section.common.torsoLength"),"69","71","73","76"],
            [t("size-section.common.shoulder"),"46","47.5","49","51"],
            [t("size-section.common.width"),"54","57","60","64"],
            [t("size-section.common.sleeve"),"23.5","25","26","27"],
            [t("size-section.common.neck"),"39.5","41.5","43.5","45.5"]
          ]
        },
        {
          "id": 7,
          "title": t("size-section.categories.topwear.tables.longSleeveCasualShirt"),
          "header": ["","S","M","L","XL"],
          "body": [
            [t("size-section.common.torsoLength"),"72","74","76","79"],
            [t("size-section.common.shoulder"),"45","46.5","48","50"],
            [t("size-section.common.width"),"53.5","56.5","59.5","63.5"],
            [t("size-section.common.sleeve"),"58","60","61.5","63.5"],
            [t("size-section.common.neck"),"40.5","42.5","44.5","46.5"]
          ]
        }
      ]
    },
    {
      id: 3,
      name: t("size-section.categories.bottomwear.title"),
      table: [
        {
          "title": t("size-section.categories.bottomwear.tables.pants"),
          "header": [t("size-section.common.size"),t("size-section.common.circ"),t("size-section.common.hip"),t("size-section.common.thigh"),t("size-section.common.rising"),t("size-section.common.bottomWidth")],
          "body": [
            ["28","73","90.5","28.5","23.5","17"],
            ["29","76","93.5","29.5","24","17.5"],
            ["30","79","96.5","30.5","24","17.5"],
            ["31","82","99.5","31.5","24.5","18"],
            ["32","85","102.5","32.5","25","18.5"],
            ["35","91","108","34.5","26","19.5"],
            ["36","94","111.5","35.5","26","19.5"],
            ["38","98","115","36.5","26.5","20"],
            ["40","103","119","38.5","27.5","20.5"]
          ]
        }
      ]
    }
  ]

  return(
    <div id="size-section">
      <Container>
        <h5 className="title-size">{t("size-section.title")}</h5>
        <p className="subtitle-size">{t("size-section.subtitle")}</p>
        {dataSize.map(v => (
          // <div className="size-section">
            <Card className="question-card">
              <CardHeader id={`toggler-${v.id}`}>
                <h5 className="category-title">{v.name}</h5>
              </CardHeader>
                <UncontrolledCollapse toggler={`#toggler-${v.id}`}>
                  <CardBody className="question-card-answer">
                    {v.paragraph && <p>{v.paragraph}</p>}
                    {v.table.map(w =>
                      <div className="table-wrap">
                        <p className="size-chart-desc">{t("size-section.categories.sizeChart")}</p>
                        <SizeTableComponent title={w.title} head={w.header} body={w.body}/>
                      </div>
                    )}
                  </CardBody>        
                </UncontrolledCollapse>
            </Card>
          // </div>
        ))}
      </Container>
    </div>
  )
}

export default SizeChart;