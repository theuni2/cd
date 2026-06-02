import React from 'react'
import SolveHero from '../../components/solve_component/hero';
import SolveTracks from '../../components/solve_component/track';
import SolveParticipation from '../../components/solve_component/rules';
import SolveRequirementsInline from '../../components/solve_component/solverequirements';
import SolveTimelineInline from '../../components/solve_component/timeline';
import SolveFooterInline from '../../components/solve_component/footer';

export default function Page() {
  return (
    <div>
<SolveHero/>
<SolveTracks/>
<SolveParticipation/>
<SolveRequirementsInline/>
<SolveTimelineInline/>
<SolveFooterInline/>
    </div>
  )
}


