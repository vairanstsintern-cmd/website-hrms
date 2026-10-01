"use client";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    var $=function(i){return document.getElementById(i)},T=function(t,e){e=e||document;return e.querySelector(t)};
    $("yr").textContent=new Date().getFullYear();

    /* mobile menu */
    var hb=$("hbtn"),mm=$("mmenu");
    hb.onclick=function(){var o=mm.classList.toggle("o");hb.setAttribute("aria-expanded",o);hb.setAttribute("aria-label",o?"Close menu":"Open menu")};
    mm.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){mm.classList.remove("o");hb.setAttribute("aria-expanded",false)})});

    /* scroll progress bar */
    var prog=$("prog");
    function onScroll(){var h=document.documentElement,p=(h.scrollTop)/(h.scrollHeight-h.clientHeight)*100;prog.style.width=p+"%"}
    document.addEventListener("scroll",onScroll,{passive:true});onScroll();

    /* scroll-reveal */
    if("IntersectionObserver" in window){
     document.querySelectorAll(".hd,.card,.icard,.pl,.browser,.stats").forEach(function(el){el.classList.add("rv")});
     var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.15,rootMargin:"0px 0px -40px 0px"});
     document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});
    }else{document.querySelectorAll(".rv,.hd,.card,.icard,.pl,.browser,.stats").forEach(function(el){el.classList.add("in")})}

    /* animated stat counters, once visible */
    function statCount(){
     $("statsbar").querySelectorAll("strong[data-to]").forEach(function(el){
      var to=+el.dataset.to,dec=+el.dataset.dec||0,pre=el.dataset.pre||"",suf=el.dataset.suf||"",s=null;
      function f(t){s=s||t;var p=Math.min((t-s)/1600,1),v=to*(1-Math.pow(1-p,3));el.textContent=pre+v.toFixed(dec).replace(/\B(?=(\d{3})+(?!\d))/g,",")+suf;if(p<1)requestAnimationFrame(f)}
      requestAnimationFrame(f)
     })
    }
    if("IntersectionObserver" in window){
     var sio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){statCount();sio.disconnect()}})},{threshold:.4});
     sio.observe($("statsbar"));
    }else{statCount()}

    /* FAQ accordion */
    var faqs=[
    ["How long does it take to set up Shenll HRMS?","Most businesses are live within a few days. Add your company details, import your team, and configure leave policies and pay cycles, then go live. Free onboarding and data migration are included."],
    ["Can I migrate data from spreadsheets or another HR system?","Yes. The Shenll team handles data migration from spreadsheets or your existing HR or payroll software as part of onboarding, at no extra cost."],
    ["Is Shenll HRMS suitable for small businesses as well as large enterprises?","Yes. Basic covers up to 100 active employees, Professional up to 250, and Enterprise supports unlimited employees with custom workflows, so the platform scales as you grow."],
    ["How is payroll calculated, and is it compliant with Indian regulations?","Shenll HRMS automates salary calculations, TDS and PF deductions, and generates payslips in line with Indian payroll regulations, reducing manual errors."],
    ["Is my company's HR data secure?","Data is encrypted and access is role-based, so admins, managers and employees only see what they are permitted to. Shenll HRMS maintains 99.9% uptime."],
    ["Do employees need to install anything to use Shenll HRMS?","Employees can use the mobile app on iOS and Android for attendance, leave and payslips, or access the same features through a web browser. No special hardware is required."]
    ];
    var fl=$("faqlist");fl.innerHTML="";
    faqs.forEach(function(f,i){var d=document.createElement("details");if(i==0)d.open=true;d.innerHTML="<summary>"+f[0]+"</summary><p>"+f[1]+"</p>";fl.appendChild(d)});

    /* hero counters + AI feed */
    function count(id,to,suf){var el=$(id),s=null;function f(t){s=s||t;var p=Math.min((t-s)/1400,1);el.textContent=Math.round(to*(1-Math.pow(1-p,3)))+(suf||"");if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
    count("k1",128);count("k2",9);count("k3",72,"%");
    var fd=["Workforce Agent matched 3 people to Project Atlas by skill and availability.","Task Agent rebalanced 14 tasks across two teams.","Predictive Engine flagged overtime risk for Friday's shift.","Approvals Agent cleared 6 leave requests within policy."],fi=0;
    setInterval(function(){fi=(fi+1)%fd.length;var f=$("feed");f.style.animation="none";f.offsetWidth;f.style.animation="";f.textContent=fd[fi]},3200);
    /* tab helper */
    function tabs(host,panel,items,render,cls){
     host.innerHTML="";
     items.forEach(function(it,i){var b=document.createElement("button");b.className=cls||"tab";b.setAttribute("role","tab");b.innerHTML=(it.icon?it.icon:"")+"<span>"+it.t+"</span>";b.onclick=function(){sel(i)};host.appendChild(b)});
     function sel(i){[].forEach.call(host.children,function(b,j){b.setAttribute("aria-selected",i==j)});T("h3",panel).textContent=items[i].t;T("p",panel).textContent=items[i].d;var ai=T(".aiico",panel);if(ai)ai.innerHTML=items[i].icon||"";render(items[i],T(".con",panel))}
     sel(0)}
    function lines(con,arr){con.innerHTML="";arr.forEach(function(l,i){var d=document.createElement("div");d.style.animationDelay=(i*.55)+"s";d.innerHTML=l;con.appendChild(d)})}
    tabs($("mt"),$("mp"),[
    {t:"Core HR",d:"Manage employee records, organizational charts, documents, and permissions with ease.",l:["<b>Profile</b> Priya M. · Design","Docs: 4 verified","Role: Team lead","Access: manager view"]},
    {t:"Payroll & Compensation",d:"Automate salary calculations, deductions, taxes (TDS/PF), and generate payslips instantly.",l:["<b>Run</b> October payroll","Salaries calculated","TDS and PF applied","Payslips ready to send"]},
    {t:"Leave & Attendance",d:"Fingerprint-based attendance, automated calculations, and compliance-ready payroll.",l:["<b>Scan</b> 09:02 check-in","Shift matched: General","Late marks: 0","Synced to payroll"]},
    {t:"Assets & Invoices",d:"Track assets with QR codes and generate professional invoices with ease.",l:["<b>Scan</b> QR laptop-0142","Assigned to Anita P.","Invoice INV-2041 created","Sent to client"]}],
    function(it,c){lines(c,it.l)});
    var AGI1='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 20c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5M17 4.5a3 3 0 010 6M19 14.3c1.8.6 3 2.1 3 3.7"/></svg>';
    var AGI2='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="17" rx="3"/><path d="M7.5 10.5l2 2 4-4M7.5 16.5h9"/></svg>';
    var AGI3='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 20V10M9 20V4M15 20v-7M21 20H3"/><path d="M4 9l5-5 4 3 6-6" stroke-dasharray="1 3"/></svg>';
    var AGI4='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1"/></svg>';
    tabs($("at"),$("ap"),[
    {t:"Workforce AI Agent",icon:AGI1,d:"Autonomous team assignment using skills, availability, performance trends, and workload intelligence.",l:["<b>agent</b> new project: Atlas","reading skills + availability…","workload check: balanced","<b>assigned</b> 4 people ✓"]},
    {t:"Task Orchestration Agent",icon:AGI2,d:"Automatically assigns, prioritizes, and balances tasks across teams for optimal productivity.",l:["<b>agent</b> 22 open tasks","prioritizing by deadline…","moving 5 from overloaded queue","<b>balanced</b> across 3 teams ✓"]},
    {t:"Predictive Intelligence Engine",icon:AGI3,d:"Generate insightful reports with real-time data analysis and predictions.",l:["<b>engine</b> analysing 12 months","attendance trend: stable","overtime risk: Friday shift","<b>report</b> ready ✓"]},
    {t:"Custom AI Agents",icon:AGI4,d:"Deploy tailored agents designed to automate HR workflows, approvals, and decision-making.",l:["<b>agent</b> leave policy v2","checking balance…","within policy","<b>approved</b> and notified ✓"]}],
    function(it,c){lines(c,it.l)},"agtab");
    /* mobile demo */
    function pn(){var n=new Date();$("pt").textContent=n.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"});$("pd").textContent=n.toLocaleDateString([], {weekday:"long",day:"numeric",month:"long"})}
    pn();setInterval(pn,1000);
    $("ck").onclick=function(){var on=this.classList.toggle("on");this.setAttribute("aria-pressed",on);this.textContent=on?"Check out":"Check in";$("ps").textContent=on?"Checked in at "+$("pt").textContent:"Checked out. Have a good evening."};
    /* industries */
    var IGEAR='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V10l5-4 5 4v11M13 21v-7l4-3 4 3v7"/></svg>';
    var ICAP='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9l10-5 10 5-10 5-10-5z"/><path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>';
    var ITOOL='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 015.6 5.6l-8 8a4 4 0 01-5.6-5.6l6-6"/><path d="M9 9l6 6"/></svg>';
    var ICRANE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h9M6 21V9l12-4v4M6 9h9M18 9v6a3 3 0 01-3 3"/></svg>';
    var ITRUCK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="7" width="13" height="10" rx="1"/><path d="M14 10h4l3 3v4h-7z"/><circle cx="6" cy="19" r="1.6"/><circle cx="17.5" cy="19" r="1.6"/></svg>';
    var IPLUS='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4.5v6c0 5-3.6 8-9 9.5-5.4-1.5-9-4.5-9-9.5v-6z"/><path d="M12 8v6M9 11h6"/></svg>';
    var IBRIEF='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="7" width="19" height="13" rx="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M2.5 12.5h19"/></svg>';
    var ITHREAD='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="7" r="3.5"/><circle cx="17" cy="17" r="3.5"/><path d="M9.5 9.5l5 5"/></svg>';
    var ind=[["Manufacturing",IGEAR,"Shift workers, robust attendance tracking and labor compliance."],["Education",ICAP,"Faculty attendance, hostel management and academic workforce tracking."],["Engineering",ITOOL,"Project-based teams, specialized payroll and workforce costing."],["Construction",ICRANE,"Daily wage management, on-site attendance and contract logs."],["Logistics",ITRUCK,"Driver attendance, multi-shift rosters and mobile sync."],["Healthcare",IPLUS,"Shift automation, credential tracking and medical payroll."],["Professional",IBRIEF,"Office HR, performance appraisals and leave management."],["Textile",ITHREAD,"Piece-rate payroll, seasonal workers and output tracking."]];
    $("in").innerHTML="";
    ind.forEach(function(row){var c=document.createElement("div");c.className="icard";c.innerHTML='<span class="ic">'+row[1]+'</span><h4>'+row[0]+'</h4><p>'+row[2]+'</p>';$("in").appendChild(c)});
    /* interactive demo screenshots */
    var demoItems=[
     {t:"Dashboard Overview",url:"app.shenllhrms.com/dashboard",cap:"Dashboard overview: live attendance, leave and payroll status for the whole team.",
      render:function(el){el.innerHTML='<div class="kp"><div><small>Present</small><strong>128</strong></div><div><small>On leave</small><strong>9</strong></div><div><small>Payroll done</small><strong>72%</strong></div></div><div class="bars" style="margin-top:18px" aria-hidden="true"><i style="--h:45%;--n:0"></i><i style="--h:62%;--n:1"></i><i style="--h:55%;--n:2"></i><i style="--h:78%;--n:3"></i><i style="--h:70%;--n:4"></i><i style="--h:92%;--n:5"></i><i style="--h:84%;--n:6"></i></div>'}},
     {t:"Employee Management",url:"app.shenllhrms.com/employees",cap:"Employee management: records, roles and status for every team member in one table.",
      render:function(el){el.innerHTML='<table class="dtable"><tr><th>Employee</th><th>Department</th><th>Role</th><th>Status</th></tr>'+
       [["AK","Anita Kumar","Design","Team lead","Active"],["RM","Rahul Mehta","Engineering","Developer","Active"],["PS","Priya Shah","HR","Manager","On leave"],["SB","Suresh Babu","Operations","Analyst","Active"]]
       .map(function(r){return '<tr><td><div class="who"><span class="av2">'+r[0]+'</span>'+r[1]+'</div></td><td>'+r[2]+'</td><td>'+r[3]+'</td><td><span class="chip '+(r[4]=="Active"?"ok":"wa")+'">'+r[4]+'</span></td></tr>'}).join('')+'</table>'}},
     {t:"Project & Task Management",url:"app.shenllhrms.com/projects/atlas",cap:"Project and task management: a kanban board tracking work across teams.",
      render:function(el){el.innerHTML='<div class="kan">'+
       [["To do",[["Design system audit","Due Fri"],["Client onboarding call","Due Mon"]]],
        ["In progress",[["Payroll API integration","Rahul M."],["Q4 review templates","Priya S."]]],
        ["Done",[["Attendance QR rollout","Completed"],["Leave policy v2","Completed"]]]]
       .map(function(c){return '<div class="kcol"><h5>'+c[0]+'</h5>'+c[1].map(function(k){return '<div class="kcard">'+k[0]+'<small>'+k[1]+'</small></div>'}).join('')+'</div>'}).join('')+'</div>'}},
     {t:"Payroll Processing",url:"app.shenllhrms.com/payroll/october",cap:"Payroll processing: salaries, deductions and payslip status, calculated automatically.",
      render:function(el){el.innerHTML='<table class="dtable"><tr><th>Employee</th><th>Gross</th><th>Deductions</th><th>Net pay</th><th>Status</th></tr>'+
       [["AK","Anita Kumar","₹66,500","₹9,870","₹56,630","Paid"],["RM","Rahul Mehta","₹58,000","₹7,410","₹50,590","Paid"],["PS","Priya Shah","₹72,000","₹11,050","₹60,950","Pending"]]
       .map(function(r){return '<tr><td><div class="who"><span class="av2">'+r[0]+'</span>'+r[1]+'</div></td><td>'+r[2]+'</td><td>'+r[3]+'</td><td><b>'+r[4]+'</b></td><td><span class="chip '+(r[5]=="Paid"?"ok":"wa")+'">'+r[5]+'</span></td></tr>'}).join('')+'</table>'}},
     {t:"Analytics & Reports",url:"app.shenllhrms.com/reports",cap:"Analytics and reports: attendance, payroll and performance trends at a glance.",
      render:function(el){el.innerHTML='<div class="bars" aria-hidden="true"><i style="--h:38%;--n:0"></i><i style="--h:52%;--n:1"></i><i style="--h:61%;--n:2"></i><i style="--h:48%;--n:3"></i><i style="--h:74%;--n:4"></i><i style="--h:66%;--n:5"></i><i style="--h:88%;--n:6"></i></div><div class="legend"><span><i></i>Attendance rate</span><span><i class="b"></i>Payroll accuracy</span></div>'}}
    ];
    $("dt").innerHTML="";
    demoItems.forEach(function(it,i){var b=document.createElement("button");b.className="tab";b.setAttribute("role","tab");b.textContent=it.t;b.onclick=function(){selDemo(i)};$("dt").appendChild(b)});
    function selDemo(i){[].forEach.call($("dt").children,function(b,j){b.setAttribute("aria-selected",i==j)});$("durl").textContent=demoItems[i].url;$("dcap").textContent=demoItems[i].cap;demoItems[i].render($("dbody"))}
    selDemo(0);
    function bill(y){$("bm").setAttribute("aria-pressed",!y);$("by").setAttribute("aria-pressed",y);document.querySelectorAll("[data-p]").forEach(function(s){var v=+s.dataset.p*(y?.8:1);s.textContent="₹"+Math.round(v).toLocaleString("en-IN");s.nextElementSibling.textContent=y?" / month, billed yearly":" / month"})}
    $("bm").onclick=function(){bill(false)};$("by").onclick=function(){bill(true)};
    /* testimonials */
    var ts=[["Shenll HRMS has helped us simplify daily HR workflows, from attendance and leave to employee records and approvals.","Ranjith Kumar, HR Manager, Apex Forge Manufacturing"],["It has reduced manual work, improved visibility, and brought structure to our HR operations.","Priya Menon, Head of HR, NovaTech Solutions"],["Reliable, user-friendly, and it has helped improve productivity across our HR processes.","Suresh Babu, Operations Director, SteelWorks India"],["Dependable, and the Shenll team has been professional and supportive throughout.","Anita Patel, HR Manager, RetailEdge Stores"],["It has brought efficiency, control, and consistency to our processes.","Mohammed Farhan, Fleet HR Manager, SwiftLogix"],["It has made routine management much smoother.","Thendral Rajendran, Founder and CEO, Megathil"]],ti=0,tt;
    $("td").innerHTML="";
    ts.forEach(function(_,i){var b=document.createElement("button");b.setAttribute("aria-label","Testimonial "+(i+1));b.onclick=function(){show(i,1)};$("td").appendChild(b)});
    function show(i,m){ti=i;var p=$("tq");p.style.animation="none";p.offsetWidth;p.style.animation="";p.textContent="“"+ts[i][0]+"”";$("tn").textContent=ts[i][1];[].forEach.call($("td").children,function(b,j){b.setAttribute("aria-current",j==i)});clearInterval(tt);tt=setInterval(function(){show((ti+1)%ts.length)},6000)}
    show(0);
    /* form */
    $("cf").onsubmit=function(e){e.preventDefault();var ok=true;
     [["n",function(v){return v.trim()},"Enter your name."],["e",function(v){return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)},"Enter a valid email."],["p",function(v){return /^[+()\d\s-]{7,18}$/.test(v)},"Enter a valid phone number."]].forEach(function(r){var i=$(r[0]),g=r[1](i.value);i.parentNode.classList.toggle("bad",!g);T(".er",i.parentNode).textContent=g?"":r[2];if(!g)ok=false});
     if(!ok)return;
     location.href="mailto:info@shenllhrms.com?subject="+encodeURIComponent("Demo request from "+$("n").value)+"&body="+encodeURIComponent("Name: "+$("n").value+"\nEmail: "+$("e").value+"\nPhone: "+$("p").value+"\n\n"+$("r").value);
     var m=$("fm");m.textContent="Your email app should open with your request ready. We usually respond within one business day.";m.className="msg s"};
    /* Shenll AI fit check */
    var bx=$("bx"),bb=$("bb");
    function open(){bx.classList.add("o");$("tip").style.display="none";start()}
    $("fab").onclick=function(){bx.classList.contains("o")?bx.classList.remove("o"):open()};$("bc").onclick=function(){bx.classList.remove("o")};$("fitbtn").onclick=open;
    var A={};
    function ask(q,opts,key,next){bb.innerHTML="";var p=document.createElement("p");p.textContent=q;bb.appendChild(p);opts.forEach(function(o){var b=document.createElement("button");b.className="o";b.textContent=o[0];b.onclick=function(){A[key]=o[1];next()};bb.appendChild(b)})}
    function start(){A={};ask("Hi, I'm Shenll AI. I can check if Shenll HRMS fits your company in about 60 seconds. How many employees do you have?",[["Up to 100",100],["101 to 250",250],["More than 250",999]],"n",q2)}
    function q2(){ask("What matters most right now?",[["Payroll and attendance",0],["Projects and tasks too",1],["Custom workflows and integrations",2]],"need",q3)}
    function q3(){ask("Do you need employees to use a mobile app?",[["Yes, essential",1],["Nice to have",0]],"mob",res)}
    function res(){var plan=A.n>250||A.need==2?"Enterprise":(A.n>100||A.need==1?"Professional":"Basic"),sc=88+(A.mob?4:0)+(plan=="Basic"&&A.need==0?4:0);
     bb.innerHTML="";var s=document.createElement("div");s.className="sc";s.textContent=sc+"%";var p=document.createElement("p");p.textContent="Estimated fit. We suggest the "+plan+" plan. Book a live demo and our team will confirm it for you.";var b=document.createElement("a");b.className="btn p";b.href="#contact";b.textContent="Book a live demo";b.onclick=function(){bx.classList.remove("o");$("r").value="Fit check: "+plan+" plan, ~"+(A.n>250?"250+":A.n)+" employees."};bb.append(s,p,b)}
  }, []);

  return (
    <>
      <header><div className="prog" id="prog"></div><div className="w nav">
      <a className="logo" href="#top" aria-label="Shenll HRMS home"><span className="mark"><svg viewBox="0 0 238 105" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path d="M52.451 66.1048C53.547 66.0859 55.9606 66.1569 55.9606 66.1569C55.9606 66.1569 58.3641 70.646 59.6132 72.8745C60.3538 74.196 61.8972 76.7609 61.8972 76.7609C61.8972 76.7609 63.9093 80.3405 64.8786 82.1462C65.3198 82.9683 66.0931 84.6707 66.0931 84.6707C66.0931 84.6707 60.6887 84.5264 59.3954 84.5263C58.1022 84.5263 50.4382 84.5431 45.8276 84.5295C41.2169 84.5158 31.9961 84.6032 31.9961 84.6032L35.0518 79.2079L42.1377 66.2331C42.1377 66.2331 44.9623 66.1346 45.996 66.1352C48.1477 66.1448 50.2995 66.1347 52.451 66.1048Z" fill="#DD472C"/>
      <path d="M13.3984 53.7246C15.6957 53.8092 18.464 53.7518 20.7842 53.7472L33.7236 53.7287C33.7236 53.7287 34.6465 55.2493 35.0336 56.0102C36.3409 58.5802 39.2551 63.5493 39.2551 63.5493L40.521 65.5664C40.521 65.5664 38.393 69.1552 37.3481 71.0472C36.3617 72.8332 35.1492 74.6841 34.2533 76.5001C33.8109 77.3741 33.2216 78.2167 32.7011 79.0545C31.8734 80.4041 31.0582 81.7612 30.2555 83.1258C29.8581 82.2529 28.8731 80.6409 28.3512 79.7363L23.8236 72.022L15.4935 57.676C14.7536 56.3916 14.1626 54.9849 13.3984 53.7246Z" fill="#C82F2E"/>
      <path d="M68.5725 22C69.0309 22.1924 80.9505 43.9371 82.3562 45.7958C82.9732 46.6116 84.7514 50.2941 85.4664 51.4011C82.0981 51.3187 78.7287 51.2893 75.3596 51.3128L65.0993 51.3115C65.0993 51.3115 64.3399 49.9247 64.0229 49.2981C62.9641 47.2055 61.7732 45.2494 60.5058 43.2813C59.7514 42.1098 58.3438 39.4776 58.3438 39.4776L63.4579 30.6788L66.7919 24.7096C67.3197 23.7824 67.7723 22.6968 68.5725 22Z" fill="#F15B2A"/>
      <path d="M66.0155 20.4531L66.0931 20.4974C66.0589 21.1833 61.2364 29.7779 60.4678 30.9669C58.9076 33.3809 56.0354 39.0205 56.0354 39.0205C56.0354 39.0205 55.212 39.0245 54.8067 39.0204C50.5716 38.9775 42.0951 38.9732 42.0951 38.9732C42.0951 38.9732 39.3458 33.9854 38.5767 32.6127C36.9919 29.7653 35.5298 26.858 33.9058 24.0353C33.2022 22.8124 32.5179 21.8108 31.9961 20.4729L52.8126 20.4965C57 20.4968 61.8549 20.608 66.0155 20.4531Z" fill="#F03737"/>
      <path d="M65.1198 53.7271C65.1198 53.7271 66.959 53.7606 67.6112 53.7604L72.3732 53.7505C76.6697 53.7395 81.1932 53.8057 85.4664 53.7246C84.3298 55.2791 83.6262 57.3986 82.5422 58.9604C81.3731 60.6449 80.6661 61.9994 79.6843 63.7651L75.4746 71.2603C74.3733 73.1817 73.3601 74.5195 72.2605 76.6466C71.8362 77.4709 68.8492 82.9645 68.3893 83.1258C67.9724 82.9133 67.6732 82.0868 67.4403 81.6753L63.8586 75.2208C62.0391 72.0133 58.3438 65.7478 58.3438 65.7478L60.5564 61.6638L65.1198 53.7271Z" fill="#DF4C2A"/>
      <path d="M30.389 22C30.5977 22.1729 31.497 23.8742 31.7141 24.2229C34.8024 29.1841 40.521 39.3563 40.521 39.3563C40.521 39.3563 39.6149 40.851 39.4098 41.2135L35.8506 47.5568C35.1339 48.8528 33.6522 51.3992 33.6522 51.3992L23.7592 51.3991L13.3984 51.4011C14.2165 50.4467 14.7199 49.0442 15.3292 47.9341C16.5038 45.7943 17.7488 43.6868 18.9425 41.556C19.8022 40.0214 20.8061 38.5626 21.6804 37.0309C24.5506 32.003 27.3523 26.9323 30.389 22Z" fill="#A81F23"/>
      <path d="M114.961 27.1172C114.832 25.968 114.304 25.0777 113.374 24.4465C112.445 23.8071 111.275 23.4874 109.865 23.4874C108.855 23.4874 107.982 23.6493 107.245 23.973C106.508 24.2887 105.935 24.7257 105.526 25.2841C105.125 25.8345 104.925 26.4617 104.925 27.1658C104.925 27.7566 105.061 28.2665 105.334 28.6954C105.614 29.1243 105.979 29.4845 106.427 29.7759C106.884 30.0591 107.373 30.2979 107.894 30.4921C108.415 30.6782 108.915 30.832 109.396 30.9534L111.8 31.5847C112.585 31.7789 113.39 32.042 114.215 32.3738C115.041 32.7056 115.806 33.1426 116.511 33.6849C117.216 34.2271 117.785 34.8989 118.218 35.7001C118.658 36.5013 118.879 37.4604 118.879 38.5772C118.879 39.9854 118.518 41.2358 117.797 42.3284C117.084 43.421 116.046 44.2829 114.684 44.9142C113.33 45.5455 111.692 45.8611 109.769 45.8611C107.926 45.8611 106.331 45.5657 104.985 44.9749C103.639 44.3841 102.586 43.5465 101.824 42.462C101.063 41.3694 100.643 40.0745 100.562 38.5772H104.288C104.36 39.4756 104.649 40.2242 105.154 40.8231C105.666 41.4139 106.319 41.855 107.113 42.1463C107.914 42.4296 108.791 42.5712 109.745 42.5712C110.794 42.5712 111.728 42.4053 112.545 42.0735C113.37 41.7336 114.019 41.2642 114.492 40.6653C114.965 40.0583 115.201 39.3501 115.201 38.5408C115.201 37.8043 114.993 37.2014 114.576 36.732C114.167 36.2626 113.611 35.8741 112.905 35.5665C112.208 35.259 111.419 34.9879 110.538 34.7532L107.629 33.9519C105.658 33.4097 104.096 32.6125 102.942 31.5604C101.796 30.5083 101.224 29.1163 101.224 27.3843C101.224 25.9518 101.608 24.7014 102.377 23.6331C103.146 22.5648 104.188 21.7352 105.502 21.1444C106.816 20.5455 108.298 20.2461 109.949 20.2461C111.615 20.2461 113.086 20.5415 114.36 21.1323C115.642 21.7231 116.651 22.5365 117.388 23.5724C118.125 24.6002 118.51 25.7819 118.542 27.1172H114.961Z" fill="#BE202E"/>
      <path d="M126.621 34.3768V45.4484H123.028V20.586H126.573V29.8366H126.802C127.234 28.833 127.895 28.0358 128.785 27.445C129.674 26.8542 130.836 26.5588 132.27 26.5588C133.536 26.5588 134.642 26.8218 135.587 27.3479C136.541 27.8739 137.278 28.659 137.799 29.703C138.327 30.7389 138.592 32.0339 138.592 33.5878V45.4484H134.998V34.0248C134.998 32.657 134.65 31.5968 133.953 30.8442C133.256 30.0834 132.286 29.703 131.044 29.703C130.195 29.703 129.434 29.8851 128.761 30.2493C128.096 30.6135 127.571 31.1477 127.186 31.8518C126.81 32.5478 126.621 33.3895 126.621 34.3768Z" fill="#BE202E"/>
      <path d="M151.343 45.8247C149.525 45.8247 147.958 45.4322 146.644 44.6471C145.338 43.854 144.329 42.7412 143.616 41.3087C142.91 39.8681 142.558 38.1807 142.558 36.2464C142.558 34.3364 142.91 32.653 143.616 31.1962C144.329 29.7394 145.322 28.6023 146.596 27.7849C147.878 26.9675 149.376 26.5588 151.091 26.5588C152.133 26.5588 153.142 26.7328 154.12 27.0808C155.097 27.4288 155.974 27.9751 156.752 28.7197C157.529 29.4643 158.142 30.4314 158.59 31.6211C159.039 32.8027 159.264 34.2393 159.264 35.9307V37.2176H144.589V34.4982H155.742C155.742 33.5432 155.55 32.6975 155.165 31.961C154.781 31.2164 154.24 30.6297 153.543 30.2007C152.854 29.7718 152.044 29.5573 151.115 29.5573C150.105 29.5573 149.224 29.8082 148.471 30.31C147.726 30.8037 147.149 31.4511 146.74 32.2524C146.34 33.0455 146.139 33.9074 146.139 34.8382V36.9626C146.139 38.209 146.356 39.2692 146.788 40.1433C147.229 41.0173 147.842 41.685 148.627 42.1463C149.412 42.5995 150.33 42.8262 151.379 42.8262C152.06 42.8262 152.681 42.729 153.242 42.5348C153.803 42.3325 154.288 42.033 154.697 41.6365C155.105 41.2399 155.418 40.7502 155.634 40.1675L159.035 40.7867C158.763 41.7983 158.274 42.6845 157.569 43.4453C156.872 44.198 155.995 44.7847 154.937 45.2056C153.887 45.6183 152.689 45.8247 151.343 45.8247Z" fill="#BE202E"/>
      <path d="M166.844 34.3768V45.4484H163.251V26.8016H166.7V29.8366H166.928C167.353 28.8492 168.018 28.056 168.923 27.4571C169.837 26.8582 170.987 26.5588 172.373 26.5588C173.631 26.5588 174.732 26.8259 175.678 27.36C176.623 27.8861 177.356 28.6711 177.877 29.7152C178.398 30.7592 178.658 32.05 178.658 33.5878V45.4484H175.065V34.0248C175.065 32.6732 174.716 31.6171 174.019 30.8563C173.322 30.0874 172.365 29.703 171.147 29.703C170.313 29.703 169.572 29.8851 168.923 30.2493C168.282 30.6135 167.774 31.1477 167.397 31.8518C167.028 32.5478 166.844 33.3895 166.844 34.3768Z" fill="#BE202E"/>
      <path d="M187.071 20.586V45.4484H183.478V20.586H187.071Z" fill="#BE202E"/>
      <path d="M195.499 20.586V45.4484H191.906V20.586H195.499Z" fill="#BE202E"/>
      <path d="M100.562 84.4262V52.7899H107.21V65.843H120.704V52.7899H127.337V84.4262H120.704V71.3577H107.21V84.4262H100.562Z" fill="#0A335B"/>
      <path d="M132.817 84.4262V52.7899H145.222C147.596 52.7899 149.623 53.2173 151.301 54.0721C152.99 54.9165 154.274 56.1163 155.155 57.6713C156.045 59.2161 156.49 61.0337 156.49 63.1243C156.49 65.2251 156.04 67.0325 155.139 68.5463C154.239 70.0499 152.934 71.2033 151.224 72.0065C149.525 72.8098 147.468 73.2114 145.053 73.2114H136.747V67.8357H143.978C145.247 67.8357 146.302 67.6607 147.141 67.3105C147.98 66.9604 148.604 66.4352 149.014 65.7349C149.433 65.0346 149.643 64.1644 149.643 63.1243C149.643 62.0738 149.433 61.1882 149.014 60.4673C148.604 59.7464 147.975 59.2006 147.125 58.8299C146.286 58.4489 145.227 58.2583 143.948 58.2583H139.465V84.4262H132.817ZM149.797 70.0293L157.611 84.4262H150.273L142.627 70.0293H149.797Z" fill="#0A335B"/>
      <path d="M161.188 52.7899H169.386L178.045 74.0456H178.413L187.072 52.7899H195.27V84.4262H188.822V63.8348H188.561L180.424 84.2718H176.033L167.897 63.7576H167.636V84.4262H161.188V52.7899Z" fill="#0A335B"/>
      <path d="M217.803 61.8885C217.68 60.6424 217.153 59.6743 216.221 58.9844C215.29 58.2944 214.026 57.9494 212.429 57.9494C211.345 57.9494 210.429 58.1039 209.681 58.4128C208.934 58.7115 208.361 59.1285 207.962 59.664C207.573 60.1996 207.379 60.8072 207.379 61.4868C207.358 62.0532 207.476 62.5476 207.732 62.9698C207.998 63.392 208.361 63.7576 208.822 64.0666C209.282 64.3652 209.815 64.6278 210.418 64.8544C211.022 65.0706 211.667 65.256 212.353 65.4105L215.178 66.0902C216.549 66.3991 217.808 66.811 218.954 67.326C220.1 67.8409 221.093 68.4742 221.932 69.226C222.772 69.9778 223.422 70.8634 223.882 71.883C224.353 72.9025 224.593 74.0713 224.604 75.3895C224.593 77.3256 224.102 79.0042 223.13 80.4254C222.168 81.8362 220.776 82.933 218.954 83.7157C217.143 84.488 214.957 84.8742 212.399 84.8742C209.861 84.8742 207.65 84.4829 205.767 83.7002C203.894 82.9176 202.43 81.759 201.376 80.2246C200.332 78.6798 199.784 76.7695 199.733 74.4936H206.166C206.237 75.5543 206.539 76.4399 207.072 77.1505C207.614 77.8508 208.336 78.3812 209.236 78.7416C210.147 79.0917 211.176 79.2668 212.322 79.2668C213.448 79.2668 214.425 79.102 215.254 78.7725C216.094 78.443 216.743 77.9847 217.204 77.3977C217.665 76.8107 217.895 76.1361 217.895 75.3741C217.895 74.6635 217.685 74.0662 217.265 73.5822C216.856 73.0981 216.252 72.6862 215.454 72.3464C214.666 72.0065 213.699 71.6976 212.552 71.4195L209.129 70.5545C206.478 69.9057 204.385 68.8913 202.85 67.5113C201.315 66.1314 200.552 64.2725 200.562 61.9348C200.552 60.0193 201.059 58.3459 202.082 56.9144C203.116 55.4829 204.533 54.3656 206.335 53.5623C208.136 52.7591 210.183 52.3574 212.476 52.3574C214.809 52.3574 216.846 52.7591 218.586 53.5623C220.336 54.3656 221.697 55.4829 222.669 56.9144C223.642 58.3459 224.143 60.0039 224.174 61.8885H217.803Z" fill="#0A335B"/>
      </svg></span></a>
      <nav aria-label="Main"><ul><li><a href="#features">Features</a></li><li><a href="#mobile">Mobile</a></li><li><a href="#ai">AI Insights</a></li><li><a href="#demo">Live Demo</a></li><li><a href="#pricing">Pricing</a></li><li><a href="#faq">FAQ</a></li></ul></nav>
      <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
      <a className="btn p g" href="#contact">Get a live demo</a>
      <button className="hbtn" id="hbtn" aria-expanded="false" aria-controls="mmenu" aria-label="Open menu"><span></span><span></span><span></span></button>
      </div></div>
      <div className="mmenu" id="mmenu"><a href="#features">Features</a><a href="#mobile">Mobile</a><a href="#ai">AI Insights</a><a href="#demo">Live Demo</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a><a className="btn p" href="#contact" style={{marginTop: '6px'}}>Get a live demo</a></div>
      </header>
      <main id="top">
      <div className="w hero"><div>
      <span className="badge">AI-powered HR and payroll</span>
      <h1><span><i>HR software that fits</i></span><span><i>your business.</i></span></h1>
      <p className="s">Affordable, modular HRMS trusted by 500+ businesses. Pick only what you need, automate your HR workflows, and reclaim hours every week.</p>
      <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}><a className="btn p" href="#contact">Get a live demo</a><button className="btn" id="fitbtn">Check your fit in 60 seconds</button></div></div>
      <div className="dash" role="img" aria-label="Animated sample dashboard"><div className="dh"><b>Live workspace</b><span className="pill">Sample data</span></div>
      <div className="kp"><div><small>Present</small><strong id="k1">0</strong></div><div><small>On leave</small><strong id="k2">0</strong></div><div><small>Payroll done</small><strong id="k3">0%</strong></div></div>
      <div className="bars" aria-hidden="true"><i style={{"--h": "45%", "--n": 0}}></i><i style={{"--h": "62%", "--n": 1}}></i><i style={{"--h": "55%", "--n": 2}}></i><i style={{"--h": "78%", "--n": 3}}></i><i style={{"--h": "70%", "--n": 4}}></i><i style={{"--h": "92%", "--n": 5}}></i><i style={{"--h": "84%", "--n": 6}}></i></div>
      <div className="feed"><span className="orb"></span><span id="feed" aria-live="polite">Shenll AI is watching your workspace…</span></div></div></div>
      <div className="w"><div className="stats rv" id="statsbar">
      <div className="stat"><strong data-to="500" data-suf="+">0</strong><small>Businesses</small></div>
      <div className="stat"><strong data-to="50000" data-suf="+">0</strong><small>Employees managed</small></div>
      <div className="stat"><strong data-to="99.9" data-suf="%" data-dec="1">0</strong><small>Uptime</small></div>
      <div className="stat"><strong data-to="24" data-suf="h" data-pre="<">0</strong><small>Support response</small></div>
      </div></div>
      <div className="w"><p className="intro">Shenll HRMS is a modular, AI-powered HR and payroll platform for manufacturing, education, engineering, construction, logistics, healthcare and professional-services teams across India. Automate attendance and leave, run compliant payroll with TDS and PF, manage projects and assets, and give every employee mobile self-service, all from one dashboard.</p></div>
      <div className="tick" aria-hidden="true"><div><span>Custom Workflows</span><span>Smart Payroll</span><span>Project Tracking</span><span>Automated Attendance</span><span>Mobile Access</span><span>Custom Workflows</span><span>Smart Payroll</span><span>Project Tracking</span><span>Automated Attendance</span><span>Mobile Access</span></div></div>

      <section id="why"><div className="w"><div className="hd"><h2>Why teams choose Shenll HRMS</h2><p>A flexible HRMS that simplifies operations, adapts to your policies, and scales with your organization.</p></div>
      <div className="grid2">
      <div className="card-h">
        <span className="ic-circle" style={{backgroundColor: '#eef2ff', color: '#4f46e5'}}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L3 14h7l-1 8 11-14h-7l0-6z"/></svg>
        </span>
        <div>
          <h3>Built for Your Workflow</h3>
          <p>Personalize attendance, payroll, and task flows to align with your internal processes.</p>
        </div>
      </div>
      <div className="card-h">
        <span className="ic-circle" style={{backgroundColor: '#ccfbf1', color: '#14b8a6'}}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h7v7H4V4zm9 0h7v16h-7V4zM4 13h7v7H4v-7z"/></svg>
        </span>
        <div>
          <h3>Simple, Modern UI/UX</h3>
          <p>An intuitive, clutter-free interface your team can start using instantly.</p>
        </div>
      </div>
      <div className="card-h">
        <span className="ic-circle" style={{backgroundColor: '#fee2e2', color: '#ef4444'}}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM15 19l-4-4 1.41-1.41L15 16.17l3.59-3.59L20 14l-5 5z"/></svg>
        </span>
        <div>
          <h3>Fully Synced HR Processes</h3>
          <p>Attendance, payroll, projects, tasks, invoices, and assets sync automatically.</p>
        </div>
      </div>
      <div className="card-h">
        <span className="ic-circle" style={{backgroundColor: '#fae8ff', color: '#c026d3'}}>
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" strokeWidth="2"/><text x="7" y="16" fontSize="11" fontWeight="bold" stroke="none">AI</text><path d="M18 3l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" stroke="none"/></svg>
        </span>
        <div>
          <h3>AI-Powered HR Automation</h3>
          <p>Smart AI automation for HR that simplifies daily tasks and enhances decision accuracy in seconds.</p>
        </div>
      </div>
      <div className="card-h">
        <span className="ic-circle" style={{backgroundColor: '#cffafe', color: '#06b6d4'}}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
        </span>
        <div>
          <h3>Customer-Centric Experience</h3>
          <p>Built for your team, with features that adapt to the exact way your people work every day.</p>
        </div>
      </div>
      <div className="card-h">
        <span className="ic-circle" style={{backgroundColor: '#ffedd5', color: '#f97316'}}>
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4c-1.1 0-2 .9-2 2v4h1.5a2.5 2.5 0 0 1 0 5H2v4c0 1.1.9 2 2 2h4v-1.5a2.5 2.5 0 0 1 5 0V22h4c1.1 0 2-.9 2-2v-4h1.5a2.5 2.5 0 0 0 0-5z"/></svg>
        </span>
        <div>
          <h3>High Efficiency, Zero Hassle</h3>
          <p>A streamlined platform that speeds up your HR tasks while keeping everything error-free.</p>
        </div>
      </div>
      </div></div></section>

      <section id="features" style={{paddingTop: 0}}><div className="w"><div className="hd"><h2>The complete HRMS for modern workforces</h2></div>
      <div className="tabs" role="tablist" id="mt"></div><div className="panel" id="mp"><div><h3></h3><p></p></div><div className="con" aria-hidden="true"></div></div></div></section>

      <section id="mobile" style={{paddingTop: 0}}><div className="w mob"><div><div className="hd" style={{marginBottom: 0}}><h2>Mobile-first HR experience</h2><p>Everything your employees need, from attendance to salary insights, in one easy mobile app for iOS and Android.</p></div>
      <ul><li><b>Everything at a glance</b>Work hours, leave, payroll</li><li><b>Easy leave</b>Apply and track with instant approvals</li><li><b>Accurate time tracking</b>Check-ins and check-outs</li><li><b>Detailed work logs</b>Daily, weekly, monthly</li><li><b>Payroll made simple</b>Salary, deductions, net pay</li><li><b>Payslips anytime</b>Download and share securely</li></ul>
      <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}><a className="btn gapp" href="https://play.google.com/store/apps/details?id=com.sts.stshrms&pcampaignid=web_share" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path fill="#00D9A5" d="M3.6 2.6c-.4.3-.6.8-.6 1.4v16c0 .6.2 1.1.6 1.4l.1.1L13 12.3v-.2L3.7 2.5z"/><path fill="#FFCB2D" d="M16.1 15.4L13 12.3v-.2l3.1-3.1 3.5 2c1 .6 1 1.5 0 2.1z"/><path fill="#FF4A55" d="M16.1 15.4L13 12.2 3.6 21.6c.4.4.9.4 1.6.1z"/><path fill="#00E7B8" d="M16.1 8.6L5.2 2.3c-.7-.4-1.2-.3-1.6.1L13 12.2z"/></svg><span><small>Get it on</small><b>Google Play</b></span></a><a className="btn gapp" href="https://apps.apple.com/ie/app/shenll-hrms/id6757430801" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 1c.1 1.1-.3 2.2-1 3-.8.9-2 1.6-3.1 1.5-.1-1.1.4-2.2 1.1-3C14.2 1.6 15.4 1 16.4 1zM19.9 17.5c-.4 1-.9 1.8-1.6 2.7-.9 1.2-1.8 2.4-3.2 2.4-1.3 0-1.8-.8-3.3-.8-1.6 0-2.1.8-3.3.8-1.3.1-2.3-1.3-3.2-2.5-1.9-2.6-3.3-7.4-1.4-10.7.9-1.6 2.6-2.7 4.4-2.7 1.4 0 2.6.9 3.4.9.8 0 2.3-1.1 3.9-1 .7 0 2.6.3 3.8 2-1.7 1-2.9 3-1.5 6.1.4.9 1 1.8 2 1.8z"/></svg><span><small>Download on the</small><b>App Store</b></span></a></div></div>
      <div className="phone"><div className="scr"><small id="pd"></small><time id="pt"></time><button className="chk" id="ck" aria-pressed="false">Check in</button><small id="ps">Tap to try the demo</small></div></div></div></section>

      <section id="ai" style={{paddingTop: 0}}><div className="w"><div className="hd"><h2>AI features that adapt to your HR processes</h2><p>Instead of forcing rigid workflows, Shenll HRMS builds AI around your business, from team allocation and task assistance to reporting and custom agents. Pick an agent to watch it work.</p></div>
      <div className="agtabs" role="tablist" id="at"></div><div className="aipanel" id="ap"><div><div className="aih"><span className="aiico"></span><h3></h3></div><p></p></div><div className="con aicon" aria-live="polite"></div></div></div></section>

      <section id="demo" style={{paddingTop: 0}}><div className="w"><div className="hd"><h2>See Shenll HRMS in action</h2><p>Explore how the dashboard, employee records, projects, payroll and analytics look inside the real product, styled screenshots of each module.</p></div>
      <div className="tabs" role="tablist" id="dt"></div>
      <figure className="demo"><div className="browser" id="dp"><div className="bwbar"><span className="dots"><i></i><i></i><i></i></span><span className="url" id="durl">app.shenllhrms.com/dashboard</span></div><div className="bwbody" id="dbody"></div></div><figcaption className="cap" id="dcap">Dashboard overview: live attendance, leave and payroll status for the whole team.</figcaption></figure>
      </div></section>

      <section id="ind" style={{paddingTop: 0}}><div className="w"><div className="hd"><h2>Industries we serve</h2><p>Powerful HR tracking solutions customized for diverse specialized sectors.</p></div><div className="indg" id="in"></div></div></section>

      <section id="pricing" style={{paddingTop: 0}}><div className="w"><div className="hd"><h2>Simple, transparent pricing</h2><p>Pay only for active employees. No hidden charges.</p></div>
      <div className="tg" role="group" aria-label="Billing period"><button id="bm" aria-pressed="true">Monthly</button><button id="by" aria-pressed="false">Yearly, save 20%</button></div>
      <div className="pr">
      <div className="pl"><h3>Basic</h3><p className="note" style={{margin: '4px 0 0'}}>Up to 100 active employees</p><div className="amt"><span data-p="12000">₹12,000</span><small> / month</small></div><ul><li>Employee and leave management</li><li>Attendance and shift tracking</li><li>Payroll processing</li><li>Employee mobile app</li><li>Performance management</li></ul><a className="btn" href="#contact">Schedule demo</a></div>
      <div className="pl hot"><span className="tag">Most popular</span><h3>Professional</h3><p className="note" style={{margin: '4px 0 0'}}>Up to 250 active employees</p><div className="amt"><span data-p="24999">₹24,999</span><small> / month</small></div><ul><li>Everything in Basic</li><li>Project and task management</li><li>Reports and analytics</li><li>Assets and expenses</li><li>Multi-location, priority support</li></ul><a className="btn p" href="#contact">Contact sales</a></div>
      <div className="pl"><h3>Enterprise</h3><p className="note" style={{margin: '4px 0 0'}}>Unlimited active employees</p><div className="amt">Custom</div><ul><li>Everything in Professional</li><li>Custom workflows and dashboards</li><li>API and 3rd-party integrations</li><li>Dedicated account manager, 24/7</li><li>White-label branding</li></ul><a className="btn" href="#contact">Contact sales</a></div></div>
      <p className="note">Additional employees ₹100 / employee / month on Basic and Professional. Free onboarding and data migration. 99.9% uptime.</p></div></section>

      <section style={{paddingTop: 0}}><div className="w"><div className="tst"><div className="hd" style={{marginBottom: '24px'}}><h2 style={{fontSize: '32px'}}>Loved by HR teams</h2></div><blockquote><p id="tq"></p><footer id="tn"></footer></blockquote><div className="dots" id="td"></div></div></div></section>

      <section id="faq" style={{paddingTop: 0}}><div className="w"><div className="hd"><h2>Frequently asked questions</h2><p>Everything HR managers and business owners ask before switching to Shenll HRMS.</p></div>
      <div className="faq facc" id="faqlist"></div></div></section>

      <section id="contact" style={{paddingTop: 0}}><div className="w cx"><div><div className="hd" style={{marginBottom: 0}}><h2>Talk to Shenll HRMS experts</h2><p>Tell us about your requirements. We usually respond within one business day.</p></div>
      <ul className="rc"><li><b>Email us</b><a href="mailto:info@shenllhrms.com">info@shenllhrms.com</a></li><li><b>Call us</b><a href="tel:+918122046761">+91-8122046761</a></li><li><b>Visit us</b>Plot No.1069, Munusamy Salai, K.K Nagar, Chennai 600 078</li></ul>
      <div className="soc"><a href="https://www.facebook.com/shenllhrms" target="_blank" rel="noopener" aria-label="Shenll HRMS on Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z"/></svg></a><a href="https://x.com/shenllhrms" target="_blank" rel="noopener" aria-label="Shenll HRMS on X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2.3h3.3l-7.2 8.3 8.5 11.2h-6.9l-5.4-7-6.2 7H1l7.7-8.8L.5 2.3h7l4.9 6.5zM17 19.8h1.8L7.1 4.1H5.2z"/></svg></a><a href="https://www.linkedin.com/company/shenll-hrms/" target="_blank" rel="noopener" aria-label="Shenll HRMS on LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3-1.8 0-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.2 2.4 4.2 5.5v6.2zM5.3 7.4a2.1 2.1 0 110-4.1 2.1 2.1 0 010 4.1zM7.1 20.4H3.6V9h3.5v11.4z"/></svg></a><a href="https://www.instagram.com/shenllhrms/" target="_blank" rel="noopener" aria-label="Shenll HRMS on Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a><a href="https://www.youtube.com/@shenllhrms" target="_blank" rel="noopener" aria-label="Shenll HRMS on YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/></svg></a><a href="https://wa.me/918122046761" target="_blank" rel="noopener" aria-label="Chat with Shenll HRMS on WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.1.1-1.8-.1a15 15 0 01-2.6-1 12 12 0 01-3.9-4c-.4-.5-.9-1.3-1-2-.1-.7.1-1.4.6-1.9.2-.2.4-.3.7-.3h.5c.2 0 .4 0 .5.4l.9 2.1c.1.2.1.4 0 .6l-.4.5c-.1.2-.2.3 0 .5.6 1 1.2 1.7 2.1 2.3.3.2.5.2.7 0l.6-.6c.2-.2.3-.2.5-.1l1.9 1c.2.1.4.2.4.4.1.2.1.6-.1 1.3z"/></svg></a></div></div>
      <form id="cf" noValidate><h3 style={{fontSize: '24px'}}>Request a demo</h3>
      <div className="f"><label htmlFor="n">Name *</label><input id="n" autoComplete="name" /><span className="er"></span></div>
      <div className="f"><label htmlFor="e">Email *</label><input id="e" type="email" autoComplete="email" /><span className="er"></span></div>
      <div className="f"><label htmlFor="p">Phone *</label><input id="p" type="tel" autoComplete="tel" /><span className="er"></span></div>
      <div className="f"><label htmlFor="r">Your requirements</label><textarea id="r"></textarea></div>
      <button className="btn p" type="submit">Request demo</button><div className="msg" id="fm" role="status"></div></form></div></section>
      </main>
      <footer className="ft"><div className="w"><span>© <span id="yr">2026</span> Shenll HRMS. All rights reserved.</span><div><a href="/faqs">FAQs</a><a href="/support">Support</a><a href="/security">Security</a><a href="/terms">Terms</a><a href="/privacy">Privacy</a></div></div></footer>

      <div id="bot"><div className="bx" id="bx" role="dialog" aria-label="Shenll AI fit check"><div className="bh"><b>Shenll AI</b><button id="bc" aria-label="Close">×</button></div><div className="bb" id="bb"></div></div>
      <div className="tip" id="tip">👋 Find your perfect fit! Get a recommendation in 60 seconds.</div>
      <button className="fab" id="fab" aria-label="Open Shenll AI fit check"><svg viewBox="0 0 34 34" aria-hidden="true"><rect x="5" y="8" width="24" height="18" rx="8" fill="#fff"/><rect className="e" x="11" y="14" width="3.5" height="6" rx="1.7" fill="#12142b"/><rect className="e" x="19.5" y="14" width="3.5" height="6" rx="1.7" fill="#12142b"/><circle cx="17" cy="5" r="2.2" fill="#ff5c8a"/></svg></button></div>
    </>
  )
}
