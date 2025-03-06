import { Card, Row, Col, Typography } from "antd"
import styles from "../styles/explore.module.css"

// Mock event data
const mockEvents = [
  {
    id: 1,
    title: "Friends Party",
    host: "Guest User",
    image: "/images/friends-party.jpg",
  },
  {
    id: 2,
    title: "Castle Picnic Party",
    host: "John Smith",
    image: "/images/castle-picnic.jpg",
  },
  {
    id: 3,
    title: "XMAS Party",
    host: "Jose Martinez",
    image: "/images/xmas-party.jpg",
  },
  {
    id: 4,
    title: "Mother's Day Dinner",
    host: "Lara Mori",
    image: "/images/mothers-day.jpg",
  },
]

// Mock meal type filters
const mealTypes = ["Family-Style Meal", "Casual Dining", "Fine Dining"]

export default function ExplorePage() {
  return (
    <div className={styles.pageContainer}>
      {/* ✅ HEADER */}
      <header className={styles.header}>
        <div className={styles.logo}>GUESTO</div>

        {/* Sayfa yakında hizmette olacak mesajı */}
        <p className={styles.comingSoon}>This page will be available soon</p>

        <div className={styles.authButtons}></div>
      </header>

      {/* ✅ HERO SECTION */}
      <div className={styles.topSection}>
        <Typography.Title level={2} className={styles.centeredTitle}>
          BE GUEST OF
        </Typography.Title>

        {/* ✅ SEARCH BOX (Statik, işlevsiz) */}
        <div className={styles.searchBox}>
          <input type="text" placeholder="Destinations" />
          <input type="text" placeholder="Dates" />
          <input type="text" placeholder="Guests" />
          <button>Search</button>
        </div>
      </div>

      {/* ✅ QUICK FILTERS */}
      <div className={styles.filtersContainer}>
        {mealTypes.map((type) => (
          <button key={type} className={styles.filterButton}>
            {type}
          </button>
        ))}
      </div>

      {/* ✅ EVENT LISTINGS */}
      <div className={styles.bottomSection}>
        <Row gutter={[10, 10]} justify="center">
          {mockEvents.map((event) => (
            <Col key={event.id} xs={12} sm={8} md={6} lg={6}>
              <Card
                hoverable
                className={styles.cardContainer}
                cover={
                  <div className={styles.imageContainer}>
                    <img
                      src={event.image || "/placeholder.svg?height=180&width=230"}
                      alt={event.title}
                      className={styles.cardImage}
                    />
                  </div>
                }
              >
                <Card.Meta title={event.title} description={`Hosted by ${event.host}`} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* ✅ FOOTER */}
      <footer className={styles.footer}>
        <p>© 2025 Guesto. All rights reserved.</p>
      </footer>
    </div>
  )
}

