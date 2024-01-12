import { fail } from "@sveltejs/kit";
export const prerender = false;
export const actions = {
    booking: async ({ request }) => {
        const formData = await request.formData();
        console.log(formData);
        const firstName = formData.get("first_name");
        const lastName = formData.get("last_name");
        const email = formData.get("email");
        const eventDate = formData.get("event_date");
        const eventLocation = formData.get("event_location");
        const phone = formData.get("phone");
        const comment = formData.get("comment");
        try{
            // const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSc80w2TpgbYIf4dIA8xDidjCFf-UkjR4L4ejO9JaNBB_KItGQ/formResponse?usp=pp_url&entry.285627830=${name}&entry.2065015368=${email}&entry.514259406=${phone}&entry.1324974881=${guests}&entry.629457539=${type}&entry.578179304=${date}&entry.824828723=${flexible}&entry.460634672=${details}&submit=Submit`
            // res = fetch await
            const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSflEH8C22X9gOS1vqBbjlpyXONGG2cYe_i5oOiqzK3OrXTE5g/formResponse?usp=pp_url&entry.821666723=${firstName}&entry.976116433=${lastName}&entry.2100854221=${email}&entry.37259085=${eventDate}&entry.1478359195=${eventLocation}&entry.695285964=${phone}&entry.1889623110=${comment}`;

            const  res = await fetch(prefilledLink);
            console.log(res);
            return {
                success: true,
                status: "Form is submitted",
                // formData
            };
        }catch(error){

        }      
    }
};