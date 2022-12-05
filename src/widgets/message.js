export default function Message(props) {
    return (
        <>
            <div class="col-md-6 py-3">
                <form action={props.action} method="post">
                    <input type="hidden" name="_token" value="vP2gVRA1G6vqHKLHdw4SyzqMVidU8rddQhvIxFAZ" />
                    <div id="_g-recaptcha"></div>
                    <div class="g-recaptcha" data-sitekey="6LdfNpgaAAAAAFcl7dHnLS0zSvKbSEjdWOyR5kDe" data-size="invisible" data-callback="_submitForm" data-badge="bottomright"></div>
                    <div class="mb-3">
                         <label for="name" class="form-label">Full name (Require)</label>
                        <input type="text" name="name" class="form-control" id="name" placeholder="Your name" required />
                    </div>
                    <div class="mb-3">
                        <label for="mobile" class="form-label">Mobile Number (Optional)</label>
                        <input type="text" name="mobile" class="form-control" id="mobile" placeholder="Your Mobile Number" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address (Require)</label>
                        <input type="email" name="email" class="form-control" id="email" placeholder="name@example.com" required />
                    </div>
                    {props.children}
                    <div class="mb-3">
                        <label for="message" class="form-label">{props.message ||"Why you wanted to join US? (Require)"}</label>
                        <textarea name="message" class="form-control" id="message" rows="3" placeholder="Your Message" required></textarea>
                    </div>
                    <button class="btn btn-primary px-5" type="submit">Send Now</button>
                </form>
            </div>
        </>
    )
}