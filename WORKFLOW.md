# Round 1 vs Round 2: AI Prompting Comparison  
  
## Round 1 (vague prompt: "Make me a contact form")  
Produced a basic HTML form with a name field, email field, subject dropdown, message textarea, and a submit button. It had placeholder text and generic styling, but no real validation logic, no accessibility considerations, and no connection to the project's existing dark navy and purple theme.  
  
## Round 2 (precise prompt with constraints, examples, and a verification step)  
Produced a noticeably more complete result: contact-v2.html, styles.css, script.js, and a TESTS.md file with a manual test checklist.  
  
- Correctness: Round 1 had no validation at all. Round 2 validates each field on blur and on submit, with specific error messages.  
- Accessibility: Round 1 had none of the ARIA attributes required by the brief. Round 2 added aria-describedby, aria-live regions, and visible focus states for keyboard navigation.  
- Edge cases: Round 2 explicitly handles empty submission, invalid email format, and short messages under 10 characters, none of which Round 1 accounted for.  
- Review effort: Round 1 took about 5 seconds to prompt but would have needed roughly 20 minutes of manual fixing. Round 2 took about 2 minutes to prompt and only about 1 minute to review, because the constraints were specified upfront.  
  
## Why the verification step mattered  
Asking the AI to write and run a test checklist worked as a self correction loop, catching gaps in the logic before I did.  
  
## AI mistake caught  
During Round 2, the AI referenced a Gemini model name that had since been deprecated, throwing a model not found error. I had to catch this and switch to an available model before generation could proceed.  
  
## Overall lesson  
Round 2 felt slower in the moment, but it was faster end to end. Precise prompting front loads the thinking instead of pushing it into a debugging phase later. 
