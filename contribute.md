# Contribute Listings

Adding a new company listing requires the creation of markdown files and then creating a pull request



## Company Listings

Create a markdown ".md" file in the `/companies` folder. Files must have YAML fields at the top of the file. Below the YAML fields you can type up to 500 characters of plain-text content (for your profile content)

### YAML Fields

> Note that strings only need to be in quotes in some cases, see below

##### layout
Required: Yes<br>
Must be "company_profile"

##### company
Required: Yes<br>
The company name

#### overview
Required: No<br>
Displays when browsing company listings.

#### company_size
Required: Yes<br>
Possible Values:

- "Small": 0-50 employees
- "Medium": 51-250 employees
- "Large": 250+ employees

#### stack
Required: No<br>
An array of languages, frameworks, libraries or other technologies the company hires for. You can list any technologies you want, but only "Node", "Python", "Ruby", "PHP", ".NET", "Java", and "JavaScript" are searchable. Also note that those values are case sensitive being found in the search feature. Arrays in YAML are formatted as follows:

```
stack: [JavaScript, Node]
```

#### region
Required: No<br>
An array of Phoenix regions. Below is an example of a YAML array with all possible regions:

```
region: [north, east, west, central]
```

> Nobody really says "the South Valley" around here :)

For one region, you can either make an array with one value `[east]` or just list the value `east`

Note that these values are case sensitive for being found in the search feature


#### dev_team_size
Required: No<br>
Possible Values: Any numeric value (no commas)

**lat** and **lng**
Required: No
Latitude and Longitude. If provided the profile will show in our maps






### Example YAML

```
---
layout: company_profile
company: XYZ Company
overview: Web Development and Consulting
company_size: Small
---
```

Note that the three hyphens are required and are used to enclose the YAML.







region: East
client_work: true
recruiter: false
startup: false
website: "http://azpixels.com"
job_listings: "http://cohoots.com/jobs"
twitter: "@bradwestfall"
github: "http://github.com/bradwestfall"
fa: "fa-css3"
