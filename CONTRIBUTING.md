# Contribute Listings

Interested in contributing a developer profile? [That's another page](contribute-developer.md)

Adding a new company listing requires the creation of markdown files and then creating a pull request. Create the markdown ".md" file in the `/companies` folder. Files must have YAML fields at the top of the file (as documented below)

### Example Company Listing

Create your company listing as `[company-name].md` inside the `/companies` folder. Note that the file name is required to be the company name and is required to have hyphens for spaces (and not real spaces) and all lowercase letters. See our [real listings](https://github.com/bradwestfall/webdevphoenix/tree/master/companies) for examples.

Start the file with YAML variables. Note that the three hyphens are required and are used to enclose the YAML. Under the YAML section goes your company description. Use two hard returns to distinguish paragraphs as seen with the greek text below

```
---
layout: company_profile
company_name: XYZ Company
overview: Web Development and Consulting
company_size: Small
dev_team_size: 10
stack: [JavaScript, Node]
region: [East]
city: [Tempe, Scottsdale]
lat: 33.4471181
lng: -112.0736661
client_work: true
recruiter: false
startup: false
website: http://example.com
job_listings: http://example.com/jobs
twitter: johndoe
fa: fa-cloud
---

Here's where you can describe your company in paragraph format...

Use two hard-returns to create a new paragraph element in the HTML...

At the end of the day, it's all just markdown
```

The company description area (below the YAML) is markdown format. Links are allowed but no other markup/markdown will be accepted. Content will be truncated at 500 characters.


### YAML Variables

> Note that quote marks for strings are optional in YAML but might be required for some values

#### layout
Must be "company_profile"<br>
Required: Yes


#### company_name
Required: Yes


#### overview
A short description of the company for the browse listings page. Because of the available space the content will be placed in, it's recommend to keep the overview less than 100 characters. Long overviews will get an ellipsis<br>
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
An array of languages, frameworks, libraries or other technologies the company hires for. You can list any technologies you want, but only the following languages have official search features:

- JavaScript
- Node
- Python
- Ruby
- PHP
- C#
- ASP.NET
- Java
- C++
- Go
- Objective-C
- Swift

> For these languages please use the exact case-sensitivity as this list in order for the search feature to work. (It's a Jekyll thing)

Arrays in YAML are formatted as follows:

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


#### city
An array of cities that you have offices in. This just gets displayed on the profile page. An example would be:

```
city: [Tempe, Scottsdale]
```

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
The twitter handle the company wants to use for contact or jobs purposes. Note that this is without the `@` sign<br>
Required: No


#### fa
A [Font Awesome](http://fortawesome.github.io/Font-Awesome/icons/) class name. Pick any icon that you think best represents your company. This is just for fun.<br>
Required: No
