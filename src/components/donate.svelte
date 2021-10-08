<script>
    const submitDonation = () =>  document.querySelector("#paypal-submit").submit();
</script>
<section id="donate">
    <hr />
    <p class="text-base mx-auto mt-6">
        Intersection is a recognized US
        <a
        href="https://apps.irs.gov/app/eos/displayPub78.do;jsessionid=uJBC4YDXFxKOgkhPBscd5Wf2.20?dispatchMethod=displayPub78Info&ein=611795176&country=US&deductibility=all&dispatchMethod=searchCharities&isDescending=false&city=Chicago&ein1=&postDateFrom=&exemptTypeCode=&submitName=Search&sortColumn=ein&totalResults=1&names=intersection&resultsPerPage=25&indexOfFirstRow=0&postDateTo=&state=IL"
        title="IRS Charitable Contributions site"
        >
        501c3 non-profit organization
        </a>
        . Our donations page is maintained by a PayPal Donations. Please be aware that
        you will be redirected to an external site to ensure a secure
        transaction.
    </p>
    <form id="paypal-submit" action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="4CGP5GMFPMF5C" />
        <button on:click={submitDonation} type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto">Donate to Intersection</button>
        <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
</section>
