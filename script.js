/**ficher pour java script */



/**liste des formations**/
let formationsList = {
    formationsList: [
        {
            type_formation: "Formation Continue",
            structure: "MOOC",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Développeur responsable :\n- Comprendre les enjeux du Numérique Responsable\n- Comprendre l'impact environnemental des décisions de développement\n- Apprendre les bonnes pratiques éco-responsables à mettre en oeuvre dans votre quotidien\n- Mesurer l'empreinte",
            type_organisme: "Cours en ligne",
            nom: "The green Companion",
            intitule: "Développeur responsable",
            ville: "National",
            acquis: "non",
            duree: "1.5",
            modalites: "Distanciel",
            url: "https:\/\/thegreencompagnon.com\/cours\/developpeur-responsable\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "MOOC",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Designer responsable :\n- Comprendre les enjeux du Numérique Responsable\n- Comprendre l’impact environnemental de vos décisions design & UX\n- Apprendre les bonnes pratiques éco-responsables à mettre en oeuvre dans votre quotidien\n- Réduire l’impact environnemental de vos designs et de vos parcours utilisateurs",
            type_organisme: "Cours en ligne",
            nom: "The green Companion",
            intitule: "Designer responsable",
            ville: "National",
            acquis: "non",
            duree: 1.5,
            modalites: "Distanciel",
            url: "https:\/\/thegreencompagnon.com\/cours\/ux-ui-designer-responsable\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "MOOC",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Infrastructure responsable :\n- Comprendre les enjeux du Numérique Responsable\n- Comprendre l’impact environnemental des datacenters et des services clouds\n- Apprendre les bonnes pratiques éco-responsables à mettre en oeuvre dans votre quotidien\n- Utiliser les outils de mesure d’empreinte carbone des datacenters\n- Réduire l’impact environnemental de votre infrastructure",
            type_organisme: "Cours en ligne",
            nom: "The green Companion",
            intitule: "Infrastructure responsable",
            ville: "National",
            acquis: "non",
            duree: 1.5,
            modalites: "Distanciel",
            url: "https:\/\/thegreencompagnon.com\/cours\/sre-responsable\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "MOOC",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Impact du numérique et concepts clés de l’éco-conception :\n- Comprendre l'origine du dérèglement climatique\n- Comprendre l'impact environnemental, éthique et social de votre produit\n- Acquérir les concepts clés du Numérique Responsable​",
            type_organisme: "Cours en ligne",
            nom: "The green Companion",
            intitule: "Impact du numérique et concepts clés de l'éco-conception",
            ville: "National",
            acquis: "non",
            duree: 0.5,
            modalites: "Distanciel",
            url: "https:\/\/thegreencompagnon.com\/cours\/impact-du-numerique-et-concepts-cles-de-leco-conception\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "MOOC",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "il est fréquent d’entendre dire que le numérique est “green”, c’est-à-dire qu’il n’a pas ou que peu d’impact écologique, voire qu’il réduit les impacts écologiques du reste de notre économie. Dans ce cours, nous allons remettre en question ces deux idées. En effet, le numérique a au contraire des impacts écologiques réels et croissants : émissions de gaz à effet de serre, pollutions, production de déchets toxiques, etc. De plus, sa capacité à réduire les impacts écologiques du reste de notre économie est sujette à caution (effet rebond, obsolescence programmée, etc.).\n\nGrâce à des exemples concrets et des cas pratiques, ce cours vous permettra d’avoir un aperçu des enjeux et des moyens disponibles pour rendre le numérique plus écologique. Suivre ce cours vous permettra de vous outiller pour être acteur d’un numérique plus écologique. Vous serez en capacité de réduire l’impact écologique d’un SI, celui d’un site web et de vous impliquer dans l’écoconception d’un service numérique.\n\nVous souhaitez déployer des actions Green IT dans votre entreprise ? Alors rejoignez-moi dans le premier chapitre !",
            type_organisme: "OpenClasse room",
            nom: "",
            intitule: "Appliquez les principes du GreenIT dans votre entreprise",
            ville: "National",
            acquis: "non",
            duree: 0.5,
            modalites: "Distanciel",
            url: "https:\/\/openclassrooms.com\/fr\/courses\/6227476-appliquez-les-principes-du-green-it-dans-votre-entreprise"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Comprendre les enjeux du numérique responsable\nMaitriser les réglementations du secteur\nAgir sur son écosystème en intégrant des bonnes pratiques professionnelles\nMettre en œuvre une stratégie numérique responsable",
            type_organisme: "Organisme de formation",
            nom: "Pollen",
            intitule: "NUMÉRIQUE RESPONSABLE",
            ville: "Toulouse",
            acquis: "non mais les apprenants sont en mesure de passer le certificat de connaissance à l'issue de cette formation",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: ""
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "- Maîtriser la démarche et la méthodologie de conception responsable de services numériques pour déployer le Numérique Responsable dans les projets\n- Savoir mesurer la performance environnementale d’un site internet\n- Savoir identifier les leviers d’actions à mettre en œuvre\n- Être en mesure de concevoir un service numérique en intégrant les bonnes pratiques d’éco-conception web et d’accessibilité\n- Identifier les référentiels et outils existants\n- Obtenir la certification éco conception web délivrée par l’Institut du Numérique Responsable",
            type_organisme: "Organisme de formation",
            nom: "Pollen",
            intitule: "Ecoconception de site Internet",
            ville: "Toulouse",
            acquis: "oui. Un certificat de connaissance délivré par l'INR",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.toulouse.cci.fr\/solution\/eco-conception-de-site-internet"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Accessibilité web\n• Définir une stratégie de mise en place de l’accessibilité numérique • Sensibiliser différents publics (collègues, prestataires, responsables…) aux enjeux de l’accessibilité numérique • Favoriser la prise en compte de l’accessibilité à tous les niveaux de l’organisation (achats, conception\/UX, développements techniques, formation…) • Élaborer des schémas d’accessibilité pluriannuels et plans annuels • Auditer un site et savoir évaluer certains critères d’accessibilité sur un site web • Intégrer l’assurance qualité web dans votre démarche\nAssurance qualité web\n• Connaître le modèle et les check-lists qualité Web • Connaître les méthodes d’évaluation des sites Web • Prévenir les risques et maîtriser le vocabulaire du web • Gérer la qualité et l’accessibilité d’un site internet",
            type_organisme: "Organisme de formation",
            nom: "Pollen",
            intitule: "Accessibilité et assurance qualité web",
            ville: "Toulouse",
            acquis: "non",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: ""
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "CONTENU DE LA FORMATION\nJOUR 01\n\nCONSCIENTISATION : LA FACE CACHEE DE LA REVOLUTION NUMERIQUE\n› L’impact du Numérique sur l’environnement\n› L’exclusion Numérique\n› Soyons précis sur les termes !\n› Atelier \/mise en pratique\n\nCOMPRENDRE L’ECOCONCEPTION DE SERVICES NUMERIQUES\n› Pourquoi l’écoconception ?\n› Les enjeux du Numérique Responsable pour l’entreprise\n› Etat de l’art\n› Ecosystème du numérique responsable\n› Atelier\/ Mise en pratique\n\nUN MODELE RECONNU : LE GREENSOFT MODEL\n› La « software value Map »\n› Audit du niveau d’écoconception d’un logiciel\n› Le modèle « Greensoft »\n› Les enjeux au niveau du poste de travail\n› Mise en pratique : quels « quick wins » au sein de votre organisation ?\n\nJOUR 02\n\nLe formateur s’attachera à créer des passerelles entre la formation et les environnements professionnels des participants.\n\nCAS CONCRET\n› Application de la software value Map\n› Application du Greensoft Model\n› Engagements\n\nMISES EN PRATIQUES AU NIVEAU PROJET\nLe formateur présente un projet à étudier. Le formateur déroule le sujet pour que chacun puisse se l’approprier et mettre en pratique une démarche d’écoconception numérique en utilisant les outils et les bonnes pratiques.\n\nCLOTURE, RESTITUTION ET BILAN DE LA JOURNEE",
            type_organisme: "Organisme de formation",
            nom: "INFOGREEN FACTORY",
            intitule: "ECOCONCEPTION-  GESTION DE PROJETS",
            ville: "National",
            acquis: "OBJECTIFS PÉDAGOGIQUES\nPrendre du recul par rapport au « business as usual » dans les projets informatiques.\nDéfinir les enjeux et contextes du numérique et pourquoi il est crucial d’intégrer une démarche d’écoconception.\nAcquérir et de mettre en pratique sous forme d’ateliers les connaissances socles sur le sujet du Numérique Responsable.\nS’appuyer sur une méthodologie pour déployer le Numérique Responsable dans les projets.\nIdentifier les référentiels et outils existants.\nComprendre l’écoconception appliquée aux services numériques.\nÊtre en mesure de concevoir un logiciel en intégrant les bonnes pratiques d’éco-conception numérique.",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/infogreenfactory.green\/contact\/\n\nou\n\nvia notre partenaire IHMISEN: https:\/\/ihmisen.com\/NRE030_Ecoconception-pour-la-gestion-de-projets.php"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "CONTENU DE LA FORMATION\nJOUR 01\n\nQUIZ – PRISE DE CONTACT\n\nLES ENJEUX\n› Les apports et travers du numérique\n› L’impact environnemental\n› L’exclusion de certains publics\n› Les dérives éthiques\n\nLES LEVIERS ET LES OUTILS POUR DEPLOYER UNE STRATEGIE NUNERIQUE RESPONSABLE\n› Green IT, IT for green, Numérique Responsable,…\n› Les leviers politiques (législation actuelle et évolution)\n› L’importance de la RSE au sein des entreprises\n› Les outils\n\nDEPLOYER UNE STRATEGIE NUMERIQUE RESPONSABLE\n› 8 bonnes raisons\n› Stratégie globale vs stratégie NR\n› Les incontournables\n› Les outils\n\nJOUR 02\n\nLES ETAPES D’UNE STRATEGIE NUMERIQUE RESPONSABLE EN ENTREPRISE\n› La Sensibilisation\n› Les étapes et les référentiels\n› Un projet NR\n› La gouvernance du NR en entreprise\n\nLES BONNES PRATIQUES PAR GRANDS DOMAINES TECHNIQUE\n› Les référentiels\n› Les achats\n› La gestion de la fin de vie\n› Le poste de travail\n\nATELIER PRATIQUE POSTE DE TRAVAIL\n› L’impression\n› La téléphonie\n› Les projets IT\n› Les Datacentre\n› Les bonnes pratiques individuelles\n\nCAS PRATIQUE EN PETITS GROUPES\n\nQUIZZ EN PREPARATION A LA CERTIFICATION NR\n\nENJEUX, PERSPECTIVES ET RESSOURCES DISPONIBLES\n\nCLOTURE, RESTITUTION ET BILAN DE LA FORMATION",
            type_organisme: "Organisme de formation",
            nom: "INFOGREEN FACTORY",
            intitule: "NUMÉRIQUE RESPONSABLE",
            ville: "National",
            acquis: "Définir les enjeux et contextes du numérique et pourquoi il est crucial d’intégrer une démarche responsable.\nIdentifier dans l’ensemble du cycle de vie des équipements et services numériques les critères importants (achats, usage, fin de vie, conception).\nDécouvrir une méthodologie et des outils pour une mise en pratique du numérique responsable.\nValider la certification « Numérique responsable » portée par l’Université de la Rochelle et l’Institut du Numérique Responsable (INR).",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/infogreenfactory.green\/contact\/\n\nou\n\nhttps:\/\/ihmisen.com\/NRE010_Sensibilisation-au-Numerique-Responsable.php"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Développeur responsable :\nCette formation est faite pour vous si vous souhaitez :\n- Comprendre les enjeux du Numérique Responsable\n- Comprendre l’impact environnemental des décisions de développement\n- Apprendre les bonnes pratiques éco-responsables à mettre en oeuvre dans votre quotidien\n- Mesurer l’empreinte environnementale de votre application\n- Réduire l’impact environnemental de votre code",
            type_organisme: "Entreprise",
            nom: "The Green Compagnon",
            intitule: "Développeur responsable (front & back)",
            ville: "National",
            acquis: "Non",
            duree: 1,
            modalites: "Distanciel",
            url: "https:\/\/thegreencompagnon.com\/cours\/developpeur-responsable\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Vous êtes UI Designer, UX Manager ou Product Manager ?\nCette formation est faite pour vous si vous souhaitez :\n- Comprendre les enjeux du Numérique Responsable\n- Comprendre l’impact environnemental de vos décisions design & UX\n- Apprendre les bonnes pratiques éco-responsables à mettre en oeuvre dans votre quotidien\n- Réduire l’impact environnemental de vos designs et de vos parcours utilisateurs",
            type_organisme: "Entreprise",
            nom: "The Green Compagnon",
            intitule: "Designer Responsable",
            ville: "National",
            acquis: "Non",
            duree: 1,
            modalites: "Distanciel",
            url: "https:\/\/thegreencompagnon.com\/cours\/ux-ui-designer-responsable\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "JOUR 1 :\nLes objectifs du référentiel CoRSer Num\n• Le principe\n• Les enjeux du référentiel\nLa structure de CoRSer Num\n• Les familles \/ étapes projet\n• Liaison avec les ODD de l’ONU\n• Les recommandations\n• Les critères et les catégories de critères\n• Le référentiel en chiffre\nMise en œuvre du référentiel\n• La méthodologie\nLe contenu des référentiels GR 491 et RGESN\n• Le détail des incontournables du Numérique Responsable\n• Personnaliser votre liste\nLes autres référentiels\n• Référentiel d’accessibilité\n• Référentiel OPQUAST\n• Référentiel PIDILA\n• Référentiel Général d’Ecoconception de Services Numériques\n• Les autres (RGPD, RGS)\nClôture, restitution, évaluation des acquis et bilan de la formation",
            type_organisme: "Organisme de formation",
            nom: "IHMISEN",
            intitule: "Ecoconception outils, GR 491 et RGESN",
            ville: "Toulouse",
            acquis: "Cette formation vise à fournir aux participants une connaissance du\nréférentiel de l’INR le GR491 et du RGESN (référentiel d'écoconception issu du GR491) pour mettre en pratique les recommandations dans\nchacune des étapes projet.\nLa formation permettra :\n• De préciser les objectifs du référentiel\n• De comprendre la structure des éléments proposés dans le référentiel\n• D’identifier les relations avec les Objectifs de Développement Durable\nde l’ONU\n• De préciser la méthodologie de mise en œuvre du référentiel dans une\norganisation\n• De comprendre les éléments exposés dans le référentiel\n• De relier le référentiel INR avec les autres référentiels disponibles\nLe module « Référentiel INR » a donc pour vocation de permettre aux acteurs\ndu numérique (Product Owner, Développeurs, Designers, Chefs de projet) de\nmettre en pratique l’écoconception de services numériques dans une\ndémarche Numérique Responsable et de sobriété numérique.",
            duree: 1,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/ihmisen.com\/NRE060_Referentiel-CoRSer-Num-de-l-INR.php"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Véritable point de départ de votre stratégie numérique responsable, cette formation vous permettra de faire des choix pertinents en accord avec les enjeux environnementaux et sociaux actuels selon votre contexte.\nNous y (re)découvrirons les impacts environnementaux et sociaux du numérique, la législation et l'écosystème. Puis chaque domaine d'action en entreprise sera évoqué avec les bonnes pratiques associées, les outils existants et les acteurs correspondants. Enfin la mise en place du changement en entreprise (gouvernance, communication, intégration des collaborateurs, amélioration continue...) sera étudiée à partir du contexte spécifique des participants. Ces participants repartiront également avec une feuille de route des prochaines actions à mener pour agir dès la fin de la formation.",
            type_organisme: "Formatrice",
            nom: "Ecologeek",
            intitule: "Initier une démarche Numérique Responsable dans mon entreprise",
            ville: "Rennes",
            acquis: "Possibilité de passer la certification numérique responsable de l'INR après la formation.",
            duree: 3,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.ecologeek.fr\/formation"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Objectifs :\nComprendre le contexte du Green IT : chiffres clés, tendances, etc\nIdentifier les acteurs et les outils du Green IT.\nDéfinir une stratégie Green IT alignée sur la politique RSE \/ Développement Durable de l'organisation\nMettre en place les outils de suivi, pilotage et gouvernance de la stratégie Green IT\nIdentifier les dossiers clés pour votre organisation tant en terme de retour sur investissement que de réduction d’empreinte écologique\nProgramme :\nJour 1\nContexte du Green IT et Constats (Les enjeux du développement durable, les objectifs de développement durable, la RSE et sa position par rapport au Green IT)\nOutils et connaissances de base (La notion de cycle de vie, Les impacts du numérique tout au long du cycle de vie, Analyse de Cycle de Vie, Bilan Carbone, Energie Grise)\nJour 2\nRéduire les impacts du numérique (Le cadre réglementaire, les normes, les labels)\nOù en sont les entreprises ? ( Les bonnes pratiques du Green IT, Des exemples d’actions et d’initiatives)\nLes composantes d’une démarche Green IT (Gouvernance, Parties prenantes)\nMettre en oeuvre un stratégie Green IT (Les étapes-clé, piloter la performance, soit à partir d'une étude de cas, soit à partir du cas concret de l'entreprise)\nInventaire des pratiques existantes grâce à une \"check list\" sur les 8 thématiques du Green IT",
            type_organisme: "Formatrice d'entreprise",
            nom: "",
            intitule: "Green IT",
            ville: "Boulogne-Billancourt",
            acquis: "Non",
            duree: 1.5,
            modalites: "Présentiel et distanciel",
            url: "http:\/\/www.valerieschneider.com"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Cette formation de deux jours permet de comprendre les enjeux du numérique responsable, maîtriser les règlementations du secteur, intégrer les bonnes pratiques pour, au final, être en mesure de mettre en œuvre une stratégie numérique responsable au sein de l'entreprise.",
            type_organisme: "Organisme de formation",
            nom: "M.I.R",
            intitule: "S'orienter vers un numérique plus responsable",
            ville: "Paris",
            acquis: "Certificat de connaissance de l’Institut du Numérique Responsable (optionnel)",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.mir-cf.com\/formations"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Objectifs de la formation :\nDéfinir les enjeux et contextes du numérique et pourquoi il est crucial d’intégrer une démarche responsable.\nIdentifier dans l’ensemble du cycle de vie des équipements et services numériques les critères importants (achats, usage, fin de vie, conception).\nDécouvrir une méthodologie et des outils pour une mise en pratique du numérique responsable.\nAppréhender les bonnes pratiques des grands domaines.\nPréparer la certification « Numérique responsable » portée par l’Université de la Rochelle et l’Institut du Numérique Responsable (INR).\nComprendre les enjeux des années à venir.",
            type_organisme: "Cabinet de Conseil, Cabinet de Coaching et Organisme de formation certifié Qualiopi",
            nom: "Ihmisen Academy",
            intitule: "Sensibilisation au Numérique Responsable",
            ville: "Toulouse",
            acquis: "› Attestation de fin de formation.\n› Certification Numérique Responsable (NR).",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.ihmisen.com\/NRE010_Sensibilisation-au-Numerique-Responsable.php"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Objectif de la formation :\nPrésenter les enjeux et contextes du numérique et pourquoi il est crucial d’intégrer une démarche d’écoconception.\nComprendre que le succès du déploiement de cette démarche est lié à son intégration dans une stratégie durable et globale d’entreprise.\nFaire ainsi converger la stratégie de l’organisation et les enjeux que le Numérique Responsable doit traiter.\nDéfinir les outils nécessaires à la prise en charge de la durabilité dans la stratégie d’entreprise.\nIdentifier les leviers permettant de déployer et piloter l’écoconception au sein des organisations.\nSe projeter sur une mise en pratique concrète en entreprise.",
            type_organisme: "Cabinet de Conseil, Cabinet de Coaching et Organisme de formation certifié Qualiopi",
            nom: "Ihmisen Academy",
            intitule: "Numérique Responsable - Ecoconception pour les dirigeants",
            ville: "Toulouse",
            acquis: "› Attestation de fin de formation.",
            duree: 1,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.ihmisen.com\/NRE020_Ecoconception-pour-les-dirigeants.php"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Objectif de la formation :\nPrendre du recul par rapport au « business as usual » dans les projets informatiques.\nDéfinir les enjeux et contextes du numérique et pourquoi il est crucial d’intégrer une démarche d’écoconception.\nComprendre l’écoconception appliquée aux services numériques.\nS’appuyer sur une méthodologie pour déployer le Numérique Responsable dans les projets.\nIdentifier les référentiels et outils existants.\nAcquérir et de mettre en pratique sous forme d’ateliers les connaissances socles sur le sujet du Numérique Responsable.\nÊtre en mesure de concevoir un logiciel en intégrant les bonnes pratiques d’éco-conception numérique.",
            type_organisme: "Cabinet de Conseil, Cabinet de Coaching et Organisme de formation certifié Qualiopi",
            nom: "Ihmisen Academy",
            intitule: "Numérique Responsable - Ecoconception pour la gestion de projets",
            ville: "Toulouse",
            acquis: "› Attestation de fin de formation.",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.ihmisen.com\/NRE030_Ecoconception-pour-la-gestion-de-projets.php"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Objectifs pédagogiques\nPrendre du recul par rapport au « business as usual » dans les projets informatiques.\nDéfinir les enjeux et contextes du numérique et pourquoi il est crucial d’intégrer une démarche d’écoconception.\nComprendre l’écoconception appliquée aux services numériques.\nS’appuyer sur une méthodologie pour déployer le Numérique Responsable dans les projets.\nIdentifier les référentiels et outils existants.\nAcquérir et de mettre en pratique sous forme d’ateliers les connaissances socles sur le sujet du Numérique Responsable.\nÊtre en mesure de concevoir un logiciel en intégrant les bonnes pratiques d’éco-conception numérique.",
            type_organisme: "Cabinet de Conseil, Cabinet de Coaching et Organisme de formation certifié Qualiopi",
            nom: "Ihmisen Academy",
            intitule: "Numérique Responsable - Ecoconception pour les développeurs",
            ville: "Toulouse",
            acquis: "› Attestation de fin de formation.",
            duree: 3,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.ihmisen.com\/NRE040_Ecoconception-pour-les-developpeurs.php"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Objectifs pédagogiques\nPréciser les objectifs du référentiel.\nComprendre la structure des éléments proposés dans le référentiel.\nIdentifier les relations avec les Objectifs de Développement Durable de l’ONU.\nPréciser la méthodologie de mise en œuvre du référentiel dans une organisation.\nComprendre les éléments exposés dans le référentiel.\nRelier le référentiel INR avec les autres référentiels disponibles.",
            type_organisme: "Cabinet de Conseil, Cabinet de Coaching et Organisme de formation certifié Qualiopi",
            nom: "Ihmisen Academy",
            intitule: "Numérique Responsable – Référentiel « Conception responsable de Services Numériques » de l’INR",
            ville: "Toulouse",
            acquis: "› Attestation de fin de formation.",
            duree: 1,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.ihmisen.com\/NRE060_Referentiel-CoRSer-Num-de-l-INR.php"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Objectifs pédagogiques\nPrendre du recul par rapport au « business as usual » dans les projets informatiques.\nDéfinir les enjeux et contextes du numérique et pourquoi il est crucial d’intégrer une démarche d’écoconception.\nComprendre l’écoconception appliquée aux services numériques.\nS’appuyer sur une méthodologie pour déployer le Numérique Responsable dans les projets.\nIdentifier les référentiels et outils existants.\nAcquérir et de mettre en pratique sous forme d’ateliers les connaissances socles sur le sujet du Numérique Responsable.\nÊtre en mesure de concevoir un produit \/ service en intégrant les bonnes pratiques d’éco-conception numérique.",
            type_organisme: "Cabinet de Conseil, Cabinet de Coaching et Organisme de formation certifié Qualiopi",
            nom: "Ihmisen Academy",
            intitule: "Numérique Responsable – Ecoconception pour les Fonctionnels",
            ville: "Toulouse",
            acquis: "› Attestation de fin de formation.",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.ihmisen.com\/NRE070_Ecoconception-pour-les-Fonctionnels.php"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Objectifs pédagogiques\nMettre en œuvre une dynamique collective pour faciliter les partages d’expérience.\nDéfinir les enjeux et contextes du numérique et pourquoi il est crucial d’intégrer une démarche d’écoconception.\nComprendre pourquoi et comment une démarche d’écoconception permet de réduire les impacts du numérique sur l’environnement et l’exclusion des personnes.\nPrendre du recul par rapport au « business as usual » dans les projets informatiques.\nS’appuyer sur une méthodologie pour déployer le Numérique Responsable dans les projets.\nAcquérir et de mettre en pratique sous forme d’ateliers les connaissances socles sur le sujet du Numérique Responsable.\nIdentifier les référentiels et outils existants.\nComprendre l’écoconception appliquée aux services numériques.\nÊtre en mesure de concevoir un logiciel en intégrant les bonnes pratiques d’écoconception numérique.\nComprendre que les performances environnementales, techniques et la sécurité des services numériques convergent.\nConnaître les outils disponibles pour mettre en œuvre l’écoconception appliquée aux services numériques.\nRenforcer les bonnes pratiques des métiers du développement et du design pour mettre en œuvre efficacement l’écoconception.\nDévelopper et de transmettre une démarche holistique d’écoconception de service numérique.",
            type_organisme: "Cabinet de Conseil, Cabinet de Coaching et Organisme de formation certifié Qualiopi",
            nom: "Ihmisen Academy",
            intitule: "Numérique Responsable – Ecoconception pour les Lead Dev, Développeurs et UX Designers",
            ville: "Toulouse",
            acquis: "› Attestation de fin de formation.",
            duree: 3,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.ihmisen.com\/NRE080_Ecoconception-pour-les-lead-dev-developpeurs-UX-designers.php"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Objectifs de la formation :\n- Avoir la théorie et la pratique des sujets Numérique responsable et Écoconception numérique\n- Comprendre les impacts du numérique inscrits dans des enjeux globaux\n- Maîtriser les différences de concepts et de valeurs présents dans le Numérique responsable\n- Aborder la démarche d’écoconception numérique de façon simple et outillée\n- Agir, en créant le réflexe de sobriété numérique au sein des futurs projets numériques\n- Réfléchir concrètement à l’écoconception d’un service numérique en minimisant son impact environnemental via un exercice d’optimisation\n\nLe programme détaillé est le suivant :\n1\/ Le contexte actuel, les enjeux environnementaux et sociaux\n2\/ L’impact global du numérique : Analyse du cycle de vie (ACV) du numérique et d’un projet de service numérique\n3\/ L’impact de la fabrication matérielle, de nos usages quotidiens du numérique et de la fin de vie\n4\/ Place à la sobriété et à la responsabilité : définition des concepts de sobriété numérique, low-tech, green IT, IT4Green, accessibilité, inclusion, illectronisme, écoconception numérique, Green-UX, respect des données personnelles, éthique et numérique responsable\n5\/ Atelier de réflexion collective afin de définir et de catégoriser des bonnes pratiques d’écoconception et de numérique responsable\n6\/ Comment je fais, moi ? Guides, référentiels et bonnes pratiques d’écoconception numérique tout en prêtant attention aux effets rebonds\n7\/ La démarche de l’écoconception numérique : intérêt, méthode, outils de mesure et démonstration avec des cas pratiques\n8\/ (Atelier pratique d’1 journée) Amélioration d’un projet web fictif dès la conception UX",
            type_organisme: "Entreprise délivrant des formations certifiées Qualiopi",
            nom: "Temesis",
            intitule: "Comprendre le numérique responsable & la démarche d’écoconception numérique, avec ateliers pratiques",
            ville: "Paris",
            acquis: "Validation de participation",
            duree: 1,
            modalites: "Présentiel et distanciel",
            url: "http:\/\/www.temesis.com"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Un atelier pour comprendre en équipe et de manière ludique les enjeux environnementaux du numérique.",
            type_organisme: "Association",
            nom: "La Fresque Du Numérique",
            intitule: "La Fresque Du Numérique",
            ville: "Toute la France",
            acquis: "Non",
            duree: 0.5,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.fresquedunumerique.org\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Permettre à un gestionnaire de services numériques d’adopter des comportements numériques responsables, conformément au référentiel du Label Numérique Responsable. Cette formation permet de comprendre le référentiel de l’INR et de pouvoir s’engager, avec la formation complémentaire « Démarche de Labellisation Numérique Responsable » dans la démarche de labellisation LNR.",
            type_organisme: "Agence de labellisation",
            nom: "Agence Lucie",
            intitule: "Maitriser les enjeux et piloter une démarche Numérique Responsable avec le label NR",
            ville: "Paris",
            acquis: "En route vers la labellisation\nOui, validation des compétences :\n-Comprendre les enjeux du numérique responsable et les comportements clefs à adopter pour les respecter.\n-Connaître le référentiel du Label du Numérique Responsable ainsi que les enjeux de cette thématique.\n-Savoir évaluer les enjeux, son niveau et ses axes d’amélioration sur le numérique responsable.\n\n-Identifier les priorités propres à son organisation dans le cadre de sa démarche NR. Se préparer à un audit NR externe.\n-Rédiger des engagements concrets, engageants, réalisables et conformes aux attentes d’un comité de labellisation.\n-Être capable de préparer l’auto-évaluation d’une organisation et de mener une démarche de labellisation LNR1 ou LNR2 dans une entreprise ou organisation.",
            duree: 3,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/docs.zohopublic.eu\/folder\/1ciiyda9edd3f0194450b9507cffdd32025d6"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Comprendre les liens entre les GAFAM et l'impact environnemental du numérique\nComment protéger ses données personnelles tout en limitant son impact numérique\nEtat des lieux du monde numérique\nParamétrage de smartphone pour réduire son empreinte énergétique\nTest de solution libre et open source\nPrésentation des alternatives (réseaux locaux et décentralisés)\nUtilisation d'outil d'audit et de test\nBonnes pratiques",
            type_organisme: "Formateur indépendant",
            nom: "TkPx",
            intitule: "Sobriété numérique et internet éco-responsable",
            ville: "La Bernardière",
            acquis: "Non",
            duree: 0.5,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/tkpx.eu\/formations-professionnelles\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "L'atelier Trivial Numérique Responsable est une solution ludique, sous forme d’un atelier, qui a fait ses preuves auprès d’organisations qui souhaitaient comme vous, intégrer leur système d’information dans leur stratégie RSE.\n\nL’animation de l’atelier comprend : un jeu de cartes par participant, une réunion de brief pour cadrage avant livraison, 4 affiches sur les impacts du numérique, une enquête en ligne post-atelier, une affiche récapitulative finale pour valoriser l’action en interne comme en externe.",
            type_organisme: "Entreprise de conseil",
            nom: "OM Conseil",
            intitule: "Atelier Trivial Numérique Responsable",
            ville: "Versailles",
            acquis: "Non",
            duree: 0.5,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.om-conseil.fr\/atelier-ludique-de-sensibilisation-au-numerique-responsable\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Au cœur des enjeux économiques, sociétaux et environnementaux, la transformation numérique bouleverse les modèles de consommation et fait naître des usages numériques aux réels impacts sociétaux et écologiques. Cette formation vous donne les clés pour amorcer une transformation numérique responsable.\n\nObjectifs pédagogiques\nÀ l’issue de la formation, le participant sera en mesure de :\nIdentifier les enjeux et les impacts environnementaux et sociétaux du numérique\nIntégrer les solutions d’un numérique plus responsable\nAmorcer une démarche de responsabilité numérique dans son organisation",
            type_organisme: "Organisme de formation",
            nom: "Orsys",
            intitule: "Amorcer une transformation numérique responsable",
            ville: "Puteaux-La défense",
            acquis: "Le formateur évalue la progression pédagogique du participant tout au long de la formation au moyen de QCM, mises en situation, travaux pratiques…\nLe participant complète également un test de positionnement en amont et en aval pour valider les compétences acquises.",
            duree: 1,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.orsys.fr\/formation-amorcer-une-transformation-numerique-responsable.html"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Formation Écoconception des services numériques\nL’écoconception est un levier majeur de réduction de l'impact du numérique. Comment et quand mettre en œuvre une démarche d’écoconception ? Quels outils, quels gains ? Cette formation vous permettra d’appliquer les concepts fondamentaux de l’écoconception à vos services numériques.\n\nObjectifs pédagogiques\nÀ l’issue de la formation, le participant sera en mesure de :\nComprendre les enjeux du numérique responsable\nConnaître les outils de mise en œuvre d'une démarche d'écoconception d’un service numérique\nÉvaluer les impacts environnementaux d'un service numérique\nIdentifier les leviers d’écoconception\nIntégrer une démarche d'écoconception dans le développement d’un service numérique\nMesurer les bénéfices d’une démarche d’écoconception",
            type_organisme: "Organisme de formation",
            nom: "Orsys",
            intitule: "Ecoconception des services numériques",
            ville: "Puteaux-La défense",
            acquis: "Le formateur évalue la progression pédagogique du participant tout au long de la formation au moyen de QCM, mises en situation, travaux pratiques…\nLe participant complète également un test de positionnement en amont et en aval pour valider les compétences acquises.",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.orsys.fr\/formation-ecoconception-des-services-numeriques.html"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Cette formation vous permettra d'identifier les principaux leviers d'action à mettre en œuvre pour devenir éco-responsable dans la gestion IT. Vous verrez comment réduire de façon significative certaines charges financières, notamment celles correspondant à la consommation électrique.\n\nObjectifs pédagogiques\nÀ l’issue de la formation, le participant sera en mesure de :\nConnaître les évolutions du Green IT\nAnalyser le cycle de vie du matériel informatique\nProposer différentes solutions pour réduire les coûts du data center\nMettre en place et suivre le projet Green IT",
            type_organisme: "Organisme de formation",
            nom: "Orsys",
            intitule: "Green IT, démarche et mise en œuvre",
            ville: "Puteaux-La défense",
            acquis: "Le formateur évalue la progression pédagogique du participant tout au long de la formation au moyen de QCM, mises en situation, travaux pratiques…\nLe participant complète également un test de positionnement en amont et en aval pour valider les compétences acquises.",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.orsys.fr\/formation-green-it-demarche-mise-en-oeuvre.html"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "A l'issue de cette formation, vous serez en mesure d'identifier les chantiers clés pour réduire la consommation électrique d'un centre informatique et serez capable de mettre en œuvre des solutions d'amélioration favorisant la performance énergétique et environnementale.\n\nObjectifs pédagogiques\nÀ l’issue de la formation, le participant sera en mesure de :\nOptimiser les différents projets Green IT\nRéaliser l'état des lieux des performances énergétique et environnementale\nChoisir les solutions IT appropriées aux besoins\nSélectionner les solutions liées à l'infrastructure",
            type_organisme: "Organisme de formation",
            nom: "Orsys",
            intitule: "Green Data Center, optimiser sa performance énergétique",
            ville: "Puteaux-La défense",
            acquis: "Le formateur évalue la progression pédagogique du participant tout au long de la formation au moyen de QCM, mises en situation, travaux pratiques…\nLe participant complète également un test de positionnement en amont et en aval pour valider les compétences acquises.",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.orsys.fr\/formation-green-data-center-optimiser-votre-performance-energetique.html"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "L’accessibilité est la capacité d’une ressource numérique à être utilisée au travers d’applications web ou mobiles par tout individu quelles que soient ses aptitudes. Ce séminaire vous enseignera l'essentiel pour être sensibilisé au sujet de l’accessibilité numérique, afin d'améliorer sa prise en compte.\n\nObjectifs pédagogiques\nÀ l’issue de la formation, le participant sera en mesure de :\nAppréhender les différents types de handicap\nComprendre l’accessibilité numérique, ses impacts et bénéfices\nConnaître les lois et les référentiels techniques",
            type_organisme: "Organisme de formation",
            nom: "Orsys",
            intitule: "Sensibilisation à l'accessibilité numérique",
            ville: "Puteaux-La défense",
            acquis: "Le formateur évalue la progression pédagogique du participant tout au long de la formation au moyen de QCM, mises en situation, travaux pratiques…\nLe participant complète également un test de positionnement en amont et en aval pour valider les compétences acquises.",
            duree: 1,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.orsys.fr\/formation-sensibilisation-a-l-accessibilite-numerique.html"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Grâce aux standards d’accessibilité mis en place, tous les utilisateurs handicapés peuvent percevoir, comprendre, naviguer et interagir sur le web. Ce cours vous présentera les connaissances essentielles et les bonnes pratiques à suivre pour viser l’accessibilité à toutes les étapes d’un projet web.\n\nObjectifs pédagogiques\nÀ l’issue de la formation, le participant sera en mesure de :\nConnaître et évaluer les critères d’accessibilité\nSavoir piloter la prise en compte de l’accessibilité aux différentes étapes d’un projet web\nAvoir des indicateurs de coût et de complexité\nIdentifier les enjeux et éléments clés pour réussir la prise en compte de l’accessibilité",
            type_organisme: "Organisme de formation",
            nom: "Orsys",
            intitule: "L'accessibilité numérique dans un projet",
            ville: "Puteaux-La défense",
            acquis: "Le formateur évalue la progression pédagogique du participant tout au long de la formation au moyen de QCM, mises en situation, travaux pratiques…\nLe participant complète également un test de positionnement en amont et en aval pour valider les compétences acquises.",
            duree: 1,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.orsys.fr\/formation-accessibilite-numerique-dans-un-projet.html"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "L'accessibilité des sites web et des applications mobiles est une nécessité commerciale, voire une obligation réglementaire dans certains cas. Le RGAA recense les critères d’accessibilité. Ce cours pratique présente le déroulement des audits RGAA pour les sites web ou pour les applications mobiles.\n\nObjectifs pédagogiques\nÀ l’issue de la formation, le participant sera en mesure de :\nConnaître les principaux référentiels d’accessibilité d’un site web ainsi que leurs relations\nÊtre capable de retrouver et d'expliquer les critères d'accessibilité du RGAA\nÊtre capable de retrouver et d'expliquer les critères d'accessibilité du RGAA-APPS\nSavoir trouver les outils de validation des critères d'accessibilité d'un site web ou d’une application mobile\nSavoir conduire l'audit RGAA d'un site web ou d’une application mobile et le restituer",
            type_organisme: "Organisme de formation",
            nom: "Orsys",
            intitule: "RGAA, auditer l'accessibilité d'un site web ou d'une application mobile",
            ville: "Puteaux-La défense",
            acquis: "Le formateur évalue la progression pédagogique du participant tout au long de la formation au moyen de QCM, mises en situation, travaux pratiques…\nLe participant complète également un test de positionnement en amont et en aval pour valider les compétences acquises.",
            duree: 5,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.orsys.fr\/formation-rgaa-audit-accessibilite-site-web-ou-application-mobile.html"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "- Impacts des TIC (Technologie Informatique Communication) sur l’environnement\n- Définition du Green IT et de ses principaux indicateurs\n- Les différents périmètres du numérique responsable",
            type_organisme: "Ecole d'Ingénieurs",
            nom: "ESAIP",
            intitule: "Comprendre les enjeux du numérique responsable",
            ville: "Saint-Barthélemy d'Anjou",
            acquis: "OUI \/\/ Crédits ECTS ?",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: "www.esaip.org"
        },
        {
            type_formation: "Formation initiale",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Comprendre l’écoconception logicielle (définition, périmètre, limites, etc.)\nMaîtriser les principes généraux d’écoconception des logiciels :- Architecture- Dimension sociale et environnementale\nLes Green Patterns",
            type_organisme: "Ecole d'Ingénieurs",
            nom: "ESAIP",
            intitule: "L’éco-conception logicielle",
            ville: "Saint-Barthélemy d'Anjou",
            acquis: "OUI \/\/ crédits ECTS",
            duree: 3,
            modalites: "Présentiel et distanciel",
            url: "www.esaip.org"
        },
        {
            type_formation: "Formation initiale",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Outils d’analyse d’un parc informatique\nMis en place d’une politique de gestion de l’énergie d’un réseau informatique\nOptimisation des infrastructures (Cloud, Virtualisation, …)\n...",
            type_organisme: "Ecole d'Ingénieurs",
            nom: "ESAIP",
            intitule: "Systèmes et Réseaux Eco-Responsables",
            ville: "Saint-Barthélemy d'Anjou",
            acquis: "OUI \/\/ Crédits ECTS",
            duree: 3,
            modalites: "Présentiel et distanciel",
            url: "www.esaip.org"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "- Comprendre les enjeux de l’accessibilité numérique\n- Comprendre les usages et besoins des personnes en situation de handicap\n- Identifier les éléments clés pour la bonne prise en compte de l'accessibilité numérique et du RGAA",
            type_organisme: "Entreprise de conseil et organisme de formation",
            nom: "Ideance",
            intitule: "Découvrir l’accessibilité numérique",
            ville: "Rouen",
            acquis: "Non",
            duree: 0.5,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/ideance.net\/fr\/formation-accessibilite\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "- Savoir piloter la prise en compte de l’accessibilité et du RGAA dans un projet\n- Avoir des indicateurs et des ordres de grandeur de coût \/ complexité\n- Identifier les enjeux et les éléments clés pour réussir la prise en compte de l’accessibilité numérique",
            type_organisme: "Entreprise de conseil et organisme de formation",
            nom: "Ideance",
            intitule: "Piloter la prise en compte de l’accessibilité",
            ville: "Rouen",
            acquis: "Non",
            duree: 0.5,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/ideance.net\/fr\/formation-accessibilite\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "- Savoir prendre en compte l’accessibilité et respecter le RGAA dans la conception fonctionnelle et graphique de sites ou d’applications web et mobiles\n- Connaître les règles et bonnes pratiques d’accessibilité qui touchent l’UX (User Experience) et l’UI (User Interface)",
            type_organisme: "Entreprise de conseil et organisme de formation",
            nom: "Ideance",
            intitule: "Concevoir des interfaces accessibles",
            ville: "Rouen",
            acquis: "Non",
            duree: 1,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/ideance.net\/fr\/formation-accessibilite\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "- Savoir prendre en compte l’accessibilité et respecter le RGAA dans la rédaction et publication de contenus (web et réseaux sociaux)\n- Connaître les règles d’accessibilité numérique pour les contenus web (textes, liens, images, vidéos, etc.)",
            type_organisme: "Entreprise de conseil et organisme de formation",
            nom: "Ideance",
            intitule: "Rédiger et publier des contenus accessibles",
            ville: "Rouen",
            acquis: "Non",
            duree: 1,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/ideance.net\/fr\/formation-accessibilite\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "- Savoir prendre en compte l’accessibilité et respecter le RGAA lors du développement technique d’un projet web\n- Connaître les règles d’accessibilité web (HTML, CSS, JavaScript)\n- Savoir évaluer l’accessibilité de ses développements web",
            type_organisme: "Entreprise de conseil et organisme de formation",
            nom: "Ideance",
            intitule: "Développer des sites et applications web accessibles",
            ville: "Rouen",
            acquis: "Non",
            duree: 3,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/ideance.net\/fr\/formation-accessibilite\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "- Savoir prendre en compte l’accessibilité lors du développement d’applications mobiles\n- Connaître les règles d’accessibilité mobile (iOS et Android)\n- Savoir évaluer l’accessibilité de ses applications mobiles",
            type_organisme: "Entreprise de conseil et organisme de formation",
            nom: "Ideance",
            intitule: "Développer des applications mobiles accessibles",
            ville: "Rouen",
            acquis: "Non",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/ideance.net\/fr\/formation-accessibilite\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Objectifs de la formation certifiée Qualiopi :\n- Avoir la théorie et la pratique des sujets Numérique responsable et Écoconception numérique\n- Comprendre les impacts du numérique inscrits dans des enjeux globaux\n- Maîtriser les différences de concepts et de valeurs présents dans le Numérique responsable\n- Aborder la démarche d’écoconception numérique de façon simple et outillée\n- Agir, en créant le réflexe de sobriété numérique au sein des futurs projets numériques\n- Réfléchir concrètement à l’écoconception d’un service numérique en minimisant son impact environnemental via un exercice d’optimisation (atelier participatif d'1 journée)",
            type_organisme: "Entreprise de conseil et organisme de formation",
            nom: "Temesis",
            intitule: "Comprendre le numérique responsable & la démarche d’écoconception numérique",
            ville: "Paris",
            acquis: "- Évaluation des acquis au cours de la formation sous forme de quiz ludo-interactif\n- Questionnaire d’évaluation en fin de session dans lequel le participant évalue les apports de la formation et sa capacité à les mettre en œuvre",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/temesis.hop3team.com\/formations\/formation-complete-comprendre-le-numerique-responsable-la-demarche-d-ecoconception-numer"
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "Université de Pau et des Pays de l'Adour",
            departement_uf: "IUT De Bayonne \/ Dépt. Informatique",
            cformation: "BUT (Bac+3)",
            objectif: "Un ou plusieurs modules \/ unités d'enseignement",
            contenu: "BUT 2 - 1 Séance de cours de sensibilisation à la conso du numérique (1h)",
            type_organisme: "Enseignement supérieur",
            nom: "",
            intitule: "",
            ville: "Anglet",
            acquis: "",
            duree: 1,
            modalites: "Présentiel",
            url: ""
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "Université de Pau et des Pays de l'Adour",
            departement_uf: "IUT De Bayonne \/ Dépt. Informatique",
            cformation: "BUT (Bac+3)",
            objectif: "Un ou plusieurs modules \/ unités d'enseignement",
            contenu: "BUT 3\/LP - Séance de cours sur sensibilisation, présentation de bonnes pratiques + travail collectif (exposés) thématiques sur des points spécifiques en lien avec l'écoconception, la conso, des règles de bonnes pratiques, etc. (15h)",
            type_organisme: "Enseignement supérieur",
            nom: "",
            intitule: "",
            ville: "Anglet",
            acquis: "",
            duree: 2,
            modalites: "Présentiel",
            url: ""
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "Université de Pau et des Pays de l'Adour",
            departement_uf: "Master informatique, parcours SIGLIS",
            cformation: "Master (Bac+5)",
            objectif: "Un ou plusieurs modules \/ unités d'enseignement",
            contenu: "L'objectif du cours \"Green IT\" est d'introduire la définition du Green IT et du développement durable en informatique, et de comprendre les principaux concepts en lien avec la mesure de l'énergie dans les systèmes informatiques, l'éco-conception de logiciels durables, et les défis énergétiques dans le cloud computing et les centres de données.",
            type_organisme: "Enseignement supérieur",
            nom: "Université de Pau et des Pays de l'Adour",
            intitule: "Green It",
            ville: "Anglet",
            acquis: "Crédits ECTS 2.0",
            duree: 2,
            modalites: "Présentiel",
            url: "https:\/\/formation.univ-pau.fr\/fr\/catalogue\/sciences-technologies-sante-STS\/master-14\/master-informatique-79_1\/m1-m2-parcours-systemes-informatiques-pour-le-genie-de-la-logistique-industrielle-et-des-services-siglis-126_1\/amelioration-continue-K1C9B5WX\/green-it-K1C9DJJS.html"
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "Université de Bordeaux",
            departement_uf: "UF Informatique",
            cformation: "Licence (Bac+3)",
            objectif: "Un ou plusieurs modules \/ unités d'enseignement",
            contenu: "L1 : fresque du climat + petit projet autour du développement durable en lien avec le numérique",
            type_organisme: "Enseignement supérieur",
            nom: "Université de Bordeaux",
            intitule: "",
            ville: "Bordeaux",
            acquis: "",
            duree: 0.5,
            modalites: "présentiel",
            url: ""
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "Université de Bordeaux",
            departement_uf: "UF Informatique",
            cformation: "Licence (Bac+3)",
            objectif: "Un ou plusieurs modules \/ unités d'enseignement",
            contenu: "L3 : 20h de Cours, Ateliers et projets sur les thématiques :\nurgence climatique, place du numérique, impacts directs, indirects, santé, eco-geste, eco-conception",
            type_organisme: "Enseignement supérieur",
            nom: "Université de Bordeaux",
            intitule: "",
            ville: "Bordeaux",
            acquis: "",
            duree: 3,
            modalites: "présentiel",
            url: ""
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "Université de Bordeaux",
            departement_uf: "UF Informatique",
            cformation: "Autre",
            objectif: "Une intervention isolée (séminaire ou séance de cours)",
            contenu: "- Cours de 6h à l'école doctorale math-info : urgence climatique, place du numérique, impacts directs, indirects, santé, ecogeste, eco-conception",
            type_organisme: "Enseignement supérieur",
            nom: "Université de Bordeaux",
            intitule: "",
            ville: "Bordeaux",
            acquis: "",
            duree: 1,
            modalites: "présentiel",
            url: ""
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "Université de Bordeaux",
            departement_uf: "UF Informatique",
            cformation: "Autre",
            objectif: "Une intervention isolée (séminaire ou séance de cours)",
            contenu: "- Séminaire d'une heure sur une vue générale de l'impact du numérique dans l'EUR Numerics (Master-Doctorat)",
            type_organisme: "Enseignement supérieur",
            nom: "Université de Bordeaux",
            intitule: "",
            ville: "Bordeaux",
            acquis: "",
            duree: 0.5,
            modalites: "présentiel",
            url: ""
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "Université de Lille",
            departement_uf: "Polytech Lille",
            cformation: "Ecole d'ingénieur (Bac+5)",
            objectif: "Un ou plusieurs modules \/ unités d'enseignement",
            contenu: "UE Informatique et développement durable : 2 h de cours + 2x2 h de TD",
            type_organisme: "Enseignement supérieur",
            nom: "Polytech Lille",
            intitule: "\nInformatique et développement durable\n\n",
            ville: "Lille",
            acquis: "",
            duree: 1,
            modalites: "présentiel",
            url: "https:\/\/www.polytech-lille.fr\/formation\/8-specialites\/informatique-et-statistique\/"
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "La Rochelle Université",
            departement_uf: "IUT de la Rochelle \/ DUT Informatique",
            cformation: "BUT (Bac+3)",
            objectif: "Un ou plusieurs modules \/ unités d'enseignement",
            contenu: "Approche de la démarche d'éco-conception des services numériques (impact du numérique, bonnes pratiques, mesure de performance, ...)",
            type_organisme: "Enseignement supérieur",
            nom: "La Rochelle Université",
            intitule: "DUT Informatique - parcours Environnement Connecté Intelligent",
            ville: "La Rochelle",
            acquis: "",
            duree: "",
            modalites: "présentiel",
            url: ""
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "Institut Mines Télécom - Télécom SudParis",
            departement_uf: "Informatique",
            cformation: "Ecole d'ingénieur (Bac+5)",
            objectif: "Un ou plusieurs modules \/ unités d'enseignement",
            contenu: "Module (en construction) destiné aux élèves ingénieur (niveau M1)\nTitre : Numérique et consommation énergétique : agir du processeur au logiciel\nL’objectif du module est de fournir aux futurs ingénieurs des méthodes qui leur permettent d’intégrer l’aspect consommation électrique d’un système informatique dès la conception de ces systèmes. Afin d’acquérir cette compétence, nous proposons des cours et des Tps qui permettent de prendre en main\n- des instruments de mesure de la consommation énergétique sur différents équipements informatiques\n- de modéliser la consommation énergétique de systèmes plus complexes",
            type_organisme: "Enseignement supérieur",
            nom: "IMT - Telecom Sud Paris",
            intitule: "Numérique et consommation énergétique : agir du processeur au logiciel",
            ville: "Évry",
            acquis: "",
            duree: "",
            modalites: "Présentiel",
            url: "https:\/\/www-inf.telecom-sudparis.eu\/COURS\/CSC4535\/numenv\/?page=numenv"
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "La Rochelle Université",
            departement_uf: "Formation Numérique responsable",
            cformation: "Autre",
            objectif: "Présenter de façon globale et cohérente les nuisances générées par les équipements informatiques et ce, durant l’ensemble de la durée de vie de chaque équipement : aux différents stades de fabrication, d’utilisation (consommation d’énergie) et de fin de vie (gestion\/récupération des déchets, pollution, épuisement des ressources non renouvelables)\nProposer une méthodologie et des outils pour une mise en pratique du numérique responsable\nPermettre aux stagiaires de valider un certificat de connaissances « Numérique responsable » créée par le formateur et l’Institut du Numérique responsable",
            contenu: "Le concept de numérique responsable vise à réduire l’empreinte écologique et sociale des Technologies de l’Information et de la Communication.\nL’objectif de cette formation est d’initier au concept de numérique responsable. Il s’agit de :\nPrésenter de façon globale et cohérente les nuisances générées par les équipements informatiques et ce, durant l’ensemble de la durée de vie de chaque équipement : aux différents stades de fabrication, d’utilisation (consommation d’énergie) et de fin de vie (gestion\/récupération des déchets, pollution, épuisement des ressources non renouvelables)\nProposer une méthodologie et des outils pour une mise en pratique du numérique responsable\nPermettre aux stagiaires de valider un certificat de connaissances « Numérique responsable » créée par le formateur et l’Institut du Numérique responsable",
            type_organisme: "Enseignement supérieur",
            nom: "Université de La Rochelle",
            intitule: "Le numérique responsable",
            ville: "La Rochelle",
            acquis: "",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/formations.univ-larochelle.fr\/formation-numerique-responsable"
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "IMT Mines Albi",
            departement_uf: "GSI \/ ETN",
            cformation: "Ecole d'ingénieur (Bac+5)",
            objectif: "Un ou plusieurs modules \/ unités d'enseignement",
            contenu: "Module autour du numérique responsable :\n- acculturation sur le sujet\n- sensibilisation aux impacts environnementaux du numérique\n- sensibilisation + atelier écoconception\n- sensibilisation + atelier accessibilité\n- sensibilisation cybersécurité",
            type_organisme: "Enseignement supérieur",
            nom: "IMT Mines Albi",
            intitule: "",
            ville: "Albi",
            acquis: "",
            duree: "",
            modalites: "Présentiel",
            url: ""
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "Université Capitole 1, Toulouse",
            departement_uf: "2IS",
            cformation: "Master (Bac+5)",
            objectif: "Un ou plusieurs modules \/ unités d'enseignement",
            contenu: "Module autour du numérique responsable (en anglais) :\n- acculturation sur le sujet\n- sensibilisation aux impacts environnementaux du numérique\n- sensibilisation + atelier écoconception\n- sensibilisation + atelier accessibilité\n- sensibilisation cybersécurité",
            type_organisme: "Enseignement supérieur",
            nom: "Université Toulouse 1 Capitole",
            intitule: "",
            ville: "Toulouse",
            acquis: "",
            duree: "",
            modalites: "Présentiel",
            url: "https:\/\/miage.ut-capitole.fr\/master-2is-innovative-information-systems--611942.kjsp"
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "Université Paul Valéry, Montpellier",
            departement_uf: "MIASHS",
            cformation: "Master (Bac+5)",
            objectif: "Un ou plusieurs modules \/ unités d'enseignement",
            contenu: "Sensibilisation au numérique responsable avec un focus sur l'écoconception et l'accessibilité, cours et ateliers.",
            type_organisme: "Enseignement supérieur",
            nom: "Université Paul Valéry, Montpellier",
            intitule: "",
            ville: "Montpellier",
            acquis: "",
            duree: "",
            modalites: "Présentiel",
            url: "https:\/\/ufr6.www.univ-montp3.fr\/fr\/formation\/masters\/master_miashs"
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "IMT Alès",
            departement_uf: "2IA",
            cformation: "Ecole d'ingénieur (Bac+5)",
            objectif: "Une intervention isolée (séminaire ou séance de cours)",
            contenu: "Sensibilisation au numérique responsable et à l'écoconception.",
            type_organisme: "Enseignement supérieur",
            nom: "IMT Mines Alès",
            intitule: "",
            ville: "Ales",
            acquis: "",
            duree: "",
            modalites: "Présentiel",
            url: "https:\/\/www.imt-mines-ales.fr\/formations\/domaines-dexcellence\/informatique-et-intelligence-artificielle"
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "Mines Saint-Etienne",
            departement_uf: "Management Responsable et Innovation \/ Cycle ICM + ISMIN",
            cformation: "Ecole d'ingénieur (Bac+5)",
            objectif: "Un ou plusieurs modules \/ unités d'enseignement",
            contenu: "Objectifs du cours \"Green IT\" intégré au Tronc Commun Climat, Environnement, Développement Durable :\n- Replacer l’homme au cœur des réflexions sur le phénomène de transition numérique\n- Définir ce qu’est la transition numérique et en dresser un tableau chiffré\n- Comprendre comment les organisations peuvent s’approprier ce thème : invitation à une conception « green » du SI dans une démarche RSE\n- Appréhender les approches d'éco-conception (web et du SI).\n\nFresque du numérique réalisée sur l'ensemble des étudiants en 2A de cycle d'ingénieurs du parcours ISMIN et sur une trentaine d'étudiants du cycle ICM",
            type_organisme: "Enseignement supérieur",
            nom: "Mines Saint-Etienne",
            intitule: "",
            ville: "Saint-Étienne",
            acquis: "",
            duree: "",
            modalites: "Présentiel",
            url: ""
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "Chaire Impact Positif Audencia \/ Plateforme RSE de la métropole nantaise",
            departement_uf: "-",
            cformation: "Autre",
            objectif: "Une intervention isolée (séminaire ou séance de cours)",
            contenu: "Pour sensibiliser les entreprises à ces différents enjeux, 10 réseaux nantais se sont impliqués et ont co-construit un module d’accompagnement de deux heures sur la thématique : #NumériqueTraining.\n\nLe contenu s’articule autour de trois grands sujets :\nNumérique durable et soutenable\nNumérique inclusif\nNumérique éthique",
            type_organisme: "Enseignement Supérieur",
            nom: "Audencia",
            intitule: "#NumériqueTraining",
            ville: "Nantes",
            acquis: "",
            duree: 0.5,
            modalites: "Distanciel",
            url: "https:\/\/rse.metropole.nantes.fr\/agir\/boite-a-outils-rse-nantes\/se-former-au-numerique-responsable\/"
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "IMT Atlantique",
            departement_uf: "LUSSI",
            cformation: "Ecole d'ingénieur (Bac+5)",
            objectif: "Un ou plusieurs modules \/ unités d'enseignement",
            contenu: "UE Face cachée du numérique : impacts environnementaux, sociaux et sociétaux de l'essor des nouvelles technologies (60H dont 40H encadrées)\n\nPrésentation de l’UE :\n\nA l’heure où la réduction de notre empreinte écologique est perçue comme une nécessité, on ne peut ignorer l’impact environnemental du développement des technologiques numériques. Dans un rapport de l’ADEME (Agence de l'Environnement et de la Maîtrise de l'Énergie) publié en 2019, ce secteur est décrit comme « responsable de 4 % des émissions mondiales de gaz à effet de serre et la forte augmentation des usages laisse présager un doublement de cette empreinte carbone d'ici 2025 » (« La face cachée du numérique », ADEME). Outre son impact en termes de consommation énergétique, la place du numérique, toujours plus grande dans nos sociétés, a aussi de nombreux impacts sociaux et sociétaux et soulève des questions éthiques, qu’un ingénieur, acteur de la transition numérique, ne peut pas ignorer.\n\nL’objectif de cette UE est de fournir aux élèves :\n- les clés pour appréhender les enjeux environnementaux, sociaux et sociétaux de la transformation numérique des entreprises et de la société\n- une boîte à outils qui leur permettra de contribuer à une transformation numérique responsable\n\nOrganisation de l'UE :\n- Un état des lieux synthétique et exhaustif des impacts du numérique : réalisé à partir d’un atelier pour comprendre en équipe et de manière ludique les enjeux environnementaux, sociaux et sociétaux du numérique (Fresque du numérique).\n- Des focus sur une série de thèmes : numérique et environnement, éthique du numérique, numérique et géopolitique, numérique responsable, numérique et travail\nLes élèves se familiariseront avec les notions d'économie circulaire, d'éco-conception, d'analyse du cycle de vie, de métaux rares, de numérique responsable, de digital labor, etc. Ils assisteront à des cours et conférences et débattront afin de creuser chacun de ces thèmes et d'appréhender des éléments de solutions. La notion d'analyse de cycle de vie sera notamment abordée via la réalisation d'une ACV simplifiée.\n- Une séance d'échanges avec des alumnis",
            type_organisme: "Enseignement Supérieur",
            nom: "IMT Atlantique",
            intitule: " Face cachée du numérique : impacts environnementaux, sociaux et sociétaux de l'essor des nouvelles technologies",
            ville: "Nantes",
            acquis: "",
            duree: 8,
            modalites: "Présentiel",
            url: "https:\/\/moodle.imt-atlantique.fr\/course\/view.php?id=1429"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "Comprendre les concepts fondamentaux et la démarche de l’éco-conception de services numériques.\nIntégrer les étapes clés et les outils.\nMettre en œuvre les bonnes pratiques de l’éco-conception appliquée aux sites Web et autres services numériques.",
            contenu: "DEFINITIONS \nL’éco–conception : un axe du numérique responsable\nL’éco–conception de services numériques\nL’éco–conception et l’accessibilité\n\n\nDEMARCHE ET OUTILS \nLes étapes clés de la démarche\nLes outils d’évaluation d’impact et de bonnes pratiques\nEnjeux et bénéfices\n\n\nATELIER PRATIQUE\nAnalyse de parcours utilisateur et de l’impact environnemental d’un site\nIdentification des principaux leviers d’action\nExemples d’amélioration\n\n\nCHECK-LIST DES BONNES PRATIQUES",
            type_organisme: "Professionnel",
            nom: "Agence Lucie",
            intitule: "Introduction à l’éco-conception de services numériques",
            ville: "Paris",
            acquis: "",
            duree: 1,
            modalites: "Distanciel",
            url: "https:\/\/agence-lucie.com\/formation\/introduction-eco-conception-services-numeriques\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "S'approprier la démarche d'écoconception de service numérique au travers de l'écoconception d'un site web et savoir la situer par rapport aux démarches plus larges de conception responsable de service numérique et de Green IT\nMaîtriser les concepts fondamentaux de l'écoconception et savoir les appliquer dans le domaine du numérique et notamment aux services numériques\nMaîtriser la méthodologie et les outils permettant d'éco-concevoir un service numérique\nSavoir évaluer la performance et la maturité environnementale d'un service numérique",
            contenu: "Jour 1 - Apports théoriques\n\nEtat de l’art écoconception de services numériques\n\nDu développement durable à l'écoconception des services numériques\nIdentifier les enjeux du développement durable appliqué au numérique\nEvaluer le potentiel de l'écoconception pour réduire l’empreinte écologique associée\nDécouvrir les principes fondamentaux de l'écoconception des équipements\nL'écoconception des services numériques\nAppréhender l’écoconception des services numériques (définition, périmètre, limites, etc.)\nMaîtriser les principes généraux d’écoconception des services numériques\nRetours d’expérience\n\nLes outils\n\nLa démarche projet\nLes référentiels de bonnes pratiques\nLes outils d’évaluation\nLes bonnes pratiques prioritaires : survol de l’ensemble des bonnes pratiques adaptées à chaque étape du cycle de vie puis étude de chacune d’elle (quelques dizaines en détail)\nExpression du besoin\nConception graphique et technique\nDéveloppement \/ programmation\nDéploiement \/ mise en production\nFin de vie\n\nJour 2 - Mise en pratique\n\nAtelier analyse\nL’intervenant et les participants sélectionnent un service numérique à étudier. Le formateur déroule le projet en accéléré pour aider les participants à concrétiser la démarche, à comprendre l’enchaînement des étapes, et à utiliser les outils\n\nAnalyse en groupe\nLes participants réalisent seuls à l'écoconception d’un service numérique de leur choix\n\nJour 3 - Restitutions et certification\n\nRestitution\nLes participants restituent le résultat de leurs analyses au formateur qui joue le rôle de client.\nL’intervenant identifie les points acquis et ceux sur lesquels il faut encore progresser.\n",
            type_organisme: "Professionnel",
            nom: "Octo Academy",
            intitule: "(Éco)conception responsable de service numérique",
            ville: "Paris",
            acquis: "Certificat de connaissance GreenIT",
            duree: 3,
            modalites: "Présentiel",
            url: "https:\/\/www.octo.academy\/formations\/formation\/151\/ecoconception-responsable-de-service-numerique\/1465\/"
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Impact de l'informatique sur l'environnement\nFabrication\nUtilisation\nDestruction\/Recyclage\nL'informatique au service de l'environnement\nUn monde toujours plus connecté ...\nEtat des lieux\nPerspectives\n... et des ressources finies\nEtat des lieux\nPerspectives\nNos moyens d'action\nRègles citoyennes de bonne conduite\nEvolution de la legislation (EU)\nPerspectives académiques, de la recherche à l'enseignement",
            type_organisme: "Académique",
            nom: "Ecoles des Mines de Nantes",
            intitule: "GreenIT : A practical study from IoT to the Cloud",
            ville: "Nantes",
            acquis: "",
            duree: 5,
            modalites: "Présentiel",
            url: "http:\/\/greenit.menaud.fr\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "Maîtriser la démarche et la méthodologie d’écoconception logicielle\nSavoir identifier les bonnes pratiques à mettre en œuvre\nSavoir mesurer la performance environnementale d’un logiciel \/ site web",
            contenu: "État de l’art écoconception de services numériques\nDu développement durable à l'écoconception des logiciels\n\nComprendre les enjeux du développement durable appliqué aux TIC\nEvaluer le potentiel de l'écoconception des TIC pour réduire l’empreinte écologique associée\nDécouvrir les principes fondamentaux de l'écoconception des équipements\n\nL'écoconception des logiciels\n\nComprendre l’écoconception logicielle (définition, périmètre, limites, etc.)\nMaîtriser les principes généraux d’écoconception des logiciels:\n- Architecture\n- Dimension sociale\n- Dimension environnementale\n\nRetours d’expérience\n\nLes outils\nCette partie illustre la démarche en présentant les outils et méthodologies adaptés aux services en ligne.\n\nLa démarche projet\n\nLes référentiels de bonnes pratiques\n\nLes outils d’évaluation\n\nLes bonnes pratiques prioritaires\n\nSurvol de l’ensemble des bonnes pratiques adaptées à chaque étape du cycle de vie puis étude de chacune d’elle (quelques dizaines en détail):\n- Expression du besoin\n- Conception graphique et technique\n- Développement \/ programmation\n- Déploiement \/ mise en production\n- Fin de vie\n\nAtelier analyse\n\nLe pédagogue et les participants sélectionnent un service numérique à étudier. Le formateur déroule le projet en accéléré pour aider les participants à concrétiser la démarche, à comprendre l’enchaînement des étapes, et à utiliser les outils.\n\nAtelier analyse\n\nLes participants poursuivent l’analyse du service numérique sur la première partie de la matinée. Le formateur les aide à réaliser cette analyse.\n\nRestitution\nLes participants restituent le résultat de leurs analyses au formateur qui joue le rôle de client. Le formateur identifie les points acquis et ceux sur lesquels il faut encore progresser.",
            type_organisme: "Professionnel",
            nom: "PLB Consultant",
            intitule: "Formation Éco-Conception de Services Numériques",
            ville: "Levallois-Perret\n",
            acquis: "Certification \"Eco Conception Web\"\nIl se présente sous la forme d'un QCM de 60 questions auxquelles il vous faudra répondre en 60 minutes. Il vous faut un score de 65% afin d'obtenir votre certification.",
            duree: 3,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.plb.fr\/formation\/oracle\/formation-eco-conception-logiciels,5-700598.php"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "Expliquer l’éco-conception et la pensée cycle de vie\nIdentifier les enjeux pour l’entreprise : réglementaire, stratégique, économique\nRéaliser une ACV simplifiée et exploiter ses résultats\nDéfinir les étapes pour mettre en place une démarche d’éco-conception selon la norme CEN TS 16524 \/ NF E 01 005 (méthodologie d’éco-conception pour les produits de la mécanique)\nExpliquer le lien entre la démarche d’éco-conception et les exigences du référentiel ISO 14001:2015 relatives à la perspective cycle de vie du produit",
            contenu: "Module 1 – Ecoconception et pensée cycle de vie : comprendre l’éco-conception\nPrincipes et notions fondamentales de l’éco-conception\nModule 2 – Réglementations et normes applicables à l’éco-conception : appréhender le cadre réglementaire et normatif de l’éco-conception\nRéglementations\nPanorama des réglementations applicables\nZoom sur certaines réglementations : Reach, RoHS, Directive ErP (Ecodesign), filières REP (DEEE, VHU)\nNormes\nPanorama des normes applicables\nModule 3 – Enjeux stratégiques et de marché : comprendre les intérêts d’une démarche d’éco-conception pour son entreprise\nEnjeux stratégiques\nImage\nCommunication : normes et référentiels pour l'affichage environnemental produit\nEnjeux de marché\nEnjeux économiques\nModule 4 – Méthodes et outils de l'éco-conception : appréhender les approches possibles, et comprendre les principes de l'ACV\nPanorama des outils\nZoom sur l'évaluation environnementale par l’analyse du cycle de vie (ACV)\nPrincipes\nCadre méthodologique\nLogiciels et bases de données de modélisation\nIllustration par une ACV simplifiée sur une étude de cas avec Ecodesign Studio\nModule 5 – Réalisation d'une démarche d'éco-conception : mise en œuvre dans le processus de développement produit de son entreprise\nPrincipes et structure générale de la démarche suivant la norme CEN TS 16524 \/ NF E 01 005\nRéalisation d'une analyse stratégique du produit\nAnalyse environnementale : établir le profil d'un produit de référence\nIdentification et priorisation des pistes d’amélioration\nMise en place d'indicateurs et suivi de l'amélioration environnementale\nBilan et communication des résultats obtenus\nIllustration de chaque étape par une étude de cas à l'aide du logiciel Ecodesign Studio\nModule 6 – Intégration de la démarche d'éco-conception dans son système de management environnemental : faire le lien avec les exigences sur la perspective cycle de vie du produit du référentiel ISO 14001:2015\nStructure de l'approche et principe d'amélioration continue\nLes exigences sur la perspective cycle de vie du produit du référentiel ISO 14001:2015\nDéclinaison de ses exigences environnementales vis-à-vis des parties intéressées externes",
            type_organisme: "Organisme de formation",
            nom: "CETIM",
            intitule: "Comprendre et mettre en place une démarche éco-conception",
            ville: "Saint-Étienne",
            acquis: "",
            duree: 2,
            modalites: "Distanciel",
            url: "https:\/\/www.cetim.fr\/formation\/formation\/Conception\/Eco-conception\/comprendre-et-mettre-en-place-une-demarche-eco-conception-g10"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "Expliquer l’éco-conception et la pensée cycle de vie ;\nIdentifier les enjeux pour l’entreprise : réglementaire, stratégique, économique ;\nRéaliser une ACV simplifiée et exploiter ses résultats ;\nMettre en place une démarche d’éco-conception étape par étape selon la norme CEN TS 16524 \/ NF E 01 005 ;\nFaire le lien entre la démarche d’éco-conception et les exigences du référentiel ISO 14001:2015.",
            contenu: "Module 1 : Ecoconception et pensée cycle de vie\nPrincipes et notions fondamentales de l’éco-conception\nModule 2 :Réglementations et normes applicables à l’éco-conception\nPanorama des réglementations\nZoom sur certaines réglementations : Reach, RoHS, Directive ErP (Ecodesign), filières REP (DEEE, VHU)\nPanorama des normes\nModule 3 : Enjeux stratégiques et de marché\nEnjeux et intérêts d’une démarche d’éco-conception pour son entreprise\nRéférentiels de communication de la performance environnementale de ses produits\nModule 4 : Méthodes et outils de l'éco-conception\nPanorama des outils\nZoom sur l'évaluation environnementale par l’analyse du cycle de vie (ACV)\nIllustration par une ACV simplifiée sur une étude de cas avec le logiciel Ecodesign Studio\nModule 5 : Réalisation d'une démarche d'éco-conception\nMise en œuvre étape par étape de la démarche suivant la norme CEN TS 16524 \/ NF E 01 005\nMise en pratique sur une étude de cas avec le logiciel Ecodesign Studio\nModule 6 : Intégration de la démarche d'éco-conception dans son système de management environnemental\nStructure de l'approche et principe d'amélioration continue\nLien entre la démarche et les exigences sur la perspective cycle de vie du référentiel ISO 14001:2015\nDéclinaison de ses exigences environnementales vis-à-vis des parties intéressées externes",
            type_organisme: "Organisme de formation",
            nom: "CETIM",
            intitule: "Innover sur vos produits : comprendre et mettre en place une démarche éco-conception",
            ville: "Mulhouse",
            acquis: "",
            duree: 2,
            modalites: "Distanciel",
            url: "https:\/\/www.cetim.fr\/formation\/formation\/Conception\/Eco-conception\/innover-sur-vos-produits-comprendre-et-mettre-en-place-une-demarche-eco-conception-w-g10"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "Objectifs pédagogiques\nRéaliser et interpréter une ACV.\nUtiliser les fonctions principales de l'outil SimaPro.\nComprendre les connexions entre l'ACV et l'éco-conception des produits",
            contenu: "Principes de l'Analyse du cycle de vie (ACV)\nContexte normatif et réglementaire (normes ISO 14040\/44).\nPrésentation des étapes de l'ACV.\nPrésentation des différentes bases de données.\nPrésentation des différentes méthodes de calcul.\nRappel des règles de la communication environnementale sur la base d'une ACV.\nPrésentation du logiciel SimaPro et mise en application pratique\nPrésentation du domaine d'application et des fonctions principales.\nÉtude de cas sur un exemple industriel incluant :\nla collecte de données ;\nla modélisation du cycle de vie d'un produit ;\nle choix des méthodes de calcul ;\nl'interprétation des résultats ;\nle lien avec l'éco-conception (amélioration de produit d'un point de vue environnemental).",
            type_organisme: "Organisme de formation",
            nom: "CETIM",
            intitule: "Savoir réaliser une Analyse du cycle de vie (ACV) d'un produit",
            ville: "Paris",
            acquis: "",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.cetim.fr\/formation\/formation\/Industrie-du-Futur\/Eco-conception\/savoir-realiser-une-analyse-du-cycle-de-vie-acv-d-un-produit-g11"
        },
        {
            type_formation: "Formation initiale",
            structure: "publique (université, école d'ingénieur, etc.)",
            etablissement: "ESIEE[IT]",
            departement_uf: "",
            cformation: "",
            objectif: "Au terme de cette formation, tout participant saura :\n\nQuelles sont les grandes tendances en matière de numérique responsable\nProposer des solutions pour réduire les coûts\nMettre en place un projet Green IT",
            contenu: "Module 1. Green IT : Contexte et enjeux\nL’augmentation de la consommation énergétique\nLes premières initiatives dans le domaine du recyclage\nDéfinition du Green IT\nEffet de mode, effet marketing ou effet durable ?\nUn enjeu majeur pour tous\nModule 2. Le Green IT, du projet à la mise en œuvre\nSix grandes étapes fondamentales\nInitialisation de la stratégie Green IT dans l’entreprise\nAnalyse et audit de l’existant\nPondération des indicateurs de suivi en fonction de l’entreprise\nIntégration des résultats sur une échelle de maturité\nOrientation stratégique et urbanisation du système d’information\nMise en œuvre des préconisations et accompagnement au changement\nExemple de check-list (Informatique et bureautique, Data-centers, Cycle de vie du matériel, Télécommunications)\nDe l’origine du poste de travail aux technologies actuelles\nLa notion de clients légers\nL’extinction du poste de travail\nLes applications informatiques naturellement écolophobes\nModule 3. L’achat responsable\nL’éco-conception, initiatrice de l’achat responsable\nLes principaux éco-labels\nL’utilisation des éco-labels au quotidien\nModule 4. Bien gérer les impressions\nConstats et impacts de nos habitudes d’impression\nMaîtriser ses impressions\nModule 5. Le parc informatique dans son ensemble\nDe l’origine du poste de travail aux technologies actuelles\nLa notion de clients légers\nL’extinction du poste de travail\nLes applications informatiques naturellement écolophobes\nModule 6. Évoluer vers des datacenters verts\nPlongée au cœur des datacenters\nLe calculateur Dell\nLes datacenters green\nModule 7. Gérer la fin de vie du matériel\nPourquoi recycler ?\nRéglementation\nRecyclage et réutilisation au quotidien\nModule 8. La démarche dans l’entreprise et les administrations\nLa gouvernance de l’entreprise à l’heure du Green IT\nLes collectivités comme moteurs du changement\n\"",
            type_organisme: "Académique",
            nom: "ESIEE[IT]",
            intitule: "ESIEE (CCI Paris)",
            ville: "Pontoise",
            acquis: "QCM - Certificat ESIEE-IT",
            duree: 2,
            modalites: "Distanciel",
            url: "https:\/\/www.esiee-it.fr\/fr\/formation-continue-green-it-le-numerique-responsable-grit0"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "TEMESIS",
            departement_uf: "",
            cformation: "",
            objectif: "Comprendre les enjeux du numérique responsable et de l’écoconception numérique, inscrits dans des enjeux globaux ;\nMaîtriser les différences de concepts et de valeurs présents dans le Numérique responsable ;\nAborder la démarche d’écoconception numérique de façon simple et outillée ;\nAgir, en créant le réflexe de sobriété numérique au sein des futurs projets.",
            contenu: "Cette formation permet de comprendre les enjeux actuels ainsi que l’impact social et environnemental du numérique. Elle aborde ensuite les moyens de déploiement d’une démarche de Numérique responsable. Le programme détaillé est le suivant :\n\nLe contexte actuel, les enjeux environnementaux et sociaux\nL’impact global du numérique : Analyse du cycle de vie (ACV) du numérique et d’un projet de service numérique\nL’impact de la fabrication matérielle, de nos usages quotidiens du numérique et de la fin de vie\nPlace à la sobriété et à la responsabilité : définition des concepts de sobriété numérique, low-tech, green IT, IT4Green, accessibilité, inclusion, illectronisme, écoconception numérique, Green-UX, respect des données personnelles, éthique\nQUIZ ludo-interactif sur les points incontournables\nComment je fais, moi ? Guides, référentiels et bonnes pratiques d’écoconception numérique tout en prêtant attention aux effets rebonds\nLa démarche de l’écoconception numérique : intérêt, méthode, outils de mesure et démonstration avec des cas pratiques",
            type_organisme: "Entreprise certification Qualiopi",
            nom: "TEMESIS",
            intitule: "Sensibilisation au numérique responsable et à l’écoconception",
            ville: "Paris",
            acquis: "",
            duree: 0.5,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.temesis.com\/expertises\/ecoconception\/formation\/sensibilisation-numerique-responsable\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "TEMESIS",
            departement_uf: "",
            cformation: "",
            objectif: "Réfléchir collectivement à la mise en place de bonnes pratiques en terme de conception et d’usage du numérique\nPercevoir les enjeux et les niveaux d’impact de chaque bonne pratique selon les perceptions et les acquis de chaque apprenant et apprenante\nDémontrer et prendre conscience que des solutions simples à complexes, en terme d’usages et de développements, sont facilement identifiables et réalisables\nProfiter du partage collectif au sein d’un atelier de réflexion collaborative\nDéployer des bonnes pratiques de numérique éco-responsable en organisation, s’appliquer ces bonnes pratiques",
            contenu: "Sous forme d’atelier d’idéation, cet exercice d’intelligence collective permet de prendre conscience des moyens d’actions, de leur portée et de leur degré de difficulté. Le programme détaillé est le suivant :\n\nQu’est-ce qu’une bonne pratique d’écoconception responsable ? Exemples.\nRecherche et rédaction collective de bonnes pratiques\nOrganisation de ces bonnes pratiques selon leur catégorie, leur impact et leur difficulté de mise en œuvre",
            type_organisme: "Entreprise",
            nom: "TEMESIS",
            intitule: "Atelier de bonnes pratiques d’écoconception et de numérique responsable",
            ville: "Paris",
            acquis: "",
            duree: 0.5,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.temesis.com\/expertises\/ecoconception\/formation\/atelier-ecoconception-numerique-responsable\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "TEMESIS",
            departement_uf: "",
            cformation: "",
            objectif: "Avoir la théorie et la pratique des sujets Numérique responsable et Écoconception numérique\nComprendre les impacts du numérique inscrits dans des enjeux globaux\nMaîtriser les différences de concepts et de valeurs présents dans le numérique responsable\nAborder la démarche d’écoconception numérique de façon simple et outillée\nAgir, en créant le réflexe de sobriété numérique au sein des futurs projets numériques",
            contenu: "Le programme détaillé est le suivant :\n\nLe contexte actuel, les enjeux environnementaux et sociaux\nL’impact global du numérique : Analyse du cycle de vie (ACV) du numérique et d’un projet de service numérique\nL’impact de la fabrication matérielle, de nos usages quotidiens du numérique et de la fin de vie\nPlace à la sobriété et à la responsabilité : définition des concepts de sobriété numérique, low-tech, green IT, IT4Green, accessibilité, inclusion, illectronisme, écoconception numérique, Green-UX, respect des données personnelles, éthique et numérique responsable\nQUIZ ludo-interactif sur les points incontournables\nAtelier de réflexion collective afin de définir et de catégoriser des bonnes pratiques d’écoconception et de numérique responsable\nComment je fais, moi ? Guides, référentiels et bonnes pratiques d’écoconception numérique tout en prêtant attention aux effets rebonds\nLa démarche de l’écoconception numérique : intérêt, méthode, outils de mesure et démonstration avec des cas pratiques\nCette formation avec atelier de réflexion collective réunit la formation de sensibilisation au numérique responsable et à l’écoconception et l’atelier de bonnes pratiques d’écoconception et de numérique responsable. Elle peut être rythmée par des interventions ludo-pédagogiques (quiz interactif) afin de renforcer la mémorisation des points incontournables.",
            type_organisme: "Entreprise",
            nom: "TEMESIS",
            intitule: "Comprendre le numérique responsable & la démarche d’écoconception numérique (1 jour)",
            ville: "Paris",
            acquis: "",
            duree: 1,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.temesis.com\/expertises\/ecoconception\/formation\/comprendre-numerique-responsable-ecoconception\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "TEMESIS",
            departement_uf: "",
            cformation: "",
            objectif: "Avoir la théorie et la pratique des sujets Numérique responsable et Écoconception numérique\nComprendre les impacts du numérique inscrits dans des enjeux globaux\nMaîtriser les différences de concepts et de valeurs présents dans le Numérique responsable\nAborder la démarche d’écoconception numérique de façon simple et outillée\nAgir, en créant le réflexe de sobriété numérique au sein des futurs projets numériques\nRéfléchir concrètement à l’écoconception d’un service numérique en minimisant son impact environnemental via un exercice d’optimisation (atelier participatif d’1 journée)",
            contenu: "Le programme détaillé est le suivant :\n\nLe contexte actuel, les enjeux environnementaux et sociaux\nL’impact global du numérique : Analyse du cycle de vie (ACV) du numérique et d’un projet de service numérique\nL’impact de la fabrication matérielle, de nos usages quotidiens du numérique et de la fin de vie\nPlace à la sobriété et à la responsabilité : définition des concepts de sobriété numérique, low-tech, green IT, IT4Green, accessibilité, inclusion, illectronisme, écoconception numérique, Green-UX, respect des données personnelles, éthique et numérique responsable\nQUIZ ludo-interactif sur les points incontournables\nComment je fais, moi ? Guides, référentiels et bonnes pratiques d’écoconception numérique tout en prêtant attention aux effets rebonds\nAtelier de réflexion collective afin de définir et de catégoriser des bonnes pratiques d’écoconception et de numérique responsable\nLa démarche de l’écoconception numérique : intérêt, méthode, outils de mesure et démonstration avec des cas pratiques\n(Atelier pratique d’1 journée) Amélioration d’un projet web fictif dès la conception UX, sous forme de réflexion individuelle via l’outil Figma et avec partage des optimisations en groupe. Études de cas concrets en ligne : audit et axes d’amélioration possibles.\nCette formation complète avec atelier pratique d’écoconception et de Green-UX réunit la formation de sensibilisation au numérique responsable et à l’écoconception et l’atelier de bonnes pratiques d’écoconception et de numérique responsable. Elle peut être rythmée par des interventions ludo-pédagogiques (quiz interactif) afin de renforcer la mémorisation des points incontournables.",
            type_organisme: "Entreprise",
            nom: "TEMESIS",
            intitule: "Comprendre le numérique responsable & la démarche d’écoconception numérique (2 jours avec atelier)",
            ville: "Paris",
            acquis: "",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.temesis.com\/expertises\/ecoconception\/formation\/comprendre-numerique-responsable-ecoconception-atelier\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "TEMESIS",
            departement_uf: "",
            cformation: "",
            objectif: "Designer responsable - Durée 3 heures (UX-UI designer)\nDéveloppeur responsable - Durée 3 heures (Front & Back développeur)\nChef de projet responsable - Durée 3 heures (Chef de projet)\nProduct Manager responsable - Durée 3 heures (Product manager & Product owner)\nInfrastructure responsable - Durée 3 heures (SRE - Site Reliability Engineering, Devops & Adminsys)\nMarketing Manager responsable - Durée 3 heures (Responsable marketing)",
            contenu: "",
            type_organisme: "Entreprise",
            nom: "TEMESIS",
            intitule: "Formation en lligne",
            ville: "Paris",
            acquis: "",
            duree: 3,
            modalites: "Distanciel",
            url: "https:\/\/www.temesis.com\/expertises\/ecoconception\/formation\/module-specifique\/"
        },
        {
            type_formation: "Formation initiale",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "",
            type_organisme: "Académique",
            nom: "",
            intitule: "EPF Ecole d'ingénieur.e.s",
            ville: "Montpellier",
            acquis: "Skill-based evaluation",
            duree: 3,
            modalites: "",
            url: "https:\/\/www.epf.fr\/formations\/cycle-master-les-majeures\/majeure-data-engineering"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "CCP 1 – Accompagner différents publics vers l'autonomie dans les usages des technologies, services et médias numériques :\nElaborer des programmes d'actions de médiation facilitant l'appropriation des savoirs et des usages numériques.\n\nConcevoir et produire des ressources pédagogiques et documentaires pour différents supports.\n\nAccueillir différents publics, les informer et proposer des actions de médiation numérique.\n\nPréparer et animer des actions de médiation individuelles et collectives dans différents environnements numériques.\nCP 2 – Contribuer au développement d'un espace de médiation numérique et de ses projets :\nEffectuer un diagnostic de territoire et de ses besoins numériques. Contribuer au développement et à la pérennité financière d'un espace de médiation numérique.\n\nDévelopper des partenariats et des collaborations avec des acteurs du territoire.\n\nPromouvoir un espace de médiation numérique et ses projets par une communication multicanale interne et externe.\nCCP 3 – Contribuer à la gestion d'un espace de médiation numérique et animer ses projets collaboratifs :\n\nContribuer au suivi administratif et comptable d'un espace de médiation numérique.\n\nAssurer l'entretien et la maintenance du matériel numérique d'un espace de médiation numérique.\n\nFaciliter et accompagner des projets collaboratifs dans des communautés physiques et à distance.",
            type_organisme: "Centre de Formation",
            nom: "EMERAUDE COMPETENCES MFR - CFA",
            intitule: "Titre de Responsable d'Espace de Médiation Numérique",
            ville: "SAINT MALO",
            acquis: "\nLe Titre Professionnel de responsable d'espace de médiation numérique\nNiveau 5 (bac+2)",
            duree: 58,
            modalites: "Présentiel",
            url: "http:\/\/www.emeraude-competences-mfr.fr\/formations-5-54-titre-professionnel-responsable-d--039-espace-de-mediation-numerique.html"
        },
        {
            type_formation: "Formation initiale et Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "Autre",
            objectif: "Une intervention isolée (séminaire ou séance de cours)",
            contenu: "1 cours d'une journée, 7h\nImpacts du numérique, green coding, écoconception",
            type_organisme: "Ecole d'informatique",
            nom: "IT Akademy",
            intitule: "Développeur fullstack",
            ville: "Lyon",
            acquis: "Certification RNCP31678 pour l'ensemble de la formation",
            duree: 1,
            modalites: "Présentiel",
            url: "https:\/\/www.it-akademy.fr\/formation\/parcours\/2\/developpeur-fullstack-dfs"
        },
        {
            type_formation: "Formation Continue",
            structure: "MOOC",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Numérique responsable, 5 vidéos de 30 mn au total, plein de liens et un quizz à la fin pour une petite certification",
            type_organisme: "",
            nom: "",
            intitule: "",
            ville: "Rouen",
            acquis: "",
            duree: 0.5,
            modalites: "distanciel",
            url: "https:\/\/metropoleposition.fr\/agir-pour-un-numerique-responsable\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "Les compétences professionnelles visées à l’issue de cette formation sont de :\n• développer et diffuser un usage du numérique plus sobre en énergie ;\n• développer et diffuser un usage des données personnelles mieux raisonné et protecteur des droits de tou·te·s ;\n• concevoir et partager des supports de communication numériques plus inclusifs",
            contenu: "Cette formation vous permet de comprendre les enjeux du numérique aujourd'hui : sa matérialité pour mieux répondre à l'urgence climatique ; le traitement des données pour pouvoir les protéger correctement ; les inégalités numériques actuelles pour pouvoir orienter vos actions en faveur de l'inclusion.",
            type_organisme: "Organisme de formation",
            nom: "Competens",
            intitule: "Numérique responsable",
            ville: "Rennes",
            acquis: "",
            duree: 5,
            modalites: "présentiel et distanciel",
            url: "https:\/\/www.competens.net\/product\/fc\/558"
        },
        {
            type_formation: "Formation initiale",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "- Définition de l’écoconception de services numériques\n- Comprendre l’impact environnemental du numérique et sa réglementation en France\n- Identification des leviers design et technique de d’écoconception, pour les applications web et mobile\n- Découverte d’outils pour mettre en place une démarche d’écoconception sur ses projets",
            type_organisme: "",
            nom: "Entreprise Orange Business Services",
            intitule: "Sensibilisation à l’écoconception de services numériques – conception logicielle web et mobile",
            ville: "Nantes et Rennes",
            acquis: "non",
            duree: 0.5,
            modalites: "présentiel et distanciel",
            url: ""
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Eco-conception web",
            type_organisme: "Organisme de formation, formation en entreprise",
            nom: "Orange Carré",
            intitule: "Eco-conception web",
            ville: "Saint-Etienne-de-Montluc",
            acquis: "Non",
            duree: 3,
            modalites: "présentiel",
            url: ""
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "Objectifs\n- Comprendre la démarche d’écoconception de service numérique au travers de l’écoconception d’un site web\n- Maîtriser les concepts fondamentaux de la sobriété numérique et de l’écoconception\n- Savoir les appliquer aux services numériques (site web)\n- Maîtriser la méthodologie et les outils permettant d’éco-concevoir un site web",
            contenu: "A l’issue de la formation, chaque apprenant sera en mesure de :\n- maîtriser la méthodologie et les principaux outils d’écoconception web (hors ACV) ;\n- évaluer la performance et la maturité environnementale d’un service numérique ;\n- éco-concevoir un service numérique (orienté site web)",
            type_organisme: "formatrice certifiée Qualiopi (membre de la coopérative L'ouvre-boîtes 44)",
            nom: "Corymbe",
            intitule: "Eco-conception de site web",
            ville: "Nantes",
            acquis: "",
            duree: 10.5,
            modalites: "présentiel et distanciel",
            url: "https:\/\/corymbe.coop\/formation\/eco-conception-de-site-web\/"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "- Les principes de bases du numérique responsable inspiré du travail de Vincent Courboulay, directeur de l'institut du numérique responsable\n- Focus sur les déchets produits directement et indirectement par les usages et consommations d'objets numériques\n- Trucs et astuces pour réduire cette production de déchets",
            type_organisme: "auto-entreprise - travaileur indépendant",
            nom: "",
            intitule: "Le numérique responsable pour les familles zéro déchets",
            ville: "Morlaix",
            acquis: "Non",
            duree: 0.5,
            modalites: "présentiel et distanciel",
            url: "www.tisserands.bzh et https:\/\/www.linkedin.com\/feed\/update\/urn:li:activity:6907681791600152576"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "Ping",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Vous développez une activité professionnelle dans les secteurs de l’ESS, associatifs ou des tiers-lieux\/fablabs, et vous avez à cœur de porter des valeurs éthiques, éco-responsables ou solidaires dans votre pratique professionnelle. Ces valeurs ne sont pas juste des mots et sont incarnées par vos positionnements et vos actions. Cependant, l’utilisation d’outils numériques de Google, Apple, Microsoft, Adobe (entre autres géants numériques tentaculaires) pour travailler et collaborer au quotidien vous interroge, car vous avez l’impression de mobiliser des outils numériques « en dissonance » avec les valeurs que vous portez dans votre activité professionnelle.\n\nVous souhaitez avancer pas à pas sur cet aspect de votre activité ? Cette formation vous permettra de dresser un état des lieux de vos usages, d’identifier des alternatives activables dans votre contexte professionnel et de tester des solutions concrètes en mode « bac à sable », en compagnie d’autres professionnel·les.",
            type_organisme: "Association",
            nom: "Ping",
            intitule: "Aligner ses pratiques numériques (outils, usages) avec les valeurs de son activité professionnelle",
            ville: "Nantes",
            acquis: "Contrôle continu pendant la formation \/ Exercices de mise en pratique",
            duree: 2,
            modalites: "Présentiel",
            url: "https:\/\/info.pingbase.net\/offre-de-formation\/#1638529798812-a741f1a7-1e06"
        },
        {
            type_formation: "Formation initiale",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Prendre conscience de l'impact du numérique dans le secteur du tourisme et s'approprier les clés du numérique responsable pour l’intégrer de façon cohérente à sa stratégie de tourisme durable et RSE.\n\nComprendre les synergies entre tourisme durable et numérique responsable pour construire un discours et une expertise adaptée selon l’interlocuteur.\n\nOptimiser sa stratégie tourisme durable grâce à des leviers de communication et des moyens digitaux raisonnés et adaptés.\n\nFormateur Alary Alexandre (fondateur du collectif \/ consultant marketing responsable tourisme durable). Marie Husson (green IT et membre du collectif digital green tourisme) intervenant ( membre du collectif expert site internet éco conception, et social média impact positif)",
            type_organisme: "Collectif",
            nom: "collectif digital green tourisme en partenariat avec Formanova",
            intitule: "Intégrer le Numérique Responsable  dans votre stratégie de tourisme durable & RSE",
            ville: "National",
            acquis: "Un QCM de connaissances avec une attestation de formation",
            duree: 1,
            modalites: "présentiel et distanciel",
            url: "https:\/\/www.canva.com\/design\/DAE7aYGUMJY\/fe-TdVeh6GZjXKSowQ9ybg\/view?utm_content=DAE7aYGUMJY&utm_campaign=designshare&utm_medium"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "Comment peut-on agir pour des outils numériques plus éthiques alors que nous ne sommes pas de la technique ? Nous verrons ensemble comment concevoir, au sens large, des applications métier, des sites internet ou des services numériques plus respectueux de l’environnement et leurs utilisateurs.",
            type_organisme: "Agence et organisme de formation",
            nom: "Jujotte",
            intitule: "Design numérique responsable",
            ville: "Nantes",
            acquis: "À l’issue de la formation, vous pourrez :\n- Acquérir les bases théoriques de la conception numérique responsable.\n- Connaître les leviers les plus impactants pour des interfaces plus respectueuses de l’environnement\n- Acquérir les bases théoriques des règles d’accessibilité web",
            duree: 1,
            modalites: "présentiel et distanciel",
            url: "https:\/\/www.notion.so\/jujotte\/Design-num-rique-responsable-91eb43034a0d4291b3be2c85ba496bfa"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "Un ou plusieurs modules \/ unités d'enseignement",
            contenu: "",
            type_organisme: "",
            nom: "TEMESIS",
            intitule: "Comprendre le numérique responsable & la démarche d’écoconception numérique",
            ville: "Paris - France",
            acquis: "- Évaluation des acquis au cours de la formation sous forme de quiz ludo-interactif\n- Questionnaire d’évaluation en fin de session dans lequel le participant évalue les apports de la formation et sa capacité à les mettre en œuvre",
            duree: 1.5,
            modalites: "Présentiel et distanciel",
            url: ""
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "",
            contenu: "",
            type_organisme: "",
            nom: "Association d'intérêt général",
            intitule: "Atelier pro écoconception & design numérique",
            ville: "Paris",
            acquis: "- Compréhension des impacts environnementaux du numérique et le rôle du design sur ces enjeux\n- Découverte des concepts clés de la démarche d’écoconception\n- Capacité à estimer l’empreinte environnementale d’un parcours\n- Etre capable d’identifier des pistes d’amélioration et d’optimiser certains contenus web pour réduire l’impact environnemental d’un service numérique",
            duree: 0.5,
            modalites: "Présentiel et distanciel",
            url: ""
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "Nous vous proposons un atelier de 3h30 suit le déroulé suivant :\n- Introduction aux impacts environnementaux du numérique\n- Analyse d’impact de 2 parcours utilisateur\n- Identification des principaux leviers d’action et exemples d’améliorations\n- Rappel des bonnes pratiques de conception-design\n- Questions et partage",
            contenu: "",
            type_organisme: "",
            nom: "Association d'intérêt général",
            intitule: "Formation à l'écoconception de services numériques par Designers Ethiques",
            ville: "Paris",
            acquis: "- Comprendre les enjeux environnementaux du numérique\n- Savoir en quoi consiste l'écoconception\n- Être capable d'estimer l'impact environnemental d'un parcours web\n- Acquérir les bonnes pratiques d'écoconception en tant que designer ou concepteur de service numérique\n- Identifier des leviers d'action au sein de son entreprise",
            duree: 1,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.ut-capitole.fr\/formations\/nos-diplomes\/masters\/master-m2-mention-management-parcours-type-droit-et-gestion-de-la-res"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "1 - L’impact environnemental du numérique\nEffets du numérique sur l’environnement\nEmpreinte écologique et impacts sociaux, économiques et\npolitiques du numérique\nRéchauffement climatique, gaz à effet de serre et bilan\ncarbone\n2 - Le numérique responsable\nDe quoi s’agit-il ?\nLes initiatives et acteurs du Numérique Responsable\nLois et projets de loi sur l’impact environnemental du\nnumérique\nEt le numérique au service de la transition écologique?\nL’effet rebond\n3 - Les démarches des acteurs en faveur de la sobriété\nnumérique\nOù en sont les fournisseurs de l’IT ?\nMaturité des entreprises et organisations publiques sur le\nsujet\n4 - Déployer la sobriété numérique en entreprise:\nordres de grandeur, leviers d’action et rôle de l’IT\nLes sources d’émissions carbone de la DSI\nBilan carbone de la DSI, et plan d’action IT\nLeviers de réduction : optimiser ses infrastructures et\néquipements, politique d’achats et exigences pour les\nfournisseurs, Gestion et fin de vie des équipements,\nSobriété numérique by design\nL’analyse de cycle de vie\n5 - Organiser sa démarche au sein de son entreprise\nDéployer une politique NR\nOrganiser la gouvernance d’une stratégie sur le numérique\nresponsable\nBonnes pratiques et outils pour une gouvernance NR\nImpliquer les parties prenantes : métiers de la DSI \/\nDirection achats \/ RSE \/ communication\nPiloter sa stratégie sur le numérique responsable. Exemples\nde KPI\nLe label NR\nPoints forts \/ Moyens pédagogiques\n▪ Une formation en petit groupe par des consultants experts dans\nleur métier.\n▪ Des études de cas et quizz pour favoriser l’apprentissage.\n▪ Une évaluation de fin de parcours.\nCompétences acquises grâce à la formation\n▪ Introduction à l’impact environnemental du numérique\n▪ Comprendre les enjeux pour la DSI et les équipes RSE\nModule",
            contenu: "1 - L’impact environnemental du numérique\n2 - Le numérique responsable\n3 - Les démarches des acteurs en faveur de la sobriété\n4 - Déployer la sobriété numérique en entreprise:\n5 - Organiser sa démarche au sein de son entreprise\n",
            type_organisme: "",
            nom: "",
            intitule: "Introduction au Numérique Responsable",
            ville: "Paris",
            acquis: "Connaissances sur l'impact environnemental du numérique, compréhension des enjeux de la DSI",
            duree: 1,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.elee.com\/sites\/elee-site\/files\/2022-02\/El%C3%A9e%20-%20Catalogue%20des%20formations%202022_0.pdf"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "1 - L’impact du numérique\nQuelques chiffres: état des lieux et ordres de grandeur\nEt le numérique pour la transition écologique ?\nImpact social, politique et économique du numérique\nL’effet rebond\n2 - Le Numérique responsable\nDe quoi s’agit-il ?\nLes initiatives et acteurs du Numérique Responsable\nLes lois, projets de loi, réglementations et initiatives\npubliques\n3 - Les démarches des acteurs en faveur de la sobriété\nnumérique\nOù en sont les fournisseurs de l’IT ?\nFocus sur les acteurs du cloud (américains et français)\nMaturité des entreprises françaises sur le sujet\n4 - Comment mesurer l’empreinte environnementale de\nl’informatique de son organisation?\nRéchauffement climatique et gaz à effet de serre.\nLe bilan carbone de l’IT\nLes équipements IT\nIdentifier et approfondir les postes importants\nCas Pratique\n5 - Et l’empreinte des services ?\nL’analyse de cycle de vie\nQuel type de mesure pour quelle finalité ?\n6 - Focus sur le numérique au service de la transition\nécologique\nNet Zero Initiative\nEtude de cas sur le télétravail : opportunité ou illusion ?\n7 - Déployer la sobriété numérique en entreprise: leviers\nd’action et rôle de la DSI\nEtablir un plan de réduction\nComment manier les mécanismes de compensation ?\nEtablir et suivre ses KPI.\n8 - Organiser sa démarche au sein de son entreprise\nDéployer une politique numérique durable. Impliquer ses\nclients. Mettre en œuvre la transformation culturelle.\nOrganiser sa gouvernance\nLes attentes des clients envers leurs fournisseurs\nLes 65 bonnes pratiques de l’INR et le label NR\nCas Pratique\n",
            contenu: "Sujet abordés sur la journée :\n1. impact environnemental du numérique, notions de réchauffement climatique, émissions de GES\n2. Numérique responsable, initiatives et acteurs, lois, numérique et transition écologique\n3. Démarches en faveur de la sobriété numérique, maturité des entreprises françaises\n4. Déployer la sobriété numérique en entreprise, ordres de grandeurs, bilan carbone, leviers d'actions\n5. Organiser sa démarche au sein de son entreprise : déployer une politique numérique responsable, organiser la gouvernance, impliquer les parties prenantes",
            type_organisme: "",
            nom: "",
            intitule: "La sobriété numérique et son application dans la stratégie de la DSI",
            ville: "Puteaux",
            acquis: "- Développer une compréhension poussée du numérique responsable et de l’environnement réglementaire\n- Comprendre les principes de la comptabilité carbone pour l’IT et savoir mesurer et identifier ses flux d’émissions\n- Bâtir un plan d’action et une stratégie Green IT, en embarquant les équipes et les parties prenantes",
            duree: 2,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.elee.com\/sites\/elee-site\/files\/2022-02\/El%C3%A9e%20-%20Catalogue%20des%20formations%202022_0.pdf"
        },
        {
            type_formation: "Formation Continue",
            structure: "Privée (établissement de formation, entreprise, etc.)",
            etablissement: "",
            departement_uf: "",
            cformation: "",
            objectif: "Sujet abordés :\n1. Impact du numérique\n2. le Numérique Responsable\n3. Les démarches des acteurs en faveur de la sobriété numérique\n4. Comment mesurer l'empreinte environnementale de l'informatique de son organisation ?\n5. Et l'empreinte des services ?\n6. Focus sur le numérique au service de la transition écologique\n7. Déployer la sobriété numérique en entreprise : leviers d'action et rôle de la DSI\n8. Organiser sa démarche au sein de son entreprise",
            contenu: "Sujet abordés :\n1. Impact du numérique\n2. le Numérique Responsable\n3. Les démarches des acteurs en faveur de la sobriété numérique\n4. Comment mesurer l'empreinte environnementale de l'informatique de son organisation ?\n5. Et l'empreinte des services ?\n6. Focus sur le numérique au service de la transition écologique\n7. Déployer la sobriété numérique en entreprise : leviers d'action et rôle de la DSI\n8. Organiser sa démarche au sein de son entreprise",
            type_organisme: "",
            nom: "",
            intitule: "Achats IT responsables",
            ville: "Puteaux",
            acquis: "- connaissances pour des achats IT plus durables\n- labels, certifications",
            duree: 1,
            modalites: "Présentiel et distanciel",
            url: "https:\/\/www.elee.com\/sites\/elee-site\/files\/2022-02\/El%C3%A9e%20-%20Catalogue%20des%20formations%202022_0.pdf"
        },
        {
            type_formation: "Formation initiale",
            structure: "Publique (université, école d'ingénieur, etc.)",
            etablissement: "Mines Saint-Étienne",
            departement_uf: "Institut Henri Fayol",
            cformation: "",
            objectif: "Sujets abordés :\n1. Evaluer ses fournisseurs et prestataires : Comprendre l'empreinte carbone de ses fournisseurs, labels et certifications RSE\/environnementales des entreprises, labels et certifications de l'informatique et du recyclage des objets électroniques dans le cadre B2B, évaluation de la gestion de la fin de vie de son parc d'équipements\n2. Formaliser une politique d'achat Numérique Responsable : aspects reglementaires, contract management, normes, contrats IT, clausiers et cahier des charges",
            contenu: "La séance de cours « Systèmes d'information et responsabilité sociétale » s'inscrit dans un module de cours sur les bonnes pratiques du développement logiciel. La majorité du module est dédiée à des bonnes pratiques d'un point de vue de la programmation (design patterns, principes SOLID) mais 2h de cours sont dédiées au numérique responsable.",
            type_organisme: "",
            nom: "",
            intitule: "",
            ville: "",
            acquis: "",
            duree: "",
            modalites: "",
            url: "http:\/\/www.vcharpenay.link\/courses\/num-responsable.html"
        }
    ]
}

let filtersList = [];


/** ressors les checkbox pas sélectionné */
function filter() {
    let values = [];

    /**query de chaque colonne du tableau */
    let cbformation = document.querySelectorAll('input[name="formation"]:not(:checked)');
    let cbstructure = document.querySelectorAll('input[name="structure"]:not(:checked)');
    let cblocalisation = document.querySelectorAll('input[name="localisation"]:not(:checked)');
    let cbvalidation = document.querySelectorAll('input[name="validation"]:not(:checked)');
    let cbduree = document.querySelectorAll('input[name="duree"]:not(:checked)');
    let cbmodacces = document.querySelectorAll('input[name="modacces"]:not(:checked)');
    values.push("Formation:")
    cbformation.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    values.push("\nStructure:")
    cbstructure.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    values.push("\nLocalisation:")
    cblocalisation.forEach((radio) => {
        values.push(radio.value);
    });
    values.push("\nValidation:")
    cbvalidation.forEach((radio) => {
        values.push(radio.value);
    });
    values.push("\nDurée:")
    cbduree.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    values.push("\nModalité d'accés:")
    cbmodacces.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    console.log(values);
}


/** au chargement de la page, la liste s'affiche*/
window.onload = function affichagelist() {
    let list = document.getElementById("showinglist");

    for (let i = 0; i < formationsList.formationsList.length; i++) {
        /**on crée un li */
        let li = document.createElement("li");
        li.setAttribute('id', i);
        list.appendChild(li);

        /** Intitulé */
        let h4 = document.createElement("h4");
        if (formationsList.formationsList[i].intitule == "") {
            h4.innerHTML = "Pas d'intitulé";
        } else {
            h4.innerHTML = formationsList.formationsList[i].intitule;
        }
        li.appendChild(h4);

        /** Nom organisme */
        let nom = document.createElement("p");
        if (formationsList.formationsList[i].nom == "") {
            nom.innerHTML = "Organisme: non spécifié";
        } else {
            nom.innerHTML = "Organisme: " + formationsList.formationsList[i].nom;
        }
        li.appendChild(nom);

        /** Ville */
        let ville = document.createElement("p");
        if (formationsList.formationsList[i].ville == "") {
            ville.innerHTML = "Lieu: non spécifié";
        } else {
            ville.innerHTML = "Lieu: " + formationsList.formationsList[i].ville;
        }
        li.appendChild(ville);

        /** Duree */
        let duree = document.createElement("p");
        if (formationsList.formationsList[i].duree == "") {
            duree.innerHTML = "Durée: non spécifiée";
        } else {
            duree.innerHTML = "Durée: " + formationsList.formationsList[i].duree + " jour(s)";
        }
        li.appendChild(duree);

        /** Structure */
        let structure = document.createElement("p");
        if (formationsList.formationsList[i].structure == "") {
            structure.innerHTML = "Structure: non spécifiée";
        } else {
            structure.innerHTML = "Structure: " + formationsList.formationsList[i].structure;
        }
        li.appendChild(structure);

        /** Type de formation */
        let type_formation = document.createElement("p");
        if (formationsList.formationsList[i].type_formation == "") {
            type_formation.innerHTML = "Type de formation: spécifiée";
        } else {
            type_formation.innerHTML = "Type de formation: " + formationsList.formationsList[i].type_formation;
        }
        li.appendChild(type_formation);

        var input = document.createElement("input");
        input.setAttribute('class', 'addButton');
        input.setAttribute('type', 'button');
        input.setAttribute('onclick', 'addBasket(this.parentNode.id)');
        input.setAttribute('value', '+');
        li.appendChild(input);

        /** ligne horizontal */
        let horizontalline = document.createElement("hr");
        li.appendChild(horizontalline);
    }
}



var basketList = [];

/**fonction d'ajout dans le panier */
function addBasket(btnId) {
    let li = document.createElement("li");
    li.setAttribute('id', 'b_' + btnId);
    var verif = true;
    li.innerHTML = document.getElementById(btnId).firstChild.innerText;

    /** si pas empty, on verifie les doublons */
    for (let i = 0; i < basketList.length; i++) {
        if (basketList[i] == 'b_' + btnId) {
            verif = false;
            break;
        }
    }
    /** si pas doublon, on add */
    if (verif) {
        document.getElementById("basket-list").appendChild(li);
        var input = document.createElement("input");
        input.setAttribute('class', 'subButton');
        input.setAttribute('type', 'button');
        input.setAttribute('onclick', 'removeBasket(this.parentNode.id)');
        input.setAttribute('value', '-');
        basketList.push('b_' + btnId);
        li.appendChild(input);

        /** On ajoute aussi des éléments cachés */
        for (let i = 0; i < basketList.length; i++) {
            if (basketList[i] == 'b_' + btnId) {
                
                let ul = document.createElement("ul");
                ul.setAttribute('id', 'details');
                ul.setAttribute('class', 'details');
                ul.style.display= 'none';
                let il2 = document.createElement("il");
                il2.innerHTML = "Durée: " + formationsList.formationsList[btnId].duree + "jour(s)";
                ul.appendChild(il2);
                let il3 = document.createElement("il");
                il3.innerHTML = "Type de formation: " + formationsList.formationsList[btnId].type_formation;
                ul.appendChild(il3);
                let il4 = document.createElement("il");
                il4.innerHTML = "Lieu: " + formationsList.formationsList[btnId].ville;
                ul.appendChild(il4);
                let il5 = document.createElement("il");
                il5.innerHTML = "Type de structure: " + formationsList.formationsList[btnId].structure;
                ul.appendChild(il5);
                let il6 = document.createElement("il");
                il6.innerHTML = "Type d'organisme: " + formationsList.formationsList[btnId].type_organisme;
                ul.appendChild(il6);
                let il7 = document.createElement("il");
                il7.innerHTML = "Nom de l'organisme: " + formationsList.formationsList[btnId].nom;
                ul.appendChild(il7);
                let il8 = document.createElement("il");
                il8.innerHTML = "Modalités de la formation: " + formationsList.formationsList[btnId].modalites;
                ul.appendChild(il8);
                let il9 = document.createElement("il");
                il9.innerHTML = "Acquis: " + formationsList.formationsList[btnId].acquis;
                ul.appendChild(il9);
                let il10 = document.createElement("il");
                il10.innerHTML = "Contenu de la formation: " + formationsList.formationsList[btnId].contenu;
                ul.appendChild(il10);
                let il11 = document.createElement("il");
                il11.innerHTML = "URL de la formation: " + formationsList.formationsList[btnId].url;
                ul.appendChild(il11);
                li.appendChild(ul);

            }
        }
    }

}


/**fonction de retrait du panier */
function removeBasket(btnId) {
    for (let i = 0; i < basketList.length; i++) {
        if (basketList[i] == btnId) {
            document.getElementById(btnId).remove();
            basketList.splice(i, 1);
        }
    }
}

/**fonction afficher le panier */
function openBasket() {
    document.getElementById("basket").style.display = "block";
    setTimeout(() => {
        document.getElementById("basket").classList.toggle('show-menu');
        document.getElementById("open-menu").style.display = "none";
        document.getElementById("close-menu").style.display = "block";
    }, 10);
}
function closeBasket() {
    document.getElementById("basket").classList.toggle('show-menu');
    setTimeout(() => {
        setTimeout(() => { document.getElementById("basket").style.display = "none"; }, 500);
        document.getElementById("open-menu").style.display = "block";
        document.getElementById("close-menu").style.display = "none";
    }, 10);
}

/** fonction pour afficher les details du panier le temps de print */
function setDetailsDisplay(elm,prop){
    var details = elm.getElementsByClassName("details");
    for (var i = 0; i < details.length; i++) {
        details[i].style.display= prop;
    }
}

/** fonction pour afficher les details du panier le temps de print */
function setButtonsDisplay(elm, prop) {
    var btns = elm.getElementsByClassName("subButton");
    var other = elm.getElementsByClassName("toolsBasket");
    for (var i = 0; i < btns.length; i++) {
        btns[i].style.display = prop;
    }
    for (var i = 0; i < other.length; i++) {
        other[i].style.display = prop;
    }
}
/**fonction pour download le panier en pdf */
function downloadBasket() {
    var content = document.getElementById('basket');
    setButtonsDisplay(content, 'none')
    setDetailsDisplay(content, 'block');
    var opt = {
        margin: 1,
        filename: 'MonPanier.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(content.innerHTML).save();
    setButtonsDisplay(content, '');
    setDetailsDisplay(content, 'none');
}

/**fonction pour Email */
const SubjectVariable = "Demande de Devis de Formation";
const BodyVariable = "Ici on mets les formations et tout";


/**fonction pour calculer le translate*/

const appHeight = () => {
    const vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  window.addEventListener('resize', appHeight)
  appHeight()
