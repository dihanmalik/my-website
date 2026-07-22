import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"

export function Pattern() {
  return (
    <Timeline defaultValue={4} className="w-full max-w-md">
      <TimelineItem step={1}>
        <TimelineHeader>
          <TimelineDate>Feb 2024 August 2026</TimelineDate>
          <TimelineTitle>Amlak International</TimelineTitle>
        </TimelineHeader>
        <TimelineIndicator />
        <TimelineSeparator />
        <TimelineContent>
          Successfully set up the project repository and initial architecture.
        </TimelineContent>
      </TimelineItem>

      <TimelineItem step={2}>
        <TimelineHeader>
          <TimelineDate>Sept 2021 Feb 2024</TimelineDate>
          <TimelineTitle>Swoop Aero</TimelineTitle>
        </TimelineHeader>
        <TimelineIndicator />
        <TimelineSeparator />
        <TimelineContent>
          Launched the beta version for early testers and feedback.
        </TimelineContent>
      </TimelineItem>

      <TimelineItem step={3}>
        <TimelineHeader>
          <TimelineDate>Aug 2021 Sept 2021</TimelineDate>
          <TimelineTitle>Reps & Co.</TimelineTitle>
        </TimelineHeader>
        <TimelineIndicator />
        <TimelineSeparator />
        <TimelineContent>
          The platform is now live for all users worldwide.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem step={4}>
        <TimelineHeader>
          <TimelineDate>Apr 2020 June 2021</TimelineDate>
          <TimelineTitle>Viyahe Inc.</TimelineTitle>
        </TimelineHeader>
        <TimelineIndicator />
        <TimelineSeparator />
        <TimelineContent>
          The platform is now live for all users worldwide.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem step={4}>
        <TimelineHeader>
          <TimelineDate>Sept 2016 March 2020</TimelineDate>
          <TimelineTitle>Invento Software Solution</TimelineTitle>
        </TimelineHeader>
        <TimelineIndicator />
        <TimelineSeparator />
        <TimelineContent>
          The platform is now live for all users worldwide.
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
