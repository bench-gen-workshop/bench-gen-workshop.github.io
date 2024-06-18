const project_name = `Workshop on Benchmarking For Generalist Robots`
const proj_small_caps = `<span class="small-caps">NeuRL-RMW</span>: `
const conference_details = ['CoRL 2024', 'https://www.corl.org/home', 'Muse 5', 'assets/images/corl23_pink_logo.jpg']
const workshop_date = `November 9, 2024`

const talk_speaker_details = {
  'df': ['Dieter Fox', './assets/images/talks/dieter_fox.jpg', 'Professor', 'University of Washington', 'https://homes.cs.washington.edu/~fox/', 'Policy Representation for Robot Manipulation', ''],
  'ke': ['Kiana Ehsani', './assets/images/talks/kiana_ehsani.jpg', 'Senior Research Scientist', 'Allen Institute for Artificial Intelligence', 'https://ehsanik.github.io/Home.html', 'Neural Object Representations for Grasping and Manipulation', ''],
  'ag': ['Animesh Garg', './assets/images/talks/animesh_garg.jpg', 'Assistant Professor', 'Georgia Tech', 'https://animesh.garg.tech/', '', ''],
  'wm': ['Wojciech Matusik', './assets/images/talks/wojciech_matusik.jpg', 'Professor', 'MIT', 'https://cdfg.mit.edu/wojciech', '', ''],
  'ss': ['Shuran Song', './assets/images/talks/shuran_song.jpg', 'Assistant Professor', 'Stanford University', 'https://shurans.github.io/', 'Towards Home Robots: Open Vocabulary Mobile Manipulation in Unstructured Environments', ''],
  'yl': ['Youngwoon Lee', './assets/images/talks/youngwoon_lee.jpg', 'Assistant Professor', 'Yonsei University', 'https://youngwoon.github.io/', 'Nonparametric Belief Propagation: Differentiable, Diagnosable, and Decisive', ''],
  'sj': ['Stephen James', './assets/images/talks/stephen_james.jpg', '', 'Dyson Robotics', 'https://stepjam.github.io/', 'Nonparametric Belief Propagation: Differentiable, Diagnosable, and Decisive', ''],
  'ds': ['Dorsa Sadigh', './assets/images/talks/dorsa_sadigh.jpeg', 'Assistant Professor', 'Stanford University', 'https://dorsa.fyi/', 'Nonparametric Belief Propagation: Differentiable, Diagnosable, and Decisive', ''],
}

const organizers_details = [
  ['Ishika Singh', 'assets/images/organizers/ishika_singh.jpg', 'PhD Student', 'University of Southern California', 'https://ishikasingh.github.io/'],
  ['Jiafei Duan', 'assets/images/organizers/jiafei_duan.png', 'PhD Student', 'University of Washington', 'https://duanjiafei.com/'],
  ['Ranjay Krishna', 'assets/images/organizers/ranjay_krishna.png', 'Assistant Professor', 'University of Washington', 'https://www.ranjaykrishna.com/index.html'],
  ['Yunsheng Tian', 'assets/images/organizers/yunsheng_tian.jpg', 'PhD Student', 'MIT', 'https://www.yunshengtian.com/'],
  ['Wilbert Pumacay', 'assets/images/organizers/wilbert_pumacay.png', 'MSc Student', 'Universidad Catolica San Pablo', 'https://wpumacay.github.io'],
]

const accepted_presentations = [
  // ['Fullname', 'website', 'photo', 'Affiliation-title', 'Affiliation', 'Presentation title', 'abstract'],
]

const org_affiliation_logos = [
  // 'assets/images/affiliation-logos/LOGO.png',
]



// event-alias, time slot, event name, person alias from talk_speaker_details, ppt mode
// last two are for inv-talk event-alias entries
const schedule = [
  ['intro', '08:45 - 09:00', 'Introduction'],
  ['inv-talk', '09:00 - 09:30', 'Invited Talk', 'dh', 'in-person'],
  ['spot-ppt', '09:30 - 10:30', 'Spotlight Presentations'],
  ['coffee-break', '10:30 - 11:30', '<span class="bold has-text-info">Spotlight Posters (Muse 1)</span> & Coffee Break'],
  ['inv-talk', '11:30 - 12:00', 'Invited Talk', 'cp', 'online'],
  ['inv-talk', '12:00 - 12:30', 'Invited Talk',  'gc', 'in-person'],
  ['lunch-break', '12:30 - 14:00', 'Lunch Break'],
  ['inv-talk', '14:00 - 14:30', 'Invited Talk', 'pf', 'online'],
  ['spot-ppt', '14:30 - 15:30', 'Spotlight presentations'],
  ['coffee-break', '15:30 - 16:00', 'Coffee Break'],
  ['inv-talk', '16:00 - 16:30', 'Invited Talk', 'ss', 'in-person'],
  ['inv-talk', '16:30 - 17:00', 'Invited Talk', 'cj', 'in-person'],
  ['disc', '17:00 - 17:05', 'Conclusion'], 
]
