import Button from 'react-native-button';
import UsersShow from "./UsersShow";
import PetShow from './PetShow';
import UsersEdit from './UsersEdit';
import SwipeCards from 'react-native-swipe-cards';
import React from 'react-native';

var {
  StyleSheet,
  Component,
  Text,
  View,
  ListView,
  TextInput,
  Image,
  TouchableHighlight,
  Modal,
} = React;

var REQUEST_URL = 'http://localhost:3000/index.json';
var REQUEST_ONE_URL = 'http://localhost:3000/one.json';
var FAVORITE_URL = 'http://localhost:3000/pets.json';
var PET_URL = 'http://localhost:3000/pets/1.json';

var PET_DATA = [{"id":null,"petfinder_id":22887160,"name":"Pumpkin","animal":"Cat","description":"This adorable little girl is Pumpkin. She was found trapped inside of a tire by a Good Samaritan, when she just was 4 months old, and was brought to Bideawee for housing and care. We took one look at her, and swept her right under our wing! Pumpkin is a social and excitable Domestic shorthair kitty. She has a great deal of playful, kitten-like energy still! Pumpkin would be pleased as punch to chase a string around for hours. She is quite the socialite, too, and loves to strut around; she believes that the world is her playground! Pumpkin is quite unique in both personality and creation; she is not only zesty, but she is an uncommon find, as orange female cats are a rarity! She is seeking an equally special home to call her own. Pumpkin tends to become worked up when she receives more attention at one time than she can handle, and so she would do best in an adult home with cat-savvy adopters. All Pumpkin needs is a chance with the right family! Won't you please consider adopting this beautiful girl?","age":"Baby","size":"S","gender":"F","breed":"Domestic Short Hair","altered":"true","shots":"false","special_needs":"housetrained","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/22887160/1/?bust=1390685556&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/22887160/2/?bust=1337923672&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/22887160/3/?bust=1390685557&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":34675355,"name":"Linus","animal":"Dog","description":"Linus is a stunning, young (18 months) male Fox Hound mix who made his way to STAF from a rescuer/foster in Kentucky.  He is also somewhat of a country boy and still getting used to his city digs; you know walking near traffic and a lot more loud noise can be kind of scary at first.  Linus is acclimating and more and more comfortable with each day.  \n\nWith his insatiable love of blankets, Linus is aptly named :o).   He has been known to use a blanket for hide and seek, when heâs a super hero or just to carry around.  While in his foster home Linus did great with his canine foster brothers/sisters but was a little pickier when it came to his feline siblings and Linus will probably do best and be happiest in a home without cats.\n\nLinus has learned his basic manners, like âsitâ and âwaitâ when approaching a door or gate and did well when left in his crate. He is sometimes slightly shy when meeting new people, but pick up a ball or toy and Linus quickly makes friends since he LOVES to play!\n\nLinusâ estimated birth date is September 2014\n\nPlease see our homepage for visiting hours and adoption details. \n\n\nAll of our animals are spayed/neutered and current on shots.\nYou must complete an application at the shelter prior to meeting any of our animals. (Sorry--our application is not available on-line or via email.)\nWe do not do same-day adoptions; we ask that you return for a follow-up visit before taking an animal home.\nWe require a fenced yard (sorry--no invisible fences) for homes with children under age 11.\nWe do request vet and personal references.\nAt this time, we are only able to consider applicants within 150 miles of Cincinnati.\n\n\nCanât adopt but want to help? You can make a difference! Our shelter is run entirely on volunteer-power and generous donations from animal-lovers like you. 100% of your contribution goes directly to caring for our 500+ furry residents. Thank you for your support.","age":"Young","size":"M","gender":"M","breed":"Foxhound","altered":"true","shots":"true","special_needs":"noCats","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/34675355/1/?bust=1457982662&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34675355/2/?bust=1457982663&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34675355/3/?bust=1457982663&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":34829744,"name":"Rio","animal":"Dog","description":"You can fill out an adoption application online on our official website.Please contact Jill (berryjill@hotmail.com), (484) 426-7185 for more information about this pet. Scroll down to see more pictures of this dog. Rio is available for adoption. He is 4 years old and weighs 7 lbs.His adoption fee is $450.00.Rio is full of energy. Loves to go for long walks and play fetch. He will carry a ball around in his mouth asking for you to play with him. Loves tug of war as well. He likes other dogs too but is more interested in the people in my house than his foster sister. Rio is a romantic! He greeted his foster family with kisses immediately. He rides great in the car. He will throw a toy up in the air for himself. He's a happy boy with a constantly wagging tail. He will be great in a home with someone who has the desire to play and walk with him!Rio is vacationing in Emmaus, PA, with Jill and her family. April 25, 2016, 11:12 pm","age":"Adult","size":"S","gender":"M","breed":"Yorkshire Terrier Yorkie","altered":"true","shots":"true","special_needs":"","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/34829744/1/?bust=1460943891&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34829744/2/?bust=1460943891&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34829744/3/?bust=1460943892&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":30103019,"name":"Breanna-Adopted!","animal":"Dog","description":"Breanna= She is a 6 year old French Bulldog and she is a happy gal. She loves toys and is quite the hoarder. She doesn't mind other dogs once she establishes how the pecking order works. She enjoys a crate where she feels safe and can fill it with her toys! She is just learning what life outside of a cage is like so will need some love and patience as she learns house rules. She's working on her potty training, and walking with a leash. This girl is high energy and loves to be near people. She's eager to play, snuggle and explore her new world\n\nBreanna  weighs about 22 pounds.  She is spayed, vaccinated, heartworm checked and microchipped.   She does have a dry eye and she is non-visual in the eye.  She will need an eye ointment put in every day to prevent it from causing her pain.\n\nPlease make sure you are aware of the cost of a French Bulldog and potential health problems a French Bulldog can have before applying to adopt one.","age":"Adult","size":"M","gender":"F","breed":"French Bulldog","altered":"true","shots":"true","special_needs":"housetrained","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/30103019/1/?bust=1450055362&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/30103019/2/?bust=1450055362&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/30103019/3/?bust=1450055362&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":29821324,"name":"Jelly Bean","animal":"Cat","description":"Jelly Bean is a sweet, curious little girl who is the shyest of three sisters who came to the Sanctuary from a shelter in Arizona. Jelly Bean loves when you pick her up, and she loves being noticed. She is a cat lover's cat - she is very saucy and definitely in charge and always winds up being everyone's favorite.Born in August 2009, she is great with people, dogs, and other cats. She does test slightly positive for Feline Leukemia (FeLV), so it would be best if she lived with other FeLV+ cats.Jelly Bean is looking for a home to help her grow up into a more confident, affectionate cat. If you're looking for a sweet kitty who needs some TLC, Jelly Bean would jump for joy if you picked her!","age":"Adult","size":"M","gender":"F","breed":"Domestic Short Hair","altered":"false","shots":"true","special_needs":"specialNeeds","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/29821324/1/?bust=1460498555&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":33515322,"name":"Henry","animal":"Cat","description":"Meet Henry! Henry was found as a stray near Port Everglades, he may have been trying to get on one of those cruises everyone is talking about these days but he somehow got injured and never got to go. He's all better now and he's hanging out at the PetSmart in Fort Lauderdale looking for his next big adventure! At about 6 months old, he's a young kitty with lots of love and play in him.","age":"Young","size":"M","gender":"M","breed":"Domestic Short Hair","altered":"true","shots":"true","special_needs":"housetrained","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/33515322/1/?bust=1444781842&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/33515322/2/?bust=1444781843&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/33515322/3/?bust=1444781843&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":34790703,"name":"DUCKY","animal":"Dog","description":"No description given","age":"Adult","size":"M","gender":"M","breed":"Pit Bull Terrier","altered":"true","shots":"false","special_needs":"","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/34790703/1/?bust=1459356463&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":34864375,"name":"Buford","animal":"Cat","description":"Buford- a very loving boy found in a volunteer's yard. You can pick him and hold him. He is very laid back. Other cats don't seem to bother him.  He seems to be only a couple years old. He has been neutered, up to date on shots and FelV neg. Please call to visit him at the shelter: Therese: 610-248-7399. vet reference required for adoption. [4/9/16]","age":"Adult","size":"M","gender":"M","breed":"Domestic Short Hair - brown","altered":"true","shots":"true","special_needs":"housetrained","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/34864375/1/?bust=1460267597&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34864375/2/?bust=1460267597&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34864375/3/?bust=1460267598&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":31662203,"name":"Felix","animal":"Cat","description":"Felix is an energetic young boy. He loves to play and is very sweet. Felix can be affectionate and likes to be held once he knows you.  He loves it when you give him a nice backrub and will reward you with head-butt . Felix is very close to his brother Frankie and would like to either adopted with him or to a home with another cat.  Felix is also dog friendly. He was born around 9/11/14. \nFor more pictures and videos of Felix please go to  https://flic.kr/s/aHsk9tu8Mz\n\nhttp://www.youtube.com/watch?v=lQ_urzL7X5E","age":"Young","size":"M","gender":"M","breed":"Tabby - Orange","altered":"true","shots":"true","special_needs":"housetrained","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/31662203/1/?bust=1426108602&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/31662203/2/?bust=1442592426&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/31662203/3/?bust=1442592426&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":34205924,"name":"SOPHIA (Petsmart)","animal":"Cat","description":"This beautiful friendly muted tortishell was rescued from a West Brighton. Sophia showed up at a colony looking for food and was craving human attention. She loves to be pet and rolls over for belly rubs. Looking for companioship--then Sophia is the gal for you.\n\nSophia was born November 2013. She is up to date with shots, spayed, negative for FIV / FELV, and microchipped.  Currently in the care of the Staten Island Council for Animal Welfare--she can be seen at Petsmart 1520 Forest Ave.\nFor more info phone Clo at 718-948-5623.  View the animals at www.sicaw.petfinder.org\n(PLEASE NOTE THAT THESE ARE HOME PHONE NUMBERS. CALLS WOULD BE APPRECIATED AFTER 9AM OR BEFORE 9PM UNLESS IN CASE OF EMERGENCY)\n\nPlease copy and paste this link into a browser window to fill out an on-line pre-adoption form:  http://members.petfinder.org/~NY34/pre-adoption.html   Or you can phone Clo at 718-948-5623 for more information","age":"Adult","size":"S","gender":"F","breed":"Tortoiseshell","altered":"true","shots":"true","special_needs":"","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/34205924/1/?bust=1452441461&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34205924/2/?bust=1452441462&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34205924/3/?bust=1452441462&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":34579998,"name":"Eloise","animal":"Cat","description":"Eloise was found under a car with a very bad limp.  She was brought into Petsmart during our adoption event on Saturday and we immediately rushed her to the vet where an xray found she had a broken Radius going into the elbow joint.  As it was an old injury the specialist wasn not able to do anything or cast the leg. So she is in foster now on cage rest.  She is improving everyday and will be healed in a few weeks and will be available for adoption.  She is a sweet, playful young lady.  Very curious, alert and out going. Eloise is getting along well with her foster family's two small dogs and has healed well from her elbow facture.  She still has a slight limp but is getting around just fine, not slowing her down at all!","age":"Baby","size":"M","gender":"F","breed":"Domestic Short Hair-black and white","altered":"true","shots":"true","special_needs":"housetrained","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/34579998/1/?bust=1456876368&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34579998/2/?bust=1456876368&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34579998/3/?bust=1456876369&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":34873338,"name":"ROMEO","animal":"Bird","description":"Romeo is available for adoption.  His adoption fee is $5.","age":"Young","size":"L","gender":"M","breed":"Chicken","altered":"false","shots":"false","special_needs":"","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://www.iconsdownload.net/icons/256/1588-paw-print-outline-icon.png"}]},{"id":null,"petfinder_id":34931892,"name":"Jordie","animal":"Cat","description":"No description given","age":"Baby","size":"S","gender":"F","breed":"Domestic Short Hair","altered":"true","shots":"false","special_needs":"","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/34931892/1/?bust=1461109116&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":34659648,"name":"Petunia","animal":"Dog","description":"Cute, little Petunia came to Paw Parent from Ensenada Mexico, where she was rescued by a kind woman who rescues dogs there.  Doesn't she have the most amazing doe eyes.  Don't they just melt your heart?  Poor thing had a huge bladder stone that needed to be surgically removed.  She did not want to walk much before, but loves to run and play now and is fully healed.  Her favorite past time is snuggling up next to a person. She gets along great with all dogs, large or small, is house broken, great on a leash and ready to make someone a best friend.\n\nShe is about 5 years old and weighs around 10 pounds.  She is spayed, up to date with all her shots and has a micro chip.\n\nPlease call 661-724-0642 if you want to meet her.","age":"Adult","size":"S","gender":"F","breed":"Chihuahua","altered":"true","shots":"true","special_needs":"housetrained","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/34659648/1/?bust=1457998925&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34659648/2/?bust=1457742517&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34659648/3/?bust=1457742517&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":34527190,"name":"Carla","animal":"Cat","description":"HI!  I'm Carla and I was born 10/1/15 (approx.).  I'm quiet and a little shy but I am eagerly looking forward to my forever home!  If you are willing to have a little patience with me I promise to reward you with lots of love and purrs!   Please come and meet me at PetValu in The Shoppes at Mansfield.","age":"Young","size":"M","gender":"F","breed":"Domestic Short Hair","altered":"false","shots":"true","special_needs":"housetrained","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/34527190/1/?bust=1456252061&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34527190/2/?bust=1456252062&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34527190/3/?bust=1456252062&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":34855453,"name":"Sweetpea","animal":"Cat","description":"Pet Name:  Sweetpea\n\nAbout the Pet:  Sweetpea is a beautiful girl about 3 years old.  She has a sweet personality and is a good girl.\nHowever, it is really hard for black cats to be adopted.  For some reason they are always looked over by visitors to the shelter.  Please give Sweetpea a chance at a happily ever after tale of love and happiness.  She deserves a great new forever home.  Please call Aggie at 435-669-7043 or Friends of Ivins Animal Shelter at 435-673-1718 to make arrangements to meet Sweetpea and her friends at the shelter.\n\nAdoption Fee:  The adoption fee at the Ivins Animal Shelter and Adoption Center is $25 for cats.  However, special reduced fees are featured throughout the year.  Please call the shelter for more information.\n\nWhere to Meet this Pet:                                                                                                                                                                                          Ivins Animal Shelter and Adoption Center\n474 North 200 West . Ivins . 435-628-1049\n\nHours: \nMonday and Friday 8:00 AM-4:00 PM\nTuesday, Wednesday and Thursday 8:00 AM-5:00 PM                    \nSaturday 8:00 AM to 3:00 PM","age":"Adult","size":"M","gender":"F","breed":"Domestic Short Hair-black","altered":"true","shots":"true","special_needs":"housetrained","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/34855453/1/?bust=1460152076&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":34934766,"name":"Lefty","animal":"Dog","description":"Very gentle and well behaved!  He is 4 months...and growing!!","age":"Baby","size":"L","gender":"M","breed":"German Shepherd Dog","altered":"false","shots":"true","special_needs":"","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/34934766/1/?bust=1461151296&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":34869758,"name":"Addison","animal":"Dog","description":"Please download the adoption application from our website and email back to petprojectinc@gmail.com.  If you would prefer or you are unable to download the application, you may email us for an adoption application and for more information if needed.\n\nLook at this adorable duo!  Meet Clark and Addison!  Clark and Addison are both male Lhasa Apso mixes.  Clark the tan and white one is 2 years old and Addison the black and white one is 7 years old.  Addison is partially sighted and depends on his brother Clark to be his guide.  So they must be adopted together.  Both these boys are not only extremely friendly and outgoing, but very very loving. They just love human attention and are constantly wagging their tails.  Very happy little boys that would be a pleasure to add to your home. They are easy to walk together...........they are just perfect together.  Anyone would be lucky to be able to adopt these two.  WHAT DOLLS!!  Check out their little video!\n\nThe adoption fee for dogs is $200 for adult dogs and puppies.  This fee includes a test for heartworm and a fecal test. All of the dogs at Pet Project are tested and examined by a veterinarian before they arrive at the shelter.   The adoption fee also includes vaccinations, microchip and spay or neuter.","age":"Adult","size":"S","gender":"M","breed":"Lhasa Apso","altered":"true","shots":"true","special_needs":"","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/34869758/1/?bust=1460738076&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34869758/2/?bust=1460738077&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34869758/3/?bust=1460738078&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":34885443,"name":"Brownie D160573: PENDING ADOPTION","animal":"Dog","description":"Name: Brownie  Date of Birth: Approx. 12/30/2015  Gender: Female  Breed: Spaniel X  Weight: 32  Dog friendly: Yes  Cat friendly: TBD  Kid friendly: Yes  House trained: TBD  Crate trained: TBD  Energy level: Moderate - PUPPY!  History: Pulled form a high kill shelter  Adoption Fee: $400   From the Foster:    Hi my name is brownie (4mons old) and even though I have only been with my foster family a short bit they can tell I am amazing. I do great in my crate with only a little whimper now and then. I am still a puppy but have gotten the idea of telling the humans when I have to go out potty pretty well.(no accidents so far). I have meet my foster families cat, rabbits, ducks, and chickens....we all get along well, I am very laid back. My foster family has three young kiddos including a newborn who I already love to snuggle with. I am still learning not to jump but I listen well when the kids tell me down. I would be a great addition to any family. \n\n   All dogs are in individual foster homes throughout the Twin Cities.\n \n FILL OUT AN APPLICATION TODAY!\n Click Here to Begin Application  \n\n  If you live in MN, WI, IA, SD, ND, or IL and would like to meet/adopt this animal or anyone else, then please fill out an adoption application at  http://secondhandhounds.org/adoption-information/  and the foster(s) will be in touch! Keep in mind that there may be multiple applicants applying for the same animal(s).  You only need to complete 1 application for multiple animals that you're interested in.\n\n  Note   - We change an animal's listing to say \"PENDING ADOPTION\" when they already had a meet and greet with a family who plans to adopt   that animal. We put \"NO LONGER ACCEPTING APPLICATIONS\" on a listing when an animal has multiple applications in and the foster has asked to stop accepting any more while they review the applications they've already received.  \n\n  Thanks for your interest in Secondhand Hounds!!","age":"Baby","size":"L","gender":"F","breed":"Spaniel","altered":"true","shots":"false","special_needs":"","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/34885443/1/?bust=1460558742&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34885443/2/?bust=1460558742&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34885443/3/?bust=1460558743&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":34885369,"name":"Jete D160317: PENDING ADOPTION","animal":"Dog","description":"Name: Jete\n Age: Born 2/29/2016\n Gender: Female\n Breed: Beagle / Australian Shepherd mix (mom is Polka Dot, dad is Bigley)\n Weight: 4 lbs\n Dog friendly: Yes\n Cat friendly: Unknown\n Kid friendly: TBD\n House trained: In progress\n Crate trained: In progress\n Energy level: Puppy!\n History: Born to Polka Dot in rescue\n Adoption Fee: $450\n \n From the Foster: Momma Polka Dot gave birth to 9 little munchkins on Leap Day! We will update more as we get to know them!\n\n  Momma Polka Dot came into rescue as a pregnant stray dog who was running the streets of Missouri with the probable father of her litter, a Dachshund/Beagle mix named Bigley. They are both around 20 lbs and have long backs and short legs. Between the two of them they provided enough variety in coat and color that this truly is the All American small dog litter.\n\n    Jete' came into this world as a little black dog with a white blaze on her chest. Within a couple of weeks she had added full tan highlights to her legs, cheeks and tail. She is outgoing and usually has a lot to say about being left alone. She loves to cuddle.\n\n All dogs are in individual foster homes throughout the Twin Cities.\n \n FILL OUT AN APPLICATION TODAY!\n Click Here to Begin Application\n \n \n Search for more adoptable pets on our website at www.secondhandhounds.org","age":"Baby","size":"S","gender":"F","breed":"Beagle","altered":"true","shots":"false","special_needs":"","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/34885369/1/?bust=1460558190&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34885369/2/?bust=1460558190&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34885369/3/?bust=1460558192&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":34912121,"name":"Meow","animal":"Cat","description":"Pet Name:  Meow\n\nAbout the Pet:  As you can tell by Meowâs picture she is a beautiful black cat.  She posed so nicely for her shelter picture.  Meow is a sweetheart.  She is approximately 3 years old and weighs 9 pounds.  Meow is loving cat and likes to play.  She would be a great addition to a family, couple or single person.   It can be very hard for black cats to find their new forever homes.  Meow deserves a second chance so please open heart and home to her today.  She is anxious to be out of the shelter.  For more information or to make arrangements to meet Meow call Aggie at 435-669-7043 or Friends of Ivins Animal Shelter at 435-673-1718. \n\nAdoption Fee:  The adoption fee at the Ivins Animal Shelter and Adoption Center is $25 for cats.  However, special reduced fees are featured throughout the year.  Please call the shelter for more information.\n\nWhere to Meet this Pet:                                                                                                                                                                                          Ivins Animal Shelter and Adoption Center\n474 North 200 West . Ivins . 435-628-1049","age":"Adult","size":"L","gender":"F","breed":"Domestic Short Hair","altered":"true","shots":"true","special_needs":"housetrained","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/34912121/1/?bust=1460836030&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":29821168,"name":"Juniper","animal":"Rabbit","description":"Juniper was living in an Los Angeles shelter. She had no idea why she was there. She also had no idea her days were numbered - Juniper was slated to be put down simply because there were too many animals in the shelter.Best Friends saved her life. Literally!When people first come to meet Juniper, she runs away but then comes back to check you out because she's learned that if you're a human type, just maybe you have treats with you. And Juniper loves her treats.Juniper would be very happy living in a loving home with her best friend Violet.","age":"Senior","size":"M","gender":"F","breed":"English Spot","altered":"false","shots":"true","special_needs":"","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/29821168/1/?bust=1461648414&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":34919052,"name":"Damian","animal":"Dog","description":"Damian is spectacular and sweet and is sure to brighten up anyoneâs day! This 3 year old looks like a teddy bear and is happy to cuddle like one as well. Damian is currently living in a foster home. His favorite things so far? Damian loves âhelpingâ in the kitchen and fancies himself quite the cook. Damian is also a huge fan of sniffing around the yard. Damian is living with two other dogs in his foster home and enjoys playtime. He is laid back and easily respects boundaries. Damian is also currently living with a cat! Damian enjoys car rides and is very well behaved in the car. \n\nDamian has been hard at work on his basic obedience skills and is very treat motivated! He is quickly learning âdownâ and âleave it.â Damian is a bit unsure of new situations and of loud noises but he gains confidence each day. Damian would love a home where he is able to get lots of love and attention and stuffed toys!\n\nThe adoption fee for Damian is $130. If you would like more information on this special guy please contact his foster mom Jill at ljp0730@gmail.com!\n\nPlease consider becoming a volunteer or foster at The Animal Rescue League. Visit www.animalrescue.org for more info.","age":"Adult","size":"M","gender":"M","breed":"Pit Bull Terrier","altered":"true","shots":"true","special_needs":"","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/34919052/1/?bust=1460943942&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34919052/2/?bust=1460943943&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34919052/3/?bust=1460943943&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":34387355,"name":"Shorty","animal":"Cat","description":"Shorty is named after her partial (short) tail and has a loving personality.  \n\n  She can be shy at first but super playful once she gets to know you. She is about 8 years old, spayed and healthy. She came to us from a loving owner who was older and had to surrender some of her cats at the will of her landlord.  \n\n  Weâre not sure how Shorty feels around dogs because her previous owner didnât have a dog and she has minimal interaction with her foster momâs dog, but doesnât seem to care when dogs are around so we feel she would be fine in a home with respectful dogs.  \n\n  Short's adoption fee is $50 \n\n\n\n  Thank you for your interest in adopting from HMF. All of our pets are spayed/neutered, current on vaccinations, microchipped and otherwise healthy, unless noted in the description. Our adoption area is within 50 miles of Franklin/Bargersville, IN., though we do occasionally make exceptions to this.   \n\n   We hold a monthly adoption event on the last Saturday of each month from 12:00 noon until 3:00 p.m. at the   Bargersville Veterinary Hospital, 4247 N. State Road 135, Franklin, IN 46131.  \n\n   Direct questions to: general@hopemariesfund.org","age":"Adult","size":"M","gender":"F","breed":"Domestic Short Hair","altered":"true","shots":"true","special_needs":"","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/34387355/1/?bust=1454547759&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34387355/2/?bust=1454547759&width=300&-pn.jpg"},{"url":"http://photos.petfinder.com/photos/pets/34387355/3/?bust=1454547761&width=300&-pn.jpg"}]},{"id":null,"petfinder_id":34915599,"name":"TOPAZ","animal":"Cat","description":"No description given","age":"Adult","size":"S","gender":"M","breed":"Domestic Short Hair","altered":"true","shots":"false","special_needs":"","contact_email":"No contact email address on record","contact_phone":"No contact phone number on record","contact_address":"No contact address on record","contact_city":"No contact city on record","contact_state":"No contact state on record","contact_zip":"No contact zip code on record","photos":[{"url":"http://photos.petfinder.com/photos/pets/34915599/1/?bust=1461619675&width=300&-pn.jpg"}]}];


export default class Card extends Component {
  componentWillReceiveProps(nextProps){
    if(nextProps.pet.name !== this.props.pet.name){
      this.props.updateCurrentPet(nextProps.pet);
    }
  }
  selectAnimal(){
    var pet = this.props.pet
    this.props.showAnimalDetails(pet)
  }
  render() {
    var self = this
    return(
      <TouchableHighlight style={styles.cardButton} onPress={self.selectAnimal.bind(self)}>
      <View style={styles.swipeArea}>
          <Image
            style={styles.thumbnail}
            source={{uri: this.props.pet.photos[0].url}}
            />
          <Text style={styles.name}> {this.props.pet.name} </Text>
          <Text style={styles.description}> {this.props.pet.age} {this.props.pet.breed} </Text>
      </View>
      </TouchableHighlight>
    )
  }
}

export default class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPet: null,
      loaded: false,
      detailsClicked: false,
      pets: [],
    }
  }
  componentDidMount(){
    this.fetchData();
  }
  showSettings(){
    this.setState({settingsClicked: true})
  }
  showDetails(){
    this.setState({detailsClicked: true})
  }
  onLikeButtonPress(pet) {
    this.addFavorite(pet);
  }
  addFavorite(pet){
    var obj = {
      method: 'POST',
      body: JSON.stringify({pet})
    }
    fetch(FAVORITE_URL, obj)
      .then((response) => this.fetchData())
  }
  fetchData(){
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log('fetch 25', JSON.stringify(responseData))
        this.setState({
          currentPet: responseData[0],
          loaded: true,
          detailsClicked: false,
          pets: responseData
        });
      })
      .done();
  }
  fetchOne(){
    fetch(REQUEST_ONE_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          pets: this.state.pets.concat(responseData)
        });
      })
      .done();
  }
  refreshPage(petPreference){
    this.setState({
      detailsClicked: false,
      settingsClicked: false,
      petPreference: petPreference
    })
    this.fetchData()
  }
  goHome(){
    this.setState({
      detailsClicked: false,
      settingsClicked: false,
    })
  }
  refreshPageWithNewAnimal(){
    this.fetchOne()
  }
  updateCurrentPet(pet){
    this.setState({currentPet: pet})
  }
  showAnimalDetails(pet){
    this.setState({detailsClicked: true, currentPet: pet})
  }
  render() {
    var self = this;
    if (!this.state.loaded){
      return this.renderLoadingView();
    }else if (this.state.detailsClicked) {
      var pet = this.state.currentPet;
      return (
        <PetShow
          refreshPage={self.refreshPage.bind(self)}
          refreshPageWithNewAnimal={self.refreshPageWithNewAnimal.bind(self)}
          onLikeButtonPress={self.onLikeButtonPress.bind(self)}
          clickedPet={pet}
          favorited={false}
          goHome={self.goHome.bind(self)}
        />
      )
    } else if (this.state.settingsClicked){

      return (
        <UsersEdit refreshPage={self.refreshPage.bind(self)}/>
      )
    }
    var cardData = self.state.pets
    return (
      <View style={styles.topBox}>
      <View style={styles.container}>
        <SwipeCards
          cards={cardData}
          renderCard={(singleCard) => {
            var p = {
              pet: singleCard,
              updateCurrentPet: self.updateCurrentPet.bind(self),
              showAnimalDetails: self.showAnimalDetails.bind(self)
            };
            return <Card {...p}/>}
          }
          showYup={true}
          showNope={true}
          handleYup={self.onLikeButtonPress.bind(self)}
          handleNope={self.fetchOne.bind(self)}
        >
        <Button
          onPress={this.showDetails.bind(this)}>
          <Image
            style={styles.buttonImg}
            source={require('../images/Info.png')}
          />

        </Button>
        </SwipeCards>
        <View style={styles.likeDislikeButtons}>
          <Button
            onPress={this.showDetails.bind(this)}>
            <Image
              style={styles.buttonImg}
              source={require('../images/Info.png')}
            />
          </Button>
          <Button onPress={this.showSettings.bind(this)}>
            <Image
              style={styles.buttonImg}
              source={require('../images/Settings-Gear.png')}
              />
          </Button>
        </View>
      </View>
      </View>
    );
  }
  renderLoadingView(){
    return (
      <View>
        <Text>
          Loading pets...
        </Text>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  topBox: {
    backgroundColor: '#1abc9c',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 380,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1abc9c',
    marginTop: 70
  },
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
    elevation: 1,
  },
  buttonImg: {
    width: 50,
    height: 50,
    margin: 20,
  },
  infoButtonImg: {
    width: 50,
    height: 50,
  },
  likeDislikeButtons: {
    flexDirection: 'row'
  },
  detailsButton: {
    height: 25,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  thumbnail: {
    width: 350,
    height: 400,
  },
  swipeArea: {
    backgroundColor: 'white',
    padding: 7,
  },
  name: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 22,
  },
  description: {
    fontSize: 14,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex: 1
  },
  cardButton: {
    backgroundColor: '#1abc9c',
  }
});
