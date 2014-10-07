$(document).ready(function(){
  Parse.initialize("VQpQwojL2wjTuNkUDzV0C2wAiQODWJw90cRKtP3Q", "yR5gVtaYrmMyjzTck1bLuvqRinqUrMnAoPqITysH");

  var TeamList = Parse.Object.extend("Teams");

    var userquery = new Parse.Query(Parse.User);
    var teamquery = new Parse.Query(TeamList);

    var validteams = [6030931, 5772662, 8008494, 2137820, 1716328, 7682432, 6999900, 987864, 4877869, 1840693, 360072, 6307404, 8821799,
                      751281, 6373408, 7882320, 2890211, 7762733, 4831923, 4189749, 8612271, 1324399, 6108775, 7420441, 4655316, 6878052,
                      8203311, 9378129, 6733872, 2163325, 9458582, 6369213, 7967482, 8364826, 2972029, 1694922, 3935673, 4843501, 8364826,
                      1576743, 4149419, 24129, 362652, 9933084, 9217170, 7508380, 2389568, 4365275, 693732, 2302005, 4139413, 1531771,
                      3481961, 3376653, 4230998, 8881461, 7532169, 3804467, 6371148, 4526932, 7929226, 9557090, 9838276, 9955088, 8440091,
                      1423225, 7053076, 4814825, 5268722, 4342970, 6910436, 7309889, 8921105, 5493677, 4067654, 6332486, 5358913, 4294833,
                      5662289, 2568484, 5039303, 6218317, 8849769, 1824110, 206199, 4264009, 4067654, 6057669, 6107519, 587562, 9955088,
                      9765995, 7450680, 9311533, 3692328, 9072179, 9179611, 8280347, 4306087, 3023473, 27740, 6588647, 5797943, 9955088,
                      1119134, 2272623, 7478447, 186448, 1922733, 5039303, 6641473, 4402455, 209619, 8624619, 9849672, 3923451, 280296,
                      9206105, 1376496, 1336185, 4778517, 4051664, 2610148, 7672310, 9408208, 7984367, 6332486, 3557759, 8364826, 8440248,
                      6876023, 1915467, 8642529, 6914866, 5865502, 2895923, 7923115, 2020062, 5391767, 1369262, 7099511, 9639832, 6480737,
                      1893365, 6795816, 2804007, 1113533, 532575, 5559277, 1983542, 4362360, 1369262, 280296, 4526932, 8921105, 5988087,
                      9535926, 8877494, 2993697, 7656702, 9650871, 2412045, 6641473, 3561683, 1866292, 9639832, 6332486, 7692321, 9639832,
                      3947786, 5646843, 2682763, 6752430, 7195261, 4788632, 8299831, 4019526, 7373787, 9849672, 6793039, 6064732, 9107332,
                      9736076, 1263226, 4866639, 6605673, 2001737, 6204368, 6680977, 5825052, 9639832, 9926406, 8283358, 4989392, 5483321,
                      4720424, 5232737, 7746105, 5042179, 4426338, 5275614, 2699252, 8056093, 9476438, 5756306, 1321298, 9587738, 4103969,
                      9041290, 1390522, 1734776, 1636680, 6218317, 2827154, 1972265, 1045023, 5988087, 2130592, 4328639, 4937690, 5988087,
                      6525259, 9740598, 1489028, 1050943, 5479436, 3295096, 801925, 342635, 7379724, 675192, 1376878, 8364826, 9751938,
                      5998097, 6406865, 2315108, 7352643, 429189, 5752892, 3818426, 3479186, 1942368, 280296, 2617721, 5054587,
                      3738355, 2746726, 4022539, 4265756, 3669381, 5839181, 1574507, 1851833, 8501326, 5309654, 6823134, 3956197,
                      4658389, 7237743, 8815623, 7898441, 6218317, 1598491, 3977760, 1216423, 2022026, 8364826, 5910948, 5398202,
                      8707687, 3946830, 5057472, 9062724, 5304036, 7658481, 5310637, 1059423, 1487718, 1324360, 8921105, 206115,
                      2678863, 3218150, 8699856, 3579819, 5163126, 415294, 7034370, 476254, 2471003, 136857, 1969990, 730027,
                      1852441, 261530, 4987324, 4634447, 1311489, 7719135, 7821918, 2432525, 8364826, 2496027, 5292185, 7099511,
                      9662262, 4892632, 5213625, 7156112, 3588147, 4222554, 2848896, 5493356, 2347538, 7314177, 6382832, 767389,
                      4982933, 5307179, 9726660, 5623764, 1429017, 3527757, 173867, 3965082, 4294833, 9751938, 5514358, 5358913,
                      8905401, 7031097, 6572787, 6234874, 1437065, 4115224, 8471892, 5656420, 5130440, 8885760, 9565735, 280296,
                      183599, 7412276, 6538063, 307934, 2220852, 6177968, 2394624, 314046, 9452076, 7373787, 6715227, 5358913,
                      4165157, 5553775, 1245091, 5593123, 2227385, 7945665, 153652, 9797864, 5547208, 6793039, 4012098, 7692321,
                      7144011, 9342688, 9104820, 4722476, 9977303, 5797452, 7170302, 1506326, 1369262, 7345033, 933564, 7555490,
                      6752430, 8278239, 326111, 7448009, 9356607, 7048227, 8945832, 8593438, 333004, 6446040, 136857, 9751938,
                      5779407, 6184295, 2467825, 8306587, 9940687, 2444083, 4712710, 9276968, 387365, 5547208, 458252, 9639832,
                      8745381, 6752430, 9213862, 2612792, 5823736, 7462760, 3502028, 478668, 7276596, 2245734, 7187362, 4270530,
                      7891115, 2051068, 2617686, 5377422, 4599425, 5195141, 688420, 5990751, 3923451, 5483321, 2455937, 1526342,
                      1596919, 8590398, 2334080, 5567557, 4845743, 5865502, 2324578, 6757775, 537692, 4477608, 5884177, 7569071,
                      6621153, 4704902, 1371398, 8811776, 4630738, 3378619, 6880672, 8743401, 9926406, 1437890, 6332486, 458252,
                      7979958, 362205, 2699496, 2008154, 6081322, 1335539, 6131621, 3296135, 5659765, 4019593, 7051599, 6793039,
                      8046642, 5346690, 1735351, 7523921, 9488070, 5220964, 92963, 6695275, 4559093, 6793039, 2022026, 5547208,
                      2044211, 5865502, 5252316, 4633801, 8681650, 5406417, 6121745, 4208731, 4110021, 1097060, 5288733, 7426003,
                      251326, 5319283, 2768000, 6273546, 8592913, 1315069, 2259811, 5555336, 8559629, 587562, 9052418, 7745445,
                      7156112, 1490703, 2045721, 6244131, 4310611, 7525176, 9245188, 9849672, 2942779, 4881531, 9587335, 1404135,
                      5845637, 5055106, 379713, 9574090, 6614066, 3007624, 9693294, 7103587, 8411877, 9955088, 8975439, 5761311,
                      5013398, 8441383, 8745626, 8246831, 5200638, 6227846, 5865502, 5979048, 7643368, 7797093, 1450167, 9033159,
                      5158844, 6630620, 3843330, 8748839, 2152151, 7282724, 5824300, 2214936, 3307422, 5039303, 8405827, 4973230,
                      9128265, 7764974, 1937341, 5411729, 4307, 1276440, 9153162, 8280347, 3296590, 9237455, 4758649, 4525059,
                      8664175, 7943006, 6989691, 1029446, 5802619, 4094325, 9721405, 8153553, 3548266, 9907855, 9931360, 7818096];
  
  
        var i = validteams.length - 1;

        var timer = setInterval(function () {
          var input = validteams[i].toString();

          // Update team status
          teamquery.equalTo("teamcode", input);
          teamquery.first({
            success: function (team) {
              team.set("open", false);
              team.save();
            }
          })

          // Update team members
          userquery.equalTo("team", input);
          userquery.find({
            success: function (members) {
              for (var j = 0; j < members.length; j++) {
                Parse.Cloud.run('accept', {
                  username: members[j].get("username")
                }, {
                  success: function (result) {
                    console.log(result);
                  },
                  error: function (error) {}
                });
              }
            }
          });
          if (--i) clearInterval(timer);
        }, 100)
        };
});
