angular.module("starter").run(["$templateCache", function($templateCache) {$templateCache.put("noonFooter.view.html","\n<div ng-class=\"{\'big-footer\' : $root.showNav}\" class=\"footer\">\n  <div class=\"footer-title\">\n    <div class=\"footer-title\">NOON © 2015</div>\n  </div>\n  <div class=\"footer-container\">\n    <div ui-sref=\"contact\" class=\"footer-page\">CONTACT</div>\n    <div ui-sref=\"faq\" class=\"footer-page\">FAQ</div>\n    <div ui-sref=\"cgu\" class=\"footer-page\">CGU</div>\n    <div ui-sref=\"mention\" class=\"footer-page\">MENTION LÉGALES</div>\n  </div>\n  <div class=\"footer-links\">\n    <div class=\"footer-link\"><a href=\"https://www.facebook.com/noonlejeu?fref=ts\" target=\"_blank\"><img src=\"img/picto-FB.png\" alt=\"logo facebook\"></a></div>\n    <div class=\"footer-link\"><a href=\"https://twitter.com/nooners_inside\" target=\"_blank\"><img src=\"img/picto-twitter.png\" alt=\"logo twitter\"></a></div>\n    <div class=\"footer-link\"><a href=\"https://instagram.com/nooners_inside\" target=\"_blank\"><img src=\"img/picto-IG.png\" alt=\"instagram\"></a></div>\n    <div class=\"footer-link\"><a href=\"https://www.youtube.com/channel/UCKzMVjkjwZy1hWV347OE4Mw\" target=\"_blank\"><img src=\"img/picto-YT.png\" alt=\"youtube\"></a></div>\n  </div>\n</div>");
$templateCache.put("noonHeader.view.html","\n<div class=\"visible-mobile\">\n  <div class=\"header-mobile\">\n    <div ui-sref=\"home\" class=\"title\"><img src=\"img/logo.png\" alt=\"logo noon\"></div>\n    <div ng-click=\"($root.showNav == undefined || $root.showNav == false) ? ($root.showNav = true) : ($root.showNav = false)\" class=\"burger\">\n      <div class=\"fa fa-navicon\"></div>\n    </div>\n    <div ng-hide=\"$root.showNav == undefined || $root.showNav == false\" class=\"menu\">\n      <div ng-class=\"{ \'slideDownNav\' : $root.showNav, \'slideUpNav\' : $root.showNav == false}\" ng-click=\"$root.showNav = false\" class=\"nav\">\n        <div ui-sref=\"result\" class=\"nav-link\">Résultats</div>\n        <div ui-sref=\"ranking\" class=\"nav-link\">Classement</div>\n        <div ui-sref=\"advertiser\" class=\"nav-link\">Annonceurs</div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"hidden-mobile\">\n  <div class=\"header-noon\">\n    <div class=\"header-container\">\n      <div ui-sref=\"home\" class=\"title\"><img src=\"img/logo.png\" alt=\"logo noon\"></div>\n      <div class=\"menu\">\n        <div class=\"result\">\n          <h2 ui-sref=\"result\">RÉSULTATS</h2>\n        </div>\n        <div class=\"classment\">\n          <h2 ui-sref=\"ranking\">CLASSEMENTS</h2>\n        </div>\n        <div class=\"announcer\">\n          <h2 ui-sref=\"advertiser\">ANNONCEURS</h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");
$templateCache.put("advertiser.view.html","\n<noon-header></noon-header>\n<div class=\"noon-view\">\n  <div class=\"view-advertiser visible-mobile\">\n    <div class=\"content-mobile\">\n      <div class=\"body-advertiser\">\n        <div ng-class=\"{\'slideDownNav\' : $root.showNav, \'slideUpNav\' : $root.showNav == false}\" class=\"wrapper-mobile animated\">\n          <div class=\"body-advertiser-title\">\n            <h2>Grâce à l\'application Noon, augmentez votre visibilité et votre notoriété</h2>\n          </div>\n          <div class=\"body-advertiser-footer\">\n            <div ui-sref=\"contact\" class=\"container-contact\">\n              <p>Contactez-nous</p><img src=\"img/fleche-cta.png\" alt=\"contact\">\n            </div><a href=\"/img/MediaKit.pdf\" target=\"_blanck\" class=\"container-media\">\n              <p>Voir le media kit</p><img src=\"img/fleche-cta.png\" alt=\"MediaKit\"></a>\n          </div>\n          <hr>\n          <div class=\"container-cible\">\n            <div class=\"picture-trio\"><img src=\"img/picto1annonceur.png\" alt=\"annoncer\"></div>\n            <div class=\"title-trio\">« Gamifiez » vos campagnes</div>\n            <div class=\"desc-trio\">Nos espaces publicitaires ont été entièrement pensés afin de « gamifier » votre annonce. Il en résulte un taux de mémorisation bien plus important que sur n’importe quel autre support publicitaire. De plus, la gamification de votre campagne, grâce au Quiz, permet de valoriser votre image, d’augmenter votre notoriété et d’optimiser votre message auprès de votre audience.</div>\n          </div>\n          <hr>\n          <div class=\"container-perso\">\n            <div class=\"picture-trio\"><img src=\"img/text.png\" alt=\"message\"></div>\n            <div class=\"title-trio\">Développez <br/>votre message</div>\n            <div class=\"desc-trio\">La rédaction de vos propres <br>questions et réponses vous <br>permet d’axer votre message <br>publicitaire sur les aspects de <br>votre choix. Grâce à la mécanique <br>du jeu, l’audience se retrouve <br>alors intéressée et captivée par <br>votre message. Fini la publicité <br>perçue comme intrusive.</div>\n          </div>\n          <hr>\n          <div class=\"container-actio\">\n            <div class=\"picture-trio\"><img src=\"img/eye.png\" alt=\"visibility\"></div>\n            <div class=\"title-trio\">Augmentez <br/>votre visibilité</div>\n            <div class=\"desc-trio\">NOON vous donne la possibilité <br>d’atteindre une audience <br>nationale et hétérogène de plusieurs<br> millions de mobinautes.<br> Nos espaces publicitaires sont<br> directement accessibles dans la<br> poche de vos potentiels clients<br> qui iront intentionnellement voir<br> votre annonce.</div>\n          </div>\n          <hr>\n          <div class=\"container-cible\">\n            <div class=\"picture-trio\"><img src=\"img/anal.png\" alt=\"communication\"></div>\n            <div class=\"title-trio\">Optimisez <br/>votre communication</div>\n            <div class=\"desc-trio\">Un rapport analytique détaillé<br> vous sera remis<br> à chaque fin de campagne.<br> Celui-ci a pour but de vous aider<br> à mieux connaître le profil de<br> votre cible et de mesurer<br> l\'impact de votre message afin<br> d’optimiser votre stratégie de<br> communication.</div>\n          </div>\n          <hr>\n          <div class=\"container-cible\">\n            <div class=\"picture-trio\"><img src=\"img/plus.png\" alt=\"trafic\"></div>\n            <div class=\"title-trio\">Créez plus <br/>de trafic</div>\n            <div class=\"desc-trio\">Nous avons mis en place des<br> boutons « Call To Action » qui<br> permettent d’accroître le trafic<br> sur la page de votre choix.<br> En redirigeant votre audience<br> vers votre lien, ce bouton fait<br> office de véritable porte<br> d’entrée digitale dans votre<br> business.</div>\n          </div>\n          <hr>\n          <div class=\"body-advertiser-footer\">\n            <div ui-sref=\"contact\" class=\"container-contact\">\n              <p>Contactez-nous</p><img src=\"img/fleche-cta.png\" alt=\"contact\">\n            </div><a href=\"/img/MediaKitFinal.pdf\" target=\"_blanck\" class=\"container-media\">\n              <p>Voir le media kit</p><img src=\"img/fleche-cta.png\" alt=\"MediaKit\"></a>\n          </div>\n          <noon-footer></noon-footer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"view-advertiser hidden-mobile\">\n    <div class=\"body-advertiser\">\n      <div class=\"body-advertiser-title\">\n        <h2>Grâce à l\'application Noon, augmentez votre visibilité et votre notoriété</h2>\n      </div>\n      <div class=\"container-one\"><img src=\"img/picto1annonceur.png\" alt=\"annoncer\">\n        <div class=\"title-one\">« Gamifiez » vos campagnes</div>\n        <div class=\"desc-one\">Nos espaces publicitaires ont été entièrement pensés afin de « gamifier » votre annonce.<br/> Il en résulte un taux de mémorisation bien plus important que sur n’importe quel autre support publicitaire.<br/> De plus, la gamification de votre campagne, grâce au Quiz, permet de valoriser votre image,<br/> d’augmenter votre notoriété et d’optimiser votre message auprès de votre audience.</div>\n      </div>\n      <div class=\"body-advertiser-footer\">\n        <div ui-sref=\"contact\" class=\"container-contact\">\n          <p>Contactez-nous</p><img src=\"img/fleche-cta.png\" alt=\"contact\">\n        </div><a href=\"/img/MediaKit.pdf\" target=\"_blanck\" class=\"container-media\">\n          <p>Voir le media kit</p><img src=\"img/fleche-cta.png\" alt=\"MediaKit\"></a>\n      </div>\n    </div>\n    <div class=\"container-raw\">\n      <hr class=\"hr1\">\n      <hr class=\"hr2\">\n      <hr class=\"hr3\">\n      <div class=\"container-four\"><img src=\"img/text.png\" alt=\"message\">\n        <div class=\"title-four\">Développez <br/>votre message</div>\n        <div class=\"desc-four\">La rédaction de vos propres <br>questions et réponses vous <br>permet d’axer votre message <br>publicitaire sur les aspects de <br>votre choix. Grâce à la mécanique <br>du jeu, l’audience se retrouve <br>alors intéressée et captivée par <br>votre message. Fini la publicité <br>perçue comme intrusive.</div>\n      </div>\n      <div class=\"container-four\"><img src=\"img/eye.png\" alt=\"visibility\">\n        <div class=\"title-four\">Augmentez <br/>votre visibilité</div>\n        <div class=\"desc-four\">NOON vous donne la possibilité <br>d’atteindre une audience <br>nationale et hétérogène de plusieurs<br> millions de mobinautes.<br> Nos espaces publicitaires sont<br> directement accessibles dans la<br> poche de vos potentiels clients<br> qui iront intentionnellement voir<br> votre annonce.</div>\n      </div>\n      <div class=\"container-four\"><img src=\"img/anal.png\" alt=\"communication\">\n        <div class=\"title-four\">Optimisez <br/>votre communication</div>\n        <div class=\"desc-four\">Un rapport analytique détaillé<br> vous sera remis<br> à chaque fin de campagne.<br> Celui-ci a pour but de vous aider<br> à mieux connaître le profil de<br> votre cible et de mesurer<br> l\'impact de votre message afin<br> d’optimiser votre stratégie de<br> communication.</div>\n      </div>\n      <div class=\"container-four\"><img src=\"img/plus.png\" alt=\"trafic\">\n        <div class=\"title-four\">Créez plus <br/>de trafic</div>\n        <div class=\"desc-four\">Nous avons mis en place des<br> boutons « Call To Action » qui<br> permettent d’accroître le trafic<br> sur la page de votre choix.<br> En redirigeant votre audience<br> vers votre lien, ce bouton fait<br> office de véritable porte<br> d’entrée digitale dans votre<br> business.</div>\n      </div>\n    </div>\n    <noon-footer></noon-footer>\n  </div>\n</div>");
$templateCache.put("cgu.view.html","\n<noon-header></noon-header>\n<div class=\"noon-view\">\n  <div class=\"view-faq visible-mobile\">\n    <div class=\"body-faq\">\n      <div ng-class=\"{\'slideDownNav\' : $root.showNav, \'slideUpNav\' : $root.showNav == false}\" class=\"wrapper-mobile animated\">\n        <div class=\"container-faq\">\n          <div class=\"title\">CGU\n            <hr>\n          </div>\n          <accordion close-others=\"oneAtATime\">\n            <accordion-group is-open=\"status.open\" ng-repeat=\"data in questions track by $index\">{{data.answer}}\n              <accordion-heading><span>{{data.question}}</span><i ng-class=\"{\'glyphicon-chevron-down\': status.open, \'glyphicon-chevron-right\': !status.open}\" class=\"pull-right glyphicon\"></i></accordion-heading>\n            </accordion-group>\n          </accordion>\n        </div>\n      </div>\n    </div>\n    <noon-footer></noon-footer>\n  </div>\n  <div class=\"view-faq hidden-mobile\">\n    <div class=\"body-faq\">\n      <div class=\"container-faq\">\n        <div class=\"title\">CGU\n          <hr>\n        </div>\n        <accordion close-others=\"oneAtATime\">\n          <accordion-group is-open=\"status.open\" ng-repeat=\"data in questions track by $index\" ng-click=\"gotoAnchor($index, status.open)\" id=\"anchor{{$index}}\">{{data.answer}}\n            <accordion-heading>{{data.question}}<i ng-class=\"{\'glyphicon-chevron-down\': status.open, \'glyphicon-chevron-right\': !status.open}\" class=\"pull-right glyphicon\"></i></accordion-heading>\n          </accordion-group>\n        </accordion>\n      </div>\n    </div>\n    <noon-footer></noon-footer>\n  </div>\n</div>");
$templateCache.put("contact.view.html","\n<noon-header></noon-header>\n<div class=\"noon-view\">\n  <div class=\"view-contact visible-mobile\">\n    <div ng-class=\"{\'slideDownNav\' : $root.showNav, \'slideUpNav\' : $root.showNav == false}\" class=\"wrapper-mobile animated\">\n      <div class=\"body-contact-container\">\n        <div class=\"contact-us\">\n          <div class=\"title\">CONTACTEZ-NOUS</div><img src=\"img/picto-mail.png\" alt=\"mail\">\n          <div class=\"email\">contact@noongame.fr</div>\n        </div>\n        <div ng-if=\"notif == false\" class=\"us-contact\"><img src=\"img/picto-contact.png\" alt=\"contact\">\n          <div class=\"title\">On vous contacte</div>\n          <input placeholder=\"Nom et prénom*\" ng-model=\"mail.name\">\n          <input placeholder=\"Adresse email*\" ng-model=\"mail.mail\">\n          <input placeholder=\"Téléphone\" ng-model=\"mail.phone\">\n          <input placeholder=\"Entreprise\" ng-model=\"mail.entreprise\">\n          <div ng-click=\"sendMail()\" class=\"send\">\n            <p>Envoyer</p>\n            <div class=\"fa fa-long-arrow-right\"></div>\n          </div>\n        </div>\n        <div ng-if=\"notif == true\" class=\"us-contact\"><span>Vos informations ont bien été envoyés. Notre équipe reviendra vers vous dès que possible. Merci</span></div>\n      </div>\n      <noon-footer class=\"show-on-keybord\"></noon-footer>\n    </div>\n    <noon-footer class=\"hide-on-keybord\"></noon-footer>\n  </div>\n  <div class=\"view-contact hidden-mobile\">\n    <div class=\"body-contact-container\">\n      <div class=\"contact-us\">\n        <div class=\"title\">CONTACTEZ-NOUS</div><img src=\"img/picto-mail.png\" alt=\"mail\">\n        <div class=\"email\">contact@noongame.fr</div>\n      </div>\n      <div ng-if=\"notif == false\" class=\"us-contact\"><img src=\"img/picto-contact.png\" alt=\"contact\">\n        <div class=\"title\">On vous contacte</div>\n        <input placeholder=\"Nom et prénom*\" ng-model=\"mail.name\">\n        <input placeholder=\"Adresse email*\" ng-model=\"mail.mail\">\n        <input placeholder=\"Téléphone*\" ng-model=\"mail.phone\">\n        <input placeholder=\"Entreprise\" ng-model=\"mail.entreprise\">\n        <div ng-click=\"sendMail()\" class=\"send\">\n          <p>Envoyer</p>\n          <div class=\"fa fa-long-arrow-right\"></div>\n        </div>\n      </div>\n      <div ng-if=\"notif == true\" class=\"us-contact\"><span>Vos informations ont bien été envoyés. Notre équipe reviendra vers vous dès que possible. Merci</span></div>\n    </div>\n  </div>\n  <noon-footer class=\"hidden-mobile\"></noon-footer>\n</div>");
$templateCache.put("faq.view.html","\n<noon-header></noon-header>\n<div class=\"noon-view\">\n  <div class=\"view-faq visible-mobile\">\n    <div class=\"body-faq\">\n      <div ng-class=\"{\'slideDownNav\' : $root.showNav, \'slideUpNav\' : $root.showNav == false}\" class=\"wrapper-mobile animated\">\n        <div class=\"container-faq\">\n          <div class=\"title\">FAQ\n            <hr>\n          </div>\n          <accordion close-others=\"oneAtATime\">\n            <accordion-group is-open=\"status.open\" ng-repeat=\"data in questions track by $index\">{{data.answer}}\n              <accordion-heading><span>{{data.question}}</span><i ng-class=\"{\'glyphicon-chevron-down\': status.open, \'glyphicon-chevron-right\': !status.open}\" class=\"pull-right glyphicon\"></i></accordion-heading>\n            </accordion-group>\n          </accordion>\n        </div>\n      </div>\n    </div>\n    <noon-footer></noon-footer>\n  </div>\n  <div class=\"view-faq hidden-mobile\">\n    <div class=\"body-faq\">\n      <div class=\"container-faq\">\n        <div class=\"title\">FAQ\n          <hr>\n        </div>\n        <accordion close-others=\"oneAtATime\">\n          <accordion-group is-open=\"status.open\" ng-repeat=\"data in questions track by $index\" ng-click=\"gotoAnchor($index, status.open)\" id=\"anchor{{$index}}\">{{data.answer}}\n            <accordion-heading>{{data.question}}<i ng-class=\"{\'glyphicon-chevron-down\': status.open, \'glyphicon-chevron-right\': !status.open}\" class=\"pull-right glyphicon\"></i></accordion-heading>\n          </accordion-group>\n        </accordion>\n      </div>\n    </div>\n    <noon-footer></noon-footer>\n  </div>\n</div>");
$templateCache.put("mention.view.html","\n<noon-header></noon-header>\n<div class=\"noon-view\">\n  <div class=\"view-mention visible-mobile\">\n    <div class=\"body-mention\">\n      <div ng-class=\"{\'slideDownNav\' : $root.showNav, \'slideUpNav\' : $root.showNav == false}\" class=\"wrapper-mobile animated\">\n        <div class=\"body-mention-container\">\n          <div class=\"bloc-container\">\n            <div class=\"title\">EDITEUR DU SITE</div>\n            <hr>\n            <div class=\"desc\">SAS HELANDYS - Capital de 1.000e - RCS de Paris : 808 535 082 11-13 avenue de Friedland, 75008 Paris, France</div>\n          </div>\n          <div class=\"bloc-container\">\n            <div class=\"title\">DIRECTEUR DE LA PUBLICATION</div>\n            <hr>\n            <div class=\"desc\">Monsieur Gauthier Devoucoux</div>\n          </div>\n          <div class=\"bloc-container\">\n            <div class=\"title\">HEBERGEUR</div>\n            <hr>\n            <div class=\"desc\">www.aws.amazon.com</div>\n          </div>\n          <div class=\"bloc-cnil\">Numéro CNIL : 1832021 (du 30/01/2015)</div>\n        </div>\n      </div>\n    </div>\n    <noon-footer></noon-footer>\n  </div>\n  <div class=\"view-mention hidden-mobile\">\n    <div class=\"body-mention\">\n      <div class=\"body-mention-container\">\n        <div class=\"bloc-container\">\n          <div class=\"title\">EDITEUR DU SITE</div>\n          <hr>\n          <div class=\"desc\">SAS HELANDYS - Capital de 1.000e - RCS de Paris : 808 535 082 11-13 avenue de Friedland, 75008 Paris, France</div>\n        </div>\n        <div class=\"bloc-container\">\n          <div class=\"title\">DIRECTEUR DE LA PUBLICATION</div>\n          <hr>\n          <div class=\"desc\">Monsieur Gauthier Devoucoux</div>\n        </div>\n        <div class=\"bloc-container\">\n          <div class=\"title\">HEBERGEUR</div>\n          <hr>\n          <div class=\"desc\">www.aws.amazon.com</div>\n        </div>\n        <div class=\"bloc-cnil\">Numéro CNIL : 1832021 (du 30/01/2015)</div>\n      </div>\n    </div>\n    <noon-footer></noon-footer>\n  </div>\n</div>");
$templateCache.put("home.view.html","\n<noon-header></noon-header>\n<div class=\"noon-view\">\n  <div class=\"view-home visible-mobile\">\n    <div class=\"content-mobile\">\n      <div ng-class=\"{\'slideDownNav\' : $root.showNav, \'slideUpNav\' : $root.showNav == false}\" class=\"wrapper-mobile animated\">\n        <div ng-click=\"$root.slidePhone()\" class=\"container-text\">\n          <div class=\"title\">Des <strong>quiz</strong>,<br> une <strong>loterie</strong> gratuite<br>et des gains <strong>d\'argent</strong><br> tous les jours</div>\n          <div class=\"store\">Application gratuite bientôt disponible sur\n            <div class=\"apple-store\"><img src=\"img/Logo_Appstore.png\" alt=\"Logo Applstore\"></div>\n            <div class=\"google-store\"><img src=\"img/Logo_Googlestore.png\" alt=\"Logo googlestore\"></div>\n          </div>\n        </div>\n        <div class=\"container-slider\">\n          <div class=\"nav\">\n            <div class=\"wrapper\">\n              <div ng-repeat=\"slide in slides\" ng-class=\"{\'active\':isCurrentSlideIndex($index)}\" ng-click=\"setCurrentSlideIndex($index);\" class=\"dot\"></div>\n            </div>\n          </div>\n          <div ng-click=\"$root.slidePhone()\" class=\"iphone\"><img src=\"img/Smartphones-mobile.png\" alt=\"Smartphones\">\n            <div class=\"slider\"><img ng-repeat=\"slide in slides\" ng-hide=\"!isCurrentSlideIndex($index)\" ng-src=\"{{slide}}\" alt=\"slide Smartphones\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"container-ccm\">\n        <div class=\"title\">Comment ça marche</div>\n        <div class=\"container-iphones\">\n          <div class=\"container-iphone\"><img src=\"img/CCM-1.png\" alt=\"Smartphones the game\">\n            <div class=\"title\">Le Jeu</div>\n            <div class=\"desc\">Je peux accéder au jeu tous les jours de l\'année de 8h00 à 20h00.</div>\n          </div>\n          <div class=\"container-iphone\"><img src=\"img/CCM-2.png\" alt=\"Smartphones the questions\">\n            <div class=\"title\">Les quiz</div>\n            <div class=\"desc\">J\'ai un temps limité pour observer une image et répondre aux questions. Il y a plusieurs quiz par jour.</div>\n          </div>\n          <div class=\"container-iphone\"><img src=\"img/CCM-3.png\" alt=\"Smartphones the tickets\">\n            <div class=\"title\">Les tickets</div>\n            <div class=\"desc\">Je gagne un ticket différent pour la loterie du jour, à chaque fois que je réussi un Quiz.</div>\n          </div>\n          <div class=\"container-iphone\"><img src=\"img/CCM-4.png\" alt=\"Smartphones the loterie\">\n            <div class=\"title\">La loterie</div>\n            <div class=\"desc\">Le tirage de la loterie a lieu tous les soirs à 20h30, je vais dans le menu \"résultats\" voir si j\'ai gagné de l\'argent.</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"container-resultclass\">\n        <div ui-sref=\"result\" class=\"container-home-result\"><img src=\"img/picto-resultat.png\" alt=\"result\">\n          <div class=\"title-result-class\">Résultats</div>\n          <div class=\"desc-result-class\">Voir les résultats des gagnants du jour en fonction des tickets de loterie qui ont été tirés</div>\n        </div>\n        <div ui-sref=\"ranking\" class=\"container-home-class\"><img src=\"img/picto-classement.png\" alt=\"ranking\">\n          <div class=\"title-result-class\">Classement</div>\n          <div class=\"desc-result-class\">Consulter le classement général de tous les utilisateurs de Noon, depuis leur 1er jeu</div>\n        </div>\n      </div>\n      <div class=\"container-advertiser\">\n        <div class=\"title\">Annonceurs</div>\n        <div class=\"desc\">Grâce à l\'application Noon, augmentez votre visibilité et votre notoriété</div>\n        <div ui-sref=\"advertiser\" class=\"link\">\n          <p>Voir nos offres</p><img src=\"img/fleche-cta.png\" alt=\"advertiser\">\n        </div>\n      </div>\n      <noon-footer></noon-footer>\n    </div>\n  </div>\n  <div class=\"view-home hidden-mobile\">\n    <div class=\"container-body-home\">\n      <div class=\"container-slider\">\n        <div class=\"container-sl\">\n          <div class=\"dem\">\n            <div class=\"title\">Des <strong>quiz</strong>,<br> une <strong>loterie</strong> gratuite<br>et des gains <strong>d\'argent</strong><br> tous les jours</div>\n            <div class=\"store\">Application gratuite bientôt disponible sur\n              <div class=\"apple-store\"><img src=\"img/Logo_Appstore.png\" alt=\"apple-store\"></div>\n              <div class=\"google-store\"><img src=\"img/Logo_Googlestore.png\" alt=\"googlestore\"></div>\n            </div>\n          </div>\n          <div class=\"iphone\"><img src=\"img/Smartphones.png\" alt=\"Smartphones\">\n            <div class=\"slider\"><img ng-repeat=\"slide in slides\" ng-hide=\"!isCurrentSlideIndex($index)\" ng-src=\"{{slide}}\" alt=\"Smartphones slide\"></div>\n          </div>\n          <div class=\"nav\">\n            <div class=\"wrapper\">\n              <div ng-repeat=\"slide in slides\" ng-class=\"{\'active\':isCurrentSlideIndex($index)}\" ng-click=\"setCurrentSlideIndex($index);\" class=\"dot\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"container-ccm\">\n      <div class=\"title\">Comment ça marche</div>\n      <div class=\"container-iphones\">\n        <div class=\"container-iphone\"><img src=\"img/CCM-1.png\" alt=\"Smartphones game\">\n          <div class=\"title\">Le Jeu</div>\n          <div class=\"desc\">Je peux accéder au jeu tous les jours de l\'année de 8h00 à 20h00.</div>\n        </div>\n        <div class=\"container-iphone\"><img src=\"img/CCM-2.png\" alt=\"Smartphones questions\">\n          <div class=\"title\">Les quiz</div>\n          <div class=\"desc\">J\'ai un temps limité pour observer une image et répondre aux questions. Il y a plusieurs quiz par jour.</div>\n        </div>\n        <div class=\"container-iphone\"><img src=\"img/CCM-3.png\" alt=\"Smartphones tickets\">\n          <div class=\"title\">Les tickets</div>\n          <div class=\"desc\">Je gagne un ticket différent pour la loterie du jour, à chaque fois que je réussi un Quiz.</div>\n        </div>\n        <div class=\"container-iphone\"><img src=\"img/CCM-4.png\" alt=\"Smartphones loterie\">\n          <div class=\"title\">La loterie</div>\n          <div class=\"desc\">Le tirage de la loterie a lieu tous les soirs à 20h30, je vais dans le menu \"résultats\" voir si j\'ai gagné de l\'argent.</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"container-resultclass\">\n      <div ui-sref=\"result\" class=\"container-home-result\"><img src=\"img/picto-resultat.png\" alt=\"result\">\n        <div class=\"title-result-class\">Résultats</div>\n        <div class=\"desc-result-class\">Voir les résultats des gagnants du jour en fonction des tickets de loterie qui ont été tirés</div>\n      </div>\n      <div ui-sref=\"ranking\" alt=\"ranking\" class=\"container-home-class\"><img src=\"img/picto-classement.png\">\n        <div class=\"title-result-class\">Classement</div>\n        <div class=\"desc-result-class\">Consulter le classement général de tous les utilisateurs de Noon, depuis leur 1er jeu</div>\n      </div>\n    </div>\n    <div class=\"container-advertiser\">\n      <div class=\"title\">Annonceurs</div>\n      <div class=\"desc\">Grâce à l\'application Noon, augmentez votre visibilité et votre notoriété</div>\n      <div ui-sref=\"advertiser\" class=\"link\">\n        <p>Voir nos offres</p><img src=\"img/fleche-cta.png\" alt=\"advertiser\">\n      </div>\n    </div>\n    <noon-footer></noon-footer>\n  </div>\n</div>");
$templateCache.put("ranking.view.html","\n<noon-header></noon-header>\n<div class=\"noon-view\">\n  <div class=\"view-ranking visible-mobile\">\n    <ion-view>\n      <ion-content>\n        <div class=\"body-ranking\">\n          <div ng-class=\"{\'slideDownNav\' : $root.showNav, \'slideUpNav\' : $root.showNav == false}\" class=\"wrapper-mobile animated\">\n            <div class=\"container-comming-soon\">\n              <div class=\"comming-soon animated swing\"><img src=\"img/picto-soon.png\" alt=\"picto-soon\"></div>\n            </div>\n            <noon-footer class=\"show-on-keybord\"></noon-footer>\n          </div>\n        </div>\n      </ion-content>\n      <noon-footer class=\"hide-on-keybord\"></noon-footer>\n    </ion-view>\n  </div>\n  <div class=\"view-ranking hidden-mobile\">\n    <div class=\"body-ranking\">\n      <div class=\"comming-soon animated swing\"><img src=\"img/picto-soon.png\" alt=\"soon\"></div>\n    </div>\n    <noon-footer></noon-footer>\n  </div>\n</div>");
$templateCache.put("result.view.html","\n<noon-header></noon-header>\n<div class=\"noon-view\">\n  <div class=\"view-result visible-mobile\">\n    <ion-view>\n      <div class=\"body-result\">\n        <div ng-class=\"{\'slideDownNav\' : $root.showNav, \'slideUpNav\' : $root.showNav == false}\" class=\"wrapper-mobile animated\">\n          <div class=\"container-comming-soon\">\n            <div class=\"comming-soon animated swing\"><img src=\"img/picto-soon.png\" alt=\"soon\"></div>\n          </div>\n        </div>\n      </div>\n      <noon-footer class=\"hide-on-keybord\"></noon-footer>\n    </ion-view>\n  </div>\n  <div class=\"view-result hidden-mobile\">\n    <div class=\"body-result\">\n      <div class=\"container-comming-soon\">\n        <div class=\"comming-soon animated swing\"><img src=\"img/picto-soon.png\" alt=\"soon\"></div>\n      </div>\n    </div>\n    <noon-footer></noon-footer>\n  </div>\n</div>");}]);