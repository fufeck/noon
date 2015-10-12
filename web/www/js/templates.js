angular.module("starter").run(["$templateCache", function($templateCache) {$templateCache.put("noonFooter.view.html","\n<div ng-class=\"{\'big-footer\' : $root.showNav}\" class=\"footer\">\n  <div class=\"footer-title\">\n    <div class=\"footer-title\">NOON © 2015</div>\n  </div>\n  <div class=\"footer-container\">\n    <div ui-sref=\"contact\" class=\"footer-page\">CONTACT</div>\n    <div ui-sref=\"faq\" class=\"footer-page\">FAQ</div>\n    <div ui-sref=\"cgu\" class=\"footer-page\">CGU</div>\n    <div ui-sref=\"mention\" class=\"footer-page\">MENTION LÉGALES</div>\n  </div>\n  <div class=\"footer-links\">\n    <div class=\"footer-link\"><a href=\"https://www.facebook.com/noonlejeu?fref=ts\" target=\"_blank\"><img src=\"img/picto-FB.png\"></a></div>\n    <div class=\"footer-link\"><a href=\"https://twitter.com/nooners_inside\" target=\"_blank\"><img src=\"img/picto-twitter.png\"></a></div>\n    <div class=\"footer-link\"><a href=\"https://instagram.com/nooners_inside\" target=\"_blank\"><img src=\"img/picto-IG.png\"></a></div>\n    <div class=\"footer-link\"><a href=\"https://www.youtube.com/channel/UCKzMVjkjwZy1hWV347OE4Mw\" target=\"_blank\"><img src=\"img/picto-YT.png\"></a></div>\n  </div>\n</div>");
$templateCache.put("noonHeader.view.html","\n<div class=\"visible-mobile\">\n  <div class=\"header-mobile\">\n    <div ui-sref=\"home\" class=\"title\"><img src=\"img/logo.png\"></div>\n    <div ng-click=\"($root.showNav == undefined || $root.showNav == false) ? ($root.showNav = true) : ($root.showNav = false)\" class=\"burger\">\n      <div class=\"fa fa-navicon\"></div>\n    </div>\n    <div ng-hide=\"$root.showNav == undefined || $root.showNav == false\" class=\"menu\">\n      <div ng-class=\"{ \'slideDownNav\' : $root.showNav, \'slideUpNav\' : $root.showNav == false}\" ng-click=\"$root.showNav = false\" class=\"nav\">\n        <div ui-sref=\"result\" class=\"nav-link\">Résultats</div>\n        <div ui-sref=\"ranking\" class=\"nav-link\">Classement</div>\n        <div ui-sref=\"advertiser\" class=\"nav-link\">Annonceurs</div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"hidden-mobile\">\n  <div class=\"header-noon\">\n    <div class=\"header-container\">\n      <div ui-sref=\"home\" class=\"title\"><img src=\"img/logo.png\"></div>\n      <div class=\"menu\">\n        <div class=\"result\">\n          <h2 ui-sref=\"result\">RÉSULTATS</h2>\n        </div>\n        <div class=\"classment\">\n          <h2 ui-sref=\"ranking\">CLASSEMENTS</h2>\n        </div>\n        <div class=\"announcer\">\n          <h2 ui-sref=\"advertiser\">ANNONCEURS</h2>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");
$templateCache.put("advertiser.view.html","\n<noon-header></noon-header>\n<div class=\"noon-view\">\n  <div class=\"view-advertiser visible-mobile\">\n    <div class=\"content-mobile\">\n      <div class=\"body-advertiser\">\n        <div ng-class=\"{\'slideDownNav\' : $root.showNav, \'slideUpNav\' : $root.showNav == false}\" class=\"wrapper-mobile animated\">\n          <div class=\"body-advertiser-title\">\n            <h2>Grâce à l\'application Noon, augmentez votre visibilité et votre notoriété</h2>\n          </div>\n          <div class=\"body-advertiser-footer\">\n            <div ui-sref=\"contact\" class=\"container-contact\">\n              <p>Contactez-nous</p><img src=\"img/fleche-cta.png\">\n            </div><a href=\"/img/MediaKit.pdf\" target=\"_blanck\" class=\"container-media\">\n              <p>Voir le media kit</p><img src=\"img/fleche-cta.png\"></a>\n          </div>\n          <hr>\n          <div class=\"container-cible\">\n            <div class=\"picture-trio\"><img src=\"img/picto1annonceur.png\"></div>\n            <div class=\"title-trio\">« Gamifiez » vos campagnes</div>\n            <div class=\"desc-trio\">Nos espaces publicitaires ont été entièrement pensés afin de « gamifier » votre annonce. Il en résulte un taux de mémorisation bien plus important que sur n’importe quel autre support publicitaire. De plus, la gamification de votre campagne, grâce au Quiz, permet de valoriser votre image, d’augmenter votre notoriété et d’optimiser votre message auprès de votre audience.</div>\n          </div>\n          <hr>\n          <div class=\"container-perso\">\n            <div class=\"picture-trio\"><img src=\"img/text.png\"></div>\n            <div class=\"title-trio\">Développez <br/>votre message</div>\n            <div class=\"desc-trio\">La rédaction de vos propres questions et réponses vous permet d’axer votre message publicitaire sur les aspects de votre choix. Grâce à la mécanique du jeu, l’audience se retrouve alors intéressée et captivée par votre message. Fini la publicité perçue comme intrusive.</div>\n          </div>\n          <hr>\n          <div class=\"container-actio\">\n            <div class=\"picture-trio\"><img src=\"img/eye.png\"></div>\n            <div class=\"title-trio\">Augmentez <br/>votre visibilité</div>\n            <div class=\"desc-trio\">NOON vous donne la possibilité d’atteindre une audience nationale et hétérogène de plusieurs millions de mobinautes. Nos espaces publicitaires mobiles sont directement accessibles dans la poche de vos potentiels client, sur une plage horaire de 24h minimum.</div>\n          </div>\n          <hr>\n          <div class=\"container-cible\">\n            <div class=\"picture-trio\"><img src=\"img/anal.png\"></div>\n            <div class=\"title-trio\">Optimisez <br/>votre communication</div>\n            <div class=\"desc-trio\">À chaque campagne, des identifiants vous seront remis afin d’accéder à vos statistiques en temps réel. Ce portail personnel vous aide à mieux connaître votre cible en mesurant l’impact de votre message, dans l’objectif d’optimiser votre stratégie de communication.</div>\n          </div>\n          <hr>\n          <div class=\"container-cible\">\n            <div class=\"picture-trio\"><img src=\"img/plus.png\"></div>\n            <div class=\"title-trio\">Créez plus <br/>de trafic</div>\n            <div class=\"desc-trio\">La mise en place des boutons « Call To Action » permettent d’accroître le trafic sur la page de votre choix (Site Internet, App Store, etc). En redirigeant votre audience vers votre lien, ce bouton est une véritable porte d’entrée digitale dans votre business.</div>\n          </div>\n          <hr>\n          <div class=\"body-advertiser-footer\">\n            <div ui-sref=\"contact\" class=\"container-contact\">\n              <p>Contactez-nous</p><img src=\"img/fleche-cta.png\">\n            </div><a href=\"/img/MediaKitFinal.pdf\" target=\"_blanck\" class=\"container-media\">\n              <p>Voir le media kit</p><img src=\"img/fleche-cta.png\"></a>\n          </div>\n          <noon-footer></noon-footer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"view-advertiser hidden-mobile\">\n    <div class=\"body-advertiser\">\n      <div class=\"body-advertiser-title\">\n        <h2>Grâce à l\'application Noon, augmentez votre visibilité et votre notoriété</h2>\n      </div>\n      <div class=\"container-one\"><img src=\"img/picto1annonceur.png\">\n        <div class=\"title-one\">« Gamifiez » vos campagnes</div>\n        <div class=\"desc-one\">Nos espaces publicitaires ont été entièrement pensés afin de « gamifier » votre annonce.<br/> Il en résulte un taux de mémorisation bien plus important que sur n’importe quel autre support publicitaire.<br/> De plus, la gamification de votre campagne, grâce au Quiz, permet de valoriser votre image,<br/> d’augmenter votre notoriété et d’optimiser votre message auprès de votre audience.</div>\n      </div>\n      <div class=\"body-advertiser-footer\">\n        <div ui-sref=\"contact\" class=\"container-contact\">\n          <p>Contactez-nous</p><img src=\"img/fleche-cta.png\">\n        </div><a href=\"/img/MediaKit.pdf\" target=\"_blanck\" class=\"container-media\">\n          <p>Voir le media kit</p><img src=\"img/fleche-cta.png\"></a>\n      </div>\n    </div>\n    <div class=\"container-raw\">\n      <hr class=\"hr1\">\n      <hr class=\"hr2\">\n      <hr class=\"hr3\">\n      <div class=\"container-four\"><img src=\"img/text.png\">\n        <div class=\"title-four\">Développez <br/>votre message</div>\n        <div class=\"desc-four\">La rédaction de vos propres questions et réponses vous permet d’axer votre message publicitaire sur les aspects de votre choix. Grâce à la mécanique du jeu, l’audience se retrouve alors intéressée et captivée par votre message. Fini la publicité perçue comme intrusive.</div>\n      </div>\n      <div class=\"container-four\"><img src=\"img/eye.png\">\n        <div class=\"title-four\">Augmentez <br/>votre visibilité</div>\n        <div class=\"desc-four\">NOON vous donne la possibilité d’atteindre une audience nationale et hétérogène de plusieurs millions de mobinautes. Nos espaces publicitaires mobiles sont directement accessibles dans la poche de vos potentiels client, sur une plage horaire de 24h minimum.</div>\n      </div>\n      <div class=\"container-four\"><img src=\"img/anal.png\">\n        <div class=\"title-four\">Optimisez <br/>votre communication</div>\n        <div class=\"desc-four\">À chaque campagne, des identifiants vous seront remis afin d’accéder à vos statistiques en temps réel. Ce portail personnel vous aide à mieux connaître votre cible en mesurant l’impact de votre message, dans l’objectif d’optimiser votre stratégie de communication.</div>\n      </div>\n      <div class=\"container-four\"><img src=\"img/plus.png\">\n        <div class=\"title-four\">Créez plus <br/>de trafic</div>\n        <div class=\"desc-four\">La mise en place des boutons « Call To Action » permettent d’accroître le trafic sur la page de votre choix (Site Internet, App Store, etc). En redirigeant votre audience vers votre lien, ce bouton est une véritable porte d’entrée digitale dans votre business.</div>\n      </div>\n    </div>\n    <noon-footer></noon-footer>\n  </div>\n</div>");
$templateCache.put("cgu.view.html","\n<noon-header></noon-header>\n<div class=\"noon-view\">\n  <div class=\"view-faq visible-mobile\">\n    <div class=\"body-faq\">\n      <div ng-class=\"{\'slideDownNav\' : $root.showNav, \'slideUpNav\' : $root.showNav == false}\" class=\"wrapper-mobile animated\">\n        <div class=\"container-faq\">\n          <div class=\"title\">CGU\n            <hr>\n          </div>\n          <accordion close-others=\"oneAtATime\">\n            <accordion-group is-open=\"status.open\" ng-repeat=\"data in questions track by $index\">{{data.answer}}\n              <accordion-heading><span>{{data.question}}</span><i ng-class=\"{\'glyphicon-chevron-down\': status.open, \'glyphicon-chevron-right\': !status.open}\" class=\"pull-right glyphicon\"></i></accordion-heading>\n            </accordion-group>\n          </accordion>\n        </div>\n      </div>\n    </div>\n    <noon-footer></noon-footer>\n  </div>\n  <div class=\"view-faq hidden-mobile\">\n    <div class=\"body-faq\">\n      <div class=\"container-faq\">\n        <div class=\"title\">CGU\n          <hr>\n        </div>\n        <accordion close-others=\"oneAtATime\">\n          <accordion-group is-open=\"status.open\" ng-repeat=\"data in questions track by $index\" ng-click=\"gotoAnchor($index, status.open)\" id=\"anchor{{$index}}\">{{data.answer}}\n            <accordion-heading>{{data.question}}<i ng-class=\"{\'glyphicon-chevron-down\': status.open, \'glyphicon-chevron-right\': !status.open}\" class=\"pull-right glyphicon\"></i></accordion-heading>\n          </accordion-group>\n        </accordion>\n      </div>\n    </div>\n    <noon-footer></noon-footer>\n  </div>\n</div>");
$templateCache.put("contact.view.html","\n<noon-header></noon-header>\n<div class=\"noon-view\">\n  <div class=\"view-contact visible-mobile\">\n    <div ng-class=\"{\'slideDownNav\' : $root.showNav, \'slideUpNav\' : $root.showNav == false}\" class=\"wrapper-mobile animated\">\n      <div class=\"body-contact-container\">\n        <div class=\"contact-us\">\n          <div class=\"title\">CONTACTEZ-NOUS</div><img src=\"img/picto-mail.png\">\n          <div class=\"email\">contact@noongame.fr</div>\n        </div>\n        <div ng-if=\"notif == false\" class=\"us-contact\"><img src=\"img/picto-contact.png\">\n          <div class=\"title\">On vous contacte</div>\n          <input placeholder=\"Nom et prénom*\" ng-model=\"mail.name\">\n          <input placeholder=\"Adresse email*\" ng-model=\"mail.mail\">\n          <input placeholder=\"Téléphone\" ng-model=\"mail.phone\">\n          <input placeholder=\"Entreprise\" ng-model=\"mail.entreprise\">\n          <div ng-click=\"sendMail()\" class=\"send\">\n            <p>Envoyer</p>\n            <div class=\"fa fa-long-arrow-right\"></div>\n          </div>\n        </div>\n        <div ng-if=\"notif == true\" class=\"us-contact\"><span>Vos informations ont bien été envoyés. Notre équipe reviendra vers vous dès que possible. Merci</span></div>\n      </div>\n      <noon-footer class=\"show-on-keybord\"></noon-footer>\n    </div>\n    <noon-footer class=\"hide-on-keybord\"></noon-footer>\n  </div>\n  <div class=\"view-contact hidden-mobile\">\n    <div class=\"body-contact-container\">\n      <div class=\"contact-us\">\n        <div class=\"title\">CONTACTEZ-NOUS</div><img src=\"img/picto-mail.png\">\n        <div class=\"email\">contact@noongame.fr</div>\n      </div>\n      <div ng-if=\"notif == false\" class=\"us-contact\"><img src=\"img/picto-contact.png\">\n        <div class=\"title\">On vous contacte</div>\n        <input placeholder=\"Nom et prénom*\" ng-model=\"mail.name\">\n        <input placeholder=\"Adresse email*\" ng-model=\"mail.mail\">\n        <input placeholder=\"Téléphone*\" ng-model=\"mail.phone\">\n        <input placeholder=\"Entreprise\" ng-model=\"mail.entreprise\">\n        <div ng-click=\"sendMail()\" class=\"send\">\n          <p>Envoyer</p>\n          <div class=\"fa fa-long-arrow-right\"></div>\n        </div>\n      </div>\n      <div ng-if=\"notif == true\" class=\"us-contact\"><span>Vos informations ont bien été envoyés. Notre équipe reviendra vers vous dès que possible. Merci</span></div>\n    </div>\n  </div>\n  <noon-footer class=\"hidden-mobile\"></noon-footer>\n</div>");
$templateCache.put("faq.view.html","\n<noon-header></noon-header>\n<div class=\"noon-view\">\n  <div class=\"view-faq visible-mobile\">\n    <div class=\"body-faq\">\n      <div ng-class=\"{\'slideDownNav\' : $root.showNav, \'slideUpNav\' : $root.showNav == false}\" class=\"wrapper-mobile animated\">\n        <div class=\"container-faq\">\n          <div class=\"title\">FAQ\n            <hr>\n          </div>\n          <accordion close-others=\"oneAtATime\">\n            <accordion-group is-open=\"status.open\" ng-repeat=\"data in questions track by $index\">{{data.answer}}\n              <accordion-heading><span>{{data.question}}</span><i ng-class=\"{\'glyphicon-chevron-down\': status.open, \'glyphicon-chevron-right\': !status.open}\" class=\"pull-right glyphicon\"></i></accordion-heading>\n            </accordion-group>\n          </accordion>\n        </div>\n      </div>\n    </div>\n    <noon-footer></noon-footer>\n  </div>\n  <div class=\"view-faq hidden-mobile\">\n    <div class=\"body-faq\">\n      <div class=\"container-faq\">\n        <div class=\"title\">FAQ\n          <hr>\n        </div>\n        <accordion close-others=\"oneAtATime\">\n          <accordion-group is-open=\"status.open\" ng-repeat=\"data in questions track by $index\" ng-click=\"gotoAnchor($index, status.open)\" id=\"anchor{{$index}}\">{{data.answer}}\n            <accordion-heading>{{data.question}}<i ng-class=\"{\'glyphicon-chevron-down\': status.open, \'glyphicon-chevron-right\': !status.open}\" class=\"pull-right glyphicon\"></i></accordion-heading>\n          </accordion-group>\n        </accordion>\n      </div>\n    </div>\n    <noon-footer></noon-footer>\n  </div>\n</div>");
$templateCache.put("home.view.html","\n<noon-header></noon-header>\n<div class=\"noon-view\">\n  <div class=\"view-home visible-mobile\">\n    <div class=\"content-mobile\">\n      <div ng-class=\"{\'slideDownNav\' : $root.showNav, \'slideUpNav\' : $root.showNav == false}\" class=\"wrapper-mobile animated\">\n        <div ng-click=\"$root.slidePhone()\" class=\"container-text\">\n          <div class=\"title\">Des <strong>quiz</strong>,<br> une <strong>loterie</strong> gratuite<br>et des gains <strong>d\'argent</strong><br> tous les jours</div>\n          <div class=\"store\">Application gratuite bientôt disponible sur\n            <div class=\"apple-store\"><img src=\"img/Logo_Appstore.png\"></div>\n            <div class=\"google-store\"><img src=\"img/Logo_Googlestore.png\"></div>\n          </div>\n        </div>\n        <div class=\"container-slider\">\n          <div class=\"nav\">\n            <div class=\"wrapper\">\n              <div ng-repeat=\"slide in slides\" ng-class=\"{\'active\':isCurrentSlideIndex($index)}\" ng-click=\"setCurrentSlideIndex($index);\" class=\"dot\"></div>\n            </div>\n          </div>\n          <div ng-click=\"$root.slidePhone()\" class=\"iphone\"><img src=\"img/Smartphones-mobile.png\">\n            <div class=\"slider\"><img ng-repeat=\"slide in slides\" ng-hide=\"!isCurrentSlideIndex($index)\" ng-src=\"{{slide}}\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"container-ccm\">\n        <div class=\"title\">Comment ça marche</div>\n        <div class=\"container-iphones\">\n          <div class=\"container-iphone\"><img src=\"img/CCM-1.png\">\n            <div class=\"title\">Le Jeu</div>\n            <div class=\"desc\">Je peux accéder au jeu et tenter de remporter la cagnotte, tous les jours de l’année sans exception.</div>\n          </div>\n          <div class=\"container-iphone\"><img src=\"img/CCM-2.png\">\n            <div class=\"title\">Les quiz</div>\n            <div class=\"desc\">J’ai un temps limité pour observer une image puis répondre aux questions. Il y a plusieurs Quiz par jour.</div>\n          </div>\n          <div class=\"container-iphone\"><img src=\"img/CCM-3.png\">\n            <div class=\"title\">Les tickets</div>\n            <div class=\"desc\">À chaque fois que je réussi un Quiz je gagne un ou plusieurs tickets numérotés pour la loterie du jour.</div>\n          </div>\n          <div class=\"container-iphone\"><img src=\"img/CCM-4.png\">\n            <div class=\"title\">La loterie</div>\n            <div class=\"desc\">Le tirage de la loterie a lieu tous les midis, je vais dans le menu « Résultats » voir si j’ai gagné de l’argent.</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"container-resultclass\">\n        <div ui-sref=\"result\" class=\"container-home-result\"><img src=\"img/picto-resultat.png\">\n          <div class=\"title-result-class\">Résultats</div>\n          <div class=\"desc-result-class\">Voir les résultats des gagnants du jour en fonction des tickets de loterie qui ont été tirés</div>\n        </div>\n        <div ui-sref=\"ranking\" class=\"container-home-class\"><img src=\"img/picto-classement.png\">\n          <div class=\"title-result-class\">Classement</div>\n          <div class=\"desc-result-class\">Consulter le classement général de tous les utilisateurs de Noon, depuis leur 1er jeu</div>\n        </div>\n      </div>\n      <div class=\"container-advertiser\">\n        <div class=\"title\">Annonceurs</div>\n        <div class=\"desc\">Grâce à l\'application Noon, augmentez votre visibilité et votre notoriété</div>\n        <div ui-sref=\"advertiser\" class=\"link\">\n          <p>Voir nos offres</p><img src=\"img/fleche-cta.png\">\n        </div>\n      </div>\n      <noon-footer></noon-footer>\n    </div>\n  </div>\n  <div class=\"view-home hidden-mobile\">\n    <div class=\"container-body-home\">\n      <div class=\"container-slider\">\n        <div class=\"container-sl\">\n          <div class=\"dem\">\n            <div class=\"title\">Des <strong>quiz</strong>,<br> une <strong>loterie</strong> gratuite<br>et des gains <strong>d\'argent</strong><br> tous les jours</div>\n            <div class=\"store\">Application gratuite bientôt disponible sur\n              <div class=\"apple-store\"><img src=\"img/Logo_Appstore.png\"></div>\n              <div class=\"google-store\"><img src=\"img/Logo_Googlestore.png\"></div>\n            </div>\n          </div>\n          <div class=\"iphone\"><img src=\"img/Smartphones.png\">\n            <div class=\"slider\"><img ng-repeat=\"slide in slides\" ng-hide=\"!isCurrentSlideIndex($index)\" ng-src=\"{{slide}}\"></div>\n          </div>\n          <div class=\"nav\">\n            <div class=\"wrapper\">\n              <div ng-repeat=\"slide in slides\" ng-class=\"{\'active\':isCurrentSlideIndex($index)}\" ng-click=\"setCurrentSlideIndex($index);\" class=\"dot\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"container-ccm\">\n      <div class=\"title\">Comment ça marche</div>\n      <div class=\"container-iphones\">\n        <div class=\"container-iphone\"><img src=\"img/CCM-1.png\">\n          <div class=\"title\">Le Jeu</div>\n          <div class=\"desc\">Je peux accéder au jeu et tenter de remporter la cagnotte, tous les jours de l’année sans exception.</div>\n        </div>\n        <div class=\"container-iphone\"><img src=\"img/CCM-2.png\">\n          <div class=\"title\">Les quiz</div>\n          <div class=\"desc\">J’ai un temps limité pour observer une image puis répondre aux questions. Il y a plusieurs Quiz par jour.</div>\n        </div>\n        <div class=\"container-iphone\"><img src=\"img/CCM-3.png\">\n          <div class=\"title\">Les tickets</div>\n          <div class=\"desc\">À chaque fois que je réussi un Quiz je gagne un ou plusieurs tickets numérotés pour la loterie du jour.</div>\n        </div>\n        <div class=\"container-iphone\"><img src=\"img/CCM-4.png\">\n          <div class=\"title\">La loterie</div>\n          <div class=\"desc\">Le tirage de la loterie a lieu tous les midis, je vais dans le menu « Résultats » voir si j’ai gagné de l’argent.</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"container-resultclass\">\n      <div ui-sref=\"result\" class=\"container-home-result\"><img src=\"img/picto-resultat.png\">\n        <div class=\"title-result-class\">Résultats</div>\n        <div class=\"desc-result-class\">Voir les résultats des gagnants du jour en fonction des tickets de loterie qui ont été tirés</div>\n      </div>\n      <div ui-sref=\"ranking\" class=\"container-home-class\"><img src=\"img/picto-classement.png\">\n        <div class=\"title-result-class\">Classement</div>\n        <div class=\"desc-result-class\">Consulter le classement général de tous les utilisateurs de Noon, depuis leur 1er jeu</div>\n      </div>\n    </div>\n    <div class=\"container-advertiser\">\n      <div class=\"title\">Annonceurs</div>\n      <div class=\"desc\">Grâce à l\'application Noon, augmentez votre visibilité et votre notoriété</div>\n      <div ui-sref=\"advertiser\" class=\"link\">\n        <p>Voir nos offres</p><img src=\"img/fleche-cta.png\">\n      </div>\n    </div>\n    <noon-footer></noon-footer>\n  </div>\n</div>");
$templateCache.put("ranking.view.html","\n<noon-header></noon-header>\n<div class=\"noon-view\">\n  <div class=\"view-ranking\">\n    <ion-view>\n      <ion-content>\n        <div class=\"body-ranking\">\n          <div ng-class=\"{\'slideDownNav\' : $root.showNav, \'slideUpNav\' : $root.showNav == false}\" class=\"wrapper-mobile animated\">\n            <div class=\"results-ranking\">\n              <div class=\"title-ranking\"><img src=\"img/picto-classement.png\">\n                <h2>CLASSEMENT GÉNÉRAL</h2>\n              </div>\n              <table>\n                <thead>\n                  <td>RANK</td>\n                  <td>USERNAME</td>\n                  <td>QUIZ VALIDÉS</td>\n                  <td>RATIO</td>\n                  <td>SOMME €</td>\n                </thead>\n                <tbody ng-repeat=\"player in resultsByPage track by $index\">\n                  <td data-title=\"\'RANK\'\">{{ $index + 1 + (currentPage * 10)}}</td>\n                  <td data-title=\"\'USERNAME\'\">{{ player.username }}</td>\n                  <td data-title=\"\'QUIZ VALIDÉES\'\">{{ player.quizzWinnedCount }}</td>\n                  <td data-title=\"\'RATIO\'\">{{ (player.quizzWinnedCount / player.quizzPlayedCount) | number : 2 }}</td>\n                  <td data-title=\"\'SOMME €\'\">{{ player.totalEarned.toFixed(2) }}</td>\n                </tbody>\n              </table>\n              <div ng-hide=\"q.length\" class=\"pager\">\n                <button ng-repeat=\"page in pages\" ng-click=\"getResultsByPage(page)\" ng-class=\"{ \'active\' : page == currentPage }\">{{ page + 1 }}</button>\n              </div>\n            </div>\n            <noon-footer class=\"show-on-keybord\"></noon-footer>\n          </div>\n        </div>\n      </ion-content>\n      <noon-footer class=\"hide-on-keybord\"></noon-footer>\n    </ion-view>\n  </div>\n</div>");
$templateCache.put("mention.view.html","\n<noon-header></noon-header>\n<div class=\"noon-view\">\n  <div class=\"view-mention visible-mobile\">\n    <div class=\"body-mention\">\n      <div ng-class=\"{\'slideDownNav\' : $root.showNav, \'slideUpNav\' : $root.showNav == false}\" class=\"wrapper-mobile animated\">\n        <div class=\"body-mention-container\">\n          <div class=\"bloc-container\">\n            <div class=\"title\">EDITEUR DU SITE</div>\n            <hr>\n            <div class=\"desc\">SAS HELANDYS - Capital de 1.000e - RCS de Paris : 808 535 082 11-13 avenue de Friedland, 75008 Paris, France</div>\n          </div>\n          <div class=\"bloc-container\">\n            <div class=\"title\">DIRECTEUR DE LA PUBLICATION</div>\n            <hr>\n            <div class=\"desc\">Monsieur Gauthier Devoucoux</div>\n          </div>\n          <div class=\"bloc-container\">\n            <div class=\"title\">HEBERGEUR</div>\n            <hr>\n            <div class=\"desc\">www.aws.amazon.com</div>\n          </div>\n          <div class=\"bloc-cnil\">Numéro CNIL : 1832021 (du 30/01/2015)</div>\n        </div>\n      </div>\n    </div>\n    <noon-footer></noon-footer>\n  </div>\n  <div class=\"view-mention hidden-mobile\">\n    <div class=\"body-mention\">\n      <div class=\"body-mention-container\">\n        <div class=\"bloc-container\">\n          <div class=\"title\">EDITEUR DU SITE</div>\n          <hr>\n          <div class=\"desc\">SAS HELANDYS - Capital de 1.000e - RCS de Paris : 808 535 082 11-13 avenue de Friedland, 75008 Paris, France</div>\n        </div>\n        <div class=\"bloc-container\">\n          <div class=\"title\">DIRECTEUR DE LA PUBLICATION</div>\n          <hr>\n          <div class=\"desc\">Monsieur Gauthier Devoucoux</div>\n        </div>\n        <div class=\"bloc-container\">\n          <div class=\"title\">HEBERGEUR</div>\n          <hr>\n          <div class=\"desc\">www.aws.amazon.com</div>\n        </div>\n        <div class=\"bloc-cnil\">Numéro CNIL : 1832021 (du 30/01/2015)</div>\n      </div>\n    </div>\n    <noon-footer></noon-footer>\n  </div>\n</div>");
$templateCache.put("result.view.html","\n<noon-header></noon-header>\n<div class=\"noon-view\">\n  <div class=\"view-result\">\n    <div class=\"body-result\">\n      <div class=\"container-body\">\n        <div class=\"title-result\"><img src=\"img/picto-resultat.png\">\n          <h2>RÉSULTATS DU JOUR</h2>\n        </div>\n        <datepicker ng-model=\"date\" ng-change=\"getResults(date)\" min-mode=\"day\" max-mode=\"day\" min-date=\"minDate\" show-weeks=\"false\" custom-class=\"getDayClass(date, mode)\" class=\"medate\"></datepicker>\n        <div class=\"results\">\n          <div class=\"filter\">\n            <input type=\"text\" ng-model=\"q\" ng-change=\"search(q)\">\n          </div>\n          <table>\n            <thead>\n              <td>RANK</td>\n              <td>USERNAME</td>\n              <td>N°TICKET</td>\n              <td>SOMME €</td>\n            </thead>\n            <tbody ng-repeat=\"result in filteredResults = (resultsByPage | filter:q ) track by $index\">\n              <td>{{ result.position + 1 }}</td>\n              <td>{{ result.player.username }}</td>\n              <td>{{ result.ticket.number }}</td>\n              <td>{{ result.earned }}</td>\n            </tbody>\n          </table>\n          <div ng-hide=\"q.length\" class=\"pager\">\n            <button ng-repeat=\"page in pages\" ng-click=\"getResultsByPage(page)\" ng-class=\"{ \'active\' : page == currentPage }\">{{ page + 1 }}</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");}]);