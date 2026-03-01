import Time "mo:core/Time";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    company : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type BlogArticle = {
    title : Text;
    excerpt : Text;
    category : Text;
    date : Time.Time;
    readTime : Nat;
  };

  type CaseStudy = {
    title : Text;
    industry : Text;
    challenge : Text;
    strategy : Text;
    result : Text;
  };

  type Testimonial = {
    clientName : Text;
    role : Text;
    company : Text;
    review : Text;
    starRating : Nat;
  };

  let contactSubmissions = Map.empty<Text, ContactSubmission>();

  let blogArticles = Map.fromIter<Text, BlogArticle>([
    (
      "digital-transformation",
      {
        title = "Embracing Digital Transformation";
        excerpt = "How companies can leverage technology for growth";
        category = "Technology";
        date = 1_685_674_800_000_000_000;
        readTime = 5;
      },
    ),
    (
      "leadership-in-crisis",
      {
        title = "Leadership in Times of Crisis";
        excerpt = "Strategies for effective management during uncertainty";
        category = "Leadership";
        date = 1_684_500_800_000_000_000;
        readTime = 6;
      },
    ),
    (
      "sustainable-growth",
      {
        title = "Sustainable Growth Strategies";
        excerpt = "Balancing profitability and environmental responsibility";
        category = "Strategy";
        date = 1_682_340_800_000_000_000;
        readTime = 4;
      },
    ),
  ].values());

  let caseStudies = Map.fromIter<Text, CaseStudy>([
    (
      "retail-transformation",
      {
        title = "Retail Transformation";
        industry = "Retail";
        challenge = "Declining foot traffic in stores";
        strategy = "Omnichannel strategy with digital integration";
        result = "Increased sales by 30% in first year";
      },
    ),
    (
      "manufacturing-efficiency",
      {
        title = "Manufacturing Efficiency";
        industry = "Manufacturing";
        challenge = "High production costs";
        strategy = "Lean manufacturing techniques";
        result = "Reduced costs by 15% and improved output";
      },
    ),
    (
      "financial-innovation",
      {
        title = "Financial Innovation";
        industry = "Finance";
        challenge = "Outdated legacy systems";
        strategy = "Adoption of cloud-based solutions";
        result = "Streamlined operations, increased ROI";
      },
    ),
  ].values());

  let testimonials = Map.fromIter<Text, Testimonial>([
    (
      "john-smith",
      {
        clientName = "John Smith";
        role = "CEO";
        company = "RetailCo";
        review = "Velmora transformed our business strategy.";
        starRating = 5;
      },
    ),
    (
      "susan-lee",
      {
        clientName = "Susan Lee";
        role = "CFO";
        company = "ManuFact";
        review = "Their insights on process optimization were invaluable.";
        starRating = 4;
      },
    ),
    (
      "david-kim",
      {
        clientName = "David Kim";
        role = "COO";
        company = "FinancePlus";
        review = "Exceptional guidance on digital transformation projects.";
        starRating = 5;
      },
    ),
    (
      "anna-russell",
      {
        clientName = "Anna Russell";
        role = "Marketing Director";
        company = "MarketWise";
        review = "Our partnership with Velmora has been a game changer.";
        starRating = 5;
      },
    ),
  ].values());

  public shared ({ caller }) func submitContact(name : Text, email : Text, phone : Text, company : Text, message : Text) : async () {
    let timestamp = Time.now();
    let submission : ContactSubmission = {
      name;
      email;
      phone;
      company;
      message;
      timestamp;
    };
    contactSubmissions.add(timestamp.toText(), submission);
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray();
  };

  public query ({ caller }) func getAllBlogArticles() : async [BlogArticle] {
    blogArticles.values().toArray();
  };

  public query ({ caller }) func getAllCaseStudies() : async [CaseStudy] {
    caseStudies.values().toArray();
  };

  public query ({ caller }) func getAllTestimonials() : async [Testimonial] {
    testimonials.values().toArray();
  };

  public query ({ caller }) func getContactSubmissionByTimestamp(timestamp : Text) : async ContactSubmission {
    switch (contactSubmissions.get(timestamp)) {
      case (null) { Runtime.trap("Submission not found") };
      case (?submission) { submission };
    };
  };

  public query ({ caller }) func getBlogArticleByTitle(title : Text) : async BlogArticle {
    switch (blogArticles.get(title)) {
      case (null) { Runtime.trap("Article not found") };
      case (?article) { article };
    };
  };

  public query ({ caller }) func getCaseStudyByTitle(title : Text) : async CaseStudy {
    switch (caseStudies.get(title)) {
      case (null) { Runtime.trap("Case study not found") };
      case (?caseStudy) { caseStudy };
    };
  };

  public query ({ caller }) func getTestimonialByClientName(clientName : Text) : async Testimonial {
    switch (testimonials.get(clientName)) {
      case (null) { Runtime.trap("Testimonial not found") };
      case (?testimonial) { testimonial };
    };
  };
};
