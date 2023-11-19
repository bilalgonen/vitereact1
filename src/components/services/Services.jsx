import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const serviceData = [
  {
    id: 1,
    image: 'blog2.jpg',
    title: 'Website Design',
    description:
      'Technologies we use; React, Angular, CSS, JavaScript, TypeScript, Spring boot, Node.js, Express.js, MERN full-stack, Java, Kotlin, Maven, Gradle.',
    link: 'https://www.google.com',
  },
  {
    id: 2,
    image: 'blog5.jpg',
    title: 'Web Hosting',
    description:
      'We host your website on any cloud of your choice; Azure, AWS, Google Cloud, Cloudflare, etc. If you do not have a preference, we will give you our recommendation. We will give you weekly reports about the visitors of your website; such as how many unique visitors, their countries, regions',
    link: 'https://www.facebook.com',
  },
  {
    id: 3,
    image: 'img1.jpg',
    title: 'Database',
    description:
      'Databases we use: SQL Server, MongoDB, Postgresql, Azure CosmosDB. If you don’t have a preference, we mostly use MongoDB for its high performance.',
    link: 'https://www.twitter.com',
  },
  {
    id: 4,
    image: 'img2.jpg',
    title: 'Cloud',
    description:
      'We help you migrate your on-premise infrastructure to AWS or Azure Cloud Infrastructure.',
    link: '#',
  },
  {
    id: 5,
    image: 'img3.jpg',
    title: 'DevOps',
    description:
      'We develop and manage your CI/CD (Continuous Integration and Continuous Delivery) pipeline in Azure DevOps. We will have multiple stages for each of your environments; such as Dev, QA, and Production. We secure your confidential secrets, tokens in Key vaults instead of adding in the code in plain text.',
    link: '#',
  },
  {
    id: 6,
    image: 'img4.jpg',
    title: 'Domain solutions',
    description:
      'We help you register a new domain (such as example.com) or setup your existing domain to use Cloudflare for your authoritative DNS nameservers. CloudFlare protects against cross-site scripting, SQL injection, comment spam, bot crawlers, and much more.',
    link: '#',
  },
  {
    id: 7,
    image: 'img13.jpg',
    title: 'Email services',
    description:
      'We can setup professional email addresses for your company, such as, info@example.com',
    link: '#',
  },
]

function Services() {
  return (
    <>
      <Container fluid>
        <div>
          <h2 className='text-center'>Our Services</h2>
        </div>
        <Row>
          {serviceData.map((blog) => {
            return (
              <Col xs={12} sm={6} lg={4} key={blog.id}>
                <div>
                  <Card className='mb-3'>
                    <Card.Img variant='top' src={blog.image} className='p-2' />
                    <Card.Body>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                      <a href={blog.link} className='btn btn-primary'>
                        Read More <i className='fas fa-chevron-right'></i>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default Services
