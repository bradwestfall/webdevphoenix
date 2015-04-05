# Contribute Listings

Adding a new company listing requires the creation of markdown files and then creating a pull request



## Company Listings

Create a markdown ".md" file in the `/companies` folder. Files must have YAML fields at the top of the file. Below the YAML fields you can type up to 500 characters of plain-text content (for your profile content)


### Example Listing

Start the company listing with YAML variables. Note that the three hyphens are required and are used to enclose the YAML. Below the YAML section goes your company description. Use two hard returns to distinguish paragraphs as seen with the greek text below

```
---
layout: company_profile
company: XYZ Company
overview: Web Development and Consulting
company_size: Small
dev_team_size: 10
stack: [JavaScript, Node]
region: [East]
lat: 33.4471181
lng: -112.0736661
client_work: true
recruiter: false
startup: false
website: http://example.com
job_listings: http://example.com/jobs
twitter: "@example"
fa: fa-cloud
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas laborum, numquam fugit vitae rerum omnis, provident, consequatur, velit reprehenderit quas quis quibusdam deserunt quam eum assumenda! Natus voluptatibus, veniam voluptas?

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad numquam quaerat assumenda inventore similique ipsam eius modi illum libero, quis, sapiente eaque laboriosam nobis consequuntur magni sunt ab natus, molestias!
```




### YAML Fields

> Note that strings only need to be in quotes in some cases, see below

#### layout
Must be "company_profile"<br>
Required: Yes


#### company
The company name<br>
Required: Yes


#### overview
A short description for the company on the browse listings page.<br>
Required: No


#### company_size
Possible Values:

- "Small": 0-50 employees
- "Medium": 51-250 employees
- "Large": 250+ employees

Required: Yes


#### dev_team_size
Possible Values: Any numeric value (no commas)<br>
Required: No


#### stack
An array of languages, frameworks, libraries or other technologies the company hires for. You can list any technologies you want, but only "Node", "Python", "Ruby", "PHP", ".NET", "Java", and "JavaScript" are searchable. Also note that those values are case sensitive being found in the search feature. Arrays in YAML are formatted as follows:

```
stack: [JavaScript, Node]
```

Required: No


#### region
An array of Phoenix regions. Below is an example of a YAML array with all possible regions. Note that these are case sensitive for being found in the search feature

```
region: [North, East, West, Central]
```

For one region, you can either make an array with one value `[east]` or just list the value `east`

> South is missing on purpose. Nobody really says "the South Valley" around here :)

Required: No


#### lat
Latitude, if provided with `lng`, the profile will show in our maps<br>
Required: No


#### lng
Longitude, if provided with `lat`, the profile will show in our maps<br>
Required: No


#### client_work
Does the company build websites or web apps for others? Value must be `true` or `false`<br>
Required: No


#### recruiter
Is the company a recruiter? Value must be `true` or `false`<br>
Required: No


#### startup
Is the company a startup? Value must be `true` or `false`<br>
Required: No


#### website
The full URL of the company<br>
Required: No


#### job_listings
The URL where job postings can be found<br>
Required: No


#### twitter
The twitter handle must use double quotes because of the `@` symbol messing with Jekyll<br>
Required: No


#### fa
A [Font Awesome](http://fortawesome.github.io/Font-Awesome/icons/) class name. Pick any icon that you think best represents your company. This is just for fun.<br>
Required: No
