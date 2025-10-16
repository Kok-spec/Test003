/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorsbackgrounddisabled: "var(--colorsbackgrounddisabled)",
        colorsbackgrounderror: "var(--colorsbackgrounderror)",
        colorsbackgroundinfo: "var(--colorsbackgroundinfo)",
        colorsbackgroundprimary: "var(--colorsbackgroundprimary)",
        colorsbackgroundquaternary: "var(--colorsbackgroundquaternary)",
        colorsbackgroundsecondary: "var(--colorsbackgroundsecondary)",
        colorsbackgroundsuccess: "var(--colorsbackgroundsuccess)",
        colorsbackgroundtertiary: "var(--colorsbackgroundtertiary)",
        colorsbackgroundwarning: "var(--colorsbackgroundwarning)",
        colorsblack: "var(--colorsblack)",
        "colorsblue-10": "var(--colorsblue-10)",
        "colorsblue-100": "var(--colorsblue-100)",
        "colorsblue-20": "var(--colorsblue-20)",
        "colorsblue-40": "var(--colorsblue-40)",
        "colorsblue-60": "var(--colorsblue-60)",
        "colorsblue-80": "var(--colorsblue-80)",
        "colorsblue-90": "var(--colorsblue-90)",
        colorsborderdisabled: "var(--colorsborderdisabled)",
        colorsbordererror: "var(--colorsbordererror)",
        colorsborderfocus: "var(--colorsborderfocus)",
        colorsborderpressed: "var(--colorsborderpressed)",
        colorsborderprimary: "var(--colorsborderprimary)",
        colorsbordersecondary: "var(--colorsbordersecondary)",
        colorsbordertertiary: "var(--colorsbordertertiary)",
        "colorsbrandprimary-10": "var(--colorsbrandprimary-10)",
        "colorsbrandprimary-100": "var(--colorsbrandprimary-100)",
        "colorsbrandprimary-20": "var(--colorsbrandprimary-20)",
        "colorsbrandprimary-40": "var(--colorsbrandprimary-40)",
        "colorsbrandprimary-60": "var(--colorsbrandprimary-60)",
        "colorsbrandprimary-80": "var(--colorsbrandprimary-80)",
        "colorsbrandprimary-90": "var(--colorsbrandprimary-90)",
        "colorsbrandsecondary-10": "var(--colorsbrandsecondary-10)",
        "colorsbrandsecondary-100": "var(--colorsbrandsecondary-100)",
        "colorsbrandsecondary-20": "var(--colorsbrandsecondary-20)",
        "colorsbrandsecondary-40": "var(--colorsbrandsecondary-40)",
        "colorsbrandsecondary-60": "var(--colorsbrandsecondary-60)",
        "colorsbrandsecondary-80": "var(--colorsbrandsecondary-80)",
        "colorsbrandsecondary-90": "var(--colorsbrandsecondary-90)",
        colorsfontactive: "var(--colorsfontactive)",
        colorsfontdisabled: "var(--colorsfontdisabled)",
        colorsfonterror: "var(--colorsfonterror)",
        colorsfontfocus: "var(--colorsfontfocus)",
        colorsfonthover: "var(--colorsfonthover)",
        colorsfontinfo: "var(--colorsfontinfo)",
        colorsfontinteractive: "var(--colorsfontinteractive)",
        colorsfontinverse: "var(--colorsfontinverse)",
        colorsfontprimary: "var(--colorsfontprimary)",
        colorsfontsecondary: "var(--colorsfontsecondary)",
        colorsfontsuccess: "var(--colorsfontsuccess)",
        colorsfonttertiary: "var(--colorsfonttertiary)",
        colorsfontwarning: "var(--colorsfontwarning)",
        "colorsgreen-10": "var(--colorsgreen-10)",
        "colorsgreen-100": "var(--colorsgreen-100)",
        "colorsgreen-20": "var(--colorsgreen-20)",
        "colorsgreen-40": "var(--colorsgreen-40)",
        "colorsgreen-60": "var(--colorsgreen-60)",
        "colorsgreen-80": "var(--colorsgreen-80)",
        "colorsgreen-90": "var(--colorsgreen-90)",
        "colorsneutral-10": "var(--colorsneutral-10)",
        "colorsneutral-100": "var(--colorsneutral-100)",
        "colorsneutral-20": "var(--colorsneutral-20)",
        "colorsneutral-40": "var(--colorsneutral-40)",
        "colorsneutral-60": "var(--colorsneutral-60)",
        "colorsneutral-80": "var(--colorsneutral-80)",
        "colorsneutral-90": "var(--colorsneutral-90)",
        "colorsorange-10": "var(--colorsorange-10)",
        "colorsorange-100": "var(--colorsorange-100)",
        "colorsorange-20": "var(--colorsorange-20)",
        "colorsorange-40": "var(--colorsorange-40)",
        "colorsorange-60": "var(--colorsorange-60)",
        "colorsorange-80": "var(--colorsorange-80)",
        "colorsorange-90": "var(--colorsorange-90)",
        "colorsoverlay-10": "var(--colorsoverlay-10)",
        "colorsoverlay-20": "var(--colorsoverlay-20)",
        "colorsoverlay-30": "var(--colorsoverlay-30)",
        "colorsoverlay-40": "var(--colorsoverlay-40)",
        "colorsoverlay-50": "var(--colorsoverlay-50)",
        "colorsoverlay-60": "var(--colorsoverlay-60)",
        "colorsoverlay-70": "var(--colorsoverlay-70)",
        "colorsoverlay-80": "var(--colorsoverlay-80)",
        "colorsoverlay-90": "var(--colorsoverlay-90)",
        "colorspink-10": "var(--colorspink-10)",
        "colorspink-100": "var(--colorspink-100)",
        "colorspink-20": "var(--colorspink-20)",
        "colorspink-40": "var(--colorspink-40)",
        "colorspink-60": "var(--colorspink-60)",
        "colorspink-80": "var(--colorspink-80)",
        "colorspink-90": "var(--colorspink-90)",
        "colorspurple-10": "var(--colorspurple-10)",
        "colorspurple-100": "var(--colorspurple-100)",
        "colorspurple-20": "var(--colorspurple-20)",
        "colorspurple-40": "var(--colorspurple-40)",
        "colorspurple-60": "var(--colorspurple-60)",
        "colorspurple-80": "var(--colorspurple-80)",
        "colorspurple-90": "var(--colorspurple-90)",
        "colorsred-10": "var(--colorsred-10)",
        "colorsred-100": "var(--colorsred-100)",
        "colorsred-20": "var(--colorsred-20)",
        "colorsred-40": "var(--colorsred-40)",
        "colorsred-60": "var(--colorsred-60)",
        "colorsred-80": "var(--colorsred-80)",
        "colorsred-90": "var(--colorsred-90)",
        colorsshadowprimary: "var(--colorsshadowprimary)",
        colorsshadowsecondary: "var(--colorsshadowsecondary)",
        colorsshadowtertiary: "var(--colorsshadowtertiary)",
        "colorsteal-10": "var(--colorsteal-10)",
        "colorsteal-100": "var(--colorsteal-100)",
        "colorsteal-20": "var(--colorsteal-20)",
        "colorsteal-40": "var(--colorsteal-40)",
        "colorsteal-60": "var(--colorsteal-60)",
        "colorsteal-80": "var(--colorsteal-80)",
        "colorsteal-90": "var(--colorsteal-90)",
        colorstransparent: "var(--colorstransparent)",
        colorswhite: "var(--colorswhite)",
        "colorsyellow-10": "var(--colorsyellow-10)",
        "colorsyellow-100": "var(--colorsyellow-100)",
        "colorsyellow-20": "var(--colorsyellow-20)",
        "colorsyellow-40": "var(--colorsyellow-40)",
        "colorsyellow-60": "var(--colorsyellow-60)",
        "colorsyellow-80": "var(--colorsyellow-80)",
        "colorsyellow-90": "var(--colorsyellow-90)",
        componentsalertbackgroundcolor: "var(--componentsalertbackgroundcolor)",
        componentsalertcolor: "var(--componentsalertcolor)",
        componentsalerterrorbackgroundcolor:
          "var(--componentsalerterrorbackgroundcolor)",
        componentsalerterrorcolor: "var(--componentsalerterrorcolor)",
        componentsalertinfobackgroundcolor:
          "var(--componentsalertinfobackgroundcolor)",
        componentsalertinfocolor: "var(--componentsalertinfocolor)",
        componentsalertsuccessbackgroundcolor:
          "var(--componentsalertsuccessbackgroundcolor)",
        componentsalertsuccesscolor: "var(--componentsalertsuccesscolor)",
        componentsalertwarningbackgroundcolor:
          "var(--componentsalertwarningbackgroundcolor)",
        componentsalertwarningcolor: "var(--componentsalertwarningcolor)",
        componentsauthenticatormodalbackgroundcolor:
          "var(--componentsauthenticatormodalbackgroundcolor)",
        componentsauthenticatororcontainercolor:
          "var(--componentsauthenticatororcontainercolor)",
        componentsauthenticatororcontainerorlinebackgroundcolor:
          "var(--componentsauthenticatororcontainerorlinebackgroundcolor)",
        componentsauthenticatorrouterbackgroundcolor:
          "var(--componentsauthenticatorrouterbackgroundcolor)",
        componentsauthenticatorrouterbordercolor:
          "var(--componentsauthenticatorrouterbordercolor)",
        componentsauthenticatorstateinactivebackgroundcolor:
          "var(--componentsauthenticatorstateinactivebackgroundcolor)",
        componentsautocompletemenubackgroundcolor:
          "var(--componentsautocompletemenubackgroundcolor)",
        componentsautocompletemenubordercolor:
          "var(--componentsautocompletemenubordercolor)",
        componentsautocompletemenuoptionactivebackgroundcolor:
          "var(--componentsautocompletemenuoptionactivebackgroundcolor)",
        componentsautocompletemenuoptionactivecolor:
          "var(--componentsautocompletemenuoptionactivecolor)",
        componentsautocompletemenuoptionbackgroundcolor:
          "var(--componentsautocompletemenuoptionbackgroundcolor)",
        componentsautocompletemenuoptioncolor:
          "var(--componentsautocompletemenuoptioncolor)",
        componentsbadgebackgroundcolor: "var(--componentsbadgebackgroundcolor)",
        componentsbadgecolor: "var(--componentsbadgecolor)",
        componentsbadgeerrorbackgroundcolor:
          "var(--componentsbadgeerrorbackgroundcolor)",
        componentsbadgeerrorcolor: "var(--componentsbadgeerrorcolor)",
        componentsbadgeinfobackgroundcolor:
          "var(--componentsbadgeinfobackgroundcolor)",
        componentsbadgeinfocolor: "var(--componentsbadgeinfocolor)",
        componentsbadgesuccessbackgroundcolor:
          "var(--componentsbadgesuccessbackgroundcolor)",
        componentsbadgesuccesscolor: "var(--componentsbadgesuccesscolor)",
        componentsbadgewarningbackgroundcolor:
          "var(--componentsbadgewarningbackgroundcolor)",
        componentsbadgewarningcolor: "var(--componentsbadgewarningcolor)",
        componentsbuttonactivebackgroundcolor:
          "var(--componentsbuttonactivebackgroundcolor)",
        componentsbuttonactivebordercolor:
          "var(--componentsbuttonactivebordercolor)",
        componentsbuttonactivecolor: "var(--componentsbuttonactivecolor)",
        componentsbuttonbordercolor: "var(--componentsbuttonbordercolor)",
        componentsbuttoncolor: "var(--componentsbuttoncolor)",
        componentsbuttondestructiveactivebackgroundcolor:
          "var(--componentsbuttondestructiveactivebackgroundcolor)",
        componentsbuttondestructiveactivebordercolor:
          "var(--componentsbuttondestructiveactivebordercolor)",
        componentsbuttondestructiveactivecolor:
          "var(--componentsbuttondestructiveactivecolor)",
        componentsbuttondestructivebackgroundcolor:
          "var(--componentsbuttondestructivebackgroundcolor)",
        componentsbuttondestructivebordercolor:
          "var(--componentsbuttondestructivebordercolor)",
        componentsbuttondestructivecolor:
          "var(--componentsbuttondestructivecolor)",
        componentsbuttondestructivedisabledbackgroundcolor:
          "var(--componentsbuttondestructivedisabledbackgroundcolor)",
        componentsbuttondestructivedisabledbordercolor:
          "var(--componentsbuttondestructivedisabledbordercolor)",
        componentsbuttondestructivedisabledcolor:
          "var(--componentsbuttondestructivedisabledcolor)",
        componentsbuttondestructivefocusbackgroundcolor:
          "var(--componentsbuttondestructivefocusbackgroundcolor)",
        componentsbuttondestructivefocusbordercolor:
          "var(--componentsbuttondestructivefocusbordercolor)",
        componentsbuttondestructivefocuscolor:
          "var(--componentsbuttondestructivefocuscolor)",
        componentsbuttondestructivehoverbackgroundcolor:
          "var(--componentsbuttondestructivehoverbackgroundcolor)",
        componentsbuttondestructivehoverbordercolor:
          "var(--componentsbuttondestructivehoverbordercolor)",
        componentsbuttondestructivehovercolor:
          "var(--componentsbuttondestructivehovercolor)",
        componentsbuttondestructiveloadingbackgroundcolor:
          "var(--componentsbuttondestructiveloadingbackgroundcolor)",
        componentsbuttondestructiveloadingbordercolor:
          "var(--componentsbuttondestructiveloadingbordercolor)",
        componentsbuttondestructiveloadingcolor:
          "var(--componentsbuttondestructiveloadingcolor)",
        componentsbuttondisabledbackgroundcolor:
          "var(--componentsbuttondisabledbackgroundcolor)",
        componentsbuttondisabledbordercolor:
          "var(--componentsbuttondisabledbordercolor)",
        componentsbuttondisabledcolor: "var(--componentsbuttondisabledcolor)",
        componentsbuttonfocusbackgroundcolor:
          "var(--componentsbuttonfocusbackgroundcolor)",
        componentsbuttonfocusbordercolor:
          "var(--componentsbuttonfocusbordercolor)",
        componentsbuttonfocuscolor: "var(--componentsbuttonfocuscolor)",
        componentsbuttonhoverbackgroundcolor:
          "var(--componentsbuttonhoverbackgroundcolor)",
        componentsbuttonhoverbordercolor:
          "var(--componentsbuttonhoverbordercolor)",
        componentsbuttonhovercolor: "var(--componentsbuttonhovercolor)",
        componentsbuttonlinkactivebackgroundcolor:
          "var(--componentsbuttonlinkactivebackgroundcolor)",
        componentsbuttonlinkactivebordercolor:
          "var(--componentsbuttonlinkactivebordercolor)",
        componentsbuttonlinkactivecolor:
          "var(--componentsbuttonlinkactivecolor)",
        componentsbuttonlinkbackgroundcolor:
          "var(--componentsbuttonlinkbackgroundcolor)",
        componentsbuttonlinkbordercolor:
          "var(--componentsbuttonlinkbordercolor)",
        componentsbuttonlinkcolor: "var(--componentsbuttonlinkcolor)",
        componentsbuttonlinkdisabledbackgroundcolor:
          "var(--componentsbuttonlinkdisabledbackgroundcolor)",
        componentsbuttonlinkdisabledbordercolor:
          "var(--componentsbuttonlinkdisabledbordercolor)",
        componentsbuttonlinkdisabledcolor:
          "var(--componentsbuttonlinkdisabledcolor)",
        componentsbuttonlinkfocusbackgroundcolor:
          "var(--componentsbuttonlinkfocusbackgroundcolor)",
        componentsbuttonlinkfocusbordercolor:
          "var(--componentsbuttonlinkfocusbordercolor)",
        componentsbuttonlinkfocuscolor: "var(--componentsbuttonlinkfocuscolor)",
        componentsbuttonlinkhoverbackgroundcolor:
          "var(--componentsbuttonlinkhoverbackgroundcolor)",
        componentsbuttonlinkhoverbordercolor:
          "var(--componentsbuttonlinkhoverbordercolor)",
        componentsbuttonlinkhovercolor: "var(--componentsbuttonlinkhovercolor)",
        componentsbuttonlinkloadingbackgroundcolor:
          "var(--componentsbuttonlinkloadingbackgroundcolor)",
        componentsbuttonlinkloadingbordercolor:
          "var(--componentsbuttonlinkloadingbordercolor)",
        componentsbuttonlinkloadingcolor:
          "var(--componentsbuttonlinkloadingcolor)",
        componentsbuttonloadingbackgroundcolor:
          "var(--componentsbuttonloadingbackgroundcolor)",
        componentsbuttonloadingbordercolor:
          "var(--componentsbuttonloadingbordercolor)",
        componentsbuttonloadingcolor: "var(--componentsbuttonloadingcolor)",
        componentsbuttonmenuactivebackgroundcolor:
          "var(--componentsbuttonmenuactivebackgroundcolor)",
        componentsbuttonmenuactivecolor:
          "var(--componentsbuttonmenuactivecolor)",
        componentsbuttonmenubackgroundcolor:
          "var(--componentsbuttonmenubackgroundcolor)",
        componentsbuttonmenudisabledcolor:
          "var(--componentsbuttonmenudisabledcolor)",
        componentsbuttonmenufocusbackgroundcolor:
          "var(--componentsbuttonmenufocusbackgroundcolor)",
        componentsbuttonmenufocuscolor: "var(--componentsbuttonmenufocuscolor)",
        componentsbuttonmenuhoverbackgroundcolor:
          "var(--componentsbuttonmenuhoverbackgroundcolor)",
        componentsbuttonmenuhovercolor: "var(--componentsbuttonmenuhovercolor)",
        componentsbuttonprimaryactivebackgroundcolor:
          "var(--componentsbuttonprimaryactivebackgroundcolor)",
        componentsbuttonprimaryactivebordercolor:
          "var(--componentsbuttonprimaryactivebordercolor)",
        componentsbuttonprimaryactivecolor:
          "var(--componentsbuttonprimaryactivecolor)",
        componentsbuttonprimarybackgroundcolor:
          "var(--componentsbuttonprimarybackgroundcolor)",
        componentsbuttonprimarybordercolor:
          "var(--componentsbuttonprimarybordercolor)",
        componentsbuttonprimarycolor: "var(--componentsbuttonprimarycolor)",
        componentsbuttonprimarydisabledbackgroundcolor:
          "var(--componentsbuttonprimarydisabledbackgroundcolor)",
        componentsbuttonprimarydisabledbordercolor:
          "var(--componentsbuttonprimarydisabledbordercolor)",
        componentsbuttonprimarydisabledcolor:
          "var(--componentsbuttonprimarydisabledcolor)",
        componentsbuttonprimaryfocusbackgroundcolor:
          "var(--componentsbuttonprimaryfocusbackgroundcolor)",
        componentsbuttonprimaryfocusbordercolor:
          "var(--componentsbuttonprimaryfocusbordercolor)",
        componentsbuttonprimaryfocuscolor:
          "var(--componentsbuttonprimaryfocuscolor)",
        componentsbuttonprimaryhoverbackgroundcolor:
          "var(--componentsbuttonprimaryhoverbackgroundcolor)",
        componentsbuttonprimaryhoverbordercolor:
          "var(--componentsbuttonprimaryhoverbordercolor)",
        componentsbuttonprimaryhovercolor:
          "var(--componentsbuttonprimaryhovercolor)",
        componentsbuttonprimaryloadingbackgroundcolor:
          "var(--componentsbuttonprimaryloadingbackgroundcolor)",
        componentsbuttonprimaryloadingbordercolor:
          "var(--componentsbuttonprimaryloadingbordercolor)",
        componentsbuttonprimaryloadingcolor:
          "var(--componentsbuttonprimaryloadingcolor)",
        componentsbuttonwarningactivebackgroundcolor:
          "var(--componentsbuttonwarningactivebackgroundcolor)",
        componentsbuttonwarningactivebordercolor:
          "var(--componentsbuttonwarningactivebordercolor)",
        componentsbuttonwarningactivecolor:
          "var(--componentsbuttonwarningactivecolor)",
        componentsbuttonwarningbackgroundcolor:
          "var(--componentsbuttonwarningbackgroundcolor)",
        componentsbuttonwarningbordercolor:
          "var(--componentsbuttonwarningbordercolor)",
        componentsbuttonwarningcolor: "var(--componentsbuttonwarningcolor)",
        componentsbuttonwarningdisabledbackgroundcolor:
          "var(--componentsbuttonwarningdisabledbackgroundcolor)",
        componentsbuttonwarningdisabledbordercolor:
          "var(--componentsbuttonwarningdisabledbordercolor)",
        componentsbuttonwarningdisabledcolor:
          "var(--componentsbuttonwarningdisabledcolor)",
        componentsbuttonwarningfocusbackgroundcolor:
          "var(--componentsbuttonwarningfocusbackgroundcolor)",
        componentsbuttonwarningfocusbordercolor:
          "var(--componentsbuttonwarningfocusbordercolor)",
        componentsbuttonwarningfocuscolor:
          "var(--componentsbuttonwarningfocuscolor)",
        componentsbuttonwarninghoverbackgroundcolor:
          "var(--componentsbuttonwarninghoverbackgroundcolor)",
        componentsbuttonwarninghoverbordercolor:
          "var(--componentsbuttonwarninghoverbordercolor)",
        componentsbuttonwarninghovercolor:
          "var(--componentsbuttonwarninghovercolor)",
        componentsbuttonwarningloadingbackgroundcolor:
          "var(--componentsbuttonwarningloadingbackgroundcolor)",
        componentsbuttonwarningloadingbordercolor:
          "var(--componentsbuttonwarningloadingbordercolor)",
        componentsbuttonwarningloadingcolor:
          "var(--componentsbuttonwarningloadingcolor)",
        componentscardbackgroundcolor: "var(--componentscardbackgroundcolor)",
        componentscardbordercolor: "var(--componentscardbordercolor)",
        componentscardelevatedbackgroundcolor:
          "var(--componentscardelevatedbackgroundcolor)",
        componentscardelevatedbordercolor:
          "var(--componentscardelevatedbordercolor)",
        componentscardoutlinedbackgroundcolor:
          "var(--componentscardoutlinedbackgroundcolor)",
        componentscardoutlinedbordercolor:
          "var(--componentscardoutlinedbordercolor)",
        componentscheckboxbuttonbeforebordercolor:
          "var(--componentscheckboxbuttonbeforebordercolor)",
        componentscheckboxbuttoncolor: "var(--componentscheckboxbuttoncolor)",
        componentscheckboxbuttondisabledbordercolor:
          "var(--componentscheckboxbuttondisabledbordercolor)",
        componentscheckboxbuttonerrorbordercolor:
          "var(--componentscheckboxbuttonerrorbordercolor)",
        componentscheckboxbuttonerrorfocusbordercolor:
          "var(--componentscheckboxbuttonerrorfocusbordercolor)",
        componentscheckboxbuttonfocusbordercolor:
          "var(--componentscheckboxbuttonfocusbordercolor)",
        componentscheckboxbuttonfocusoutlinecolor:
          "var(--componentscheckboxbuttonfocusoutlinecolor)",
        componentscheckboxiconbackgroundcolor:
          "var(--componentscheckboxiconbackgroundcolor)",
        componentscheckboxiconcheckeddisabledbackgroundcolor:
          "var(--componentscheckboxiconcheckeddisabledbackgroundcolor)",
        componentscheckboxiconindeterminatedisabledbackgroundcolor:
          "var(--componentscheckboxiconindeterminatedisabledbackgroundcolor)",
        componentscheckboxlabeldisabledcolor:
          "var(--componentscheckboxlabeldisabledcolor)",
        componentscollectionpaginationbuttoncolor:
          "var(--componentscollectionpaginationbuttoncolor)",
        componentscollectionpaginationbuttondisabledcolor:
          "var(--componentscollectionpaginationbuttondisabledcolor)",
        componentscollectionpaginationbuttonhoverbackgroundcolor:
          "var(--componentscollectionpaginationbuttonhoverbackgroundcolor)",
        componentscollectionpaginationbuttonhovercolor:
          "var(--componentscollectionpaginationbuttonhovercolor)",
        componentscollectionpaginationcurrentbackgroundcolor:
          "var(--componentscollectionpaginationcurrentbackgroundcolor)",
        componentscollectionpaginationcurrentcolor:
          "var(--componentscollectionpaginationcurrentcolor)",
        componentscollectionsearchbuttonactivebackgroundcolor:
          "var(--componentscollectionsearchbuttonactivebackgroundcolor)",
        componentscollectionsearchbuttonactivebordercolor:
          "var(--componentscollectionsearchbuttonactivebordercolor)",
        componentscollectionsearchbuttonactivecolor:
          "var(--componentscollectionsearchbuttonactivecolor)",
        componentscollectionsearchbuttoncolor:
          "var(--componentscollectionsearchbuttoncolor)",
        componentscollectionsearchbuttondisabledbackgroundcolor:
          "var(--componentscollectionsearchbuttondisabledbackgroundcolor)",
        componentscollectionsearchbuttondisabledbordercolor:
          "var(--componentscollectionsearchbuttondisabledbordercolor)",
        componentscollectionsearchbuttondisabledcolor:
          "var(--componentscollectionsearchbuttondisabledcolor)",
        componentscollectionsearchbuttonfocusbackgroundcolor:
          "var(--componentscollectionsearchbuttonfocusbackgroundcolor)",
        componentscollectionsearchbuttonfocusbordercolor:
          "var(--componentscollectionsearchbuttonfocusbordercolor)",
        componentscollectionsearchbuttonfocuscolor:
          "var(--componentscollectionsearchbuttonfocuscolor)",
        componentscollectionsearchbuttonhoverbackgroundcolor:
          "var(--componentscollectionsearchbuttonhoverbackgroundcolor)",
        componentscollectionsearchbuttonhoverbordercolor:
          "var(--componentscollectionsearchbuttonhoverbordercolor)",
        componentscollectionsearchbuttonhovercolor:
          "var(--componentscollectionsearchbuttonhovercolor)",
        componentscollectionsearchinputcolor:
          "var(--componentscollectionsearchinputcolor)",
        componentscopytooltipcolor: "var(--componentscopytooltipcolor)",
        componentsdividerbordercolor: "var(--componentsdividerbordercolor)",
        componentsdividerlabelbackgroundcolor:
          "var(--componentsdividerlabelbackgroundcolor)",
        componentsdividerlabelcolor: "var(--componentsdividerlabelcolor)",
        componentsexpanderbackgroundcolor:
          "var(--componentsexpanderbackgroundcolor)",
        componentsexpandercontenttextcolor:
          "var(--componentsexpandercontenttextcolor)",
        componentsexpandertriggerhoverbackgroundcolor:
          "var(--componentsexpandertriggerhoverbackgroundcolor)",
        componentsfieldcontrolbordercolor:
          "var(--componentsfieldcontrolbordercolor)",
        componentsfieldcontrolcolor: "var(--componentsfieldcontrolcolor)",
        componentsfieldcontroldescriptioncolor:
          "var(--componentsfieldcontroldescriptioncolor)",
        componentsfieldcontroldisabledbackgroundcolor:
          "var(--componentsfieldcontroldisabledbackgroundcolor)",
        componentsfieldcontroldisabledbordercolor:
          "var(--componentsfieldcontroldisabledbordercolor)",
        componentsfieldcontroldisabledcolor:
          "var(--componentsfieldcontroldisabledcolor)",
        componentsfieldcontrolerrorbordercolor:
          "var(--componentsfieldcontrolerrorbordercolor)",
        componentsfieldcontrolfocusbordercolor:
          "var(--componentsfieldcontrolfocusbordercolor)",
        componentsfieldcontrollabelcolor:
          "var(--componentsfieldcontrollabelcolor)",
        componentsfieldcontroloutlinecolor:
          "var(--componentsfieldcontroloutlinecolor)",
        componentsfieldcontrolplaceholdercolor:
          "var(--componentsfieldcontrolplaceholdercolor)",
        componentsfieldcontrolquieterrorborderblockendcolor:
          "var(--componentsfieldcontrolquieterrorborderblockendcolor)",
        componentsfieldcontrolquietfocusborderblockendcolor:
          "var(--componentsfieldcontrolquietfocusborderblockendcolor)",
        componentsfieldlabelcolor: "var(--componentsfieldlabelcolor)",
        componentsfieldmessagesdescriptioncolor:
          "var(--componentsfieldmessagesdescriptioncolor)",
        componentsfieldmessageserrorcolor:
          "var(--componentsfieldmessageserrorcolor)",
        componentsheadingcolor: "var(--componentsheadingcolor)",
        componentsinappmessagingbuttonbackgroundcolor:
          "var(--componentsinappmessagingbuttonbackgroundcolor)",
        componentsinappmessagingbuttoncolor:
          "var(--componentsinappmessagingbuttoncolor)",
        componentslinkactivecolor: "var(--componentslinkactivecolor)",
        componentslinkcolor: "var(--componentslinkcolor)",
        componentslinkfocuscolor: "var(--componentslinkfocuscolor)",
        componentslinkhovercolor: "var(--componentslinkhovercolor)",
        componentslinkvisitedcolor: "var(--componentslinkvisitedcolor)",
        componentslivenesscameramodulebackgroundcolor:
          "var(--componentslivenesscameramodulebackgroundcolor)",
        componentsmenubackgroundcolor: "var(--componentsmenubackgroundcolor)",
        componentsmenubordercolor: "var(--componentsmenubordercolor)",
        componentspaginationbuttoncolor:
          "var(--componentspaginationbuttoncolor)",
        componentspaginationbuttondisabledcolor:
          "var(--componentspaginationbuttondisabledcolor)",
        componentspaginationbuttonhoverbackgroundcolor:
          "var(--componentspaginationbuttonhoverbackgroundcolor)",
        componentspaginationbuttonhovercolor:
          "var(--componentspaginationbuttonhovercolor)",
        componentspaginationcurrentbackgroundcolor:
          "var(--componentspaginationcurrentbackgroundcolor)",
        componentspaginationcurrentcolor:
          "var(--componentspaginationcurrentcolor)",
        componentspasswordfieldbuttonactivebackgroundcolor:
          "var(--componentspasswordfieldbuttonactivebackgroundcolor)",
        componentspasswordfieldbuttonactivebordercolor:
          "var(--componentspasswordfieldbuttonactivebordercolor)",
        componentspasswordfieldbuttonactivecolor:
          "var(--componentspasswordfieldbuttonactivecolor)",
        componentspasswordfieldbuttoncolor:
          "var(--componentspasswordfieldbuttoncolor)",
        componentspasswordfieldbuttondisabledbackgroundcolor:
          "var(--componentspasswordfieldbuttondisabledbackgroundcolor)",
        componentspasswordfieldbuttondisabledbordercolor:
          "var(--componentspasswordfieldbuttondisabledbordercolor)",
        componentspasswordfieldbuttondisabledcolor:
          "var(--componentspasswordfieldbuttondisabledcolor)",
        componentspasswordfieldbuttonfocusbackgroundcolor:
          "var(--componentspasswordfieldbuttonfocusbackgroundcolor)",
        componentspasswordfieldbuttonfocusbordercolor:
          "var(--componentspasswordfieldbuttonfocusbordercolor)",
        componentspasswordfieldbuttonfocuscolor:
          "var(--componentspasswordfieldbuttonfocuscolor)",
        componentspasswordfieldbuttonhoverbackgroundcolor:
          "var(--componentspasswordfieldbuttonhoverbackgroundcolor)",
        componentspasswordfieldbuttonhoverbordercolor:
          "var(--componentspasswordfieldbuttonhoverbordercolor)",
        componentspasswordfieldbuttonhovercolor:
          "var(--componentspasswordfieldbuttonhovercolor)",
        componentspasswordfieldcolor: "var(--componentspasswordfieldcolor)",
        componentsphonenumberfieldbordercolor:
          "var(--componentsphonenumberfieldbordercolor)",
        componentsphonenumberfieldcolor:
          "var(--componentsphonenumberfieldcolor)",
        componentsphonenumberfieldfocusbordercolor:
          "var(--componentsphonenumberfieldfocusbordercolor)",
        componentsplaceholderendcolor: "var(--componentsplaceholderendcolor)",
        componentsplaceholderstartcolor:
          "var(--componentsplaceholderstartcolor)",
        componentsradiobuttonbackgroundcolor:
          "var(--componentsradiobuttonbackgroundcolor)",
        componentsradiobuttonbordercolor:
          "var(--componentsradiobuttonbordercolor)",
        componentsradiobuttoncheckedcolor:
          "var(--componentsradiobuttoncheckedcolor)",
        componentsradiobuttoncheckeddisabledcolor:
          "var(--componentsradiobuttoncheckeddisabledcolor)",
        componentsradiobuttoncolor: "var(--componentsradiobuttoncolor)",
        componentsradiobuttondisabledbackgroundcolor:
          "var(--componentsradiobuttondisabledbackgroundcolor)",
        componentsradiobuttondisabledbordercolor:
          "var(--componentsradiobuttondisabledbordercolor)",
        componentsradiobuttondisabledcolor:
          "var(--componentsradiobuttondisabledcolor)",
        componentsradiobuttonerrorbordercolor:
          "var(--componentsradiobuttonerrorbordercolor)",
        componentsradiobuttonfocusbordercolor:
          "var(--componentsradiobuttonfocusbordercolor)",
        componentsradiobuttonoutlinecolor:
          "var(--componentsradiobuttonoutlinecolor)",
        componentsradiogrouplabelcolor: "var(--componentsradiogrouplabelcolor)",
        componentsradiogroupradiobackgroundcolor:
          "var(--componentsradiogroupradiobackgroundcolor)",
        componentsradiogroupradiobordercolor:
          "var(--componentsradiogroupradiobordercolor)",
        componentsradiogroupradiocheckedcolor:
          "var(--componentsradiogroupradiocheckedcolor)",
        componentsradiogroupradiolabelcolor:
          "var(--componentsradiogroupradiolabelcolor)",
        componentsradiolabelcolor: "var(--componentsradiolabelcolor)",
        componentsradiolabeldisabledcolor:
          "var(--componentsradiolabeldisabledcolor)",
        componentsratingemptycolor: "var(--componentsratingemptycolor)",
        componentsratingfilledcolor: "var(--componentsratingfilledcolor)",
        componentssearchfieldbuttonactivebackgroundcolor:
          "var(--componentssearchfieldbuttonactivebackgroundcolor)",
        componentssearchfieldbuttonactivebordercolor:
          "var(--componentssearchfieldbuttonactivebordercolor)",
        componentssearchfieldbuttonactivecolor:
          "var(--componentssearchfieldbuttonactivecolor)",
        componentssearchfieldbuttonbackgroundcolor:
          "var(--componentssearchfieldbuttonbackgroundcolor)",
        componentssearchfieldbuttoncolor:
          "var(--componentssearchfieldbuttoncolor)",
        componentssearchfieldbuttondisabledbackgroundcolor:
          "var(--componentssearchfieldbuttondisabledbackgroundcolor)",
        componentssearchfieldbuttondisabledbordercolor:
          "var(--componentssearchfieldbuttondisabledbordercolor)",
        componentssearchfieldbuttondisabledcolor:
          "var(--componentssearchfieldbuttondisabledcolor)",
        componentssearchfieldbuttonfocusbackgroundcolor:
          "var(--componentssearchfieldbuttonfocusbackgroundcolor)",
        componentssearchfieldbuttonfocusbordercolor:
          "var(--componentssearchfieldbuttonfocusbordercolor)",
        componentssearchfieldbuttonfocuscolor:
          "var(--componentssearchfieldbuttonfocuscolor)",
        componentssearchfieldbuttonhoverbackgroundcolor:
          "var(--componentssearchfieldbuttonhoverbackgroundcolor)",
        componentssearchfieldbuttonhoverbordercolor:
          "var(--componentssearchfieldbuttonhoverbordercolor)",
        componentssearchfieldbuttonhovercolor:
          "var(--componentssearchfieldbuttonhovercolor)",
        componentssearchfieldcolor: "var(--componentssearchfieldcolor)",
        componentsselectfieldbordercolor:
          "var(--componentsselectfieldbordercolor)",
        componentsselectfieldcolor: "var(--componentsselectfieldcolor)",
        componentsselectfieldfocusbordercolor:
          "var(--componentsselectfieldfocusbordercolor)",
        componentsselectfieldlabelcolor:
          "var(--componentsselectfieldlabelcolor)",
        componentsselectoptionbackgroundcolor:
          "var(--componentsselectoptionbackgroundcolor)",
        componentsselectoptioncolor: "var(--componentsselectoptioncolor)",
        componentsselectoptiondisabledcolor:
          "var(--componentsselectoptiondisabledcolor)",
        componentssliderfieldrangebackgroundcolor:
          "var(--componentssliderfieldrangebackgroundcolor)",
        componentssliderfieldrangedisabledbackgroundcolor:
          "var(--componentssliderfieldrangedisabledbackgroundcolor)",
        componentssliderfieldthumbbackgroundcolor:
          "var(--componentssliderfieldthumbbackgroundcolor)",
        componentssliderfieldthumbbordercolor:
          "var(--componentssliderfieldthumbbordercolor)",
        componentssliderfieldthumbdisabledbackgroundcolor:
          "var(--componentssliderfieldthumbdisabledbackgroundcolor)",
        componentssliderfieldthumbdisabledbordercolor:
          "var(--componentssliderfieldthumbdisabledbordercolor)",
        componentssliderfieldthumbfocusbordercolor:
          "var(--componentssliderfieldthumbfocusbordercolor)",
        componentssliderfieldthumbhoverbackgroundcolor:
          "var(--componentssliderfieldthumbhoverbackgroundcolor)",
        componentssliderfieldthumbhoverbordercolor:
          "var(--componentssliderfieldthumbhoverbordercolor)",
        componentssliderfieldtrackbackgroundcolor:
          "var(--componentssliderfieldtrackbackgroundcolor)",
        componentsstepperfieldbordercolor:
          "var(--componentsstepperfieldbordercolor)",
        componentsstepperfieldbuttonactivebackgroundcolor:
          "var(--componentsstepperfieldbuttonactivebackgroundcolor)",
        componentsstepperfieldbuttonactivecolor:
          "var(--componentsstepperfieldbuttonactivecolor)",
        componentsstepperfieldbuttonbackgroundcolor:
          "var(--componentsstepperfieldbuttonbackgroundcolor)",
        componentsstepperfieldbuttoncolor:
          "var(--componentsstepperfieldbuttoncolor)",
        componentsstepperfieldbuttondisabledbackgroundcolor:
          "var(--componentsstepperfieldbuttondisabledbackgroundcolor)",
        componentsstepperfieldbuttondisabledcolor:
          "var(--componentsstepperfieldbuttondisabledcolor)",
        componentsstepperfieldbuttonfocusbackgroundcolor:
          "var(--componentsstepperfieldbuttonfocusbackgroundcolor)",
        componentsstepperfieldbuttonfocuscolor:
          "var(--componentsstepperfieldbuttonfocuscolor)",
        componentsstepperfieldbuttonhoverbackgroundcolor:
          "var(--componentsstepperfieldbuttonhoverbackgroundcolor)",
        componentsstepperfieldbuttonhovercolor:
          "var(--componentsstepperfieldbuttonhovercolor)",
        componentsstepperfieldinputcolor:
          "var(--componentsstepperfieldinputcolor)",
        componentsswitchfieldthumbbackgroundcolor:
          "var(--componentsswitchfieldthumbbackgroundcolor)",
        componentsswitchfieldthumbbordercolor:
          "var(--componentsswitchfieldthumbbordercolor)",
        componentsswitchfieldtrackbackgroundcolor:
          "var(--componentsswitchfieldtrackbackgroundcolor)",
        componentsswitchfieldtrackcheckedbackgroundcolor:
          "var(--componentsswitchfieldtrackcheckedbackgroundcolor)",
        componentsswitchfieldtrackerrorbackgroundcolor:
          "var(--componentsswitchfieldtrackerrorbackgroundcolor)",
        componentstablecaptioncolor: "var(--componentstablecaptioncolor)",
        componentstabledatabordercolor: "var(--componentstabledatabordercolor)",
        componentstabledatacolor: "var(--componentstabledatacolor)",
        componentstableheaderbordercolor:
          "var(--componentstableheaderbordercolor)",
        componentstableheadercolor: "var(--componentstableheadercolor)",
        componentstablerowhoverbackgroundcolor:
          "var(--componentstablerowhoverbackgroundcolor)",
        componentstablerowstripedbackgroundcolor:
          "var(--componentstablerowstripedbackgroundcolor)",
        componentstabsbackgroundcolor: "var(--componentstabsbackgroundcolor)",
        componentstabsbordercolor: "var(--componentstabsbordercolor)",
        componentstabsitemactivebackgroundcolor:
          "var(--componentstabsitemactivebackgroundcolor)",
        componentstabsitemactivebordercolor:
          "var(--componentstabsitemactivebordercolor)",
        componentstabsitemactivecolor: "var(--componentstabsitemactivecolor)",
        componentstabsitembackgroundcolor:
          "var(--componentstabsitembackgroundcolor)",
        componentstabsitembordercolor: "var(--componentstabsitembordercolor)",
        componentstabsitemcolor: "var(--componentstabsitemcolor)",
        componentstabsitemdisabledbackgroundcolor:
          "var(--componentstabsitemdisabledbackgroundcolor)",
        componentstabsitemdisabledbordercolor:
          "var(--componentstabsitemdisabledbordercolor)",
        componentstabsitemdisabledcolor:
          "var(--componentstabsitemdisabledcolor)",
        componentstabsitemfocuscolor: "var(--componentstabsitemfocuscolor)",
        componentstabsitemhovercolor: "var(--componentstabsitemhovercolor)",
        componentstextareafieldbordercolor:
          "var(--componentstextareafieldbordercolor)",
        componentstextareafieldcolor: "var(--componentstextareafieldcolor)",
        componentstextareafieldfocusbordercolor:
          "var(--componentstextareafieldfocusbordercolor)",
        componentstextcolor: "var(--componentstextcolor)",
        componentstexterrorcolor: "var(--componentstexterrorcolor)",
        componentstextfieldbordercolor: "var(--componentstextfieldbordercolor)",
        componentstextfieldcolor: "var(--componentstextfieldcolor)",
        componentstextfieldfocusbordercolor:
          "var(--componentstextfieldfocusbordercolor)",
        componentstextinfocolor: "var(--componentstextinfocolor)",
        componentstextprimarycolor: "var(--componentstextprimarycolor)",
        componentstextsecondarycolor: "var(--componentstextsecondarycolor)",
        componentstextsuccesscolor: "var(--componentstextsuccesscolor)",
        componentstexttertiarycolor: "var(--componentstexttertiarycolor)",
        componentstextwarningcolor: "var(--componentstextwarningcolor)",
        componentstogglebuttonactivebackgroundcolor:
          "var(--componentstogglebuttonactivebackgroundcolor)",
        componentstogglebuttonbordercolor:
          "var(--componentstogglebuttonbordercolor)",
        componentstogglebuttoncolor: "var(--componentstogglebuttoncolor)",
        componentstogglebuttondisabledbackgroundcolor:
          "var(--componentstogglebuttondisabledbackgroundcolor)",
        componentstogglebuttondisabledbordercolor:
          "var(--componentstogglebuttondisabledbordercolor)",
        componentstogglebuttondisabledcolor:
          "var(--componentstogglebuttondisabledcolor)",
        componentstogglebuttonfocusbordercolor:
          "var(--componentstogglebuttonfocusbordercolor)",
        componentstogglebuttonfocuscolor:
          "var(--componentstogglebuttonfocuscolor)",
        componentstogglebuttonhoverbackgroundcolor:
          "var(--componentstogglebuttonhoverbackgroundcolor)",
        componentstogglebuttonlinkbackgroundcolor:
          "var(--componentstogglebuttonlinkbackgroundcolor)",
        componentstogglebuttonlinkcolor:
          "var(--componentstogglebuttonlinkcolor)",
        componentstogglebuttonlinkdisabledbackgroundcolor:
          "var(--componentstogglebuttonlinkdisabledbackgroundcolor)",
        componentstogglebuttonlinkdisabledcolor:
          "var(--componentstogglebuttonlinkdisabledcolor)",
        componentstogglebuttonlinkfocusbackgroundcolor:
          "var(--componentstogglebuttonlinkfocusbackgroundcolor)",
        componentstogglebuttonlinkfocuscolor:
          "var(--componentstogglebuttonlinkfocuscolor)",
        componentstogglebuttonlinkhoverbackgroundcolor:
          "var(--componentstogglebuttonlinkhoverbackgroundcolor)",
        componentstogglebuttonlinkhovercolor:
          "var(--componentstogglebuttonlinkhovercolor)",
        componentstogglebuttonlinkpressedbackgroundcolor:
          "var(--componentstogglebuttonlinkpressedbackgroundcolor)",
        componentstogglebuttonlinkpressedcolor:
          "var(--componentstogglebuttonlinkpressedcolor)",
        componentstogglebuttonlinkpressedfocusbackgroundcolor:
          "var(--componentstogglebuttonlinkpressedfocusbackgroundcolor)",
        componentstogglebuttonlinkpressedfocuscolor:
          "var(--componentstogglebuttonlinkpressedfocuscolor)",
        componentstogglebuttonlinkpressedhoverbackgroundcolor:
          "var(--componentstogglebuttonlinkpressedhoverbackgroundcolor)",
        componentstogglebuttonlinkpressedhovercolor:
          "var(--componentstogglebuttonlinkpressedhovercolor)",
        componentstogglebuttonpressedbackgroundcolor:
          "var(--componentstogglebuttonpressedbackgroundcolor)",
        componentstogglebuttonpressedbordercolor:
          "var(--componentstogglebuttonpressedbordercolor)",
        componentstogglebuttonpressedcolor:
          "var(--componentstogglebuttonpressedcolor)",
        componentstogglebuttonpressedhoverbackgroundcolor:
          "var(--componentstogglebuttonpressedhoverbackgroundcolor)",
        componentstogglebuttonprimarybackgroundcolor:
          "var(--componentstogglebuttonprimarybackgroundcolor)",
        componentstogglebuttonprimarydisabledbackgroundcolor:
          "var(--componentstogglebuttonprimarydisabledbackgroundcolor)",
        componentstogglebuttonprimarydisabledbordercolor:
          "var(--componentstogglebuttonprimarydisabledbordercolor)",
        componentstogglebuttonprimarydisabledcolor:
          "var(--componentstogglebuttonprimarydisabledcolor)",
        componentstogglebuttonprimaryfocusbackgroundcolor:
          "var(--componentstogglebuttonprimaryfocusbackgroundcolor)",
        componentstogglebuttonprimaryfocusbordercolor:
          "var(--componentstogglebuttonprimaryfocusbordercolor)",
        componentstogglebuttonprimaryfocuscolor:
          "var(--componentstogglebuttonprimaryfocuscolor)",
        componentstogglebuttonprimaryhoverbackgroundcolor:
          "var(--componentstogglebuttonprimaryhoverbackgroundcolor)",
        componentstogglebuttonprimaryhovercolor:
          "var(--componentstogglebuttonprimaryhovercolor)",
        componentstogglebuttonprimarypressedbackgroundcolor:
          "var(--componentstogglebuttonprimarypressedbackgroundcolor)",
        componentstogglebuttonprimarypressedbordercolor:
          "var(--componentstogglebuttonprimarypressedbordercolor)",
        componentstogglebuttonprimarypressedcolor:
          "var(--componentstogglebuttonprimarypressedcolor)",
        componentstogglebuttonprimarypressedfocusbackgroundcolor:
          "var(--componentstogglebuttonprimarypressedfocusbackgroundcolor)",
        componentstogglebuttonprimarypressedfocusbordercolor:
          "var(--componentstogglebuttonprimarypressedfocusbordercolor)",
        componentstogglebuttonprimarypressedfocuscolor:
          "var(--componentstogglebuttonprimarypressedfocuscolor)",
        componentstogglebuttonprimarypressedhoverbackgroundcolor:
          "var(--componentstogglebuttonprimarypressedhoverbackgroundcolor)",
        componentstogglebuttonprimarypressedhoverbordercolor:
          "var(--componentstogglebuttonprimarypressedhoverbordercolor)",
        componentstogglebuttonprimarypressedhovercolor:
          "var(--componentstogglebuttonprimarypressedhovercolor)",
      },
      fontFamily: {
        "badge-default": "var(--badge-default-font-family)",
        "badge-large": "var(--badge-large-font-family)",
        "badge-small": "var(--badge-small-font-family)",
        "body-body": "var(--body-body-font-family)",
        "body-body-large": "var(--body-body-large-font-family)",
        "body-body-large-link": "var(--body-body-large-link-font-family)",
        "body-body-link": "var(--body-body-link-font-family)",
        "body-body-small": "var(--body-body-small-font-family)",
        "body-body-small-link": "var(--body-body-small-link-font-family)",
        "button-default": "var(--button-default-font-family)",
        "button-large": "var(--button-large-font-family)",
        "button-small": "var(--button-small-font-family)",
        "components-alert-heading":
          "var(--components-alert-heading-font-family)",
        "components-badge-default":
          "var(--components-badge-default-font-family)",
        "components-badge-large": "var(--components-badge-large-font-family)",
        "components-badge-small": "var(--components-badge-small-font-family)",
        "components-breadcrumbs-item":
          "var(--components-breadcrumbs-item-font-family)",
        "components-breadcrumbs-link":
          "var(--components-breadcrumbs-link-font-family)",
        "components-breadcrumbs-separator":
          "var(--components-breadcrumbs-separator-font-family)",
        "components-button-default":
          "var(--components-button-default-font-family)",
        "components-button-large": "var(--components-button-large-font-family)",
        "components-button-small": "var(--components-button-small-font-family)",
        "components-copy-default": "var(--components-copy-default-font-family)",
        "components-copy-tooltip": "var(--components-copy-tooltip-font-family)",
        "components-divider-default":
          "var(--components-divider-default-font-family)",
        "components-divider-label":
          "var(--components-divider-label-font-family)",
        "components-divider-large":
          "var(--components-divider-large-font-family)",
        "components-divider-small":
          "var(--components-divider-small-font-family)",
        "components-field-default":
          "var(--components-field-default-font-family)",
        "components-field-large": "var(--components-field-large-font-family)",
        "components-field-small": "var(--components-field-small-font-family)",
        "components-fieldcontrol-default":
          "var(--components-fieldcontrol-default-font-family)",
        "components-fieldcontrol-large":
          "var(--components-fieldcontrol-large-font-family)",
        "components-fieldcontrol-small":
          "var(--components-fieldcontrol-small-font-family)",
        "components-fieldmessages-description":
          "var(--components-fieldmessages-description-font-family)",
        "components-fieldmessages-error":
          "var(--components-fieldmessages-error-font-family)",
        "components-fieldset-default":
          "var(--components-fieldset-default-font-family)",
        "components-fieldset-legend":
          "var(--components-fieldset-legend-font-family)",
        "components-heading-1": "var(--components-heading-1-font-family)",
        "components-heading-2": "var(--components-heading-2-font-family)",
        "components-heading-3": "var(--components-heading-3-font-family)",
        "components-heading-4": "var(--components-heading-4-font-family)",
        "components-heading-5": "var(--components-heading-5-font-family)",
        "components-heading-6": "var(--components-heading-6-font-family)",
        "components-heading-default":
          "var(--components-heading-default-font-family)",
        "components-highlightmatch-highlighted":
          "var(--components-highlightmatch-highlighted-font-family)",
        "components-icon-default": "var(--components-icon-default-font-family)",
        "components-inappmessaging-header":
          "var(--components-inappmessaging-header-font-family)",
        "components-input-default":
          "var(--components-input-default-font-family)",
        "components-link-default": "var(--components-link-default-font-family)",
        "components-link-large": "var(--components-link-large-font-family)",
        "components-link-small": "var(--components-link-small-font-family)",
        "components-loader-default":
          "var(--components-loader-default-font-family)",
        "components-loader-large": "var(--components-loader-large-font-family)",
        "components-loader-linear":
          "var(--components-loader-linear-font-family)",
        "components-loader-small": "var(--components-loader-small-font-family)",
        "components-menu-default": "var(--components-menu-default-font-family)",
        "components-menu-large": "var(--components-menu-large-font-family)",
        "components-menu-small": "var(--components-menu-small-font-family)",
        "components-message-default":
          "var(--components-message-default-font-family)",
        "components-message-heading":
          "var(--components-message-heading-font-family)",
        "components-pagination-current":
          "var(--components-pagination-current-font-family)",
        "components-phonenumberfield-default":
          "var(--components-phonenumberfield-default-font-family)",
        "components-placeholder-default":
          "var(--components-placeholder-default-font-family)",
        "components-placeholder-large":
          "var(--components-placeholder-large-font-family)",
        "components-placeholder-small":
          "var(--components-placeholder-small-font-family)",
        "components-rating-default":
          "var(--components-rating-default-font-family)",
        "components-rating-large": "var(--components-rating-large-font-family)",
        "components-rating-small": "var(--components-rating-small-font-family)",
        "components-select-default":
          "var(--components-select-default-font-family)",
        "components-select-large": "var(--components-select-large-font-family)",
        "components-select-small": "var(--components-select-small-font-family)",
        "components-selectfield-default":
          "var(--components-selectfield-default-font-family)",
        "components-sliderfield-default":
          "var(--components-sliderfield-default-font-family)",
        "components-sliderfield-large":
          "var(--components-sliderfield-large-font-family)",
        "components-sliderfield-small":
          "var(--components-sliderfield-small-font-family)",
        "components-stepperfield-input":
          "var(--components-stepperfield-input-font-family)",
        "components-switchfield-default":
          "var(--components-switchfield-default-font-family)",
        "components-switchfield-large":
          "var(--components-switchfield-large-font-family)",
        "components-switchfield-small":
          "var(--components-switchfield-small-font-family)",
        "components-table-caption":
          "var(--components-table-caption-font-family)",
        "components-table-data": "var(--components-table-data-font-family)",
        "components-table-header": "var(--components-table-header-font-family)",
        "components-tabs-item": "var(--components-tabs-item-font-family)",
        "components-textfield-default":
          "var(--components-textfield-default-font-family)",
        "fieldmessages-description-default":
          "var(--fieldmessages-description-default-font-family)",
        "heading-h1": "var(--heading-h1-font-family)",
        "heading-h2": "var(--heading-h2-font-family)",
        "heading-h3": "var(--heading-h3-font-family)",
        "heading-h4": "var(--heading-h4-font-family)",
        "heading-h5": "var(--heading-h5-font-family)",
        "heading-h6": "var(--heading-h6-font-family)",
        "input-default": "var(--input-default-font-family)",
        "input-large": "var(--input-large-font-family)",
        "input-small": "var(--input-small-font-family)",
        "label-default": "var(--label-default-font-family)",
        "label-large": "var(--label-large-font-family)",
        "label-small": "var(--label-small-font-family)",
        large: "var(--large-font-family)",
        medium: "var(--medium-font-family)",
        small: "var(--small-font-family)",
        xl: "var(--xl-font-family)",
        xs: "var(--xs-font-family)",
        xxl: "var(--xxl-font-family)",
        xxs: "var(--xxs-font-family)",
        xxxl: "var(--xxxl-font-family)",
        xxxs: "var(--xxxs-font-family)",
        xxxxl: "var(--xxxxl-font-family)",
      },
      boxShadow: {
        dropshadow: "var(--dropshadow)",
        "shadows-large": "var(--shadows-large)",
        "shadows-medium": "var(--shadows-medium)",
        "shadows-small": "var(--shadows-small)",
      },
    },
  },
  plugins: [],
};
