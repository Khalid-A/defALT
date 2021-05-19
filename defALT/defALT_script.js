

function detect_edit_page() {

    setTimeout(function () {

        EDIT_OPTIONS_SELECTOR = "span.tojvnm2t.a6sixzi8.abs2jz4q.a8s20v7p.t1p8iaqh.k5wvi7nf.q3lfd5jv.pk4s997a.bipmatt0.cebpdrjk.qowsmv63.owwhemhu.dp1hu0rb.dhp61c6y.iyyx5f41 div.oajrlxb2.gs1a9yip.g5ia77u1.mtkw9kbi.tlpljxtp.qensuy8j.ppp5ayq2.goun2846.ccm00jje.s44p3ltw.mk2mc5f4.rt8b4zig.n8ej3o3l.agehan2d.sk4xxmp2.rq0escxv.nhd2j8a9.a8c37x1j.mg4g778l.btwxx1t3.pfnyh3mw.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.tgvbjcpo.hpfvmrgz.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.l9j0dhe7.i1ao9s8h.esuyzwwr.f1sip0of.du4w35lb.lzcic4wl.abiwlrkh.p8dawk7l.ue3kfks5.pw54ja7n.uo3d90p7.l82x9zwi"

        var edit_options = document.querySelectorAll(EDIT_OPTIONS_SELECTOR)

        if (edit_options.length === 4 && edit_options[3].textContent === 'Alternative text') {

            console.log("Clicking Alternate Text button...")

            edit_options[3].click()

        } else {
            detect_edit_page()
        }

    }, 1000);
}


function detect_photo_upload() {

    setTimeout(function () {

        var attached_media = document.querySelectorAll("div[aria-label='Attached media']")

        if (attached_media.length === 1) {

            console.log("Attached Media detected.")

            var edit = attached_media[0].querySelector("div[aria-label='Edit']")

            if (edit) {

                console.log("Clicking Edit button...")

                edit.click()

                detect_edit_page()

            } else {
                detect_photo_upload()
            }

        } else {
            detect_photo_upload()
        }

    }, 250);

}

function detect_create_post() {

    setTimeout(function () {

        var CREATE_POST_TITLE_SELECTOR = "div.taijpn5t.cb02d2ww.j83agx80.rq0escxv.linmgsc8.bp9cbjyn"

        var create_post = document.querySelector(CREATE_POST_TITLE_SELECTOR)

        if (create_post && create_post.textContent === "Create Post") {

            console.log("Create Post title detected.")

            detect_photo_upload()

        } else {
            detect_create_post()
        }

    }, 1000);

}

console.log("Visiting Facebook. DefALT now active.")

detect_create_post()